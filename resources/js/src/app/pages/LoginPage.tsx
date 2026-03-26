import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Mail, Lock, Loader2, Scale } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate backend request
    setTimeout(() => {
      setLoading(false);
      alert("Masuk berhasil! Selamat datang kembali di BELA.");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100 text-gray-900 overflow-hidden relative flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Mesh Background */}
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-cyan-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-1/2 right-[-20%] w-[40rem] h-[40rem] bg-teal-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-emerald-200 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">BELA</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900">Selamat datang kembali</h2>
          <p className="mt-2 text-md text-gray-600">
            Atau{" "}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              buat akun baru jika belum mendaftar
            </Link>
          </p>
        </div>

        <Card className="bg-white/70 backdrop-blur-md border border-white/50 shadow-2xl rounded-2xl p-8">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  required
                  type="email"
                  className="pl-10 py-6"
                  placeholder="anda@contoh.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  required
                  type="password"
                  className="pl-10 py-6"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                  Ingat saya
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Lupa sandi?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-6 bg-blue-600 hover:bg-blue-700"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                  Memproses...
                </>
              ) : (
                "Masuk Sekarang"
              )}
            </Button>
          </form>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <Link to="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
