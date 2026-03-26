import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  FileText,
  BookOpen,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Shield,
} from "lucide-react";

export function HomePage() {
  const stats = [
    { number: "73%", label: "Warga tidak memahami hak hukum mereka" },
    { number: "1:10,000", label: "Rasio advokat per penduduk di Indonesia" },
    {
      number: "45 Hari",
      label: "Rata-rata waktu tunggu konsultasi hukum gratis",
    },
  ];

  const features = [
    {
      icon: FileText,
      title: "Scan Dokumen Legal",
      description:
        "Analisis dokumen hukum berlapis dengan AI untuk menemukan ketidaksesuaian atau potensi masalah. Dapatkan ringkasan yang mudah dipahami dalam hitungan menit.",
      color: "bg-blue-50 text-blue-600",
      link: "/scan-dokumen",
      image:
        "https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMHNjYW5uaW5nfGVufDF8fHx8MTc3NDUxNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: BookOpen,
      title: "Tau Hukum",
      description:
        "Database lengkap informasi hukum Indonesia dalam bahasa sederhana. Dari KDRT, hukum lalu lintas, hingga hukum digital - semua pasal dan penjelasan dalam satu tempat.",
      color: "bg-green-50 text-green-600",
      link: "/tau-hukum",
      image:
        "https://images.unsplash.com/photo-1663580109859-b63aafcb275e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwbGF3JTIwanVzdGljZSUyMGhhbW1lcnxlbnwxfHx8fDE3NzQ1MTY3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: TrendingUp,
      title: "Justice Viral",
      description:
        "Angkat isu hukum yang perlu perhatian publik dan pemerintah. Upvote kasus, tandatangani petisi digital, dan jadilah bagian dari perubahan sistem hukum Indonesia.",
      color: "bg-purple-50 text-purple-600",
      link: "/justice-viral",
      image:
        "https://images.unsplash.com/photo-1592458752545-8abc3c97c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm90ZXN0aW5nJTIwanVzdGljZXxlbnwxfHx8fDE3NzQ1MTY3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: MessageCircle,
      title: "HaloKum - Forum Diskusi",
      description:
        "Konsultasi langsung dengan pakar hukum bersertifikat dan bergabung dengan komunitas untuk berbagi pengalaman. Seperti Halo Doc, tapi untuk masalah hukum Anda.",
      color: "bg-orange-50 text-orange-600",
      link: "/halokum",
      image:
        "https://images.unsplash.com/photo-1760992003923-ed5d455c1164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaXNjdXNzaW9uJTIwZm9ydW18ZW58MXx8fHwxNzc0NDk0MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Gratis & Mudah Diakses",
      description: "Bantuan hukum dasar gratis untuk semua lapisan masyarakat",
    },
    {
      icon: Users,
      title: "Pakar Terverifikasi",
      description: "Konsultasi dengan advokat dan pakar hukum berlisensi",
    },
    {
      icon: CheckCircle,
      title: "Privasi Terjamin",
      description: "Data dan informasi Anda dilindungi dengan enkripsi tingkat tinggi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
              Platform Bantuan Hukum Digital Indonesia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              BELA: Karena Semua Orang
              <br />
              <span className="text-blue-200">Berhak Dibela</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Akses mudah ke keadilan untuk setiap warga Indonesia. Pahami hak
              Anda, konsultasi dengan ahli, dan jadilah bagian dari perubahan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                Krisis Akses Keadilan di Indonesia
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
              Indonesia menghadapi tantangan besar dalam sistem bantuan hukum.
              Jutaan warga tidak memahami hak-hak hukum mereka, tidak tahu harus
              ke mana ketika menghadapi masalah legal, dan tidak mampu membayar
              biaya konsultasi advokat yang mahal.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-2 border-red-200 bg-white"
                >
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-red-600 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Akibatnya?
                </span>{" "}
                Ratusan ribu kasus tidak terselesaikan, pelanggaran hak asasi
                manusia terus terjadi tanpa pertanggungjawaban, dan ketimpangan
                akses keadilan semakin melebar antara yang mampu dan tidak mampu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Solusi Digital untuk Keadilan yang Setara
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              BELA hadir sebagai jembatan antara masyarakat dengan sistem hukum
              Indonesia. Dengan teknologi AI dan jaringan pakar hukum
              terverifikasi, kami membuat akses keadilan menjadi mudah, cepat,
              dan terjangkau untuk semua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center border-none shadow-lg">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                    <benefit.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              4 Fitur Utama BELA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk setiap kebutuhan hukum Anda, dari analisis
              dokumen hingga konsultasi dengan ahli
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-4`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 group"
                    >
                      Coba Fitur Ini
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Siap Memperjuangkan Hak Hukum Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Bergabung dengan ribuan warga Indonesia yang telah mendapatkan
              bantuan hukum melalui BELA. Gratis, mudah, dan terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Hubungi Kami
              </Button>
            </div>
            <p className="mt-8 text-sm text-blue-200">
              Tidak diperlukan kartu kredit • Akses instan • Gratis selamanya
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
