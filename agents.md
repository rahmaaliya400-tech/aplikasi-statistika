# AGENTS.md — Panduan Coding Agent

## Konteks proyek
Bangun aplikasi pembelajaran Statistika SMP tentang diagram garis dan diagram lingkaran. Tujuan pembelajaran adalah mendukung *Mathematical Literacy* dengan desain yang mempertimbangkan *Cognitive Load*.

## Aturan utama
1. Baca `prd.md`, `architecture.md`, `design.md`, `api.md`, dan `task.md` sebelum mengubah kode.
2. Jangan mengarang hasil wawancara, data siswa, hasil penelitian, atau validasi instrumen.
3. Perlakukan temuan S01 sebagai temuan awal; tandai keputusan yang masih perlu dikonfirmasi.
4. Gunakan Bahasa Indonesia yang jelas dan sesuai siswa SMP.
5. Pecah penjelasan menjadi langkah kecil; hindari layar penuh teks.
6. Jangan mencampur rumus persentase dan sudut pusat tanpa label yang tegas.
7. Gunakan warna untuk membedakan kategori/data, bukan sebagai dekorasi acak. Pastikan kontras dan label tetap terbaca.
8. Three.js hanya digunakan untuk ilustrasi 3D pendukung yang benar-benar membantu konsep. Jangan menambahkan objek bergerak/dekorasi yang mengalihkan perhatian.
9. Jangan menampilkan jawaban benar sebelum siswa mencoba, kecuali pada mode pembahasan.
10. Jangan menyimpan data pribadi yang tidak diperlukan.

## Standar teknis
- Frontend menggunakan JavaScript dan React.
- Backend menggunakan Python dan FastAPI.
- Akses database melalui lapisan layanan yang terdokumentasi.
- Validasi input pada frontend dan backend.
- Tangani kondisi loading, error, koneksi terputus, dan data kosong.
- Jangan menaruh API key, password, atau secret di source code.
- Gunakan variabel lingkungan dan sediakan `.env.example` tanpa nilai rahasia.
- Buat komponen UI kecil dan dapat digunakan ulang.
- Beri nama variabel/fungsi yang mudah dipahami.

## Standar kualitas
- Jalankan formatter/linter/test yang tersedia sebelum menyatakan tugas selesai.
- Tambahkan pengujian untuk rumus dan perhitungan penting.
- Periksa bahwa total sudut diagram lingkaran adalah 360° (dengan toleransi pembulatan bila diperlukan).
- Periksa bahwa persentase seluruh kategori berjumlah 100% (dengan toleransi pembulatan).
- Pastikan diagram garis mempertahankan urutan kategori waktu.
- Laporkan file yang diubah, pengujian yang dijalankan, hasilnya, dan pekerjaan yang belum selesai.

## Alur kerja agent
1. Ringkas tujuan perubahan.
2. Periksa file terkait.
3. Buat perubahan sekecil mungkin.
4. Jalankan pengujian.
5. Laporkan hasil dan risiko.
6. Jangan menghapus atau mengganti data pengguna tanpa persetujuan.
