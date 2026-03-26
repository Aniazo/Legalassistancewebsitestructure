@extends('layouts.legaltech')
@php
    $lang = request('lang') === 'en' ? 'en' : 'id';
    $langRoute = ['lang' => $lang];
    $t = fn (string $id, string $en) => $lang === 'en' ? $en : $id;
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp

@section('title')
    {{ $t('Tanya AI | Ruang Keadilan', 'Ask AI | Justice Room') }}
@endsection

@section('content')
    @php
        $presets = [
            'penipuan-online' => [
                'title' => $t('Ditipu Online', 'Online Scam'),
                'user_message' => $t('Saya baru ditipu online. Uang sudah ditransfer dan penjual menghilang.', 'I was just scammed online. The money was transferred and the seller disappeared.'),
                'summary' => [
                    $t(
                        'Kamu sedang menghadapi dugaan penipuan online dan langkah paling penting sekarang adalah mengamankan bukti digital serta mencoba menghentikan aliran dana.',
                        'You may be facing online fraud, and the most important step now is to secure digital evidence and try to stop the flow of funds.'
                    ),
                    $t(
                        'Jangan hapus chat, mutasi rekening, atau bukti transfer karena itu akan menjadi dasar laporanmu.',
                        'Do not delete chats, bank statements, or transfer proof because they will form the basis of your report.'
                    ),
                ],
                'steps' => [
                    $t('Simpan bukti transfer, chat, username toko, nomor rekening, dan tautan produk.', 'Save transfer proof, chats, store usernames, account numbers, and product links.'),
                    $t('Hubungi bank atau e-wallet untuk meminta pemblokiran sementara jika masih memungkinkan.', 'Contact the bank or e-wallet provider to request a temporary block if possible.'),
                    $t('Buat kronologi singkat dengan urutan waktu agar laporan lebih mudah dibaca petugas.', 'Write a short timeline so the report is easier for officers to read.'),
                    $t('Lanjutkan ke panduan langkah untuk draft laporan dan checklist bukti.', 'Continue to the action guide for a draft report and evidence checklist.'),
                ],
                'laws' => [
                    $t('Pasal 378 KUHP dapat dipakai untuk konteks penipuan apabila terdapat tipu muslihat atau rangkaian kebohongan.', 'Article 378 of the Indonesian Criminal Code may apply in fraud cases involving deception or a chain of lies.'),
                    $t('UU ITE dapat relevan jika penipuan dilakukan lewat sistem elektronik, akun digital, atau komunikasi online.', 'The Electronic Information and Transactions Law may be relevant if the fraud happened through electronic systems, digital accounts, or online communication.'),
                ],
            ],
            'kontrak-kerja' => [
                'title' => $t('Kontrak Kerja Mencurigakan', 'Suspicious Work Contract'),
                'user_message' => $t('Saya diminta tanda tangan kontrak kerja cepat, tapi ada denda besar dan aturan yang terasa sepihak.', 'I was asked to sign a work contract quickly, but it contains a large penalty and one-sided terms.'),
                'summary' => [
                    $t(
                        'Kamu perlu menahan diri untuk tidak langsung menandatangani dokumen sebelum memahami kewajiban, denda, dan syarat pemutusan hubungan kerja.',
                        'You should avoid signing the document immediately before understanding the obligations, penalties, and termination terms.'
                    ),
                    $t(
                        'Bagian yang paling perlu dicek adalah penalti, pemotongan gaji, masa ikatan, dan klausul yang memberi kuasa sepihak kepada perusahaan.',
                        'The clauses that need the closest review are penalties, salary deductions, binding periods, and terms giving unilateral power to the company.'
                    ),
                ],
                'steps' => [
                    $t('Baca ulang pasal tentang masa kerja, penalti, pemutusan kontrak, dan kewajiban finansial.', 'Read again the clauses on contract length, penalties, termination, and financial obligations.'),
                    $t('Simpan salinan kontrak dan tandai bagian yang tidak kamu pahami.', 'Keep a copy of the contract and mark the parts you do not understand.'),
                    $t('Gunakan fitur scan dokumen untuk melihat klausul yang perlu dicurigai.', 'Use document scan to spot clauses that need caution.'),
                    $t('Jika perlu, minta waktu review sebelum menandatangani dan konsultasikan isi kontrak.', 'If needed, ask for review time before signing and consult the contract terms.'),
                ],
                'laws' => [
                    $t('UU Ketenagakerjaan dan aturan turunannya relevan untuk menilai hak pekerja, kontrak, dan pemutusan hubungan kerja.', 'Indonesian labor law and its implementing regulations are relevant when reviewing worker rights, contracts, and termination.'),
                    $t('Klausul yang bertentangan dengan hukum ketenagakerjaan atau merugikan secara tidak wajar perlu dikaji sebelum disetujui.', 'Clauses that conflict with labor law or unfairly burden the worker should be reviewed before approval.'),
                ],
            ],
            'dipanggil-polisi' => [
                'title' => $t('Dipanggil Polisi', 'Police Summons'),
                'user_message' => $t('Saya dipanggil polisi dan bingung harus bicara apa. Saya takut salah ngomong.', 'I was summoned by the police and I do not know what to say. I am afraid of saying the wrong thing.'),
                'summary' => [
                    $t(
                        'Situasi ini perlu dihadapi dengan tenang dan kamu tidak harus menjawab terburu-buru tanpa memahami posisi hukummu.',
                        'This situation should be handled calmly, and you do not need to answer in a rush without understanding your legal position.'
                    ),
                    $t(
                        'Hal terpenting adalah mengetahui status pemanggilan, menyimpan surat panggilan, dan meminta pendampingan jika diperlukan.',
                        'The most important things are to understand your summons status, keep a copy of the summons letter, and ask for support if needed.'
                    ),
                ],
                'steps' => [
                    $t('Periksa isi surat panggilan, tanggal, status pemeriksaan, dan pihak yang memanggil.', 'Check the summons letter, date, examination status, and the authority who issued it.'),
                    $t('Simpan foto atau salinan surat panggilan dan catat nomor kontak petugas.', 'Keep a photo or copy of the summons and record the officer contact number.'),
                    $t('Masuk ke mode darurat untuk melihat hak dasar yang harus kamu jaga saat diperiksa.', 'Open emergency mode to review the key rights you must protect during questioning.'),
                    $t('Hubungi pendamping atau bantuan hukum jika kamu merasa tertekan atau tidak paham posisi kasusmu.', 'Contact a supporter or legal aid if you feel pressured or do not understand your case position.'),
                ],
                'laws' => [
                    $t('KUHAP relevan untuk memahami hak saat pemeriksaan, pemanggilan, dan kebutuhan pendampingan hukum.', 'The Indonesian Criminal Procedure Code is relevant for understanding rights during questioning, summons, and legal assistance.'),
                    $t('Hak untuk mendapat bantuan hukum dan tidak dipaksa memberi keterangan harus dijaga selama proses berlangsung.', 'The right to legal assistance and the right not to be forced into giving statements must be protected throughout the process.'),
                ],
            ],
            'utang-ditagih' => [
                'title' => $t('Teror Debt Collector', 'Debt Collector Harassment'),
                'user_message' => $t('Saya terus diteror penagih utang lewat telepon dan chat, bahkan keluarga saya ikut dihubungi.', 'I keep getting harassed by debt collectors through calls and chats, and they are contacting my family too.'),
                'summary' => [
                    $t(
                        'Kamu perlu memisahkan antara penagihan yang sah dan tindakan intimidatif yang melanggar batas.',
                        'You need to separate legitimate collection efforts from intimidation that crosses legal boundaries.'
                    ),
                    $t(
                        'Simpan semua bukti teror, nomor penghubung, dan isi ancaman karena itu penting jika kamu perlu melapor atau meminta perlindungan.',
                        'Save all evidence of harassment, contact numbers, and threatening messages because they matter if you need to report or seek protection.'
                    ),
                ],
                'steps' => [
                    $t('Simpan screenshot chat, rekaman telepon, dan nomor yang digunakan untuk menagih.', 'Save chat screenshots, call recordings, and the numbers used for collection.'),
                    $t('Catat apakah penagih menyebarkan data pribadi, menghubungi keluarga, atau mengancam secara verbal.', 'Record whether the collector shared personal data, contacted family members, or made verbal threats.'),
                    $t('Jangan menghapus bukti meskipun pesan terasa menekan.', 'Do not delete evidence even if the messages feel intense.'),
                    $t('Hubungi bantuan jika penagihan berubah menjadi intimidasi atau penyebaran data pribadi.', 'Seek help if the collection turns into intimidation or personal data exposure.'),
                ],
                'laws' => [
                    $t('Aturan perlindungan data pribadi dan ketentuan penagihan relevan jika ada penyebaran data atau intimidasi berlebihan.', 'Personal data protection rules and collection regulations may apply if there is data exposure or excessive intimidation.'),
                    $t('Ancaman, penghinaan, atau penyebaran data tanpa dasar dapat membuka jalur pelaporan terpisah.', 'Threats, insults, or unauthorized data disclosure may create separate reporting grounds.'),
                ],
            ],
        ];

        $suggestions = [
            ['preset' => 'penipuan-online', 'label' => $t('Ditipu online', 'Online scam')],
            ['preset' => 'kontrak-kerja', 'label' => $t('Kontrak kerja bermasalah', 'Problematic work contract')],
            ['preset' => 'dipanggil-polisi', 'label' => $t('Dipanggil polisi', 'Police summons')],
            ['preset' => 'utang-ditagih', 'label' => $t('Debt collector meneror', 'Debt collector harassment')],
        ];

        $presetKey = request('preset');
        $typedIssue = trim((string) request('q', ''));
        $hasPreset = is_string($presetKey) && array_key_exists($presetKey, $presets);

        if ($hasPreset) {
            $active = $presets[$presetKey];
            $issueTitle = $active['title'];
        } elseif ($typedIssue !== '') {
            $issueTitle = $lang === 'en' ? \Illuminate\Support\Str::headline($typedIssue) : \Illuminate\Support\Str::headline($typedIssue);
            $active = [
                'title' => $issueTitle,
                'user_message' => $typedIssue,
                'summary' => [
                    $t(
                        'Masalahmu perlu dipetakan dulu ke inti persoalan, pihak yang terlibat, dan bukti yang sudah kamu pegang sekarang.',
                        'Your issue needs to be mapped first into the core problem, the parties involved, and the evidence you currently have.'
                    ),
                    $t(
                        'Simpan semua bukti, jangan ambil keputusan terburu-buru, dan lanjutkan ke panduan langkah jika kamu butuh urutan tindakan yang lebih jelas.',
                        'Keep all evidence, avoid rushed decisions, and continue to the action guide if you need a clearer sequence of next steps.'
                    ),
                ],
                'steps' => [
                    $t('Catat kronologi singkat dari awal kejadian sampai posisi terakhirmu saat ini.', 'Write a short timeline from the beginning of the event to your current position.'),
                    $t('Simpan chat, dokumen, bukti transfer, foto, atau surat yang berkaitan dengan masalah ini.', 'Save chats, documents, transfer proof, photos, or letters related to this issue.'),
                    $t('Pisahkan mana yang fakta, mana yang dugaan, dan mana yang masih perlu dicek.', 'Separate what is fact, what is allegation, and what still needs verification.'),
                    $t('Jika situasi terasa mendesak, buka mode darurat atau hubungi bantuan manusia.', 'If the situation feels urgent, open emergency mode or contact human support.'),
                ],
                'laws' => [
                    $t('Dasar hukum akan bergantung pada jenis masalah, dokumen, dan pihak yang terlibat dalam kejadianmu.', 'The legal basis will depend on the type of issue, the documents, and the parties involved in your case.'),
                    $t('Gunakan hasil ringkasan ini sebagai pijakan awal sebelum masuk ke analisis hukum yang lebih spesifik.', 'Use this summary as a starting point before moving into more specific legal analysis.'),
                ],
            ];
        } else {
            $presetKey = 'penipuan-online';
            $active = $presets[$presetKey];
            $issueTitle = $active['title'];
        }
    @endphp

    <section class="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
        <div class="hero-card px-5 py-6 md:px-7">
            <p class="eyebrow">{{ $t('Explainable AI', 'Explainable AI') }}</p>
            <h1 class="mt-3 text-[2.4rem] text-[var(--color-primary)] md:text-[3.6rem]">{{ $t('Tanya AI untuk masalah:', 'Ask AI about:') }} {{ $issueTitle }}</h1>
            <p class="mt-4 max-w-3xl text-[1.1rem] text-[var(--color-muted-text)]">
                {{ $t(
                    'Pilih contoh masalah di bawah atau ketik masalahmu sendiri. Saat pertama kali dibuka, halaman ini sudah menampilkan contoh jawaban agar user langsung paham cara kerjanya.',
                    'Choose a sample problem below or type your own issue. On first load, this page already shows a sample answer so users immediately understand how it works.'
                ) }}
            </p>

            <form action="{{ route('ai-chat') }}" method="GET" class="mt-7">
                <input type="hidden" name="lang" value="{{ $lang }}">
                <label for="ai-issue" class="eyebrow">{{ $t('Ceritakan masalahmu', 'Describe your problem') }}</label>
                <div class="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
                    <div class="search-shell flex-1">
                        <input
                            id="ai-issue"
                            name="q"
                            type="text"
                            class="search-input"
                            value="{{ $typedIssue }}"
                            placeholder="{{ $t('Contoh: saya ditipu online, saya dipanggil polisi, saya diteror debt collector', 'Example: I was scammed online, I was summoned by the police, debt collectors are harassing me') }}"
                        >
                    </div>
                    <button type="submit" class="primary-button md:min-w-[10rem]">{{ $t('Lihat Jawaban', 'View Answer') }}</button>
                </div>
            </form>

            <div class="mt-5">
                <p class="eyebrow">{{ $t('Suggestion', 'Suggestions') }}</p>
                <div class="suggestion-chip-wrap mt-3">
                    @foreach ($suggestions as $suggestion)
                        <a href="{{ $routeLang('ai-chat', ['preset' => $suggestion['preset']]) }}" class="quick-chip">
                            {{ $suggestion['label'] }}
                        </a>
                    @endforeach
                </div>
            </div>

            <div class="mt-8 grid gap-4">
                <div class="user-bubble">
                    <p class="eyebrow">{{ $t('Kamu', 'You') }}</p>
                    <p class="mt-2 text-[1.15rem] text-[var(--color-ink)]">{{ $active['user_message'] }}</p>
                </div>

                <div class="assistant-bubble">
                    <p class="eyebrow">{{ $t('AI Ruang Keadilan', 'Justice Room AI') }}</p>
                    <div class="mt-3 grid gap-3 text-[1.15rem] text-[var(--color-ink)]">
                        @foreach ($active['summary'] as $line)
                            <p>{{ $line }}</p>
                        @endforeach
                    </div>

                    <div class="mt-5">
                        <p class="font-[var(--font-display)] text-[1.2rem] font-bold text-[var(--color-primary)]">{{ $t('Langkah Berikutnya', 'Next Steps') }}</p>
                        <ul class="mt-3 list-disc space-y-2 pl-6 text-[1.1rem] text-[var(--color-muted-text)]">
                            @foreach ($active['steps'] as $step)
                                <li>{{ $step }}</li>
                            @endforeach
                        </ul>
                    </div>

                    <details class="law-toggle mt-5">
                        <summary>{{ $t('Cek Dasar Hukum', 'Check Legal Basis') }}</summary>
                        <div class="mt-4 grid gap-3 text-[1.05rem] text-[var(--color-muted-text)]">
                            @foreach ($active['laws'] as $law)
                                <p>{{ $law }}</p>
                            @endforeach
                        </div>
                    </details>
                </div>
            </div>
        </div>

        <aside class="grid gap-4">
            <article class="surface-card">
                <p class="eyebrow">{{ $t('Aksi Berikutnya', 'Next Action') }}</p>
                <div class="mt-4 grid gap-3">
                    <a href="{{ $routeLang('action-guide') }}" class="primary-button">{{ $t('Buka Checklist', 'Open Checklist') }}</a>
                    <a href="{{ $routeLang('document-scan') }}" class="soft-button">{{ $t('Cek Dokumen / Bukti', 'Check Documents / Evidence') }}</a>
                    <a href="{{ $routeLang('contact') }}" class="danger-button">{{ $t('Hubungi Bantuan', 'Contact Support') }}</a>
                </div>
            </article>

            <article class="surface-card success">
                <p class="eyebrow">{{ $t('Contoh Masalah Siap Klik', 'Ready-to-Use Sample Cases') }}</p>
                <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                    {{ $t(
                        'Gunakan suggestion jika kamu ingin user langsung melihat contoh jawaban AI tanpa harus mengetik dulu.',
                        'Use the suggestions if you want users to immediately see sample AI answers without typing first.'
                    ) }}
                </p>
            </article>
        </aside>
    </section>
@endsection
