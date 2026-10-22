#!/usr/bin/env python3
"""
generate_cv_pdfs.py
Generates the 4 CV PDF variants for Daniel Santander:
1. Daniel_Santander_CV_EN_1p.pdf (1-page Executive Resume - English)
2. Daniel_Santander_CV_EN_2p.pdf (2-page Full Technical & Policy CV - English)
3. Daniel_Santander_CV_ES_1p.pdf (1-page CV Ejecutivo - Spanish)
4. Daniel_Santander_CV_ES_2p.pdf (2-page CV Extendido Científico & Gestión - Spanish)

Also updates public/Daniel_Santander_CV.pdf with the 1-page English version.
Uses headless Google Chrome to render pixel-perfect, vector-text A4 PDFs.
"""

import os
import re
import subprocess
import tempfile

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(ROOT, "public", "cv")
FALLBACK_PDF = os.path.join(ROOT, "public", "Daniel_Santander_CV.pdf")

# Shared CSS for pixel-perfect A4 printing
COMMON_CSS = """
@page {
    size: A4 portrait;
    margin: 0;
}
* {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9.2pt;
    line-height: 1.38;
}
.page {
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 10mm 12mm 9mm 12mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.page:last-child {
    page-break-after: avoid;
}

/* Header Styles */
.header-container {
    border-bottom: 2px solid #0f172a;
    padding-bottom: 6px;
    margin-bottom: 7px;
}
.masthead-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.candidate-name {
    font-size: 19pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0f172a;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
}
.role-badge {
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 10px;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    background: #0f172a;
    color: #ffffff;
    padding: 3px 7px;
    border-radius: 3px;
}
.candidate-subtitle {
    font-size: 9pt;
    font-weight: 600;
    color: #0369a1;
    margin-top: 3px;
    margin-bottom: 4px;
    letter-spacing: -0.2px;
}
.contact-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 14px;
    font-size: 7.6pt;
    color: #475569;
    font-weight: 500;
}
.contact-item {
    display: flex;
    align-items: center;
    gap: 3px;
}
.contact-item a {
    color: #0f172a;
    text-decoration: none;
    font-weight: 600;
}
.contact-item strong {
    color: #0f172a;
}

/* Section Headings */
.section-title {
    font-size: 8.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #0f172a;
    border-bottom: 1.5px solid #cbd5e1;
    padding-bottom: 2px;
    margin-top: 6px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.section-title .section-tag {
    font-size: 6.5pt;
    font-weight: 700;
    color: #0284c7;
    background: #f0f9ff;
    padding: 1px 5px;
    border-radius: 2px;
    border: 1px solid #bae6fd;
}

/* Item Grids & Blocks */
.item-block {
    margin-bottom: 5px;
}
.item-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.2pt;
}
.item-title {
    font-weight: 700;
    color: #0f172a;
}
.item-inst {
    font-weight: 600;
    color: #334155;
}
.item-meta {
    font-size: 7.5pt;
    font-weight: 600;
    color: #64748b;
    white-space: nowrap;
}
.item-desc {
    font-size: 8.1pt;
    color: #334155;
    margin-top: 1px;
    line-height: 1.3;
}
.item-desc strong {
    color: #0f172a;
}
.bullet-list {
    margin: 1px 0 3px 0;
    padding-left: 14px;
}
.bullet-list li {
    font-size: 8.1pt;
    color: #334155;
    margin-bottom: 2px;
    line-height: 1.3;
}
.bullet-list li strong {
    color: #0f172a;
}

/* 2-Column Grid Layouts */
.grid-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}
.grid-3col {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
}

/* Mini Cards for Skills / Gear */
.skill-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 4px 6px;
    margin-bottom: 4px;
}
.skill-box-title {
    font-size: 7.4pt;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-bottom: 2px;
}
.skill-box-text {
    font-size: 7.2pt;
    color: #475569;
    line-height: 1.25;
}
.skill-box-text strong {
    color: #0f172a;
}

/* Notice Bar at Bottom */
.footer-tailored-notice {
    border-top: 1px solid #cbd5e1;
    padding-top: 3px;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.8pt;
    color: #64748b;
}
.footer-tailored-notice strong {
    color: #0f172a;
}
.footer-tailored-notice .tag {
    background: #f1f5f9;
    padding: 1px 5px;
    border-radius: 2px;
    border: 1px solid #e2e8f0;
    font-weight: 700;
    color: #0f172a;
}
"""

def generate_en_1p():
    """Returns HTML for 1-Page English Executive Resume"""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Daniel Santander Urrutia - Executive Resume (1-Page)</title>
<style>
{COMMON_CSS}
</style>
</head>
<body>
<div class="page">
  <div>
    <!-- Header -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h1 class="candidate-name">Daniel Santander Urrutia</h1>
          <div class="candidate-subtitle">Environmental Geophysicist &amp; Catchment Modeler • Dual M.Sc. Candidate</div>
        </div>
        <div class="role-badge">Executive Resume (1-Page)</div>
      </div>
      <div class="contact-bar">
        <span class="contact-item"><strong>Kiel, Germany</strong> &amp; <strong>Santiago, Chile</strong></span>
        <span class="contact-item"><a href="mailto:danisantander.urrutia@gmail.com">danisantander.urrutia@gmail.com</a></span>
        <span class="contact-item"><a href="https://danisantanderurrutia-coder.github.io/portafolio/">danisantanderurrutia-coder.github.io/portafolio</a></span>
        <span class="contact-item"><a href="https://www.linkedin.com/in/santanderurrutia/">linkedin.com/in/santanderurrutia</a></span>
        <span class="contact-item"><a href="https://github.com/danisantanderurrutia-coder">github.com/danisantanderurrutia-coder</a></span>
      </div>
    </div>

    <!-- Executive Summary -->
    <div class="item-block">
      <div class="item-desc" style="font-size: 7.8pt; line-height: 1.34; color: #1e293b; background: #f8fafc; padding: 4px 7px; border-left: 3px solid #0284c7; border-radius: 2px;">
        <strong>Executive Profile:</strong> Quantitative environmental geophysicist with dual European Master of Science degrees (CAU Kiel, Germany &amp; AMU Poznań, Poland) and a Geophysics degree (awarded with Highest Distinction) from Universidad de Chile. Combines rigorous subsurface hydrogeophysical modeling (ERT, VES, piezometry) and atmospheric GHG flux quantification (Eddy Covariance towers, dynamic flux chambers) with full-stack scientific software engineering (Python, R, QGIS, PostGIS, Docker, React). Proven track record leading nationwide transmedia campaigns (+700k reach) and testifying before Chile's National Congress on wildfire disaster propagation and watershed resilience.
      </div>
    </div>

    <!-- Education -->
    <div class="section-title">
      <span>Official Higher Education &amp; University Degrees</span>
      <span class="section-tag">3 Accredited Degrees</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">M.Sc. in Environmental Management</span> — <span class="item-inst">Christian-Albrechts-Universität zu Kiel (CAU Kiel)</span></div>
        <div class="item-meta">Kiel, Germany | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        Faculty of Agricultural &amp; Nutritional Sciences. Research on peatland rewetting biophysics (Wallener Au), catchment water balance, soil precompression stress (σ<sub>p</sub> = 62.4 kPa), and Eddy Covariance GHG flux dynamics (CO<sub>2</sub>, CH<sub>4</sub>). Developed the <strong>Wetland Monitor</strong> 3D digital twin.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">M.Sc. in Environmental Protection</span> — <span class="item-inst">Adam Mickiewicz University (AMU Poznań)</span></div>
        <div class="item-meta">Poznań, Poland | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        Faculty of Geographical &amp; Geological Sciences. Specialization in post-glacial lake carbon dynamics, microscopic freshwater bioindicators, aquatic ecosystem degradation, and compliance under the EU Water Framework Directive.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Geophysicist &amp; B.Sc. in Geophysics</span> — <span class="item-inst">Universidad de Chile</span></div>
        <div class="item-meta">Santiago, Chile | 2015 – 2021</div>
      </div>
      <div class="item-desc">
        Faculty of Physical &amp; Mathematical Sciences (FCFM). <strong>Awarded with Highest Distinction</strong>. Applied geophysics, solid Earth physics, fluid mechanics, seismology, and groundwater modeling. Degree thesis on soil electrical resistivity (VES/SEV) and water table drawdown in the Maule Basin under agroforestry and climate change.
      </div>
    </div>

    <!-- Professional & Research Experience -->
    <div class="section-title">
      <span>Key Professional &amp; Research Experience</span>
      <span class="section-tag">Field, Modeling &amp; Leadership</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Developer &amp; Author</span> — <span class="item-inst">Wetland Monitor (3D web application)</span></div>
        <div class="item-meta">2026</div>
      </div>
      <ul class="bullet-list">
        <li>Designed and built an interactive 3D web application presenting the quantitative results of the Wallener Au peatland rewetting study (CH<sub>4</sub> sink-to-source transition, Eddy Covariance, paludiculture, soil compaction), with a day/seasonal simulator.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Lead Technical Author &amp; Policy Analyst</span> — <span class="item-inst">Environmental Paper Network (EPN)</span></div>
        <div class="item-meta">International | 2023</div>
      </div>
      <ul class="bullet-list">
        <li>Authored international case study <em>"Spotlight on Burning Biomass"</em> (Parral, Chile), exposing carbon accounting loopholes and auditing European renewable energy subsidies under EU RED III.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Parliamentary Expert Spokesperson</span> — <span class="item-inst">National Congress of Chile (Chamber of Deputies)</span></div>
        <div class="item-meta">Valparaíso, Chile</div>
      </div>
      <ul class="bullet-list">
        <li>Presented empirical hydrogeophysical data before the Special Commission on Disasters and Wildfires, demonstrating the causal link between pine/eucalyptus plantations, water drawdown, and fire speed.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Communications Director &amp; Campaign Coordinator</span> — <span class="item-inst">Apruebo Rural &amp; Tactical Media</span></div>
        <div class="item-meta">Chile | 2020 – 2023</div>
      </div>
      <ul class="bullet-list">
        <li>Directed a national public interest campaign reaching +700,000 citizens across digital networks and community assemblies, translating complex legal, ecological, and water policy proposals into accessible visual media.</li>
      </ul>
    </div>

    <!-- Core Skills & Field Gear -->
    <div class="section-title">
      <span>Core Technical Matrix &amp; Operational Capabilities</span>
      <span class="section-tag">Verified Stack</span>
    </div>

    <div class="grid-2col">
      <div class="skill-box">
        <div class="skill-box-title">Geospatial &amp; Data Science</div>
        <div class="skill-box-text">
          <strong>Languages:</strong> Python (GeoPandas, NumPy, SciPy, Rasterio, GDAL), R (sf, ggplot2), SQL (PostgreSQL/PostGIS), LaTeX.<br>
          <strong>Engines &amp; GIS:</strong> QGIS, ArcGIS Pro, Google Earth Engine, Docker, Git/GitHub, Delft3D coastal surge modeling.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Field Gear &amp; Web Systems</div>
        <div class="skill-box-text">
          <strong>Instrumentation:</strong> Syscal Pro (ERT), LI-COR (Eddy Covariance CO<sub>2</sub>/CH<sub>4</sub>), Dynamic soil flux chambers, CTD divers, Edelman coring.<br>
          <strong>Web &amp; Full-Stack:</strong> TypeScript, React, Next.js, Tailwind CSS, FastAPI, Three.js, REST APIs.
        </div>
      </div>
    </div>

    <!-- Languages & Fellowships -->
    <div class="item-block" style="margin-top: 3px;">
      <div class="item-row" style="font-size: 7.5pt;">
        <div>
          <strong>Languages:</strong> Spanish (Native, parliamentary speaking) • English (C1 Fluent, international keynote &amp; academic writing) • German (B1-B2 Working).
        </div>
        <div>
          <strong>Key Summits:</strong> WSL Davos (2025), DEAL Copenhagen (2025), IOER Dresden (2024).
        </div>
      </div>
    </div>
  </div>

  <!-- Footer Tailored Notice -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">TAILORED CV NOTICE</span> This 1-page executive resume is a curated baseline. Tailored versions with specific codebases, field surveys, and references are prepared upon request.
    </div>
    <div>
      Inquiries: <strong>danisantander.urrutia@gmail.com</strong>
    </div>
  </div>
</div>
</body>
</html>
"""

def generate_en_2p():
    """Returns HTML for 2-Page English Full Technical & Policy CV"""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Daniel Santander Urrutia - Full Technical &amp; Policy CV (2-Pages)</title>
<style>
{COMMON_CSS}
</style>
</head>
<body>

<!-- ========================================== -->
<!-- PAGE 1: ACADEMIC, RESEARCH & METHODOLOGY   -->
<!-- ========================================== -->
<div class="page">
  <div>
    <!-- Header -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h1 class="candidate-name">Daniel Santander Urrutia</h1>
          <div class="candidate-subtitle">Environmental Geophysicist • Dual European M.Sc. Candidate</div>
        </div>
        <div class="role-badge">Technical &amp; Policy CV · 1/2</div>
      </div>
      <div class="contact-bar">
        <span class="contact-item"><strong>Kiel, Germany</strong> &amp; <strong>Santiago, Chile</strong></span>
        <span class="contact-item"><a href="mailto:danisantander.urrutia@gmail.com">danisantander.urrutia@gmail.com</a></span>
        <span class="contact-item"><a href="https://danisantanderurrutia-coder.github.io/portafolio/">danisantanderurrutia-coder.github.io/portafolio</a></span>
        <span class="contact-item"><a href="https://www.linkedin.com/in/santanderurrutia/">linkedin.com/in/santanderurrutia</a></span>
        <span class="contact-item"><a href="https://github.com/danisantanderurrutia-coder">github.com/danisantanderurrutia-coder</a></span>
      </div>
    </div>

    <!-- Professional Summary -->
    <div class="item-block">
      <div class="item-desc" style="font-size: 7.7pt; line-height: 1.33; color: #1e293b; background: #f8fafc; padding: 4px 7px; border-left: 3px solid #0369a1; border-radius: 2px;">
        <strong>Comprehensive Profile:</strong> Quantitative environmental scientist and geophysicist specializing in catchment water balance, subsurface electrical resistivity tomography (ERT), and greenhouse gas flux dynamics in rewetted peatlands. Holds a dual European Master of Science degree (CAU Kiel, Germany and AMU Poznań, Poland) alongside a Geophysicist degree (B.Sc. in Geophysics) with Highest Distinction from Universidad de Chile. Combines rigorous experimental field campaigns with computational modeling (Python, R, QGIS, PostGIS, Docker), legislative policy advisory before Chile's National Congress, and large-scale public outreach (+700k reach).
      </div>
    </div>

    <!-- Higher Education -->
    <div class="section-title">
      <span>Official Higher Education &amp; University Degrees</span>
      <span class="section-tag">3 Accredited Degrees</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">M.Sc. in Environmental Management</span> — <span class="item-inst">Christian-Albrechts-Universität zu Kiel (CAU Kiel)</span></div>
        <div class="item-meta">Kiel, Germany | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        <em>Faculty of Agricultural &amp; Nutritional Sciences.</em> Specialization: Catchment hydrology, soil hydro-physics, peatland rewetting mechanics, and atmospheric micrometeorology.
      </div>
      <ul class="bullet-list">
        <li><strong>Master Thesis:</strong> Biophysical modeling and multi-sensor monitoring of the Wallener Au rewetted peatland. Determined soil precompression stress (σ<sub>p</sub> = 62.4 kPa) against water table fluctuations.</li>
        <li><strong>Digital Twin Innovation:</strong> Built the <em>Wetland Monitor</em> 3D web application presenting the Wallener Au results (CH<sub>4</sub> sink-to-source transition, Eddy Covariance, paludiculture, soil compaction).</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">M.Sc. in Environmental Protection</span> — <span class="item-inst">Adam Mickiewicz University (AMU Poznań)</span></div>
        <div class="item-meta">Poznań, Poland | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        <em>Faculty of Geographical &amp; Geological Sciences.</em> Specialization: Freshwater ecology, limnology, aquatic ecosystem restoration, and EU environmental directives.
      </div>
      <ul class="bullet-list">
        <li><strong>Research Focus:</strong> Carbon sequestration dynamics in post-glacial lake basins and degraded fen peatlands. Laboratory and in-situ freshwater bioindicators in lakes and ponds, in the context of the EU Water Framework Directive (WFD).</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Geophysicist &amp; B.Sc. in Geophysics</span> — <span class="item-inst">Universidad de Chile</span></div>
        <div class="item-meta">Santiago, Chile | 2015 – 2021</div>
      </div>
      <div class="item-desc">
        <em>Faculty of Physical &amp; Mathematical Sciences (FCFM).</em> <strong>Awarded with Highest Distinction (Distinción Máxima)</strong>.
      </div>
      <ul class="bullet-list">
        <li>Rigorous curriculum in solid Earth physics, continuum mechanics, potential field methods (gravity/magnetics), seismology, and applied electromagnetic exploration.</li>
        <li><strong>Degree Thesis:</strong> Soil electrical resistivity (Vertical Electrical Sounding, VES/SEV) and water table drawdown in the Maule Basin under agroforestry systems and climate change.</li>
      </ul>
    </div>

    <!-- Advanced Postgraduate Fellowships & Summits -->
    <div class="section-title">
      <span>Specialized Postgraduate Fellowships, Summits &amp; Diplomas</span>
      <span class="section-tag">International Cohorts</span>
    </div>

    <div class="grid-2col">
      <div class="skill-box">
        <div class="skill-box-title">WSL Swiss Federal Research Institute (2025)</div>
        <div class="skill-box-text">
          <strong>BlueGreen Biodiversity Summit — Davos, Switzerland:</strong> Alpine wetland hydrology, riparian biodiversity indicators, and catchment climate resilience modeling.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">IOER Leibniz Institute / Dresden (2024–2025)</div>
        <div class="skill-box-text">
          <strong>Interlinked Justice &amp; Resilient Landscapes:</strong> Spatial planning, territorial equity, polycentric water governance, and post-carbon ecological transitions.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">DEAL Doughnut Economics Action Lab (2025)</div>
        <div class="skill-box-text">
          <strong>Practitioner Training — Copenhagen, Denmark:</strong> Planetary boundaries downscaling, social foundations, and regenerative economic modeling for municipalities.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">CR2 Center for Climate &amp; Resilience (2023)</div>
        <div class="skill-box-text">
          <strong>3rd Summer School: Resilient Coasts (57 hrs) — Chile:</strong> Directed by Dr. René Garreaud. Coastal climate hazard modeling, sea level rise, and adaptive shoreline planning.
        </div>
      </div>
    </div>

    <!-- Key Applied Research Experience -->
    <div class="section-title">
      <span>Selected Applied Research &amp; Technical Projects</span>
      <span class="section-tag">Empirical Science</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Wallener Au Peatland Rewetting &amp; Carbon Flux Dynamics</span></div>
        <div class="item-meta">Schleswig-Holstein, Germany</div>
      </div>
      <div class="item-desc">
        Integrated continuous Eddy Covariance tower telemetry (LI-COR LI-7500/7700) with dynamic soil closed chamber campaigns measuring net ecosystem exchange (NEE), ecosystem respiration (R<sub>eco</sub>), and biogenic methane fluxes. Analyzed soil precompression stress under heavy agricultural machinery vs. rewetted conditions.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">AgriTwin: Agricultural Digital Twin</span></div>
        <div class="item-meta">Maule, Chile | 2026</div>
      </div>
      <div class="item-desc">
        Integration of real-time soil moisture telemetry with Sentinel NDVI/NDRE satellite indices in Maule vineyards, Chile.
      </div>
    </div>
  </div>

  <!-- Page 1 Footer -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">PAGE 1 OF 2</span> Daniel Santander Urrutia — Full Technical &amp; Policy CV
    </div>
    <div>
      Continued on Page 2 (Policy, Publications, Instrumental Gear &amp; Communications) →
    </div>
  </div>
</div>

<!-- ========================================== -->
<!-- PAGE 2: POLICY, PUBS, GEAR & COMMS        -->
<!-- ========================================== -->
<div class="page">
  <div>
    <!-- Header Repetition for Page 2 -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h2 class="candidate-name" style="font-size: 15pt;">Daniel Santander Urrutia</h2>
          <div class="candidate-subtitle">Policy, Publications, Instrumentation &amp; Communications</div>
        </div>
        <div class="role-badge">Technical &amp; Policy CV · 2/2</div>
      </div>
    </div>

    <!-- Public Policy & Legislative Advocacy -->
    <div class="section-title">
      <span>Public Policy Advisory, Legislative Testimony &amp; Governance</span>
      <span class="section-tag">Impact &amp; Advocacy</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Parliamentary Expert Testimony</span> — <span class="item-inst">Chamber of Deputies of Chile (National Congress)</span></div>
        <div class="item-meta">Valparaíso, Chile</div>
      </div>
      <div class="item-desc">
        Invited technical expert witness before the <em>Special Commission on Emergencies, Disasters and Firefighters</em>. Presented quantitative evidence linking industrial pine and eucalyptus monocultures to accelerated wildfire velocity, fuel connectivity, and severe groundwater depletion in rural catchments.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Parliamentary Bilateral Policy Column</span> — <span class="item-inst">German Green MP Dirk Kock-Rohwer &amp; Comestible.info</span></div>
        <div class="item-meta">Kiel / Schleswig-Holstein | 2024</div>
      </div>
      <div class="item-desc">
        Co-authored political ecology column with Schleswig-Holstein Green MP Dirk Kock-Rohwer on soil organic fertility, agroecology, and direct public subsidies for non-chemical farming.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">International Biomass &amp; Carbon Accounting Investigation</span> — <span class="item-inst">Environmental Paper Network (EPN)</span></div>
        <div class="item-meta">International | 2023</div>
      </div>
      <div class="item-desc">
        Authored international investigative monograph <em>"Spotlight on Burning Biomass"</em> (Parral, Chile), exposing regulatory loopholes under the European Union Renewable Energy Directive (RED III) and corporate greenwashing in forest biomass burning.
      </div>
    </div>

    <!-- Selected Publications & Policy Reports -->
    <div class="section-title">
      <span>Selected Publications, Investigative Reports &amp; Essays</span>
      <span class="section-tag">Policy &amp; Press</span>
    </div>

    <div class="item-block">
      <ul class="bullet-list">
        <li><strong>Environmental Paper Network &amp; Global Forest Coalition (2023):</strong> <em>"Spotlight on Burning Biomass for Energy in South America: Community Opposition to a Power Plant in Parral, Chile."</em> Lead Technical Author.</li>
        <li><strong>Tomate Rojo &amp; Plurinational Wetland Network (2023):</strong> <em>"Waters Under Fire: What Do We Know and What Is Chile Doing?"</em> (D. Santander, L. Muñoz, C. Bonifetti). In-depth investigative report on wildfire impacts on aquatic and peatland systems.</li>
        <li><strong>El Desconcierto (2025):</strong> <em>"Countries Too Rich to Grow? Norway and the World Degrowth Summit."</em> International dispatch from Oslo analyzing post-growth economic models, resource ceilings, and Nordic ecological transitions.</li>
        <li><strong>Observatorio Latinoamericano de Conflictos Ambientales - OLCA (2025):</strong> <em>"Being Free on the Brink of the Abyss."</em> Four-part philosophical-political treatise on ecological collapse, energy boundaries, and territorial autonomy.</li>
        <li><strong>El Regionalista &amp; Fundación Suelo (2023):</strong> <em>"How Do We Prepare for a Climate Collapse?"</em> (C. Miranda &amp; D. Santander). Policy brief on deep community adaptation, decentralized food systems, and soil biology.</li>
      </ul>
    </div>

    <!-- Strategic Communications & Grassroots Campaign Direction -->
    <div class="section-title">
      <span>Strategic Communications, Digital Architecture &amp; Mass Campaigns</span>
      <span class="section-tag">+700K Reach</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Apruebo Rural &amp; Primera Línea Prensa</span> — <span class="item-inst">Executive Communications Lead</span></div>
        <div class="item-meta">Chile | 2020 – 2023</div>
      </div>
      <div class="item-desc">
        Conceived and coordinated a nationwide transmedia communication strategy with organic viral reach exceeding 700,000 citizens. Directed content production, live stage events, visual infographics, and decentralized rural assemblies.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Cuarentena Rap &amp; Rap Beauchef</span> — <span class="item-inst">Founder, Artistic Director &amp; Community Architect</span></div>
        <div class="item-meta">Chile &amp; Global | 2020</div>
      </div>
      <div class="item-desc">
        Engineered a global digital spoken-word and hip-hop league via Discord and streaming platforms during pandemic lockdowns, managing an active international community of +12,000 participants across 8 countries.
      </div>
    </div>

    <!-- Complete Technical Matrix & Field Gear -->
    <div class="section-title">
      <span>Complete Technical Stack &amp; Field Instrumentation Matrix</span>
      <span class="section-tag">Laboratory &amp; Software</span>
    </div>

    <div class="grid-3col">
      <div class="skill-box">
        <div class="skill-box-title">Programming &amp; GIS</div>
        <div class="skill-box-text">
          • Python (GeoPandas, Rasterio, NumPy, SciPy)<br>
          • R (sf, ggplot2, spatstat, EDA)<br>
          • QGIS &amp; ArcGIS Pro (LiDAR, DEMs)<br>
          • Google Earth Engine (GEE)<br>
          • PostgreSQL / PostGIS • Docker • Git
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Field Equipment</div>
        <div class="skill-box-text">
          • Syscal Pro (Multi-electrode ERT)<br>
          • LI-COR LI-7500/7700 (Eddy Covariance)<br>
          • Dynamic soil closed flux chambers<br>
          • CTD divers &amp; piezometers (water level)<br>
          • Edelman undisturbed soil coring
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Full-Stack &amp; Web</div>
        <div class="skill-box-text">
          • TypeScript, React, Next.js<br>
          • FastAPI &amp; RESTful APIs<br>
          • Three.js &amp; Unity 3D spatial twins<br>
          • Delft3D hydrodynamic flood models<br>
          • LaTeX / Typst mathematical typesetting
        </div>
      </div>
    </div>

    <!-- Language Proficiency -->
    <div class="item-block" style="margin-top: 4px;">
      <div class="item-row" style="font-size: 7.6pt; background: #f8fafc; padding: 3px 6px; border: 1px solid #e2e8f0; border-radius: 3px;">
        <div>
          <strong>Working Languages:</strong> <strong>Spanish</strong> (Native — parliamentary testimony &amp; editorial prose) • <strong>English</strong> (C1 Fluent — international keynote speaking &amp; scientific publishing) • <strong>German</strong> (B1-B2 Working — CAU Kiel graduate coursework &amp; technical dialogue).
        </div>
      </div>
    </div>
  </div>

  <!-- Page 2 Footer -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">TAILORED DOSSIER NOTICE</span> This 2-page curriculum reflects a general comprehensive baseline. Specific project portfolios, full code repositories, and customized dossiers are assembled upon request.
    </div>
    <div>
      Direct Contact: <strong>danisantander.urrutia@gmail.com</strong>
    </div>
  </div>
</div>
</body>
</html>
"""

def generate_es_1p():
    """Returns HTML for 1-Page Spanish Executive CV"""
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Daniel Santander Urrutia - CV Ejecutivo (1 Página)</title>
<style>
{COMMON_CSS}
</style>
</head>
<body>
<div class="page">
  <div>
    <!-- Header -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h1 class="candidate-name">Daniel Santander Urrutia</h1>
          <div class="candidate-subtitle">Geofísico Ambiental &amp; Modelador de Cuencas • Candidato a Doble M.Sc. Europeo</div>
        </div>
        <div class="role-badge">CV Ejecutivo (1 Página)</div>
      </div>
      <div class="contact-bar">
        <span class="contact-item"><strong>Kiel, Alemania</strong> &amp; <strong>Santiago, Chile</strong></span>
        <span class="contact-item"><a href="mailto:danisantander.urrutia@gmail.com">danisantander.urrutia@gmail.com</a></span>
        <span class="contact-item"><a href="https://danisantanderurrutia-coder.github.io/portafolio/">danisantanderurrutia-coder.github.io/portafolio</a></span>
        <span class="contact-item"><a href="https://www.linkedin.com/in/santanderurrutia/">linkedin.com/in/santanderurrutia</a></span>
        <span class="contact-item"><a href="https://github.com/danisantanderurrutia-coder">github.com/danisantanderurrutia-coder</a></span>
      </div>
    </div>

    <!-- Perfil Ejecutivo -->
    <div class="item-block">
      <div class="item-desc" style="font-size: 7.8pt; line-height: 1.34; color: #1e293b; background: #f8fafc; padding: 4px 7px; border-left: 3px solid #0284c7; border-radius: 2px;">
        <strong>Perfil Profesional:</strong> Geofísico de la Universidad de Chile (graduado con Distinción Máxima) y candidato a doble Máster en Ciencias Europeo en Gestión y Protección Ambiental (CAU Kiel, Alemania y AMU Poznań, Polonia). Integra sólida experiencia cuantitativa en modelación hidrogeofísica del subsuelo (ERT, SEV, piezometría), balances hídricos de cuencas y monitoreo de gases de efecto invernadero (Eddy Covariance, cámaras cerradas), con desarrollo de software geoespacial avanzado (Python, R, QGIS, PostGIS, Docker, React). Destacada trayectoria en vocería legislativa ante el Congreso Nacional de Chile y liderazgo de campañas de comunicación pública (+700k personas alcanzadas).
      </div>
    </div>

    <!-- Formación Académica -->
    <div class="section-title">
      <span>Formación Académica Superior</span>
      <span class="section-tag">3 Títulos Universitarios Oficiales</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Master of Science en Gestión Ambiental (M.Sc.)</span> — <span class="item-inst">Christian-Albrechts-Universität zu Kiel (CAU Kiel)</span></div>
        <div class="item-meta">Kiel, Alemania | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        Facultad de Ciencias Agrícolas y Nutricionales. Especialización en balance hídrico de cuencas, hidrofísica y resistencia mecánica de suelos (tensión de preconsolidación σ<sub>p</sub> = 62,4 kPa), restauración de turberas (Wallener Au) y flujos turbulentos de GEI (CO<sub>2</sub>, CH<sub>4</sub>). Creador de la aplicación web 3D <strong>Wetland Monitor</strong>.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Master of Science en Protección Ambiental (M.Sc.)</span> — <span class="item-inst">Adam Mickiewicz University (AMU Poznań)</span></div>
        <div class="item-meta">Poznań, Polonia | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        Facultad de Ciencias Geográficas y Geológicas. Especialización en ecología acuática continental, dinámica de secuestro de carbono en cuencas lacustres, bioindicadores microscópicos y aplicación de la Directiva Marco del Agua de la Unión Europea.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Geofísico &amp; Licenciado en Ciencias, mención Geofísica</span> — <span class="item-inst">Universidad de Chile</span></div>
        <div class="item-meta">Santiago, Chile | 2015 – 2021</div>
      </div>
      <div class="item-desc">
        Facultad de Ciencias Físicas y Matemáticas (FCFM). <strong>Aprobado con Distinción Máxima</strong>. Formación de excelencia en física del interior de la Tierra, sismología, métodos electromagnéticos y modelación numérica. Memoria de título sobre resistividad eléctrica de suelos (SEV) y descenso del nivel freático en la Cuenca del Maule bajo agroforestería y cambio climático.
      </div>
    </div>

    <!-- Experiencia Profesional y de Investigación -->
    <div class="section-title">
      <span>Experiencia Profesional &amp; Científica Destacada</span>
      <span class="section-tag">Terreno, Modelación &amp; Liderazgo</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Desarrollador y Autor</span> — <span class="item-inst">Wetland Monitor (aplicación web 3D)</span></div>
        <div class="item-meta">2026</div>
      </div>
      <ul class="bullet-list">
        <li>Diseño y desarrollo de una aplicación web 3D interactiva que presenta los resultados cuantitativos del estudio de rehumedecimiento de la turbera Wallener Au (transición sumidero-fuente de CH<sub>4</sub>, Eddy Covariance, paludicultura, compactación del suelo), con simulador diurno/estacional.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Autor Técnico Principal &amp; Analista de Políticas</span> — <span class="item-inst">Environmental Paper Network (EPN)</span></div>
        <div class="item-meta">Internacional | 2023</div>
      </div>
      <ul class="bullet-list">
        <li>Autor principal del informe de investigación <em>"Spotlight on Burning Biomass"</em> (Parral, Chile), auditando vacíos normativos en la contabilidad de carbono y subsidios de energía renovable bajo la directiva europea RED III.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Vocero Técnico &amp; Testigo Experto</span> — <span class="item-inst">Cámara de Diputadas y Diputados de Chile</span></div>
        <div class="item-meta">Valparaíso, Chile</div>
      </div>
      <ul class="bullet-list">
        <li>Presentación de evidencia empírica hidrogeofísica ante la Comisión Especial de Emergencias y Bomberos, demostrando la correlación entre monocultivo forestal de pino/eucalipto, estrés hídrico y velocidad de propagación de megaincendios.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Director de Comunicaciones &amp; Coordinador de Campaña</span> — <span class="item-inst">Apruebo Rural &amp; Medios Tácticos</span></div>
        <div class="item-meta">Chile | 2020 – 2023</div>
      </div>
      <ul class="bullet-list">
        <li>Dirección estratégica de campaña nacional con alcance orgánico superior a 700.000 personas en redes y asambleas, articulando divulgación técnica sobre derechos de agua, ecología de cuencas y transición justa.</li>
      </ul>
    </div>

    <!-- Competencias Técnicas & Equipamiento -->
    <div class="section-title">
      <span>Matriz de Competencias Técnicas &amp; Equipamiento</span>
      <span class="section-tag">Capacidades Operativas</span>
    </div>

    <div class="grid-2col">
      <div class="skill-box">
        <div class="skill-box-title">Modelación Geoespacial &amp; Datos</div>
        <div class="skill-box-text">
          <strong>Programación:</strong> Python (GeoPandas, Rasterio, NumPy, SciPy), R (sf, ggplot2), SQL (PostgreSQL/PostGIS), LaTeX.<br>
          <strong>Sistemas SIG:</strong> QGIS, ArcGIS Pro, Google Earth Engine, Docker, Git/GitHub, modelación hidrodinámica costera Delft3D.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Instrumental de Campo &amp; Web</div>
        <div class="skill-box-text">
          <strong>Equipamiento:</strong> Syscal Pro (ERT), Torres Eddy Covariance LI-COR (CO<sub>2</sub>/CH<sub>4</sub>), Cámaras dinámicas de flujo de suelos, Piezómetros CTD, Barrenos Edelman.<br>
          <strong>Desarrollo Web:</strong> TypeScript, React, Next.js, Tailwind CSS, FastAPI, Three.js, APIs REST.
        </div>
      </div>
    </div>

    <!-- Idiomas y Cumbres -->
    <div class="item-block" style="margin-top: 3px;">
      <div class="item-row" style="font-size: 7.5pt;">
        <div>
          <strong>Idiomas:</strong> Español (Nativo, vocería legislativa y redacción) • Inglés (C1 Fluido, ponencias internacionales y publicaciones) • Alemán (B1-B2 Intermedio).
        </div>
        <div>
          <strong>Cumbres:</strong> WSL Davos (2025), DEAL Copenhague (2025), IOER Dresden (2024).
        </div>
      </div>
    </div>
  </div>

  <!-- Footer Tailored Notice -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">NOTA DE CV A LA MEDIDA</span> Este CV de 1 página es una síntesis ejecutiva. Cada postulación se ajusta con antecedentes técnicos, código y casos de estudio específicos según el rol.
    </div>
    <div>
      Contacto: <strong>danisantander.urrutia@gmail.com</strong>
    </div>
  </div>
</div>
</body>
</html>
"""

def generate_es_2p():
    """Returns HTML for 2-Page Spanish Full Technical & Policy CV"""
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Daniel Santander Urrutia - CV Extendido Científico &amp; Gestión (2 Páginas)</title>
<style>
{COMMON_CSS}
</style>
</head>
<body>

<!-- ========================================== -->
<!-- PÁGINA 1: ACADEMIA, INVESTIGACIÓN & METODOS -->
<!-- ========================================== -->
<div class="page">
  <div>
    <!-- Header -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h1 class="candidate-name">Daniel Santander Urrutia</h1>
          <div class="candidate-subtitle">Geofísico Ambiental • Candidato a Doble M.Sc. Europeo</div>
        </div>
        <div class="role-badge">CV Extendido · 1/2</div>
      </div>
      <div class="contact-bar">
        <span class="contact-item"><strong>Kiel, Alemania</strong> &amp; <strong>Santiago, Chile</strong></span>
        <span class="contact-item"><a href="mailto:danisantander.urrutia@gmail.com">danisantander.urrutia@gmail.com</a></span>
        <span class="contact-item"><a href="https://danisantanderurrutia-coder.github.io/portafolio/">danisantanderurrutia-coder.github.io/portafolio</a></span>
        <span class="contact-item"><a href="https://www.linkedin.com/in/santanderurrutia/">linkedin.com/in/santanderurrutia</a></span>
        <span class="contact-item"><a href="https://github.com/danisantanderurrutia-coder">github.com/danisantanderurrutia-coder</a></span>
      </div>
    </div>

    <!-- Perfil Profesional Integral -->
    <div class="item-block">
      <div class="item-desc" style="font-size: 7.7pt; line-height: 1.33; color: #1e293b; background: #f8fafc; padding: 4px 7px; border-left: 3px solid #0369a1; border-radius: 2px;">
        <strong>Perfil Profesional Integral:</strong> Científico ambiental y geofísico cuantitativo especializado en balance hídrico de cuencas, tomografía de resistividad eléctrica del subsuelo (ERT/SEV) y dinámicas de intercambio de gases de efecto invernadero en humedales y turberas restauradas. Cursa un doble Máster en Ciencias Europeo (CAU Kiel, Alemania y AMU Poznań, Polonia), tras titularse como Geofísico con Distinción Máxima en la Universidad de Chile. Articula campañas experimentales de terreno de alta precisión con modelación numérica avanzada (Python, R, QGIS, PostGIS, Docker), asesoría legislativa en el Congreso Nacional y dirección de proyectos de comunicación pública masiva (+700k alcance).
      </div>
    </div>

    <!-- Formación Académica Superior -->
    <div class="section-title">
      <span>Formación Académica Superior Oficial</span>
      <span class="section-tag">3 Títulos Universitarios</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Master of Science en Manejo Ambiental (M.Sc.)</span> — <span class="item-inst">Christian-Albrechts-Universität zu Kiel (CAU Kiel)</span></div>
        <div class="item-meta">Kiel, Alemania | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        <em>Facultad de Ciencias Agrícolas y Nutricionales.</em> Especialización en hidrología de cuencas, hidrofísica de suelos, restauración de turberas y micrometeorología.
      </div>
      <ul class="bullet-list">
        <li><strong>Tesis de Maestría:</strong> Modelación biofísica y monitoreo multisensor de la turbera restaurada Wallener Au (Schleswig-Holstein). Determinación de la tensión de preconsolidación de suelos (σ<sub>p</sub> = 62,4 kPa).</li>
        <li><strong>Innovación en Gemelos Digitales:</strong> Desarrollo de la aplicación web 3D <em>Wetland Monitor</em> que presenta los resultados de Wallener Au (transición sumidero-fuente de CH<sub>4</sub>, Eddy Covariance, paludicultura, compactación del suelo).</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Master of Science en Protección Ambiental (M.Sc.)</span> — <span class="item-inst">Adam Mickiewicz University (AMU Poznań)</span></div>
        <div class="item-meta">Poznań, Polonia | 2023 – 2026</div>
      </div>
      <div class="item-desc">
        <em>Facultad de Ciencias Geográficas y Geológicas.</em> Especialización en limnología, restauración lacustre y gobernanza ambiental de la Unión Europea.
      </div>
      <ul class="bullet-list">
        <li><strong>Investigación:</strong> Dinámica de secuestro de carbono en cuencas lacustres postglaciares. Bioindicadores dulceacuícolas de laboratorio e in situ en lagos y estanques, en el marco de la Directiva Marco del Agua (DMA) de la UE.</li>
      </ul>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Geofísico &amp; Licenciado en Ciencias, mención Geofísica</span> — <span class="item-inst">Universidad de Chile</span></div>
        <div class="item-meta">Santiago, Chile | 2015 – 2021</div>
      </div>
      <div class="item-desc">
        <em>Facultad de Ciencias Físicas y Matemáticas (FCFM).</em> <strong>Aprobado con Distinción Máxima</strong>.
      </div>
      <ul class="bullet-list">
        <li>Formación en mecánica de medios continuos, sismología, gravimetría, magnetometría y prospección electromagnética aplicada.</li>
        <li><strong>Memoria de Título:</strong> Resistividad eléctrica de suelos (Sondeo Eléctrico Vertical, SEV) y descenso del nivel freático en la Cuenca del Maule bajo sistemas agroforestales y cambio climático.</li>
      </ul>
    </div>

    <!-- Diplomados y Cumbres Internacionales -->
    <div class="section-title">
      <span>Diplomados, Escuelas Internacionales &amp; Certificaciones de Postgrado</span>
      <span class="section-tag">Formación Avanzada</span>
    </div>

    <div class="grid-2col">
      <div class="skill-box">
        <div class="skill-box-title">WSL Swiss Federal Research Institute (2025)</div>
        <div class="skill-box-text">
          <strong>BlueGreen Biodiversity Summit — Davos, Suiza:</strong> Dinámicas de humedales alpinos, bioindicadores ribereños y modelación de resiliencia climática.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Leibniz IOER / Dresden (2024–2025)</div>
        <div class="skill-box-text">
          <strong>Interlinked Justice &amp; Resilient Landscapes:</strong> Planificación territorial, justicia espacial, gobernanza del agua y transiciones ecológicas.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">DEAL Doughnut Economics Action Lab (2025)</div>
        <div class="skill-box-text">
          <strong>Doughnut Economics Practitioner — Copenhague:</strong> Modelación de límites planetarios y fundamentos regenerativos para planificación comunal.
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Centro de Ciencia del Clima y la Resiliencia (CR2, 2023)</div>
        <div class="skill-box-text">
          <strong>3ª Escuela de Verano: Costas Resilientes (57 hrs) — Chile:</strong> Dirigida por Dr. René Garreaud. Riesgos climáticos costeros, marejadas y adaptación.
        </div>
      </div>
    </div>

    <!-- Proyectos de Investigación Aplicada -->
    <div class="section-title">
      <span>Proyectos de Investigación Aplicada Seleccionados</span>
      <span class="section-tag">Ciencia Empírica</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Restauración de Turberas Wallener Au y Balance de Carbono</span></div>
        <div class="item-meta">Schleswig-Holstein, Alemania</div>
      </div>
      <div class="item-desc">
        Integración de telemetría continua de torre Eddy Covariance (LI-COR LI-7500/7700) con campañas de cámaras dinámicas cerradas midiendo intercambio neto ecosistémico (NEE), respiración del suelo y emisiones de metano. Evaluación de compactación bajo maquinaria agrícola.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">AgriTwin: Gemelo Digital Agrícola</span></div>
        <div class="item-meta">Maule, Chile | 2026</div>
      </div>
      <div class="item-desc">
        Integración de telemetría de humedad de suelo en tiempo real con índices satelitales Sentinel (NDVI/NDRE) en viñedos del Maule, Chile.
      </div>
    </div>
  </div>

  <!-- Pie Página 1 -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">PÁGINA 1 DE 2</span> Daniel Santander Urrutia — CV Extendido Científico &amp; Gestión
    </div>
    <div>
      Continúa en Página 2 (Políticas Públicas, Publicaciones, Instrumental y Comunicaciones) →
    </div>
  </div>
</div>

<!-- ========================================== -->
<!-- PÁGINA 2: POLÍTICAS, PUBLICACIONES, EQUIPOS -->
<!-- ========================================== -->
<div class="page">
  <div>
    <!-- Header Repetición Página 2 -->
    <div class="header-container">
      <div class="masthead-row">
        <div>
          <h2 class="candidate-name" style="font-size: 15pt;">Daniel Santander Urrutia</h2>
          <div class="candidate-subtitle">Políticas Públicas, Publicaciones, Instrumental &amp; Comunicaciones</div>
        </div>
        <div class="role-badge">CV Extendido · 2/2</div>
      </div>
    </div>

    <!-- Políticas Públicas e Incidencia Legislativa -->
    <div class="section-title">
      <span>Políticas Públicas, Incidencia Legislativa &amp; Gobernanza</span>
      <span class="section-tag">Impacto Institucional</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Exposición Técnica ante el Congreso Nacional</span> — <span class="item-inst">Cámara de Diputadas y Diputados de Chile</span></div>
        <div class="item-meta">Valparaíso, Chile</div>
      </div>
      <div class="item-desc">
        Expositor técnico invitado ante la <em>Comisión Especial de Emergencia, Desastres y Bomberos</em>. Presentación de evidencia empírica que correlaciona el avance del monocultivo forestal con la voracidad de los megaincendios y la sequía en cuencas rurales del centro-sur de Chile.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Columna Parlamentaria Conjunta</span> — <span class="item-inst">Diputado Dirk Kock-Rohwer (Los Verdes) &amp; Comestible.info</span></div>
        <div class="item-meta">Kiel / Schleswig-Holstein | 2024</div>
      </div>
      <div class="item-desc">
        Análisis político-ecológico junto al diputado regional Dirk Kock-Rohwer sobre fertilidad orgánica de suelos, agroecología y subsidios públicos directos para la agricultura sin agroquímicos.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Auditoría Técnica Internacional de Biomasa Forestal</span> — <span class="item-inst">Environmental Paper Network (EPN)</span></div>
        <div class="item-meta">Internacional | 2023</div>
      </div>
      <div class="item-desc">
        Investigación internacional <em>"Spotlight on Burning Biomass"</em> (Parral, Chile), fiscalizando la neutralidad de carbono y los subsidios europeos bajo las normativas RED III de la Unión Europea ante la oposición comunitaria.
      </div>
    </div>

    <!-- Publicaciones Seleccionadas -->
    <div class="section-title">
      <span>Publicaciones Seleccionadas, Informes de Política &amp; Ensayos</span>
      <span class="section-tag">Prensa &amp; Documentos</span>
    </div>

    <div class="item-block">
      <ul class="bullet-list">
        <li><strong>Environmental Paper Network &amp; Global Forest Coalition (2023):</strong> <em>"Spotlight on Burning Biomass for Energy in South America: Community Opposition to a Power Plant in Parral, Chile."</em> Autor Técnico Principal.</li>
        <li><strong>Tomate Rojo &amp; Red Plurinacional de Humedales (2023):</strong> <em>"¡Aguas, aguas! Humedales bajo fuego: ¿Qué sabemos y qué está haciendo Chile?"</em> (D. Santander, L. Muñoz, C. Bonifetti). Reportaje investigativo sobre impacto de megaincendios en humedales.</li>
        <li><strong>El Desconcierto (2025):</strong> <em>"¿Países tan ricos que no quieren crecer más? Noruega y la Cumbre Mundial de Decrecimiento."</em> Crónica especial desde Oslo sobre post-extractivismo y límites ecológicos en economías nórdicas.</li>
        <li><strong>Observatorio Latinoamericano de Conflictos Ambientales - OLCA (2025):</strong> <em>"Ser libres al borde del abismo."</em> Tetralogía de ensayos filosófico-políticos sobre colapso ecológico, límites energéticos y autonomía comunitaria.</li>
        <li><strong>El Regionalista &amp; Fundación Suelo (2023):</strong> <em>"¿Cómo nos preparamos para un colapso climático?"</em> (C. Miranda y D. Santander). Análisis prospectivo sobre regeneración de suelos y soberanía alimentaria descentralizada.</li>
      </ul>
    </div>

    <!-- Comunicaciones Estratégicas y Artivismo -->
    <div class="section-title">
      <span>Comunicaciones Estratégicas, Plataformas Digitales &amp; Campañas</span>
      <span class="section-tag">+700K Audiencia</span>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Apruebo Rural &amp; Primera Línea Prensa</span> — <span class="item-inst">Dirección de Comunicaciones &amp; Estrategia</span></div>
        <div class="item-meta">Chile | 2020 – 2023</div>
      </div>
      <div class="item-desc">
        Diseño y coordinación de campaña nacional transmedia con más de 700.000 visualizaciones orgánicas, liderando producción gráfica, transmisiones en vivo, diseño editorial y asambleas rurales por la justicia hídrica.
      </div>
    </div>

    <div class="item-block">
      <div class="item-row">
        <div><span class="item-title">Cuarentena Rap &amp; Rap Beauchef</span> — <span class="item-inst">Dirección Artística &amp; Arquitectura de Comunidad</span></div>
        <div class="item-meta">Chile &amp; Global | 2020</div>
      </div>
      <div class="item-desc">
        Creación y dirección de una liga cultural y spoken-word digital durante la pandemia, administrando servidores Discord y streaming para una comunidad activa de +12.000 participantes en 8 países.
      </div>
    </div>

    <!-- Instrumental de Campo y Matriz de Herramientas -->
    <div class="section-title">
      <span>Instrumental de Campo Operado &amp; Herramientas Computacionales</span>
      <span class="section-tag">Laboratorio &amp; Software</span>
    </div>

    <div class="grid-3col">
      <div class="skill-box">
        <div class="skill-box-title">Programación &amp; SIG</div>
        <div class="skill-box-text">
          • Python (GeoPandas, Rasterio, NumPy, SciPy)<br>
          • R (sf, ggplot2, análisis espacial)<br>
          • QGIS &amp; ArcGIS Pro (LiDAR, DEMs)<br>
          • Google Earth Engine (GEE)<br>
          • PostgreSQL / PostGIS • Docker • Git
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Equipos de Terreno</div>
        <div class="skill-box-text">
          • Syscal Pro (Tomografía Eléctrica ERT)<br>
          • LI-COR LI-7500/7700 (Torres Eddy Cov.)<br>
          • Cámaras dinámicas de flujo de suelos<br>
          • Piezómetros CTD Diver (nivel y cond.)<br>
          • Barrenos Edelman (muestreo intacto)
        </div>
      </div>
      <div class="skill-box">
        <div class="skill-box-title">Desarrollo Web &amp; UI</div>
        <div class="skill-box-text">
          • TypeScript, React, Next.js<br>
          • FastAPI &amp; APIs REST asíncronas<br>
          • Three.js &amp; Unity 3D (Gemelos digitales)<br>
          • Delft3D (Modelación de marejadas)<br>
          • LaTeX / Typst (Tipografía matemática)
        </div>
      </div>
    </div>

    <!-- Dominio de Idiomas -->
    <div class="item-block" style="margin-top: 4px;">
      <div class="item-row" style="font-size: 7.6pt; background: #f8fafc; padding: 3px 6px; border: 1px solid #e2e8f0; border-radius: 3px;">
        <div>
          <strong>Dominio de Idiomas:</strong> <strong>Español</strong> (Nativo — oratoria pública y redacción técnica/editorial) • <strong>Inglés</strong> (C1 Fluido — ponencias internacionales y publicaciones científicas) • <strong>Alemán</strong> (B1-B2 Intermedio — estudios de posgrado en CAU Kiel y diálogo técnico).
        </div>
      </div>
    </div>
  </div>

  <!-- Pie Página 2 -->
  <div class="footer-tailored-notice">
    <div>
      <span class="tag">NOTA DE DOSSIER A LA MEDIDA</span> Este currículum de 2 páginas refleja una base integral. Expedientes técnicos extendidos, repositorios de código y cartas motivacionales son elaborados a la medida.
    </div>
    <div>
      Contacto directo: <strong>danisantander.urrutia@gmail.com</strong>
    </div>
  </div>
</div>
</body>
</html>
"""

def render_html_to_pdf(html_content, output_pdf_path):
    """Renders HTML content to PDF using headless Chrome with print-to-pdf"""
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html_content)
        temp_html_path = f.name

    try:
        cmd = [
            CHROME_BIN,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={output_pdf_path}",
            temp_html_path
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        size = os.path.getsize(output_pdf_path)
        print(f"Generated {output_pdf_path} ({size} bytes)")
    finally:
        if os.path.exists(temp_html_path):
            os.remove(temp_html_path)

def count_pdf_pages(pdf_path):
    """Counts PDF pages via regex search on /Type /Page objects"""
    with open(pdf_path, "rb") as f:
        data = f.read()
    pages = re.findall(rb'/Type\s*/Page[^s]', data)
    return len(pages)

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    cvs = [
        ("Daniel_Santander_CV_EN_1p.pdf", generate_en_1p(), 1),
        ("Daniel_Santander_CV_EN_2p.pdf", generate_en_2p(), 2),
        ("Daniel_Santander_CV_ES_1p.pdf", generate_es_1p(), 1),
        ("Daniel_Santander_CV_ES_2p.pdf", generate_es_2p(), 2),
    ]

    for filename, html_content, expected_pages in cvs:
        out_path = os.path.join(OUTPUT_DIR, filename)
        render_html_to_pdf(html_content, out_path)
        actual_pages = count_pdf_pages(out_path)
        status = "OK" if actual_pages == expected_pages else f"MISMATCH (expected {expected_pages}, got {actual_pages})"
        print(f"  -> {filename}: {actual_pages} page(s) [{status}]")

    # Also update the legacy fallback PDF at public/Daniel_Santander_CV.pdf with the 1-page English version
    render_html_to_pdf(generate_en_1p(), FALLBACK_PDF)
    print(f"Updated legacy fallback: {FALLBACK_PDF} ({count_pdf_pages(FALLBACK_PDF)} page(s))")

if __name__ == "__main__":
    main()
