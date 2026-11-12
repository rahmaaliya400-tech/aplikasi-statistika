# Architecture — Arsitektur Aplikasi

## 1. Gambaran Umum
Aplikasi direncanakan sebagai frontend JavaScript/React yang berkomunikasi dengan backend Python/FastAPI. Supabase menjadi layanan database dan dapat mendukung autentikasi/penyimpanan. Jika harus menjadi APK Android, frontend web dapat dikemas menggunakan Capacitor setelah versi web stabil.

## 2. Diagram Komponen
```text
Siswa
  |
  v
Aplikasi React (JavaScript)
  |-- Materi dan navigasi bertahap
  |-- Diagram 2D
  |-- Ilustrasi 3D tambahan (Three.js)
  |-- Latihan dan umpan balik
  |
  v
Python FastAPI
  |-- Validasi kode siswa
  |-- Logika latihan dan penskoran
  |-- Penyimpanan progres
  |
  v
Supabase
  |-- PostgreSQL (data materi, akun/kode, hasil)
  |-- Kebijakan akses (RLS bila akses langsung digunakan)
  |-- Storage (opsional)
```

## 3. Pembagian Tanggung Jawab
### Frontend
- Menampilkan materi dalam urutan yang terstruktur.
- Mengelola navigasi, input jawaban, dan umpan balik.
- Menampilkan diagram garis/lingkaran.
- Menyediakan kontrol Next/Back dan bantuan bertahap.
- Menyesuaikan tampilan untuk layar ponsel.

### Backend
- Memvalidasi kode siswa.
- Menyediakan materi dan soal.
- Memeriksa jawaban dan menghitung skor sesuai rubrik.
- Menyimpan percobaan dan progres.
- Tidak mempercayai skor yang dikirim mentah oleh klien tanpa validasi.

### Supabase
- Menyimpan data terstruktur.
- Mengatur akses data.
- Menyediakan layanan database dan, bila diperlukan, autentikasi.
- Kunci `service_role` hanya boleh berada di server, tidak pernah di frontend.

## 4. Model Data Awal
| Tabel | Kolom inti (rencana) |
|---|---|
| students | id, student_code_hash, display_name_optional, created_at |
| lessons | id, title, topic, sequence, content_json |
| questions | id, lesson_id, indicator, prompt, rubric_json |
| attempts | id, student_id, question_id, answer_json, score, created_at |
| progress | id, student_id, lesson_id, status, updated_at |

Simpan kode siswa secara aman; pertimbangkan hash kode dan pembatasan percobaan. Hindari menyimpan nama lengkap jika tidak diperlukan. Rancangan final perlu mengikuti kebijakan sekolah/dosen dan persetujuan yang sesuai.

## 5. Alur Login
1. Siswa memasukkan kode.
2. Frontend mengirim kode melalui HTTPS ke backend.
3. Backend memvalidasi kode.
4. Backend mengembalikan sesi/token dengan masa berlaku.
5. Frontend menggunakan token untuk permintaan berikutnya.
6. Backend memastikan siswa hanya dapat mengakses progres miliknya.

## 6. Hosting dan Lingkungan
- Supabase: database dan layanan data.
- Backend FastAPI: dapat diuji lokal terlebih dahulu; layanan hosting gratis sementara dapat dipilih setelah memeriksa batas dan kebijakan terbaru.
- Frontend: dapat dihosting terpisah atau dikemas menjadi APK.
- Jangan menganggap Supabase sebagai hosting otomatis untuk seluruh frontend React dan server FastAPI; tiap komponen perlu ditetapkan lokasi deploy-nya.

## 7. Keamanan dan Privasi
- HTTPS untuk komunikasi online.
- Validasi input di server.
- Hak akses minimum.
- Rahasia hanya di environment variables.
- Gunakan kode anonim untuk data wawancara.
- Jangan memasukkan transkrip atau identitas siswa ke repositori.
- Terapkan kebijakan retensi dan penghapusan data sesuai arahan dosen/sekolah.

## 8. Catatan Three.js
Three.js merupakan pelengkap, bukan kebutuhan utama materi statistika. Prioritaskan diagram 2D yang jelas. Jika digunakan, contoh yang masuk akal adalah visual 3D sederhana untuk menunjukkan tinggi batang/data secara spasial, dengan kontrol yang tidak mengganggu dan alternatif diagram 2D yang tetap tersedia.
