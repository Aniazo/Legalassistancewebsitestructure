import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Upload, FileText, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export function ScanDocumentPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setResult({
        summary: "Dokumen perjanjian kerja ini mengandung beberapa poin yang perlu diperhatikan.",
        issues: [
          {
            type: "warning",
            title: "Klausul Pesangon Tidak Sesuai UU",
            description: "Pasal 5 ayat 3 menyebutkan pesangon hanya 50% dari UU Ketenagakerjaan yang mewajibkan minimal 1x upah per tahun kerja."
          },
          {
            type: "alert",
            title: "Jam Kerja Melebihi Standar",
            description: "Pasal 7 menyebutkan 45 jam/minggu tanpa overtime, melebihi standar 40 jam/minggu sesuai UU No. 13 Tahun 2003."
          },
          {
            type: "info",
            title: "Hak Cuti Sudah Sesuai",
            description: "Pasal 10 tentang cuti tahunan 12 hari sudah sesuai dengan ketentuan minimum."
          }
        ],
        recommendation: "Kami menyarankan untuk bernegosiasi ulang Pasal 5 dan 7 sebelum menandatangani dokumen ini."
      });
      setAnalyzing(false);
    }, 2000);
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scan Dokumen Legal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analisis dokumen hukum Anda dengan AI untuk menemukan potensi masalah
            dan ketidaksesuaian dengan peraturan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Section */}
          <Card className="p-8 mb-8 bg-white/70 backdrop-blur-md border-white/50 shadow-xl">
            <div className="border-2 border-dashed border-teal-300 bg-white/50 rounded-lg p-12 text-center hover:border-teal-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upload Dokumen Anda
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Format yang didukung: PDF, DOC, DOCX (Maksimal 10MB)
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Pilih File
              </Button>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Atau paste teks dokumen di sini:
                </span>
              </div>
              <Textarea
                placeholder="Contoh: PERJANJIAN KERJA WAKTU TERTENTU&#10;&#10;Pasal 1 - Definisi&#10;Yang dimaksud dengan Karyawan adalah..."
                className="min-h-[200px]"
              />
              <Button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleAnalyze}
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <Clock className="w-5 h-5 mr-2 animate-spin" />
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 mr-2" />
                    Analisis Dokumen
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          {result && (
            <Card className="p-8 bg-white/70 backdrop-blur-md border-white/50 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hasil Analisis
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700">{result.summary}</p>
              </div>

              <div className="space-y-4 mb-6">
                {result.issues.map((issue: any, index: number) => (
                  <div
                    key={index}
                    className={`border-l-4 p-4 rounded ${
                      issue.type === "warning"
                        ? "border-yellow-500 bg-yellow-50"
                        : issue.type === "alert"
                        ? "border-red-500 bg-red-50"
                        : "border-green-500 bg-green-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {issue.type === "warning" && (
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      )}
                      {issue.type === "alert" && (
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      {issue.type === "info" && (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {issue.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {issue.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Rekomendasi
                </h3>
                <p className="text-gray-700">{result.recommendation}</p>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Download Laporan PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  Konsultasi dengan Ahli
                </Button>
              </div>
            </Card>
          )}

          {/* How it Works */}
          <Card className="p-8 mt-8 bg-gradient-to-br from-teal-50/80 to-white/70 backdrop-blur-md border-white/50 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Bagaimana Cara Kerjanya?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Upload Dokumen
                </h4>
                <p className="text-sm text-gray-600">
                  Upload file atau paste teks dokumen legal Anda
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  AI Menganalisis
                </h4>
                <p className="text-sm text-gray-600">
                  AI membandingkan dengan database peraturan Indonesia
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Dapatkan Hasil
                </h4>
                <p className="text-sm text-gray-600">
                  Terima ringkasan dan rekomendasi yang mudah dipahami
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}
