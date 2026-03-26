@php
    $langRoute = ['lang' => 'id'];
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp
<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BELA | Legal-Tech Indonesia</title>
        <meta
            name="description"
            content="BELA membantu masyarakat memahami hukum melalui UI interaktif: scan dokumen, edukasi hak, diskusi, dan dukungan komunitas."
        >
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/src/main.tsx', 'resources/js/src/styles/index.css'])
    </head>
    <body class="bela-live-body">
        <div class="bela-live-page">
            <div class="bela-live-bg" aria-hidden="true">
                <span class="bela-live-blob blob-a"></span>
                <span class="bela-live-blob blob-b"></span>
                <span class="bela-live-blob blob-c"></span>
            </div>

            <div id="react-header-root"></div>

            <main class="bela-live-main bela-live-container">
                <section class="bela-live-hero" id="hero">
                    <div class="bela-live-hero-copy">
                        <p class="bela-live-kicker">Platform Legal-Tech Interaktif</p>
                        <h1>Semua Orang Berhak Dibela, dan Sekarang Lebih Mudah Memulai.</h1>
                        <p>BELA bantu kamu paham dokumen, tahu hak, dan ambil tindakan dengan UI yang jelas, visual, dan tidak menakutkan.</p>
                        <div class="bela-live-actions">
                            <a href="{{ $routeLang('document-scan') }}" class="bela-live-btn bela-live-btn-primary">Coba Scan Dokumen</a>
                            <a href="{{ $routeLang('action-guide') }}" class="bela-live-btn bela-live-btn-soft">Pelajari Hukum</a>
                        </div>
                        <div class="bela-live-trust">
                            <article><strong>10.000+</strong><span>dokumen dianalisis</span></article>
                            <article><strong>5.000+</strong><span>pengguna terbantu</span></article>
                            <article><strong>24/7</strong><span>akses edukasi hukum</span></article>
                        </div>
                    </div>

                    <div class="bela-live-hero-visual" aria-label="Mockup dashboard BELA">
                        <div class="bela-live-dashboard">
                            <div class="bela-live-dashboard-top">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="bela-live-dashboard-main">
                                <div class="bela-live-doc-preview">
                                    <p class="title">Kontrak Kerja - Ringkasan</p>
                                    <div class="line long"></div>
                                    <div class="line"></div>
                                    <div class="line warn"></div>
                                    <div class="line"></div>
                                </div>
                                <div class="bela-live-insight-panel">
                                    <p class="chip">Risiko Tinggi</p>
                                    <p class="chip ok">Hak Karyawan</p>
                                    <div class="mini-bars"><i></i><i></i><i></i></div>
                                </div>
                            </div>
                        </div>
                        <article class="bela-live-float-card one">
                            <h3>Alert Klausul</h3>
                            <p>Potongan gaji sepihak terdeteksi.</p>
                        </article>
                        <article class="bela-live-float-card two">
                            <h3>Insight Cepat</h3>
                            <p>3 pasal penting untuk kamu cek dulu.</p>
                        </article>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-plain" id="masalah">
                    <div class="bela-live-section-head center">
                        <p class="bela-live-kicker">Masalah Nyata</p>
                        <h2>Banyak orang bingung saat berhadapan dengan hukum.</h2>
                    </div>
                    <div class="bela-live-problem-grid">
                        <article class="bela-live-problem-card">
                            <div class="icon-wrap">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v5M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                            </div>
                            <h3>Dokumen Rumit</h3>
                            <p>Sulit paham isi dokumen panjang.</p>
                        </article>
                        <article class="bela-live-problem-card">
                            <div class="icon-wrap">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 21h14M7 21V8l5-5 5 5v13M10 12h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                            <h3>Situasi Aparat</h3>
                            <p>Tidak tahu hak saat kondisi mendadak.</p>
                        </article>
                        <article class="bela-live-problem-card">
                            <div class="icon-wrap">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v10H7l-3 3V6Zm4 4h8M8 13h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                            <h3>Kebingungan Online</h3>
                            <p>Kasus viral ramai, solusi tetap tidak jelas.</p>
                        </article>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-plain" id="fitur">
                    <div class="bela-live-section-head">
                        <p class="bela-live-kicker">Fitur Utama</p>
                        <h2>Visual dulu, paham lebih cepat.</h2>
                    </div>
                    <div class="bela-live-feature-grid">
                        <article class="bela-live-feature-card">
                            <div class="feature-icon">🔍</div>
                            <h3>Scan Legal Document</h3>
                            <p>Ringkasan otomatis dokumen.</p>
                            <div class="mini-ui scan"><span></span><span></span><span></span></div>
                        </article>
                        <article class="bela-live-feature-card">
                            <div class="feature-icon">📚</div>
                            <h3>Tau Hukum</h3>
                            <p>Hakmu dijelaskan tanpa ribet.</p>
                            <div class="mini-ui law"><span></span><span></span><span></span></div>
                        </article>
                        <article class="bela-live-feature-card">
                            <div class="feature-icon">📢</div>
                            <h3>Justice Viral</h3>
                            <p>Suarakan kasus dan dukungan publik.</p>
                            <div class="mini-ui feed"><span></span><span></span><span></span></div>
                        </article>
                        <article class="bela-live-feature-card">
                            <div class="feature-icon">💬</div>
                            <h3>HaloHukum</h3>
                            <p>Diskusi cepat dengan komunitas.</p>
                            <div class="mini-ui chat"><span></span><span></span><span></span></div>
                        </article>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-soft" id="cara-kerja">
                    <div class="bela-live-section-head">
                        <p class="bela-live-kicker">Cara Kerja</p>
                        <h2>Empat langkah yang langsung terasa.</h2>
                    </div>
                    <div class="bela-live-steps">
                        <article class="step"><i>1</i><p>Pilih kebutuhan</p></article>
                        <article class="step"><i>2</i><p>Gunakan fitur</p></article>
                        <article class="step"><i>3</i><p>Dapatkan insight</p></article>
                        <article class="step"><i>4</i><p>Ambil tindakan</p></article>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-plain" id="showcase">
                    <div class="bela-live-section-head">
                        <p class="bela-live-kicker">Feature Showcase</p>
                        <h2>Mockup produk yang terasa nyata.</h2>
                    </div>
                    <div class="bela-live-showcase">
                        <article class="row">
                            <div class="mock large doc"></div>
                            <div class="copy"><h3>Hasil scan langsung terbaca</h3><p>Highlight risiko, pasal penting, dan rekomendasi langkah muncul dalam satu layar.</p></div>
                        </article>
                        <article class="row reverse">
                            <div class="mock large edu"></div>
                            <div class="copy"><h3>Belajar hukum berbasis situasi</h3><p>Konten modular: pilih kasus, lihat hakmu, simpan checklist tindakan.</p></div>
                        </article>
                        <article class="row">
                            <div class="mock large forum"></div>
                            <div class="copy"><h3>Forum diskusi yang terarah</h3><p>Pertanyaan, balasan, dan insight komunitas dirangkum supaya keputusan lebih cepat.</p></div>
                        </article>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-plain" id="viral">
                    <div class="bela-live-viral-layout">
                        <div class="bela-live-viral-feed">
                            <article class="viral-card"><h3>Kontrak magang tanpa honor</h3><p><span class="count">1.2k</span> upvote · 340 komentar</p></article>
                            <article class="viral-card"><h3>Penagihan debt collector berlebihan</h3><p><span class="count">980</span> upvote · 221 komentar</p></article>
                            <article class="viral-card"><h3>Penyalahgunaan data pribadi</h3><p><span class="count">2.1k</span> upvote · 410 komentar</p></article>
                        </div>
                        <div class="bela-live-viral-copy">
                            <p class="bela-live-kicker">Justice Viral</p>
                            <h2>Buat isu penting lebih terlihat.</h2>
                            <p>Kasus yang relevan bisa naik bersama dukungan publik agar lebih cepat ditindaklanjuti.</p>
                            <a href="{{ $routeLang('ai-chat') }}" class="bela-live-btn bela-live-btn-primary">Lihat Topik Viral</a>
                        </div>
                    </div>
                </section>

                <section class="bela-live-section bela-live-section-soft" id="halohukum">
                    <div class="bela-live-chat-layout">
                        <div class="bela-live-chat-copy">
                            <p class="bela-live-kicker">HaloHukum</p>
                            <h2>Tanya, diskusi, dan dapatkan arahan awal.</h2>
                            <p>UI chat dirancang seperti percakapan sehari-hari agar nyaman untuk pengguna umum.</p>
                            <a href="{{ $routeLang('contact') }}" class="bela-live-btn bela-live-btn-soft">Masuk HaloHukum</a>
                        </div>
                        <div class="bela-live-chat-ui" aria-label="Mockup chat">
                            <div class="msg from">Saya baru dapat surat somasi, harus mulai dari mana?</div>
                            <div class="msg to">Tenang. Kita mulai dari cek isi pasal dan tenggat waktunya dulu.</div>
                            <div class="msg from">Kalau saya belum paham isi suratnya?</div>
                            <div class="msg to">Upload dokumennya ke Scan Legal Document, lalu kita bahas hasilnya.</div>
                            <div class="typing"><span></span><span></span><span></span></div>
                        </div>
                    </div>
                </section>

                <section class="bela-live-cta" id="cta">
                    <div class="icon">⚖</div>
                    <h2>Jangan hadapi masalah hukum sendirian.</h2>
                    <p>Mulai sekarang dan rasakan pengalaman hukum yang lebih jelas, ramah, dan bisa ditindaklanjuti.</p>
                    <a href="{{ $routeLang('auth.landing') }}" class="bela-live-btn bela-live-btn-primary glow">Mulai Sekarang</a>
                </section>
            </main>

            <footer class="bela-live-footer">
                <div class="bela-live-container bela-live-footer-inner">
                    <p>© {{ now()->year }} BELA</p>
                    <div class="bela-live-footer-links">
                        <a href="#hero">Tentang</a>
                        <a href="{{ $routeLang('contact') }}">Kontak</a>
                        <a href="#">Privasi</a>
                    </div>
                    <p class="disc">BELA bersifat edukatif dan bukan pengganti nasihat hukum profesional.</p>
                </div>
            </footer>
        </div>
    </body>
</html>
