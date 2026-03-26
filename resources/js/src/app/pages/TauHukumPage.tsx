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
import { Link } from "react-router";
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
    <div className="min-h-screen bela-bg text-ink font-sans">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-border mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
            Tau Hukum
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Database lengkap informasi hukum Indonesia dalam bahasa yang mudah dipahami.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-2 shadow-2xl rounded-2xl bg-white/80 backdrop-blur-xl border-border">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary/40" />
              <Input
                placeholder="Cari topik hukum, pasal, atau pertanyaan..."
                className="pl-16 pr-6 py-8 text-xl border-none focus-visible:ring-0 bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Card>
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {["KDRT", "Tilang", "UU ITE", "PHK", "Warisan"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-1.5 text-sm cursor-pointer hover:bg-primary hover:text-white transition-all rounded-full bg-white border border-border text-muted-foreground shadow-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold text-primary">
              Kategori Hukum
            </h2>
            <div className="h-1 flex-1 bg-border/30 ml-8 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all cursor-pointer group bg-white/80 backdrop-blur-md border-border rounded-2xl hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${category.color.replace('100', '50').replace('600', '500')} mb-6 shadow-sm`}
                >
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
                    {category.articles} Artikel
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-all" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">
             Topik Paling Banyak Dicari
          </h2>
          <div className="space-y-6">
            {popularTopics.map((topic, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all cursor-pointer group bg-white/90 border-border rounded-2xl flex items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Badge variant="outline" className="border-primary/20 text-primary font-bold px-3 py-1">
                      {topic.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {topic.pasal}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-sm text-primary font-bold">{topic.views} pembaca</span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Card>
            ))}
          </div>
        </div>

        {/* Example Article Preview */}
        <Card className="max-w-4xl mx-auto p-12 bg-white/90 backdrop-blur-xl border-border shadow-2xl rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
            <div className="bg-primary/10 p-5 rounded-2xl shadow-inner">
              <Car className="w-8 h-8 text-primary" />
            </div>
            <div>
              <Badge className="mb-4 bg-primary text-white hover:bg-primary uppercase tracking-widest px-4">
                Hukum Lalu Lintas
              </Badge>
              <h3 className="text-3xl font-display font-black text-ink mb-3 leading-tight">
                Apa yang Harus Dilakukan Saat Ditilang Polisi?
              </h3>
              <p className="text-sm font-bold text-primary/40">
                Terakhir diperbarui: 15 Maret 2026 • 5 Menit Baca
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-ink leading-relaxed">
            <p className="text-lg font-medium mb-6">
              Ketika Anda ditilang oleh polisi, penting untuk mengetahui hak-hak Anda sesuai dengan UU No. 22 Tahun 2009 tentang Lalu Lintas. Berikut panduan langkah demi langkah:
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 mb-8 border border-primary/10">
              <h4 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> Hak-Hak Prioritas Anda:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                   <span>Meminta identitas petugas dan surat tugas resmi jika razia resmi</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                   <span>Menerima surat tilang (biru) sebagai bukti pelanggaran resmi</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                   <span>Memilih membayar denda via e-Tilang (Briva) atau mengikuti sidang</span>
                </li>
              </ul>
            </div>

            <Button className="bg-primary hover:opacity-90 text-white px-10 py-8 rounded-xl text-xl font-bold h-auto shadow-xl shadow-primary/20">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </Card>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="p-12 bg-primary text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-display font-black mb-4">
                Ada Masalah Hukum Tertentu?
              </h3>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Jangan ambil tindakan tanpa dasar. Tim ahli BELA siap membantu menjawab pertanyaan Anda dalam 24 jam.
              </p>
              <a href="/halokum">
                <Button className="bg-white text-primary hover:bg-accent px-10 py-6 rounded-xl text-xl font-bold h-auto shadow-lg">
                   Konsultasi Sekarang
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}
