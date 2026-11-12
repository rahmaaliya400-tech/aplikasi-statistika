# Design — Pedoman Desain Antarmuka

## 1. Prinsip Desain
- Sederhana, konsisten, dan nyaman pada layar Android.
- Satu layar memiliki satu fokus belajar utama.
- Gunakan bahasa Indonesia yang singkat dan sesuai siswa SMP.
- Hindari dekorasi kartun berlebihan.
- Warna digunakan untuk membedakan data/kategori secara konsisten.
- Informasi penting tidak hanya dibedakan dengan warna; sertakan label atau pola agar tetap terbaca.

## 2. Struktur Navigasi
1. Login kode siswa.
2. Beranda.
3. Pilih materi.
4. Tujuan belajar.
5. Materi langkah demi langkah.
6. Contoh terbimbing.
7. Latihan.
8. Hasil dan refleksi.

## 3. Rancangan Layar
### Login
- Judul aplikasi.
- Kolom kode siswa.
- Tombol masuk.
- Pesan kesalahan yang jelas tanpa mengungkap informasi akun lain.

### Beranda
- Sapaan sederhana.
- Kartu Diagram Garis dan Diagram Lingkaran.
- Indikator progres belajar.

### Materi
- Judul dan tujuan kecil.
- Penjelasan ringkas.
- Diagram/ilustrasi dekat dengan penjelasannya.
- Tombol Kembali dan Lanjut.
- Kontrol ulangi penjelasan bila tersedia.

### Mode Rumus Diagram Lingkaran
Pisahkan dua tujuan:
- **Mode Persentase:** persentase = (bagian / keseluruhan) × 100%.
- **Mode Sudut:** sudut pusat = (bagian / keseluruhan) × 360°.

Tampilkan label mode, satu contoh, dan satuan hasil secara eksplisit. Jangan menampilkan kedua rumus sebagai satu blok yang padat.

### Latihan
- Tampilkan konteks soal.
- Bantu siswa menandai informasi diketahui dan ditanyakan.
- Sajikan langkah secara bertahap.
- Berikan petunjuk setelah siswa mencoba.
- Minta siswa menjelaskan alasan atau menafsirkan hasil.

### Hasil
- Tampilkan skor per indikator dan skor total.
- Tunjukkan bagian yang sudah dikuasai dan yang perlu dipelajari kembali.
- Hindari label yang mempermalukan atau membandingkan siswa.

## 4. Warna dan Tipografi
- Gunakan latar netral dan teks dengan kontras tinggi.
- Pilih palet kategori yang konsisten dan ramah aksesibilitas.
- Hindari terlalu banyak warna aksen pada satu layar.
- Gunakan ukuran huruf yang nyaman dibaca pada ponsel.
- Jangan mengandalkan warna saja untuk menjelaskan data; tambahkan legenda/label.

## 5. Cognitive Load dalam UI
- Kurangi teks yang tidak relevan.
- Pecah soal panjang menjadi tahapan tanpa mengubah informasi matematisnya.
- Letakkan label dekat dengan diagram yang dijelaskan.
- Berikan kontrol tempo dan kesempatan mengulang.
- Gunakan petunjuk bertingkat: petunjuk pertama mengarahkan perhatian, petunjuk berikutnya memberi strategi, pembahasan lengkap muncul setelah usaha siswa.

## 6. Three.js
Three.js bersifat opsional dan hanya digunakan jika menambah pemahaman. Untuk materi penyajian data, diagram 2D harus tetap menjadi visual utama. Ilustrasi 3D tidak boleh memperlambat perangkat atau mengalihkan fokus dari data.
