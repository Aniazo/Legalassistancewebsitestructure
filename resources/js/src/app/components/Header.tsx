import { Button } from "./ui/button";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = window.location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/scan-dokumen", label: "Scan Dokumen" },
    { path: "/tau-hukum", label: "Tau Hukum" },
    { path: "/suara-keadilan", label: "Suara Keadilan" },
    { path: "/halokum", label: "HaloKum" },
  ];

  return (
    <header className="sticky top-0 z-50 pt-4 px-4">
      <div className="max-w-7xl mx-auto glass-pill px-6 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#4d9df5] to-[#34c890] shadow-md group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-poppins font-bold text-primary tracking-tight">BELA</div>
              <div className="text-[10px] text-primary/40 -mt-1 font-poppins font-bold uppercase tracking-widest hidden sm:block">
                Legal-Tech
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 text-[0.92rem] font-poppins font-semibold transition-all rounded-lg relative ${
                    isActive 
                      ? "text-primary bg-primary/5" 
                      : "text-[#3d6994] hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/login">
              <Button variant="ghost" size="sm" className="font-poppins font-bold text-primary hover:bg-primary/5 px-4 h-10 border border-primary/20 rounded-xl">
                Masuk
              </Button>
            </a>
            <a href="/register">
              <Button size="sm" className="bg-primary hover:opacity-90 text-white font-poppins font-bold px-6 h-10 rounded-xl shadow-lg shadow-primary/20">
                Mulai Gratis
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
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
          <nav className="lg:hidden mt-2 p-4 glass-pill animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 text-sm font-poppins font-bold rounded-xl transition-colors ${
                    pathname === item.path
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-[#3d6994] hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-primary/10">
                <a href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full font-poppins font-bold border-primary/20 text-primary">
                    Masuk
                  </Button>
                </a>
                <a href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary font-poppins font-bold">
                    Mulai Gratis
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
    </header>
  );
}
