@extends('layouts.legaltech')
@php
    $lang = request('lang') === 'en' ? 'en' : 'id';
    $langRoute = ['lang' => $lang];
    $t = fn (string $id, string $en) => $lang === 'en' ? $en : $id;
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp

@section('title')
    {{ $t('Hubungi Bantuan | Ruang Keadilan', 'Contact Support | Justice Room') }}
@endsection

@section('content')
    <section class="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.95fr)]">
        <article class="hero-card px-5 py-6 md:px-7">
            <p class="eyebrow">{{ $t('Hubungi Bantuan', 'Contact Support') }}</p>
            <h1 class="mt-3 text-[2.4rem] text-[var(--color-primary)] md:text-[3.6rem]">
                {{ $t('Satu formulir singkat untuk mulai mendapat pendampingan.', 'One short form to start getting support.') }}
            </h1>
            <p class="mt-4 max-w-3xl text-[1.1rem] text-[var(--color-muted-text)]">
                {{ $t(
                    'Isi nama, nomor telepon, jenis perkara, dan ringkasan singkat. Email bersifat opsional jika kamu ingin menambah jalur kontak cadangan.',
                    'Fill in your name, phone number, case type, and a short summary. Email is optional if you want a backup contact channel.'
                ) }}
            </p>

            <div class="surface-card soft mt-6" role="note">
                <p class="text-[1.05rem] text-[var(--color-ink)]">
                    {{ $t('Frontend prototype: form ini belum terhubung ke backend pengiriman bantuan.', 'Frontend prototype: this form is not connected to a real support backend yet.') }}
                </p>
            </div>

            <form method="GET" action="#" class="mt-7 grid gap-4">
                <div>
                    <label for="name" class="eyebrow">{{ $t('Nama', 'Name') }}</label>
                    <input id="name" name="name" type="text" class="form-field mt-2" placeholder="{{ $t('Nama lengkap', 'Full name') }}" required>
                </div>

                <div>
                    <label for="phone" class="eyebrow">{{ $t('Nomor Telepon', 'Phone Number') }}</label>
                    <input id="phone" name="phone" type="tel" class="form-field mt-2" placeholder="08xxxxxxxxxx" required>
                </div>

                <div>
                    <label for="email" class="eyebrow">{{ $t('Email (Opsional)', 'Email (Optional)') }}</label>
                    <input id="email" name="email" type="email" class="form-field mt-2" placeholder="nama@email.com">
                </div>

                <div>
                    <label for="case_type" class="eyebrow">{{ $t('Jenis Perkara', 'Case Type') }}</label>
                    <input id="case_type" name="case_type" type="text" class="form-field mt-2" placeholder="{{ $t('Contoh: penipuan online', 'Example: online scam') }}" required>
                </div>

                <div>
                    <label for="message" class="eyebrow">{{ $t('Ringkasan Masalah', 'Problem Summary') }}</label>
                    <textarea id="message" name="message" rows="6" class="form-field mt-2" placeholder="{{ $t('Ceritakan inti masalahmu dengan singkat', 'Describe the core of your problem briefly') }}" required></textarea>
                </div>

                <button type="submit" class="primary-button mt-2">{{ $t('Kirim Permintaan Bantuan', 'Send Support Request') }}</button>
            </form>
        </article>

        <aside class="grid gap-4">
            <article class="surface-card success">
                <p class="eyebrow">{{ $t('Saat Diisi', 'While Filling the Form') }}</p>
                <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                    {{ $t('Nomor telepon wajib agar tim bantuan punya kontak utama. Email opsional hanya sebagai kontak tambahan.', 'Phone number is required so the support team has a primary contact. Email is optional as a secondary contact.') }}
                </p>
            </article>

            <article class="surface-card">
                <p class="eyebrow">{{ $t('Jika Sedang Panik', 'If You Are Panicking') }}</p>
                <div class="mt-4 grid gap-3">
                    <a href="{{ $routeLang('emergency') }}" class="danger-button">{{ $t('Masuk Mode Darurat', 'Open Emergency Mode') }}</a>
                    <a href="{{ $routeLang('action-guide') }}" class="soft-button">{{ $t('Buka Panduan Langkah', 'Open Action Guide') }}</a>
                    <a href="{{ $routeLang('auth.landing') }}" class="soft-button">{{ $t('Masuk / Daftar Akun', 'Sign In / Register Account') }}</a>
                </div>
            </article>
        </aside>
    </section>
@endsection
