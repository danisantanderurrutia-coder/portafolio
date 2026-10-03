import { 
  Mail, 
  MapPin, 
  Download, 
  ShieldCheck,
  ArrowUp
} from 'lucide-react';
import { Language } from '../types';

interface ContactFooterProps {
  currentLang: Language;
  onOpenPdfModal: () => void;
  onScrollToTop: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  currentLang,
  onOpenPdfModal,
  onScrollToTop
}) => {
  return (
    <footer className="bg-obsidian-900 border-t border-white/10 pt-16 pb-12 text-sm font-sans text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio / Profile */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h4 className="text-white font-mono font-bold text-base">
                DANIEL SANTANDER URRUTIA
              </h4>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-sans max-w-lg">
              {currentLang === 'es' ? (
                <>
                  Profesional de las comunicaciones estratégicas y de campo. Especialista en campañas de alto impacto, movilización de juventudes, soberanía territorial y traducción científica de políticas energéticas (EU RED III y ETS). Autor principal de reportes para la Red Ambiental del Papel (EPN).
                </>
              ) : (
                <>
                  Strategic and field communications professional. Specialist in high-impact campaigning, youth mobilization, territorial sovereignty, and scientific policy translation on EU bioenergy (RED III & ETS). Lead technical author for the Environmental Paper Network (EPN).
                </>
              )}
            </p>

            <div className="flex items-center space-x-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Santiago, Chile / Remote Global</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>EPN Verified (2024)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Regulatory Focus */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-white">
              {currentLang === 'es' ? 'Marco Normativo & Foco' : 'Regulatory Scope'}
            </h5>
            <ul className="text-xs space-y-2 font-mono">
              <li className="text-neutral-300 hover:text-emerald-400 transition">
                • EU Renewable Energy Directive (RED III)
              </li>
              <li className="text-neutral-300 hover:text-emerald-400 transition">
                • EU Emissions Trading System (ETS)
              </li>
              <li className="text-neutral-300 hover:text-emerald-400 transition">
                • Biophysical Forest Carbon Accounting
              </li>
              <li className="text-neutral-300 hover:text-emerald-400 transition">
                • AI-Augmented Communication Pipelines
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-white">
              {currentLang === 'es' ? 'Contacto y Postulación' : 'Direct Inquiries'}
            </h5>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="mailto:daniel.santander.u@gmail.com"
                className="flex items-center space-x-2 text-emerald-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>daniel.santander.u@gmail.com</span>
              </a>

              <button
                onClick={onOpenPdfModal}
                className="flex items-center space-x-2 text-amber-400 hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Dossier PDF Completo' : 'Complete PDF Dossier'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Daniel Santander Urrutia // FANFE / EPN Application Dossier.
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center space-x-1.5 text-neutral-400 hover:text-white transition"
          >
            <span>{currentLang === 'es' ? 'Volver al Inicio' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
