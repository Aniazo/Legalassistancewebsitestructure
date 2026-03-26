@php
    $lang = request('lang') === 'en' ? 'en' : 'id';
    $langRoute = ['lang' => $lang];
    $t = fn (string $id, string $en) => $lang === 'en' ? $en : $id;
    $routeLang = fn (string $name, array $params = []) => route($name, array_merge($langRoute, $params));
@endphp
<!DOCTYPE html>
<html lang="{{ $lang }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title', $t('Democratizing Justice', 'Democratizing Justice'))</title>
        <meta
            name="description"
            content="{{ $t(
                'Aplikasi legal-tech untuk membantu masyarakat memahami masalah hukum dengan bahasa yang tenang, jelas, dan bisa ditindaklanjuti cepat.',
                'A legal-tech app that helps people understand legal problems in calm, clear language with actionable next steps.'
            ) }}"
        >
        <style>
            html:not([data-lang-ready="true"]) body {
                opacity: 0;
            }
        </style>
        <script>
            (() => {
                const supported = ['id', 'en'];
                const key = 'rk_lang';
                const url = new URL(window.location.href);
                const queryLanguage = url.searchParams.get('lang');
                const storedLanguage = window.localStorage.getItem(key);

                if (supported.includes(queryLanguage || '')) {
                    window.localStorage.setItem(key, queryLanguage);
                    document.documentElement.setAttribute('data-lang-ready', 'true');
                    return;
                }

                if (supported.includes(storedLanguage || '')) {
                    url.searchParams.set('lang', storedLanguage);
                    window.location.replace(url.toString());
                    return;
                }

                document.documentElement.setAttribute('data-lang-ready', 'true');
            })();
        </script>
        @vite('resources/js/app.js')
    </head>
    <body class="bg-[var(--color-page)] text-[var(--color-ink)]" data-current-lang="{{ $lang }}">
        @php
            $isSafeExit = request()->routeIs('safe-exit');
        @endphp

        @if (! $isSafeExit)
            <div class="app-shell">
                <header class="header-shell">
                    <div class="header-panel">
                        <div class="flex flex-col gap-4">
                            <div class="header-top">
                                <div class="brand-lockup min-w-0">
                                    <span class="brand-mark" aria-hidden="true">R</span>
                                    <div class="brand-copy">
                                        <div class="brand-line">
                                            <a href="{{ $routeLang('home') }}" class="brand-title">
                                                {{ $t('Ruang Keadilan', 'Justice Room') }}
                                            </a>
                                            <span class="brand-tag">{{ $t('Legal-Tech Indonesia', 'Indonesia Legal-Tech') }}</span>
                                        </div>
                                        <p class="brand-meta">
                                            {{ $t(
                                                'Pendamping awal untuk kasus seperti penipuan online, kontrak kerja bermasalah, panggilan polisi, konflik keluarga, dan kebutuhan bantuan hukum dasar.',
                                                'A first-response companion for online fraud, problematic work contracts, police summons, family disputes, and basic legal aid needs.'
                                            ) }}
                                        </p>
                                    </div>
                                </div>
                                <div class="header-actions">
                                    <div class="language-switch" aria-label="{{ $t('Pilih bahasa', 'Choose language') }}">
                                        <button
                                            type="button"
                                            class="language-chip {{ $lang === 'id' ? 'is-active' : '' }}"
                                            data-language-option="id"
                                        >
                                            ID
                                        </button>
                                        <button
                                            type="button"
                                            class="language-chip {{ $lang === 'en' ? 'is-active' : '' }}"
                                            data-language-option="en"
                                        >
                                            EN
                                        </button>
                                    </div>
                                    <a href="{{ $routeLang('auth.landing') }}" class="soft-button header-button">{{ $t('Masuk / Daftar', 'Sign In / Register') }}</a>
                                    <a href="{{ $routeLang('contact') }}" class="soft-button header-button">{{ $t('Hubungi Bantuan', 'Contact Support') }}</a>
                                    <a href="{{ $routeLang('emergency') }}" class="danger-button header-button header-button-danger">&#128680; {{ $t('Mode Darurat', 'Emergency Mode') }}</a>
                                </div>
                            </div>

                            <div class="header-nav-shell">
                                <nav aria-label="Primary" class="nav-scroll">
                                    <a href="{{ $routeLang('home') }}" class="nav-pill" data-active="{{ request()->routeIs('home') ? 'true' : 'false' }}">{{ $t('Beranda', 'Home') }}</a>
                                    <a href="{{ $routeLang('ai-chat') }}" class="nav-pill" data-active="{{ request()->routeIs('ai-chat') ? 'true' : 'false' }}">{{ $t('Tanya AI', 'Ask AI') }}</a>
                                    <a href="{{ $routeLang('action-guide') }}" class="nav-pill" data-active="{{ request()->routeIs('action-guide') ? 'true' : 'false' }}">{{ $t('Panduan', 'Guide') }}</a>
                                    <a href="{{ $routeLang('document-scan') }}" class="nav-pill" data-active="{{ request()->routeIs('document-scan') ? 'true' : 'false' }}">{{ $t('Scan Dokumen', 'Scan Document') }}</a>
                                    <a href="{{ $routeLang('emergency') }}" class="nav-pill" data-active="{{ request()->routeIs('emergency') ? 'true' : 'false' }}">{{ $t('Darurat', 'Emergency') }}</a>
                                    <a href="{{ $routeLang('contact') }}" class="nav-pill" data-active="{{ request()->routeIs('contact') ? 'true' : 'false' }}">{{ $t('Hubungi', 'Contact') }}</a>
                                    <a href="{{ $routeLang('auth.landing') }}" class="nav-pill" data-active="{{ request()->routeIs('auth.*') || request()->routeIs('login') || request()->routeIs('register') || request()->routeIs('password.*') ? 'true' : 'false' }}">{{ $t('Akun', 'Account') }}</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <main class="page-main">
                    @yield('content')
                </main>

                <footer class="mx-auto mt-6 w-full max-w-6xl px-4 pb-6 md:px-6 lg:px-0">
                    <div class="footer-panel">
                        <p class="text-[0.95rem] leading-6 text-[var(--color-muted-text)]">
                            {{ $t(
                                '3-Tap Rule: dari landing page ke solusi atau langkah nyata dalam maksimal tiga tap.',
                                '3-Tap Rule: from the landing page to a solution or real next step in three taps or less.'
                            ) }}
                        </p>
                        <p class="text-[0.95rem] font-semibold text-[var(--color-primary)]">{{ $t('Indonesia-first legal-tech', 'Indonesia-first legal-tech') }}</p>
                    </div>
                </footer>
            </div>

            @unless (request()->routeIs('emergency'))
                <a
                    href="{{ $routeLang('emergency') }}"
                    class="floating-emergency"
                    aria-label="{{ $t('Masuk ke mode darurat', 'Open emergency mode') }}"
                >
                    &#128680; {{ $t('Darurat', 'Emergency') }}
                </a>
            @endunless
        @else
            <main class="min-h-screen">
                @yield('content')
            </main>
        @endif

        <div class="language-modal" data-language-modal hidden>
            <div class="language-modal-card">
                <p class="eyebrow">Language</p>
                <h2 class="mt-3 text-[2rem] text-[var(--color-primary)]">{{ $t('Pilih bahasa', 'Choose a language') }}</h2>
                <p class="mt-3 text-[1.05rem] text-[var(--color-muted-text)]">
                    {{ $t(
                        'Pilih bahasa yang ingin dipakai sebelum mulai menggunakan aplikasi.',
                        'Choose the language you want to use before entering the app.'
                    ) }}
                </p>
                <div class="language-modal-actions mt-6">
                    <button type="button" class="primary-button" data-language-option="id">Bahasa Indonesia</button>
                    <button type="button" class="soft-button" data-language-option="en">English</button>
                </div>
            </div>
        </div>
    </body>
</html>
