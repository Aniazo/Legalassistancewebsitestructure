@extends('layouts.legaltech')
@php
    $lang = request('lang') === 'en' ? 'en' : 'id';
    $langRoute = ['lang' => $lang];
    $t = fn (string $id, string $en) => $lang === 'en' ? $en : $id;
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp

@section('title')
    {{ $t('Panduan Langkah | Ruang Keadilan', 'Action Guide | Justice Room') }}
@endsection

@section('content')
    <section class="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)]">
        <div class="hero-card px-5 py-6 md:px-7">
            <p class="eyebrow">{{ $t('Checklist System', 'Checklist System') }}</p>
            <h1 class="mt-3 text-[2.4rem] text-[var(--color-primary)] md:text-[3.6rem]">
                {{ $t(
                    'Panduan langkah yang menunjukkan apa yang sudah selesai dan apa yang harus dilakukan sekarang.',
                    'A step-by-step guide that shows what is done and what needs to happen next.'
                ) }}
            </h1>
            <p class="mt-4 max-w-3xl text-[1.1rem] text-[var(--color-muted-text)]">
                {{ $t(
                    'Contoh alur untuk kasus penipuan online. Setiap langkah memiliki tombol aksi agar pengguna tidak perlu pindah ke halaman lain untuk mulai bergerak.',
                    'A sample flow for an online fraud case. Each step has action buttons so users do not need to jump to another page before acting.'
                ) }}
            </p>

            <div class="progress-shell mt-8">
                <article id="kumpulkan-bukti" class="progress-step completed">
                    <span class="step-tag completed">{{ $t('Langkah Selesai', 'Completed Step') }}</span>
                    <h2 class="mt-3 text-[1.65rem] text-[var(--color-primary)]">{{ $t('1. Kumpulkan bukti dasar', '1. Gather basic evidence') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Chat, bukti transfer, nomor rekening, nama akun, dan tautan produk sudah disimpan dalam satu folder.', 'Chats, transfer proof, account numbers, account names, and product links have been saved in one folder.') }}
                    </p>
                </article>

                <article class="progress-step current">
                    <span class="step-tag current">{{ $t('Langkah Saat Ini', 'Current Step') }}</span>
                    <h2 class="mt-3 text-[1.65rem] text-[var(--color-primary)]">{{ $t('2. Susun kronologi singkat', '2. Build a short timeline') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Tulis urutan kejadian dari awal kontak, waktu transfer, sampai akun tidak bisa dihubungi lagi.', 'Write the order of events from first contact, transfer time, until the account could no longer be reached.') }}
                    </p>
                    <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                        <button type="button" class="primary-button">{{ $t('Klik untuk Draft Laporan', 'Click for Report Draft') }}</button>
                        <button type="button" class="soft-button">{{ $t('Lihat Contoh Kronologi', 'See Timeline Example') }}</button>
                    </div>
                </article>

                <article id="lapor-polisi" class="progress-step">
                    <span class="step-tag upcoming">{{ $t('Langkah Berikutnya', 'Upcoming Step') }}</span>
                    <h2 class="mt-3 text-[1.65rem] text-[var(--color-primary)]">{{ $t('3. Laporkan ke kanal resmi', '3. Report through official channels') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Pilih kantor polisi, bank, platform marketplace, atau kanal aduan digital yang paling relevan.', 'Choose the most relevant police office, bank, marketplace platform, or digital complaint channel.') }}
                    </p>
                    <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                        <button type="button" class="success-button">{{ $t('Klik untuk Draft Laporan', 'Click for Report Draft') }}</button>
                        <button type="button" class="soft-button">{{ $t('Hubungi Bank / E-Wallet', 'Contact Bank / E-Wallet') }}</button>
                    </div>
                </article>

                <article class="progress-step">
                    <span class="step-tag upcoming">{{ $t('Langkah Berikutnya', 'Upcoming Step') }}</span>
                    <h2 class="mt-3 text-[1.65rem] text-[var(--color-primary)]">{{ $t('4. Pantau nomor laporan dan tindak lanjut', '4. Track report number and follow-up') }}</h2>
                    <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                        {{ $t('Simpan nomor laporan, nama petugas, dan tenggat follow-up agar proses tidak hilang di tengah jalan.', 'Save the report number, officer name, and follow-up deadline so the process does not get lost midway.') }}
                    </p>
                </article>
            </div>
        </div>

        <aside class="grid gap-4">
            <article class="surface-card success">
                <p class="eyebrow">{{ $t('Sinyal Progres', 'Progress Signal') }}</p>
                <p class="mt-3 text-[1.15rem] text-[var(--color-ink)]">{{ $t('Kamu sudah menyelesaikan 1 dari 4 langkah penting.', 'You have completed 1 of 4 important steps.') }}</p>
            </article>

            <article class="surface-card soft">
                <p class="eyebrow">{{ $t('Langkah Saat Ini', 'Current Focus') }}</p>
                <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                    {{ $t('Fokus sekarang ada pada kronologi singkat. Ini akan mempercepat proses saat kamu bicara dengan petugas atau pendamping.', 'Your current focus is the short timeline. It will make the process faster when you speak with officers or legal support.') }}
                </p>
            </article>

            <article class="surface-card alert">
                <p class="eyebrow">{{ $t('Butuh Pendamping?', 'Need Support?') }}</p>
                <div class="mt-4 grid gap-3">
                    <a href="{{ $routeLang('contact') }}" class="danger-button">{{ $t('Hubungi Bantuan', 'Contact Support') }}</a>
                    <a href="{{ $routeLang('emergency') }}" class="soft-button">{{ $t('Masuk Mode Darurat', 'Open Emergency Mode') }}</a>
                </div>
            </article>
        </aside>
    </section>
@endsection
