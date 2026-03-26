import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  BookOpen,
  Search,
  Home,
  Car,
  Heart,
  Smartphone,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export function TauHukumPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: Heart,
      title: "KDRT & Kekerasan",
      description: "Hukum perlindungan dari kekerasan dalam rumah tangga",
      articles: 12,
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Car,
      title: "Hukum Lalu Lintas",
      description: "Pelanggaran, tilang, dan hak Anda dengan polisi",
      articles: 18,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Hukum Digital & Internet",
      description: "ITE, privasi data, dan kejahatan siber",
      articles: 15,
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Briefcase,
      title: "Ketenagakerjaan",
      description: "Hak pekerja, PHK, dan perjanjian kerja",
      articles: 20,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Home,
      title: "Properti & Tanah",
      description: "Jual beli, sewa, dan sengketa properti",
      articles: 14,
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Keluarga & Perceraian",
      description: "Pernikahan, perceraian, dan hak asuh anak",
      articles: 16,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const popularTopics = [
    {
      title: "Apa yang Harus Dilakukan Saat Ditilang Polisi?",
      category: "Hukum Lalu Lintas",
      views: "12.5k",
      pasal: "UU No. 22 Tahun 2009",
    },
    {
      title: "Hak-Hak Korban KDRT dan Cara Melaporkannya",
      category: "KDRT & Kekerasan",
      views: "9.8k",
      pasal: "UU No. 23 Tahun 2004",
    },
    {
      title: "Pencemaran Nama Baik di Media Sosial",
      category: "Hukum Digital",
      views: "8.2k",
      pasal: "UU ITE Pasal 27",
    },
    {
      title: "PHK Sepihak: Hak Anda Sebagai Pekerja",
      category: "Ketenagakerjaan",
      views: "7.6k",
      pasal: "UU No. 13 Tahun 2003",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100 text-gray-900 overflow-hidden relative">
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-cyan-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-1/2 right-[-20%] w-[40rem] h-[40rem] bg-teal-200 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-emerald-200 rounded-full blur-[100px] mix-blend-multiply" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 mb-4">
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tau Hukum</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Database lengkap informasi hukum Indonesia dalam bahasa yang mudah
            dipahami
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Cari topik hukum, pasal, atau pertanyaan..."
              className="pl-12 pr-4 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
              KDRT
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
              Tilang
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
              UU ITE
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
              PHK
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
              Warisan
            </Badge>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Kategori Hukum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group bg-white/70 backdrop-blur-md border-white/50"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.color} mb-4`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {category.articles} artikel
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Topik Paling Banyak Dicari
          </h2>
          <div className="space-y-4">
            {popularTopics.map((topic, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <Badge variant="outline">{topic.category}</Badge>
                      <span>{topic.pasal}</span>
                      <span>•</span>
                      <span>{topic.views} views</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Example Article Preview */}
        <Card className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-teal-50/80 to-white/70 backdrop-blur-md border-white/50 shadow-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                Hukum Lalu Lintas
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Apa yang Harus Dilakukan Saat Ditilang Polisi?
              </h3>
              <p className="text-sm text-gray-500">
                Terakhir diperbarui: 15 Maret 2026
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Ketika Anda ditilang oleh polisi, penting untuk mengetahui hak-hak
              Anda sesuai dengan UU No. 22 Tahun 2009 tentang Lalu Lintas dan
              Angkutan Jalan. Berikut panduan lengkapnya:
            </p>

            <h4 className="font-semibold text-gray-900 mb-2">
              Hak-Hak Anda:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Meminta identitas petugas dan surat tugas resmi</li>
              <li>
                Mendapatkan surat tilang (biru) sebagai bukti pelanggaran
              </li>
              <li>Menolak bila SIM/STNK diminta untuk diserahkan</li>
              <li>Memilih membayar denda di pengadilan atau secara online</li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-2">
              Yang Tidak Boleh Dilakukan Polisi:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Meminta uang damai atau negosiasi denda di tempat</li>
              <li>Menahan kendaraan tanpa alasan yang sah</li>
              <li>Tilang tanpa memberikan surat bukti pelanggaran</li>
            </ul>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Baca Artikel Lengkap
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Tidak Menemukan yang Anda Cari?
            </h3>
            <p className="text-green-100 mb-6">
              Ajukan pertanyaan Anda dan tim ahli kami akan menjawabnya
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50">
              Tanya Ahli Hukum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}
