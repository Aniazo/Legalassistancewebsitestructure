import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  TrendingUp,
  ArrowUp,
  Users,
  Clock,
  Share2,
  Plus,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function JusticeViralPage() {
  const [cases, setCases] = useState([
    {
      id: 1,
      title: "Hentikan Penggusuran Paksa Warga Kampung Akuarium Jakarta",
      category: "Hak Properti",
      description:
        "Ratusan keluarga terancam kehilangan tempat tinggal tanpa kompensasi yang layak. Pemerintah DKI perlu memberikan solusi yang adil.",
      upvotes: 12584,
      signatures: 8942,
      target: 10000,
      daysLeft: 12,
      status: "trending",
      author: "Maria Santoso",
      date: "20 Maret 2026",
    },
    {
      id: 2,
      title:
        "Tuntut Keadilan untuk Korban Kecelakaan Tambang Ilegal di Kalimantan",
      category: "Ketenagakerjaan",
      description:
        "12 pekerja meninggal akibat kelalaian perusahaan. Keluarga korban membutuhkan kompensasi dan pertanggungjawaban hukum yang jelas.",
      upvotes: 9823,
      signatures: 7120,
      target: 15000,
      daysLeft: 18,
      status: "critical",
      author: "Budi Prasetyo",
      date: "18 Maret 2026",
    },
    {
      id: 3,
      title: "Revisi UU Perlindungan Data Pribadi: Hak Privasi Masyarakat",
      category: "Hukum Digital",
      description:
        "UU PDP perlu diperkuat untuk melindungi data pribadi warga dari penyalahgunaan perusahaan teknologi.",
      upvotes: 7654,
      signatures: 12340,
      target: 20000,
      daysLeft: 25,
      status: "success",
      author: "Digital Rights Foundation",
      date: "15 Maret 2026",
    },
    {
      id: 4,
      title: "Bantuan Hukum Gratis untuk Buruh Migran Indonesia yang Teraniaya",
      category: "Hak Asasi",
      description:
        "Ribuan BMI mengalami penyiksaan dan tidak mendapat bantuan hukum. Kita perlu sistem perlindungan yang lebih baik.",
      upvotes: 6234,
      signatures: 4567,
      target: 10000,
      daysLeft: 30,
      status: "active",
      author: "Migrant Care Indonesia",
      date: "12 Maret 2026",
    },
  ]);

  const handleUpvote = (id: number) => {
    setCases(
      cases.map((c) =>
        c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c
      )
    );
  };

  const [recentCases, setRecentCases] = useState([
    {
      id: 101,
      title: "Desak Transparansi Audit Penyaluran Dana Bansos",
      category: "Korupsi",
      description:
        "Dana bansos yang seharusnya untuk rakyat miskin diduga disalahgunakan di beberapa daerah. Kami menuntut audit publik segera.",
      upvotes: 45,
      signatures: 200,
      target: 5000,
      daysLeft: 45,
      status: "active",
      author: "Forum Warga Cerdas",
      date: "26 Maret 2026",
    },
    {
      id: 102,
      title: "Tolak Pembukaan Lahan Konservasi Margasatwa untuk Tambang",
      category: "Lingkungan Hidup",
      description:
        "Pengalihan fungsi lahan konservasi mengancam habitat satwa endemik. Tolak izin perluasan lahan yang merusak alam.",
      upvotes: 18,
      signatures: 50,
      target: 10000,
      daysLeft: 60,
      status: "active",
      author: "Pencinta Alam Nusantara",
      date: "26 Maret 2026",
    },
  ]);

  const handleRecentUpvote = (id: number) => {
    setRecentCases(
      recentCases.map((c) =>
        c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "trending":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "critical":
        return "bg-red-100 text-red-700 border-red-300";
      case "success":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-blue-100 text-blue-700 border-blue-300";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "trending":
        return "Trending";
      case "critical":
        return "Urgent";
      case "success":
        return "Target Tercapai";
      default:
        return "Aktif";
    }
  };

  return (
    <div className="min-h-screen bela-bg text-ink font-sans">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-border mb-6">
            <TrendingUp className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
            Suara Keadilan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Angkat isu hukum yang perlu perhatian publik. Bersama kita lebih kuat untuk menuntut keadilan.
          </p>
          <Link to="/register">
            <Button className="bg-primary hover:opacity-90 text-white px-10 py-8 rounded-2xl text-xl font-bold h-auto shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Plus className="w-6 h-6 mr-2" />
              Buat Kampanye Baru
            </Button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {[
            { label: "Kampanye Aktif", value: "247", color: "text-primary", icon: Users },
            { label: "Kasus Terselesaikan", value: "89", color: "text-success", icon: CheckCircle },
            { label: "Total Pendukung", value: "156K", color: "text-primary/60", icon: TrendingUp },
          ].map((stat, i) => (
            <Card key={i} className="p-8 text-center bg-white/80 backdrop-blur-xl border-border rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[3rem]" />
              <div className={`text-4xl font-display font-black ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="trending" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/50 backdrop-blur-md p-1.5 border border-border rounded-2xl h-auto">
              <TabsTrigger value="trending" className="px-8 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg font-bold">Trending</TabsTrigger>
              <TabsTrigger value="recent" className="px-8 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg font-bold">Terbaru</TabsTrigger>
              <TabsTrigger value="success" className="px-8 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg font-bold">Berhasil</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="trending" className="space-y-8 animate-in fade-in duration-500">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="p-10 hover:shadow-2xl transition-all bg-white/90 border-border rounded-[2rem] hover:-translate-y-1 group"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Upvote Section */}
                  <div className="flex flex-row md:flex-col items-center justify-center gap-2 bg-primary/5 rounded-2xl p-4 md:h-fit">
                    <button
                      onClick={() => handleUpvote(caseItem.id)}
                      className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-white transition-all shadow-sm group"
                    >
                      <ArrowUp className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-black text-primary">
                        {caseItem.upvotes.toLocaleString()}
                      </span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge
                            className={`px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-[10px] ${getStatusColor(caseItem.status).replace('purple-100 text-purple-700 border-purple-300', 'bg-primary text-white')}`}
                          >
                            {getStatusLabel(caseItem.status)}
                          </Badge>
                          <Badge variant="outline" className="px-4 py-1.5 border-border rounded-full font-bold text-muted-foreground uppercase text-[10px]">
                            {caseItem.category}
                          </Badge>
                        </div>
                        <h3 className="text-3xl font-display font-black text-ink mb-4 group-hover:text-primary transition-colors leading-tight">
                          {caseItem.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                          {caseItem.description}
                        </p>
                      </div>
                      <div className="flex gap-3">
                         <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-primary font-black">{caseItem.author.charAt(0)}</span>
                         </div>
                      </div>
                    </div>

                    {/* Final Actions & Progress */}
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-black text-ink uppercase tracking-wider">
                            Dukungan: {caseItem.signatures.toLocaleString()} <span className="text-muted-foreground font-medium">/ {caseItem.target.toLocaleString()}</span>
                          </span>
                          <span className="text-sm font-black text-primary">
                            {Math.round((caseItem.signatures / caseItem.target) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-border/20 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-primary h-full transition-all duration-1000"
                            style={{ width: `${Math.min((caseItem.signatures / caseItem.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/50">
                        <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 opacity-40" />
                            <span>oleh {caseItem.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 opacity-40" />
                            <span>{caseItem.daysLeft} hari tersisa</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5 rounded-xl px-6">
                            <Share2 className="w-4 h-4 mr-2" />
                            Bagikan
                          </Button>
                          <Link to="/register">
                            <Button className="bg-primary hover:opacity-90 text-white font-bold px-8 rounded-xl h-12 shadow-lg shadow-primary/10">
                              Tanda Tangani Sekarang
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
             {/* Similar logic with brand styling */}
             <div className="text-center py-20 bg-white/50 rounded-[2rem] border border-dashed border-border">
                <p className="text-muted-foreground font-medium">Menampilkan kampanye terbaru yang butuh bantuan Anda...</p>
             </div>
          </TabsContent>

          <TabsContent value="success" className="space-y-6 animate-in zoom-in-95 duration-500">
            <Card className="p-12 bg-white/90 border-border rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-success/5 rounded-full blur-3xl" />
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="bg-success/10 p-8 rounded-3xl shadow-inner">
                  <CheckCircle className="w-16 h-16 text-success" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="bg-success text-white px-4 py-1 mb-6 pointer-events-none uppercase tracking-widest font-bold">Kemenangan Rakyat</Badge>
                  <h3 className="text-4xl font-display font-black text-ink mb-4 leading-tight">
                    UU Perlindungan Pekerja Gig Economy Disahkan!
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Setelah 3 bulan kampanye masif, tuntutan 45,000 rakyat akhirnya dikabulkan oleh DPR. Keadilan untuk driver ojol dan kurir kini dijamin undang-undang.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-bold text-muted-foreground">
                    <div className="flex items-center gap-2 bg-success/5 px-4 py-2 rounded-full">
                       <Users className="w-5 h-5 text-success" />
                       <span className="text-success">52.482 Tanda Tangan</span>
                    </div>
                    <span>•</span>
                    <span>Selesai 5 hari lalu</span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* How It Works */}
        <div className="mt-32">
          <h3 className="text-4xl font-display font-black text-primary mb-12 text-center">
            Bagaimana Dampak Nyata Anda?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: 1, title: "Buat Kampanye", desc: "Ceritakan masalah hukum yang menimpa Anda atau komunitas Anda secara jujur." },
              { id: 2, title: "Kumpulkan Massa", desc: "Bagikan ke komunitas. Kampanye yang viral akan mendapatkan lebih banyak atensi legal." },
              { id: 3, title: "Aksi Nyata", desc: "BELA akan menghubungkan kampanye trending langsung ke LBH dan pejabat terkait." },
            ].map((step) => (
              <Card key={step.id} className="p-10 bg-white/80 border-border rounded-[2rem] text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-black mx-auto mb-6 text-2xl shadow-lg shadow-primary/20">
                  {step.id}
                </div>
                <h4 className="text-2xl font-display font-bold text-ink mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}
