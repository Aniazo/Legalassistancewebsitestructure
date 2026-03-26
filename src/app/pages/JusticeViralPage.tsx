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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Justice Viral
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Angkat isu hukum yang perlu perhatian publik. Bersama kita lebih kuat
            untuk menuntut keadilan.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Buat Kampanye Baru
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-white/70 backdrop-blur-md border-white/50">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              247
            </div>
            <div className="text-sm text-gray-600">Kampanye Aktif</div>
          </Card>
          <Card className="p-6 text-center bg-white/70 backdrop-blur-md border-white/50">
            <div className="text-3xl font-bold text-green-600 mb-2">
              89
            </div>
            <div className="text-sm text-gray-600">Kasus Terselesaikan</div>
          </Card>
          <Card className="p-6 text-center bg-white/70 backdrop-blur-md border-white/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              156K
            </div>
            <div className="text-sm text-gray-600">Total Pendukung</div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="trending" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="recent">Terbaru</TabsTrigger>
            <TabsTrigger value="success">Berhasil</TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="p-6 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-md border-white/50"
              >
                <div className="flex gap-6">
                  {/* Upvote Section */}
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleUpvote(caseItem.id)}
                      className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      <span className="text-sm font-semibold text-gray-700">
                        {caseItem.upvotes.toLocaleString()}
                      </span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className={getStatusColor(caseItem.status)}
                          >
                            {getStatusLabel(caseItem.status)}
                          </Badge>
                          <Badge variant="secondary">{caseItem.category}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                          {caseItem.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {caseItem.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {caseItem.signatures.toLocaleString()} /{" "}
                          {caseItem.target.toLocaleString()} tanda tangan
                        </span>
                        <span className="text-sm text-gray-500">
                          {Math.round(
                            (caseItem.signatures / caseItem.target) * 100
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${Math.min(
                              (caseItem.signatures / caseItem.target) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>oleh {caseItem.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{caseItem.daysLeft} hari tersisa</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Bagikan
                        </Button>
                        <Button
                          className="bg-purple-600 hover:bg-purple-700"
                          size="sm"
                        >
                          Tanda Tangani
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <div className="text-center py-12 text-gray-500">
              Menampilkan kampanye terbaru...
            </div>
          </TabsContent>

          <TabsContent value="success" className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Kemenangan: UU Perlindungan Pekerja Gig Economy Disahkan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Setelah 3 bulan kampanye dengan 45,000 tanda tangan, DPR
                    akhirnya mengesahkan RUU Perlindungan Pekerja Gig Economy yang
                    memberikan jaminan sosial untuk driver ojol dan kurir.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>45,234 pendukung</span>
                    <span>•</span>
                    <span>Selesai 5 hari lalu</span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* How It Works */}
        <Card className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-teal-50/80 to-white/70 backdrop-blur-md border-white/50 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Bagaimana Justice Viral Bekerja?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mx-auto mb-3 text-lg">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Buat Kampanye
              </h4>
              <p className="text-sm text-gray-600">
                Ceritakan masalah hukum yang perlu perhatian publik
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mx-auto mb-3 text-lg">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Kumpulkan Dukungan
              </h4>
              <p className="text-sm text-gray-600">
                Bagikan dan ajak masyarakat untuk upvote & tanda tangan
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mx-auto mb-3 text-lg">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Sampai ke Pemerintah
              </h4>
              <p className="text-sm text-gray-600">
                Kampanye dengan dukungan tinggi akan disampaikan ke pejabat
                terkait
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
      </div>
    </div>
  );
}
