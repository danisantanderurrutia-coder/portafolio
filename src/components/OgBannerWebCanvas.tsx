import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { resolveAsset } from '../utils';
import { GeofrecuenciaLogo } from './GeofrecuenciaLogo';
import { Globe, Sparkles, Microscope, Scale, Radio } from 'lucide-react';

interface OgBannerWebCanvasProps {
  interactive?: boolean;
  onReady?: () => void;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

const KEY_NODES = [
  { id: 'maule', city: 'MAUL', flag: '🇨🇱', lat: -35.42, lng: -71.65, color: 0xef4444 },
  { id: 'santiago', city: 'STGO', flag: '🇨🇱', lat: -33.45, lng: -70.66, color: 0xec4899 },
  { id: 'valpo', city: 'VALP', flag: '🇨🇱', lat: -33.04, lng: -71.61, color: 0x8b5cf6 },
  { id: 'bogota', city: 'BOGO', flag: '🇨🇴', lat: 4.71, lng: -74.07, color: 0xf59e0b },
  { id: 'kiel', city: 'KIEL', flag: '🇩🇪', lat: 54.32, lng: 10.13, color: 0xef4444 },
  { id: 'poznan', city: 'POZN', flag: '🇵🇱', lat: 52.41, lng: 16.93, color: 0x10b981 },
  { id: 'bonn', city: 'BONN', flag: '🇩🇪', lat: 50.73, lng: 7.10, color: 0xf59e0b },
  { id: 'oslo', city: 'OSLO', flag: '🇳🇴', lat: 59.91, lng: 10.75, color: 0x06b6d4 },
  { id: 'davos', city: 'DAVO', flag: '🇨🇭', lat: 46.80, lng: 9.83, color: 0x0d9488 },
];

const KEY_ARCS: [number, number, number][] = [
  [0, 4, 0xff2a5f], // Maule -> Kiel (Science)
  [1, 4, 0xec4899], // Santiago -> Kiel (Titles)
  [4, 5, 0x10b981], // Kiel -> Poznan (Double M.Sc.)
  [2, 6, 0x8b5cf6], // Valparaiso -> Bonn (Policy)
  [3, 6, 0xfbbf24], // Bogota -> Bonn (Global)
  [4, 7, 0x06b6d4], // Kiel -> Oslo
  [5, 8, 0x2dd4bf], // Poznan -> Davos
];

export const OgBannerWebCanvas: React.FC<OgBannerWebCanvasProps> = ({ onReady }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [texturesLoaded, setTexturesLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 1200;
    const height = 630;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(2);
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // Position the 3D Earth on the right side of the 1200x630 canvas so the whole globe + flags fit cleanly inside
    const earthGroup = new THREE.Group();
    earthGroup.position.set(1.80, 0.02, 0);
    // Rotate Earth so Atlantic, Europe (Kiel/Poznan/Bonn/Oslo) and South America (Chile/Maule/Santiago) face the camera
    earthGroup.rotation.y = -1.24;
    earthGroup.rotation.x = 0.26;
    earthGroup.rotation.z = -0.10;
    scene.add(earthGroup);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const manager = new THREE.LoadingManager(() => {
      renderScene();
      setTimeout(() => {
        renderScene();
        setTexturesLoaded(true);
        if (onReady) onReady();
      }, 120);
    });

    const textureLoader = new THREE.TextureLoader(manager);
    const dayMap = textureLoader.load(resolveAsset('/earth/earth_day_4096.jpg'));
    dayMap.colorSpace = THREE.SRGBColorSpace;
    dayMap.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const normalMap = textureLoader.load(resolveAsset('/earth/earth_normal_2048.jpg'));
    const specMap = textureLoader.load(resolveAsset('/earth/earth_specular_2048.jpg'));
    const cloudsMap = textureLoader.load(resolveAsset('/earth/earth_clouds_1024.png'));

    const earthRadius = 1.72;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: dayMap,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(1.8, 1.8),
      specularMap: specMap,
      specular: new THREE.Color(0x3b6998),
      shininess: 30,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    const cloudsGeo = new THREE.SphereGeometry(earthRadius * 1.013, 64, 64);
    const cloudsMat = new THREE.MeshLambertMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    earthGroup.add(cloudsMesh);

    // Atmospheric Outer Halo
    const haloGeo = new THREE.SphereGeometry(earthRadius * 1.045, 48, 48);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.70 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          gl_FragColor = vec4(0.28, 0.68, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    earthGroup.add(haloMesh);

    // Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.1);
    rimLight.position.set(-6, -2, -3);
    scene.add(rimLight);

    // 3D Map Pushpins & Flags (Identical to GameWorldView)
    KEY_NODES.forEach((node) => {
      const pos = latLngToVector3(node.lat, node.lng, earthRadius * 1.002);
      const norm = pos.clone().normalize();

      const bGroup = new THREE.Group();
      bGroup.position.copy(pos);
      bGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), norm);

      const holeGeo = new THREE.RingGeometry(0.01, 0.032, 24);
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
      const hole = new THREE.Mesh(holeGeo, holeMat);
      hole.rotation.x = Math.PI / 2;
      bGroup.add(hole);

      const needleGeo = new THREE.CylinderGeometry(0.0045, 0.0045, 0.24, 8);
      const needleMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.position.y = 0.12;
      bGroup.add(needle);

      const capGeo = new THREE.SphereGeometry(0.022, 16, 16);
      const capMat = new THREE.MeshBasicMaterial({ color: node.color });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.245;
      bGroup.add(cap);

      const flagCanvas = document.createElement('canvas');
      flagCanvas.width = 144;
      flagCanvas.height = 84;
      const fCtx = flagCanvas.getContext('2d')!;
      fCtx.fillStyle = '#' + node.color.toString(16).padStart(6, '0');
      fCtx.fillRect(0, 0, 144, 84);
      fCtx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      fCtx.fillRect(0, 0, 144, 42);
      fCtx.lineWidth = 6;
      fCtx.strokeStyle = '#000000';
      fCtx.strokeRect(3, 3, 138, 78);
      fCtx.font = '34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      fCtx.textAlign = 'center';
      fCtx.textBaseline = 'middle';
      fCtx.fillText(node.flag, 42, 42);
      fCtx.fillStyle = '#ffffff';
      fCtx.font = 'bold 22px monospace';
      fCtx.fillText(node.city, 102, 43);

      const flagTex = new THREE.CanvasTexture(flagCanvas);
      const flagGeo = new THREE.PlaneGeometry(0.165, 0.096);
      const flagMat = new THREE.MeshBasicMaterial({ map: flagTex, side: THREE.DoubleSide });
      const flagMesh = new THREE.Mesh(flagGeo, flagMat);
      flagMesh.position.set(0.082, 0.18, 0);
      bGroup.add(flagMesh);

      earthGroup.add(bGroup);
    });

    // High-Energy Great-Circle Volumetric Beams connecting Chile & Europe above the Atlantic
    KEY_ARCS.forEach(([fromIdx, toIdx, colorHex]) => {
      const fromNode = KEY_NODES[fromIdx];
      const toNode = KEY_NODES[toIdx];
      const posA = latLngToVector3(fromNode.lat, fromNode.lng, earthRadius * 1.003);
      const posB = latLngToVector3(toNode.lat, toNode.lng, earthRadius * 1.003);

      const dist = posA.distanceTo(posB);
      const maxArchHeight = Math.min(0.45, Math.max(0.10, dist * 0.16));

      const arcPoints: THREE.Vector3[] = [];
      const segments = 56;
      for (let s = 0; s <= segments; s++) {
        const t = s / segments;
        const pt = new THREE.Vector3().lerpVectors(posA, posB, t).normalize();
        const altitude = earthRadius * 1.003 + Math.sin(t * Math.PI) * maxArchHeight;
        pt.multiplyScalar(altitude);
        arcPoints.push(pt);
      }

      const curve = new THREE.CatmullRomCurve3(arcPoints);

      const tubeGeo = new THREE.TubeGeometry(curve, 56, 0.0085, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
      });
      earthGroup.add(new THREE.Mesh(tubeGeo, tubeMat));

      const coreGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(56));
      const coreMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
      });
      earthGroup.add(new THREE.Line(coreGeo, coreMat));

      // Glowing plasma pulses along the great-circle arc
      [0.32, 0.68].forEach((t) => {
        const pt = curve.getPoint(t);
        const pulseGeo = new THREE.SphereGeometry(0.025, 12, 12);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: 0xfacc15,
          blending: THREE.AdditiveBlending,
        });
        const pulse = new THREE.Mesh(pulseGeo, pulseMat);
        pulse.position.copy(pt);
        earthGroup.add(pulse);
      });
    });

    renderScene();

    return () => {
      renderer.dispose();
    };
  }, [onReady]);

  return (
    <div
      id="og-banner-capture-root"
      data-ready={texturesLoaded ? 'true' : 'false'}
      className="relative w-[1200px] h-[630px] overflow-hidden select-none bg-[#060911] text-white font-sans shrink-0"
    >
      {/* 1. LEFT-SIDE GRAPHIC NOVEL ARTWORK BLENDED INTO DEEP SPACE COSMOS ON THE RIGHT */}
      <div
        className="absolute inset-0 bg-cover bg-left bg-no-repeat opacity-55 filter contrast-110 brightness-90"
        style={{ backgroundImage: `url('${resolveAsset('/dutch_canal_comic.jpg')}')` }}
      />
      {/* Smooth cinematic transition from European graphic-novel canal to 3D WebGL Space */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060911]/85 via-[#060911]/75 to-[#04070f]/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 77% 48%, rgba(37, 99, 235, 0.28) 0%, rgba(14, 165, 233, 0.10) 34%, rgba(6, 9, 17, 0.0) 65%)',
        }}
      />

      {/* 2. REAL THREE.JS WEBGL 4K EARTH GLOBE LAYER */}
      <div ref={mountRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* 3. FOREGROUND NEO-BRUTALIST IDENTITY & CREDENTIALS HUD (LEFT SIDE OF BANNER) */}
      <div className="relative z-20 w-[768px] h-full flex flex-col justify-between pl-9 pr-3 py-7">
        
        {/* TOP ROW: HERO PORTRAIT CARD + NAME & SPECIALTIES (EXACT PORTFOLIO COMPONENT AESTHETIC) */}
        <div className="flex items-center gap-5 bg-black/82 backdrop-blur-md p-4.5 rounded-2xl border-[3px] border-black shadow-[7px_7px_0px_#000000]">
          {/* Portrait Frame */}
          <div className="relative shrink-0">
            <div className="w-[144px] h-[184px] rounded-xl bg-black p-1 border-[3px] border-white shadow-[4px_4px_0px_#000] overflow-hidden -rotate-1">
              <img
                src={resolveAsset('/profile.jpg')}
                alt="Daniel Santander Urrutia"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>

            {/* Official Geofrecuencia SVG Brandmark */}
            <div className="absolute -top-3 -left-3 -rotate-6">
              <GeofrecuenciaLogo
                variant="badge"
                className="w-10 h-10 shadow-[2.5px_2.5px_0px_#facc15]"
              />
            </div>

            {/* Active Status Beacon */}
            <div className="absolute -bottom-2 -right-2 bg-red-600 text-white font-mono font-black text-[9.5px] px-2 py-0.5 rounded border-2 border-black uppercase tracking-wider shadow-[2px_2px_0px_#000] flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>HANNOVER, DE</span>
            </div>
          </div>

          {/* Stencil Identity & Value Proposition */}
          <div className="flex flex-col space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="bg-white text-black px-3 py-1 border-[2.5px] border-black shadow-[4px_4px_0px_#facc15] -rotate-1 inline-block">
                <h1 className="font-mono font-black text-[23px] tracking-tight uppercase leading-none">
                  [DANIEL SANTANDER]
                </h1>
              </div>
              <span className="bg-[#facc15] text-black font-mono font-black text-[10.5px] px-2.5 py-1 border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
                CHILE × EUROPE
              </span>
            </div>

            <div className="text-[14.5px] font-mono text-amber-300 font-black tracking-tight leading-snug drop-shadow-[0_2px_2px_rgba(0,0,0,0.95)]">
              Geophysicist (B.Sc.) • Double M.Sc. Environmental Management &amp; Protection
            </div>

            <p className="text-[12px] font-mono text-neutral-200 leading-relaxed">
              Hydro-Geophysics (VES/ERT), Peatland GHG Fluxes (CH₄ / CO₂), Soil Physics &amp; Limnology — Bridging <strong className="text-[#facc15]">Hard Earth Science</strong>, <strong className="text-emerald-400">Climate Policy</strong> &amp; <strong className="text-sky-300">Digital Twins</strong>.
            </p>

            {/* Quick Pillar Pills on a Single Line */}
            <div className="flex items-center gap-1.5 pt-0.5 whitespace-nowrap">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#2563eb] text-white font-mono font-black text-[9.5px] uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                <Microscope className="w-3 h-3" /> Science &amp; Hydrology
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#e11d48] text-white font-mono font-black text-[9.5px] uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                <Scale className="w-3 h-3" /> Policy Advisory
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#059669] text-white font-mono font-black text-[9.5px] uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                <Sparkles className="w-3 h-3" /> Digital Twins &amp; GIS
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#ea580c] text-white font-mono font-black text-[9.5px] uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                <Radio className="w-3 h-3" /> Strategic Comms
              </span>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: 3 OFFICIAL UNIVERSITY BADGES + WETLAND MONITOR APP (NO TRUNCATION) */}
        <div className="grid grid-cols-4 gap-2.5">
          {/* 1. Universidad de Chile */}
          <div className="bg-black/85 backdrop-blur-md px-2.5 py-2.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#2563eb] flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-white p-1 border border-black shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={resolveAsset('/logos/universidad_de_chile_logo.png')}
                alt="U. de Chile"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="font-mono font-black text-[10.5px] text-white uppercase leading-tight whitespace-nowrap">
                U. DE CHILE 🇨🇱
              </div>
              <div className="font-mono font-bold text-[9.5px] text-sky-400 leading-tight mt-0.5 whitespace-nowrap">
                B.Sc. Geophysics
              </div>
              <div className="font-mono text-[8.5px] text-neutral-300 leading-tight mt-0.5 whitespace-nowrap">
                FCFM • Distinction
              </div>
            </div>
          </div>

          {/* 2. CAU Kiel */}
          <div className="bg-black/85 backdrop-blur-md px-2.5 py-2.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#9333ea] flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-white p-1 border border-black shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={resolveAsset('/logos/kiel_university_logo.png')}
                alt="CAU Kiel"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="font-mono font-black text-[10.5px] text-white uppercase leading-tight whitespace-nowrap">
                CAU KIEL 🇩🇪
              </div>
              <div className="font-mono font-bold text-[9.5px] text-purple-300 leading-tight mt-0.5 whitespace-nowrap">
                M.Sc. Env. Mgmt
              </div>
              <div className="font-mono text-[8.5px] text-neutral-300 leading-tight mt-0.5 whitespace-nowrap">
                Peatlands &amp; Soils
              </div>
            </div>
          </div>

          {/* 3. AMU Poznań */}
          <div className="bg-black/85 backdrop-blur-md px-2.5 py-2.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#0284c7] flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-white p-1 border border-black shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={resolveAsset('/logos/amu_poznan_logo.png')}
                alt="AMU Poznań"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="font-mono font-black text-[10.5px] text-white uppercase leading-tight whitespace-nowrap">
                AMU POZNAŃ 🇵🇱
              </div>
              <div className="font-mono font-bold text-[9.5px] text-cyan-300 leading-tight mt-0.5 whitespace-nowrap">
                M.Sc. Env. Prot.
              </div>
              <div className="font-mono text-[8.5px] text-neutral-300 leading-tight mt-0.5 whitespace-nowrap">
                Limnology &amp; Water
              </div>
            </div>
          </div>

          {/* 4. Wetland Monitor Digital Twin */}
          <div className="bg-black/85 backdrop-blur-md px-2.5 py-2.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#10b981] flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-[#071318] p-1 border border-emerald-500/50 shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={resolveAsset('/logos/wetland_monitor_logo.png')}
                alt="Wetland Monitor"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="font-mono font-black text-[10px] text-emerald-300 uppercase leading-tight whitespace-nowrap">
                WETLAND MONITOR
              </div>
              <div className="font-mono font-bold text-[9.5px] text-white leading-tight mt-0.5 whitespace-nowrap">
                3D Digital Twin
              </div>
              <div className="font-mono text-[8.5px] text-neutral-300 leading-tight mt-0.5 whitespace-nowrap">
                Wallener Au Thesis
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: SLOGAN MANIFESTO BAR (IDENTICAL TO HOME FOOTER) */}
        <div className="bg-black/88 backdrop-blur-md px-4 py-3 rounded-xl border-[2.5px] border-black shadow-[5px_5px_0px_#facc15]">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="bg-[#facc15] text-black font-mono font-black text-[10px] px-2 py-0.5 uppercase tracking-wider border border-black">
              SCIENCE × POLICY × COMMUNICATION
            </span>
            <span className="font-mono font-bold text-[10px] text-emerald-400 tracking-wider uppercase flex items-center gap-1">
              <Globe className="w-3 h-3" /> INTERACTIVE 3D PORTFOLIO &amp; EXECUTIVE DOSSIER
            </span>
          </div>
          <p className="font-mono text-[11.5px] text-neutral-100 leading-snug">
            Where <strong className="text-[#facc15]">soil physics, catchment hydrology, and numerical modeling</strong> bridge the gap to drive <strong className="text-emerald-400">evidence-based climate policy, water governance, and mass communication</strong>.
          </p>
        </div>

      </div>

      {/* 4. TOP-RIGHT FLOATING 3D GLOBE HUD BADGE */}
      <div className="absolute top-6 right-7 z-20 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#facc15] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="font-mono font-black text-[10px] text-white uppercase tracking-wider">
          3D EARTH ATLAS • 45+ EXPEDITIONS
        </span>
      </div>
    </div>
  );
};
