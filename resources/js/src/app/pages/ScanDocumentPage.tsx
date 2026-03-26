import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Upload, FileText, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router";
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
    <div className="min-h-screen bela-bg text-ink font-sans">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-border mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
            Scan Dokumen Legal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Analisis dokumen hukum Anda dengan AI untuk menemukan potensi masalah
            dan ketidaksesuaian dengan peraturan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Section */}
          <Card className="p-10 mb-8 bg-white/80 backdrop-blur-xl border-border shadow-2xl rounded-[2rem]">
            <div className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-2xl p-16 text-center hover:border-primary transition-all cursor-pointer group">
              <Upload className="w-14 h-14 text-primary/40 mx-auto mb-6 group-hover:text-primary transition-colors" />
              <h3 className="text-2xl font-display font-bold text-ink mb-3">
                Upload Dokumen Anda
              </h3>
              <p className="text-muted-foreground mb-6">
                Format yang didukung: PDF, DOC, DOCX (Maksimal 10MB)
              </p>
              <Button className="bg-primary hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg h-auto">
                Pilih File
              </Button>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Atau paste teks dokumen di sini
                </span>
              </div>
              <Textarea
                placeholder="Contoh: PERJANJIAN KERJA WAKTU TERTENTU&#10;&#10;Pasal 1 - Definisi..."
                className="min-h-[250px] bg-white border-border rounded-xl focus:ring-primary/20"
              />
              <Button
                className="mt-6 w-full bg-primary hover:opacity-90 text-white py-8 rounded-xl text-xl font-bold h-auto shadow-lg shadow-primary/20"
                onClick={handleAnalyze}
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <Clock className="w-6 h-6 mr-3 animate-spin" />
                    Menganalisis Dokumen...
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6 mr-3" />
                    Analisis Sekarang
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          {result && (
            <Card className="p-10 bg-white/90 backdrop-blur-xl border-border shadow-2xl rounded-[2rem] animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-display font-bold text-primary mb-8">
                Hasil Analisis AI
              </h2>

              <div className="bg-accent/50 border border-border rounded-2xl p-6 mb-8">
                <p className="text-ink leading-relaxed text-lg">{result.summary}</p>
              </div>

              <div className="space-y-6 mb-8">
                {result.issues.map((issue: any, index: number) => (
                  <div
                    key={index}
                    className={`border-l-8 p-6 rounded-2xl shadow-sm ${
                      issue.type === "warning"
                        ? "border-yellow-500 bg-yellow-50/50"
                        : issue.type === "alert"
                        ? "border-destructive bg-destructive/5"
                        : "border-secondary bg-secondary/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {issue.type === "warning" && (
                        <AlertCircle className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-0.5" />
                      )}
                      {issue.type === "alert" && (
                        <AlertCircle className="w-7 h-7 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      {issue.type === "info" && (
                        <CheckCircle className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="text-xl font-display font-bold text-ink mb-2">
                          {issue.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {issue.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 shadow-inner">
                <h3 className="text-lg font-display font-bold text-primary mb-3 uppercase tracking-tight">
                  Rekomendasi Ahli
                </h3>
                <p className="text-ink text-lg leading-relaxed">{result.recommendation}</p>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <Button className="flex-1 bg-primary hover:opacity-90 text-white py-6 rounded-xl text-lg h-auto">
                  Download Laporan Lengkap
                </Button>
                <a href="/halokum" className="flex-1">
                  <Button variant="outline" className="w-full py-6 rounded-xl text-lg h-auto border-primary text-primary hover:bg-accent">
                    Konsultasi dengan Pengacara
                  </Button>
                </a>
              </div>
            </Card>
          )}

          {/* How it Works */}
          <Card className="p-10 mt-12 bg-white/60 backdrop-blur-md border-border shadow-xl rounded-[2rem]">
            <h3 className="text-2xl font-display font-bold text-primary mb-10 text-center">
              Proses Analisis BELA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-display font-bold mx-auto mb-6 shadow-lg shadow-primary/20">
                  1
                </div>
                <h4 className="text-lg font-display font-bold text-ink mb-3">
                  Upload & Scan
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Teknologi OCR kami membaca dokumen fisik atau digital Anda secara instant.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-display font-bold mx-auto mb-6 shadow-lg shadow-primary/20">
                  2
                </div>
                <h4 className="text-lg font-display font-bold text-ink mb-3">
                  Koneksi Regulasi
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  AI memproses teks terhadap ribuan UU dan regulasi terbaru di Indonesia.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-display font-bold mx-auto mb-6 shadow-lg shadow-primary/20">
                  3
                </div>
                <h4 className="text-lg font-display font-bold text-ink mb-3">
                  Insight Strategis
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dapatkan poin-poin risiko dan rekomendasi langkah hukum selanjutnya.
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
