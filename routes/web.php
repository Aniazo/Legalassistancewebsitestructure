<?php

use Illuminate\Support\Facades\Route;

// React SPA Features (Connected dari Beranda Blade)
Route::get('/scan-dokumen', function () { return view('app'); })->name('document-scan');
Route::get('/tau-hukum', function () { return view('app'); })->name('action-guide');
Route::get('/suara-keadilan', function () { return view('app'); })->name('ai-chat');
Route::get('/contact', function () { return view('app'); })->name('contact');
Route::get('/auth', function () { return view('app'); })->name('auth.landing');
Route::get('/emergency', function () { return view('app'); })->name('emergency');
Route::get('/safe-exit', function () { return view('app'); })->name('safe-exit');

// Landing Page (Original Blade) - Ditempatkan di bawah agar tidak menabrak rute di atas
Route::get('/{lang?}', function () {
    return view('pages.home');
})->name('home')->where('lang', 'id|en');

// Catch-all for SPA deep links
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
