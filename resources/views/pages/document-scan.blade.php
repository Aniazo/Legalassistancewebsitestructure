@extends('layouts.legaltech')
@php
    $lang = request('lang') === 'en' ? 'en' : 'id';
    $langRoute = ['lang' => $lang];
    $t = fn (string $id, string $en) => $lang === 'en' ? $en : $id;
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp

@section('title')
    {{ $t('Scan Dokumen | Ruang Keadilan', 'Document Scan | Justice Room') }}
@endsection

@section('content')
    <section class="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)]">
        <div class="hero-card px-5 py-6 md:px-7">
            <p class="eyebrow">{{ $t('Traffic Light Logic', 'Traffic Light Logic') }}</p>
            <h1 class="mt-3 text-[2.4rem] text-[var(--color-primary)] md:text-[3.6rem]">
                {{ $t(
                    'Ringkasan kontrak yang mengubah klausul rumit menjadi status yang mudah dibaca.',
                    'A contract summary that turns complex clauses into readable status labels.'
                ) }}
            </h1>
            <p class="mt-4 max-w-3xl text-[1.1rem] text-[var(--color-muted-text)]">
                {{ $t(
                    'Contoh hasil scan kontrak kerja freelance. Warna selalu disertai ikon dan label teks agar tetap aksesibel bagi pengguna buta warna.',
                    'A sample freelance work contract scan. Colors are always paired with icons and text labels so the result stays accessible for color-blind users.'
                ) }}
            </p>

            <div class="mt-8 grid gap-4">
                <article class="traffic-card">
                    <p class="traffic-label risk">&#128308; {{ $t('Risiko Tinggi / Red Flag', 'High Risk / Red Flag') }}</p>
                    <h2 class="mt-3 text-[1.7rem] text-[var(--color-primary)]">{{ $t('Klausul denda sepihak', 'One-sided penalty clause') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Pihak pemberi kerja bisa memotong pembayaran tanpa mekanisme keberatan yang jelas.', 'The employer can deduct payment without a clear objection mechanism.') }}
                    </p>
                </article>

                <article class="traffic-card">
                    <p class="traffic-label caution">&#128993; {{ $t('Hati-Hati / Caution', 'Caution') }}</p>
                    <h2 class="mt-3 text-[1.7rem] text-[var(--color-primary)]">{{ $t('Batas revisi pekerjaan tidak rinci', 'Work revision limits are unclear') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Jumlah revisi tidak disebutkan tegas sehingga bisa memicu beban kerja berlebih.', 'The number of revisions is not stated clearly, which may lead to excessive workload.') }}
                    </p>
                </article>

                <article class="traffic-card">
                    <p class="traffic-label safe">&#128994; {{ $t('Standar / Standard', 'Standard') }}</p>
                    <h2 class="mt-3 text-[1.7rem] text-[var(--color-primary)]">{{ $t('Jadwal pembayaran tertulis', 'Payment schedule is written clearly') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Tanggal pembayaran dan metode transfer sudah tercantum jelas dalam kontrak.', 'The payment date and transfer method are clearly written in the contract.') }}
                    </p>
                </article>
            </div>
        </div>

        <aside class="grid gap-4">
            <article class="surface-card">
                <p class="eyebrow">{{ $t('Ringkasan Bahasa Manusia', 'Human Language Summary') }}</p>
                <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                    {{ $t('Kontrak ini aman di bagian jadwal bayar, tetapi ada risiko besar pada klausul denda dan revisi yang tidak rinci.', 'This contract is safe on payment schedule, but there is significant risk in the penalty clause and unclear revision terms.') }}
                </p>
            </article>

            <article class="surface-card success">
                <p class="eyebrow">{{ $t('Aksi yang Disarankan', 'Recommended Action') }}</p>
                <div class="mt-4 grid gap-3">
                    <a href="{{ $routeLang('contact') }}" class="primary-button">{{ $t('Minta Review Manusia', 'Request Human Review') }}</a>
                    <a href="{{ $routeLang('action-guide') }}" class="soft-button">{{ $t('Lihat Checklist Negosiasi', 'View Negotiation Checklist') }}</a>
                </div>
            </article>

            <article class="surface-card alert">
                <p class="eyebrow">{{ $t('Cek Sebelum Tanda Tangan', 'Check Before Signing') }}</p>
                <ul class="mt-3 list-disc space-y-2 pl-6 text-[1.05rem] text-[var(--color-muted-text)]">
                    <li>{{ $t('Apakah denda punya batas yang jelas?', 'Does the penalty have a clear limit?') }}</li>
                    <li>{{ $t('Apakah revisi pekerjaan dibatasi jumlahnya?', 'Is the number of revisions clearly limited?') }}</li>
                    <li>{{ $t('Apakah sengketa punya jalur penyelesaian tertulis?', 'Is there a written dispute resolution path?') }}</li>
                </ul>
            </article>
        </aside>
    </section>
@endsection
