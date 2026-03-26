import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/scan-dokumen", label: "Scan Dokumen" },
    { path: "/tau-hukum", label: "Tau Hukum" },
    { path: "/justice-viral", label: "Justice Viral" },
    { path: "/halokum", label: "HaloKum" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">BELA</div>
              <div className="text-xs text-gray-500 -mt-1">
                Karena Semua Orang Berhak Dibela
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Masuk
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Daftar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Masuk
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Daftar Gratis
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
