import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { Send, MapPin, Mail, Phone, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Halo! Pesan Anda telah berhasil kami terima. Tim kami akan segera membalas email Anda dalam jangka waktu maksimal 24 jam ke depan.");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100 text-gray-900 overflow-hidden relative">
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-cyan-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-1/2 right-[-20%] w-[40rem] h-[40rem] bg-teal-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-emerald-200 rounded-full blur-[100px] mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="container mx-auto px-4 py-16 md:py-24 flex-1">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Memiliki pertanyaan soal masalah hukum, keluhan dalam memakai fitur kami, atau ingin berkolaborasi sebagai layanan bantuan hukum? Tim kami selalu siap mendengar dari Anda.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-8 bg-white/70 backdrop-blur-md border-white/50 shadow-xl rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Kantor Pusat BELA</h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        Gedung Menara Keadilan Lantai 21<br />
                        Jl. Gatot Subroto No.14, Kuningan<br />
                        Jakarta Selatan, 12950
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat Email</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        bantuan@belahukum.id<br />
                        kemitraan@belahukum.id
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon (Bebas Pulsa)</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        1500-LAW-BELA<br />
                        (021) 555-8888
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10 bg-white/80 backdrop-blur-md border border-white/60 shadow-2xl rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Ajukan Pesan Anda</h3>
                <form className="space-y-6" onSubmit={handleSend}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <Input required placeholder="Masukkan nama..." className="py-6" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Email</label>
                      <Input required type="email" placeholder="contoh@mail.com" className="py-6" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek Pesan</label>
                    <Input required placeholder="Tentang apa pesan Anda?" className="py-6" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Isi Pesan Detail</label>
                    <Textarea required placeholder="Tuliskan sedetail-detailnya apa yang ingin Anda sampaikan..." className="min-h-[150px] p-4" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full md:w-auto px-10 py-6 text-lg bg-teal-600 hover:bg-teal-700 font-semibold"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" /> Kirim Pesan Sekarang
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
