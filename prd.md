# Product Requirements Document (PRD)
## Aplikasi Pembelajaran Statistika SMP

**Pemilik proyek:** Rahma Aliya  
**Kelas:** 3F  
**NIM:** 2225250103  
**Versi:** 0.1 (rancangan awal)  
**Status:** Draft — menunggu konfirmasi wawancara tambahan dan arahan dosen

## 1. Ringkasan Produk
Aplikasi ini dirancang sebagai media belajar untuk membantu siswa SMP mempelajari penyajian data, khususnya diagram garis dan diagram lingkaran. Aplikasi menargetkan peningkatan *mathematical literacy* melalui kegiatan memahami konteks, merumuskan situasi secara matematis, menggunakan konsep/prosedur, serta menafsirkan dan mengevaluasi hasil.

Desain pembelajaran mempertimbangkan *Cognitive Load*: informasi disajikan bertahap, instruksi ringkas, visual relevan dan mudah dibedakan, serta siswa dapat mengatur tempo belajar.

## 2. Dasar Kebutuhan
Berdasarkan dokumen wawancara yang tersedia, baru terdapat satu informan (S01). Temuan awal:
- Siswa masih dapat membaca diagram, tetapi lupa menghitung persentase dan sudut pusat.
- Rumus persentase dan sudut pusat terkadang tertukar.
- Soal cerita yang panjang dan meminta beberapa hal sekaligus membingungkan.
- Diagram monokrom menyulitkan pembedaan data; dekorasi yang terlalu ramai mengganggu fokus.
- Penjelasan yang cepat membuat siswa tertinggal.
- Siswa terbantu oleh langkah berurutan: membaca soal, mencatat informasi, menentukan data/titik, lalu membuat diagram.
- Siswa menginginkan penjelasan ulang bertahap, kontrol tempo, bantuan hitung, dan visual berwarna yang sederhana.

**Batasan bukti:** temuan ini merupakan kebutuhan awal dari S01, bukan kesimpulan yang mewakili seluruh siswa SMP. Tambahkan wawancara informan kedua sesuai pedoman sebelum memfinalkan kebutuhan.

## 3. Tujuan dan Ukuran Keberhasilan
### Tujuan
1. Membantu siswa membedakan fungsi diagram garis dan diagram lingkaran.
2. Membantu siswa memilih dan menggunakan rumus yang sesuai.
3. Membantu siswa menyelesaikan masalah penyajian data secara bertahap.
4. Melatih empat indikator *mathematical literacy* yang ditetapkan dalam kisi-kisi.

### Indikator produk yang dapat diuji
- Siswa dapat membuka materi dan berpindah antar langkah tanpa kehilangan konteks.
- Siswa dapat memilih mode persentase atau sudut dengan benar pada latihan.
- Diagram menampilkan label, data, dan warna yang dapat dibedakan.
- Sistem menyimpan jawaban dan skor latihan berdasarkan kode siswa.
- Hasil latihan dapat direkap untuk evaluasi.

Target numerik peningkatan hasil belajar belum ditetapkan; tentukan setelah desain penelitian dan instrumen disepakati dengan dosen.

## 4. Pengguna
- **Pengguna utama:** siswa SMP, khususnya kelas VII yang mempelajari penyajian data.
- **Pengelola/pengembang:** mahasiswa pengembang.
- **Guru/dosen:** pihak yang meninjau kesesuaian materi dan instrumen.

## 5. Ruang Lingkup
### Termasuk dalam versi awal (MVP)
- Login menggunakan kode siswa.
- Beranda dan petunjuk penggunaan.
- Materi diagram garis.
- Materi diagram lingkaran.
- Contoh penyelesaian bertahap.
- Visualisasi diagram 2D berwarna.
- Latihan kontekstual berdasarkan empat indikator literasi matematis.
- Umpan balik dan petunjuk bertahap.
- Penyimpanan progres dan hasil latihan.

### Di luar ruang lingkup awal
- Chatbot AI yang membutuhkan layanan/model berbayar.
- Papan peringkat publik.
- Fitur sosial/percakapan antarsiswa.
- Pengumpulan data pribadi yang tidak diperlukan.
- Klaim aplikasi telah terbukti meningkatkan literasi sebelum diuji.

## 6. Prinsip Cognitive Load
- **Intrinsic load:** pecah proses kompleks menjadi langkah kecil; aktifkan prasyarat hitung sederhana bila diperlukan.
- **Extraneous load:** gunakan kalimat pendek, tata letak konsisten, warna bermakna, dan hindari dekorasi yang tidak relevan.
- **Germane load:** minta siswa menjelaskan alasan, membandingkan diagram, memeriksa hasil, dan menerapkan konsep pada konteks baru.

## 7. Fitur dan Kriteria Penerimaan
| Fitur | Kriteria penerimaan |
|---|---|
| Login kode siswa | Kode valid membawa siswa ke beranda; kode tidak valid menampilkan pesan yang jelas. |
| Materi bertahap | Satu layar fokus pada satu tujuan/langkah; tersedia navigasi kembali/lanjut. |
| Mode rumus | Persentase dan sudut ditampilkan terpisah dengan label dan contoh yang tepat. |
| Diagram | Judul, label, skala/keterangan, dan warna terbaca. |
| Latihan | Soal terkait konteks nyata dan indikator literasi yang jelas. |
| Umpan balik | Menjelaskan bagian yang benar/salah dan memberi petunjuk tanpa langsung membocorkan semua jawaban. |
| Rekap | Skor dan waktu/kemajuan latihan tersimpan untuk kode siswa. |

## 8. Bahan Evaluasi
Gunakan kisi-kisi Mathematical Literacy yang disediakan sebagai acuan. Dokumen tersebut memuat empat indikator dan total skor maksimum 24 untuk empat soal. Pastikan dosen menyetujui penggunaan soal, rubrik, serta prosedur pretest/posttest sebelum pengambilan data.

## 9. Asumsi dan Risiko
- Wawancara kedua belum tersedia.
- Materi aplikasi ditetapkan dari dokumen wawancara: Statistika—diagram garis dan diagram lingkaran. Jika instruksi lisan dosen tentang “bagian bentuk” memiliki arti berbeda, konfirmasikan sebelum implementasi.
- Supabase digunakan untuk database dan layanan backend terkait. Hosting frontend/aplikasi dan hosting API Python perlu diputuskan terpisah.
- Koneksi internet diperlukan untuk sinkronisasi; pertimbangkan pesan kondisi offline.

## 10. Pertanyaan Terbuka
1. Apakah sasaran kelas VII dan materi statistika sudah final menurut Pak Aan?
2. Apakah aplikasi harus berupa APK Android, web responsif, atau keduanya?
3. Apakah guru memerlukan halaman rekap hasil siswa?
4. Apakah kode siswa disediakan dosen/guru atau dibuat oleh aplikasi?
5. Apakah empat soal pada kisi-kisi digunakan sebagai instrumen penelitian atau hanya contoh format?
