import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  MessageCircle,
  Send,
  Star,
  ThumbsUp,
  MessageSquare,
  Search,
  Shield,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useState } from "react";

export function HaloKumPage() {
  const [message, setMessage] = useState("");

  const experts = [
    {
      id: 1,
      name: "Dr. Ahmad Santoso, S.H., M.H.",
      specialty: "Hukum Pidana & KDRT",
      rating: 4.9,
      reviews: 234,
      experience: "15+ tahun",
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      id: 2,
      name: "Maria Wijaya, S.H., LL.M.",
      specialty: "Ketenagakerjaan & PHK",
      rating: 4.8,
      reviews: 189,
      experience: "12+ tahun",
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      id: 3,
      name: "Budi Prakoso, S.H.",
      specialty: "Hukum Properti & Tanah",
      rating: 4.7,
      reviews: 156,
      experience: "10+ tahun",
      available: false,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
  ];

  const discussions = [
    {
      id: 1,
      title: "Bagaimana cara melaporkan KDRT ke polisi?",
      author: "Anonymous User",
      category: "KDRT & Kekerasan",
      replies: 12,
      likes: 45,
      views: 234,
      timeAgo: "2 jam lalu",
      answered: true,
    },
    {
      id: 2,
      title: "Apakah bisa menuntut kompensasi setelah PHK sepihak?",
      author: "Rina S.",
      category: "Ketenagakerjaan",
      replies: 8,
      likes: 32,
      views: 178,
      timeAgo: "5 jam lalu",
      answered: true,
    },
    {
      id: 3,
      title: "Surat tilang hilang, apa yang harus dilakukan?",
      author: "Agus P.",
      category: "Hukum Lalu Lintas",
      replies: 15,
      likes: 56,
      views: 412,
      timeAgo: "1 hari lalu",
      answered: false,
    },
    {
      id: 4,
      title: "Hak waris anak dari pernikahan kedua",
      author: "Siti M.",
      category: "Keluarga & Warisan",
      replies: 6,
      likes: 28,
      views: 189,
      timeAgo: "2 hari lalu",
      answered: true,
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-4">
            <MessageCircle className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HaloKum - Forum Diskusi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Konsultasi dengan pakar hukum bersertifikat dan bergabung dengan
            komunitas untuk berbagi pengalaman
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Expert Consultation Section */}
            <Card className="p-6 bg-white/70 backdrop-blur-md border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Konsultasi dengan Pakar
                  </h2>
                </div>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-medium">
                  Lihat Semua
                </Button>
              </div>

              {/* Expert Filters */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                <Badge className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer px-4 py-1.5 whitespace-nowrap">Semua</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-600 px-4 py-1.5 whitespace-nowrap">Pidana</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-600 px-4 py-1.5 whitespace-nowrap">Keluarga</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-600 px-4 py-1.5 whitespace-nowrap">Ketenagakerjaan</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-600 px-4 py-1.5 whitespace-nowrap">Properti</Badge>
              </div>

              <div className="space-y-4">
                {experts.map((expert) => (
                  <Card
                    key={expert.id}
                    className="p-4 hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm border-white/50"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={expert.avatar} alt={expert.name} />
                        <AvatarFallback>
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {expert.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {expert.specialty}
                            </p>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium text-gray-700">
                                  {expert.rating}
                                </span>
                                <span>({expert.reviews} ulasan)</span>
                              </div>
                              <span>•</span>
                              <span>{expert.experience}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {expert.available ? (
                              <>
                                <Badge className="bg-green-100 text-green-700 border-green-300">
                                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                  Online
                                </Badge>
                                <Button
                                  size="sm"
                                  className="bg-orange-600 hover:bg-orange-700"
                                >
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Mulai Chat
                                </Button>
                              </>
                            ) : (
                              <>
                                <Badge variant="secondary">
                                  <Clock className="w-3 h-3 mr-1" />
                                  Offline
                                </Badge>
                                <Button size="sm" variant="outline" disabled>
                                  Tidak Tersedia
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

            </Card>

            {/* Discussion Forum */}
            <Card className="p-6 bg-white/70 backdrop-blur-md border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Forum Diskusi Komunitas
                </h2>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Buat Pertanyaan
                </Button>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Cari diskusi atau topik..."
                  className="pl-10"
                />
              </div>

              {/* Tabs */}
              <Tabs defaultValue="all" className="mb-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">Semua</TabsTrigger>
                  <TabsTrigger value="answered">Terjawab</TabsTrigger>
                  <TabsTrigger value="unanswered">Belum</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Discussion List */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card
                    key={discussion.id}
                    className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-white/50 backdrop-blur-sm border-white/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                          <ThumbsUp className="w-5 h-5 text-gray-400" />
                        </button>
                        <span className="text-sm font-medium text-gray-700">
                          {discussion.likes}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                            {discussion.title}
                          </h3>
                          {discussion.answered && (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <Badge variant="secondary">
                            {discussion.category}
                          </Badge>
                          <span>oleh {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.timeAgo}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies} jawaban</span>
                          </div>
                          <span>•</span>
                          <span>{discussion.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Question */}
            <Card className="p-6 bg-gradient-to-br from-orange-50/80 to-white/70 backdrop-blur-md border-white/50 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">
                Punya Pertanyaan Cepat?
              </h3>
              <Textarea
                placeholder="Tulis pertanyaan Anda di sini..."
                className="mb-4"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pertanyaan
              </Button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Pertanyaan Anda akan dijawab oleh komunitas atau pakar dalam 24
                jam
              </p>
            </Card>

            {/* Popular Topics */}
            <Card className="p-6 bg-white/70 backdrop-blur-md border-white/50 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Topik Populer</h3>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  KDRT
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  PHK
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  Tilang
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  Warisan
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  Perceraian
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  Properti
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-200 mr-2 mb-2"
                >
                  UU ITE
                </Badge>
              </div>
            </Card>

            {/* Community Stats */}
            <Card className="p-6 bg-white/70 backdrop-blur-md border-white/50 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Statistik Komunitas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Diskusi</span>
                  <span className="font-semibold text-gray-900">3,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pertanyaan Terjawab</span>
                  <span className="font-semibold text-green-600">2,891</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pakar Aktif</span>
                  <span className="font-semibold text-orange-600">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Anggota Komunitas</span>
                  <span className="font-semibold text-blue-600">12,458</span>
                </div>
              </div>
            </Card>

            {/* Guidelines */}
            <Card className="p-6 bg-blue-50/80 backdrop-blur-md border-blue-200/50 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">
                Panduan Komunitas
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hormati privasi dan anonimitas pengguna lain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Jangan memberikan nasihat hukum tanpa keahlian</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Gunakan bahasa yang sopan dan konstruktif</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}
