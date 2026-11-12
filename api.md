# API — Rancangan Antarmuka Backend

**Backend rencana:** Python + FastAPI  
**Base URL lokal:** `http://localhost:8000/api/v1`  
**Status:** rancangan awal; kontrak perlu disesuaikan saat implementasi.

## 1. Prinsip
- Semua endpoint produksi menggunakan HTTPS.
- Format data JSON.
- Validasi dilakukan di server.
- Endpoint siswa memerlukan token sesi kecuali endpoint login.
- Jangan mengirim secret Supabase ke frontend.
- Respons error menggunakan kode HTTP yang sesuai dan pesan ramah.

## 2. Endpoint Rencana

### POST `/auth/student-code`
Memvalidasi kode siswa.

Request:
```json
{
  "student_code": "KODE_SISWA"
}
```

Response sukses:
```json
{
  "access_token": "SESSION_TOKEN",
  "token_type": "bearer",
  "expires_in": 3600
}
```

Catatan: contoh token di atas hanya placeholder, bukan token nyata.

### GET `/lessons`
Mengambil daftar materi.

Response:
```json
{
  "items": [
    {
      "id": "diagram-garis",
      "title": "Diagram Garis",
      "sequence": 1
    },
    {
      "id": "diagram-lingkaran",
      "title": "Diagram Lingkaran",
      "sequence": 2
    }
  ]
}
```

### GET `/lessons/{lesson_id}`
Mengambil isi materi dan langkah pembelajaran.

### GET `/questions?lesson_id={lesson_id}`
Mengambil soal latihan berdasarkan materi.

### POST `/attempts`
Mengirim jawaban siswa untuk dinilai.

Request:
```json
{
  "question_id": "question-001",
  "answer": {
    "steps": ["informasi-diketahui", "model-matematika"],
    "final_answer": "Contoh jawaban"
  }
}
```

Response:
```json
{
  "attempt_id": "attempt-id",
  "score": 4,
  "max_score": 6,
  "feedback": [
    "Identifikasi informasi sudah tepat.",
    "Periksa kembali alasan pemilihan diagram."
  ]
}
```

### GET `/students/me/progress`
Mengambil progres siswa yang sedang login.

### GET `/students/me/results`
Mengambil riwayat hasil latihan siswa yang sedang login.

## 3. Bentuk Error
```json
{
  "error": {
    "code": "INVALID_STUDENT_CODE",
    "message": "Kode siswa tidak ditemukan. Periksa kembali kode yang dimasukkan."
  }
}
```

## 4. Keamanan
- Batasi percobaan login dan cegah tebakan kode secara berulang.
- Simpan kode siswa dalam bentuk hash bila rancangan autentikasi memungkinkan.
- Token memiliki masa berlaku.
- Backend memeriksa kepemilikan data pada setiap permintaan.
- Terapkan Row Level Security (RLS) pada Supabase bila akses dilakukan dari klien.
- Jangan pernah menaruh `service_role` key di frontend.
- Catat data minimum yang diperlukan untuk evaluasi.

## 5. Catatan Implementasi
Endpoint di atas belum dibuat dan belum diuji. Skema final perlu diselaraskan dengan tabel Supabase, rubrik penskoran yang disetujui dosen, dan kebijakan privasi sekolah.
