# Aplikasi Pembelajaran Statistika SMP

Aplikasi pembelajaran penyajian data untuk siswa SMP. Materi awal berfokus pada diagram garis dan diagram lingkaran, dengan desain bertahap untuk mendukung *Cognitive Load* dan latihan *Mathematical Literacy*.

## Status
Rancangan awal / belum siap digunakan untuk penelitian. Kebutuhan masih perlu dikonfirmasi melalui wawancara tambahan dan arahan dosen.

## Fitur yang direncanakan
- Login menggunakan kode siswa.
- Materi diagram garis dan diagram lingkaran.
- Penjelasan langkah demi langkah.
- Visualisasi diagram berwarna.
- Latihan kontekstual dan umpan balik.
- Penyimpanan progres dan skor.
- Ilustrasi 3D tambahan menggunakan Three.js bila relevan.

## Teknologi yang direncanakan
- Frontend: JavaScript dengan React dan Vite.
- Kemasan Android (bila diwajibkan): Capacitor.
- Backend API: Python dengan FastAPI.
- Database dan layanan data: Supabase.
- Visualisasi diagram 2D: pustaka grafik JavaScript (pilih saat implementasi).
- Ilustrasi 3D tambahan: Three.js.

## Struktur folder (rencana)
```text
statistika-smp/
├── frontend/          # React, JavaScript, UI siswa
├── backend/           # Python, FastAPI
├── docs/              # Dokumen rancangan proyek
├── README.md
└── .gitignore
```

## Persiapan pengembangan
Pastikan Python, Node.js, dan npm telah terpasang.

Periksa versi:
```bash
python --version
node --version
npm --version
```

Perintah menjalankan proyek akan ditambahkan setelah struktur kode dibuat.

## Dokumen proyek
- `prd.md` — kebutuhan produk.
- `agents.md` — aturan kerja AI/coding agent.
- `architecture.md` — rancangan arsitektur.
- `task.md` — daftar pekerjaan.
- `design.md` — pedoman antarmuka.
- `api.md` — rancangan endpoint API.

## Catatan
Jangan memasukkan nama lengkap siswa, rekaman, atau informasi identitas informan ke repositori publik. Gunakan kode anonim seperti S01. Simpan kunci rahasia di file `.env` lokal dan jangan pernah mengunggahnya ke Git.
