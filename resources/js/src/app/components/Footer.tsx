import { Link } from "react-router";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">BELA</div>
                <div className="text-xs text-gray-400">
                  Karena Semua Orang Berhak Dibela
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Platform bantuan hukum digital yang memudahkan masyarakat Indonesia
              untuk mendapatkan akses keadilan dan informasi hukum yang mereka
              butuhkan.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@bela.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Fitur</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/scan-dokumen" className="hover:text-blue-400 transition-colors">
                  Scan Dokumen Legal
                </Link>
              </li>
              <li>
                <Link to="/tau-hukum" className="hover:text-blue-400 transition-colors">
                  Tau Hukum
                </Link>
              </li>
              <li>
                <Link to="/justice-viral" className="hover:text-blue-400 transition-colors">
                  Suara Keadilan
                </Link>
              </li>
              <li>
                <Link to="/halokum" className="hover:text-blue-400 transition-colors">
                  HaloKum
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 BELA. Semua hak cipta dilindungi.</p>
          <p className="mt-2 text-xs">
            Platform ini tidak menggantikan konsultasi hukum profesional. Untuk
            kasus yang kompleks, harap konsultasikan dengan pengacara berlisensi.
          </p>
        </div>
      </div>
    </footer>
  );
}
