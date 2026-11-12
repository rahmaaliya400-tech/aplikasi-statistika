
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function LatihanSoal({ identitas }) {
  const soal = [
    {
      indikator: "Mathematical Reasoning",
      pertanyaan: "Koperasi sekolah mencatat penjualan susu selama lima hari: Senin 20 kotak, Selasa 28 kotak, Rabu 25 kotak, Kamis 35 kotak, dan Jumat 42 kotak. Diagram yang paling tepat untuk menunjukkan perubahan penjualan dari hari ke hari adalah ...",
      pilihan: [
        "Diagram lingkaran",
        "Diagram garis",
        "Diagram gambar",
        "Diagram tabel"
      ],
      jawaban: 1,
      pembahasan: "Diagram garis tepat digunakan untuk menunjukkan perubahan data dari waktu ke waktu."
    },
    {
      indikator: "Formulating Situations Mathematically",
      pertanyaan: "Sebanyak 40 siswa mengikuti ekstrakurikuler. Pramuka dipilih 16 siswa. Rumus untuk menentukan sudut bagian Pramuka pada diagram lingkaran adalah ...",
      pilihan: [
        "(16 / 40) × 100°",
        "(40 / 16) × 360°",
        "(16 / 40) × 360°",
        "(16 + 40) × 360°"
      ],
      jawaban: 2,
      pembahasan: "Sudut diagram lingkaran dihitung dengan jumlah bagian dibagi jumlah seluruh data, kemudian dikalikan 360°."
    },
    {
      indikator: "Employing Mathematical Concepts, Facts, and Procedures",
      pertanyaan: "Jumlah pengunjung perpustakaan selama lima hari adalah 20, 25, 30, 15, dan 10 siswa. Berapakah sudut untuk hari Rabu pada diagram lingkaran?",
      pilihan: [
        "72°",
        "90°",
        "108°",
        "120°"
      ],
      jawaban: 2,
      pembahasan: "Jumlah seluruh data = 100. Sudut hari Rabu = (30/100) × 360° = 108°."
    },
    {
      indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
      pertanyaan: "Jumlah pengunjung taman bacaan selama empat minggu adalah 40, 55, 70, dan 50 orang. Seorang siswa menyatakan bahwa pengunjung selalu meningkat. Kesimpulan yang tepat adalah ...",
      pilihan: [
        "Benar, karena minggu keempat lebih besar dari minggu pertama",
        "Salah, karena pengunjung menurun pada minggu keempat",
        "Benar, karena jumlah pengunjung selalu sama",
        "Salah, karena pengunjung tidak pernah meningkat"
      ],
      jawaban: 1,
      pembahasan: "Pengunjung meningkat dari 40 menjadi 55 dan 70, tetapi turun menjadi 50 pada minggu keempat. Jadi, tidak selalu meningkat."
    },
    {
      indikator: "Mathematical Reasoning",
      pertanyaan: "Nilai ulangan matematika lima siswa adalah 70, 80, 80, 90, dan 100. Nilai yang paling sering muncul adalah ...",
      pilihan: [
        "70",
        "80",
        "90",
        "100"
      ],
      jawaban: 1,
      pembahasan: "Modus adalah nilai yang paling sering muncul. Angka 80 muncul dua kali sehingga modusnya adalah 80."
    },
    {
      indikator: "Formulating Situations Mathematically",
      pertanyaan: "Data jumlah buku yang dibaca lima siswa adalah 2, 3, 4, 5, dan 6 buku. Operasi yang digunakan untuk menentukan rata-rata adalah ...",
      pilihan: [
        "Menjumlahkan seluruh data lalu membaginya dengan banyak data",
        "Mengalikan seluruh data",
        "Mengurangi data terbesar dengan data terkecil",
        "Memilih angka yang paling sering muncul"
      ],
      jawaban: 0,
      pembahasan: "Rata-rata diperoleh dengan menjumlahkan seluruh nilai, kemudian membaginya dengan banyak data."
    },
    {
      indikator: "Employing Mathematical Concepts, Facts, and Procedures",
      pertanyaan: "Data tinggi tanaman dalam sentimeter adalah 10, 12, 14, 16, dan 18. Berapakah rata-ratanya?",
      pilihan: [
        "12 cm",
        "13 cm",
        "14 cm",
        "15 cm"
      ],
      jawaban: 2,
      pembahasan: "Rata-rata = (10 + 12 + 14 + 16 + 18) / 5 = 70 / 5 = 14 cm."
    },
    {
      indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
      pertanyaan: "Data jumlah pengunjung kantin adalah 12, 15, 18, 20, dan 25 siswa. Kesimpulan yang tepat adalah ...",
      pilihan: [
        "Jumlah pengunjung selalu menurun",
        "Jumlah pengunjung selalu meningkat",
        "Jumlah pengunjung selalu tetap",
        "Jumlah pengunjung tidak memiliki pola"
      ],
      jawaban: 1,
      pembahasan: "Data meningkat secara berurutan dari 12, 15, 18, 20 hingga 25 siswa."
    },
    {
      indikator: "Mathematical Reasoning",
      pertanyaan: "Data nilai siswa adalah 60, 70, 80, 80, dan 90. Jika seorang siswa mengatakan bahwa modus data tersebut adalah 70, maka pernyataan tersebut ...",
      pilihan: [
        "Benar, karena 70 berada di tengah",
        "Salah, karena 80 muncul paling sering",
        "Benar, karena nilai 70 muncul dua kali",
        "Salah, karena tidak ada modus"
      ],
      jawaban: 1,
      pembahasan: "Modusnya adalah 80 karena nilai tersebut muncul dua kali, sedangkan nilai lainnya hanya muncul sekali."
    },
    {
      indikator: "Formulating Situations Mathematically",
      pertanyaan: "Dalam sebuah kelas terdapat 30 siswa. Sebanyak 12 siswa menyukai sepak bola. Untuk menentukan persentase siswa yang menyukai sepak bola, rumus yang tepat adalah ...",
      pilihan: [
        "(12 / 30) × 100%",
        "(30 / 12) × 100%",
        "(12 + 30) × 100%",
        "(30 - 12) × 100%"
      ],
      jawaban: 0,
      pembahasan: "Persentase = jumlah bagian dibagi jumlah seluruh data, kemudian dikalikan 100%. Hasilnya 40%."
    },
    {
      indikator: "Employing Mathematical Concepts, Facts, and Procedures",
      pertanyaan: "Data penjualan roti selama empat hari adalah 10, 15, 20, dan 15 buah. Berapakah median data tersebut?",
      pilihan: [
        "10",
        "12,5",
        "15",
        "20"
      ],
      jawaban: 2,
      pembahasan: "Urutan data adalah 10, 15, 15, 20. Median adalah rata-rata dua nilai tengah, yaitu (15 + 15) / 2 = 15."
    },
    {
      indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
      pertanyaan: "Diagram lingkaran menunjukkan bahwa 50% siswa menyukai olahraga, 30% menyukai musik, dan 20% menyukai membaca. Jika jumlah siswa 40 orang, kesimpulan yang benar adalah ...",
      pilihan: [
        "Siswa yang menyukai musik berjumlah 20 orang",
        "Siswa yang menyukai membaca berjumlah 8 orang",
        "Siswa yang menyukai olahraga berjumlah 10 orang",
        "Semua pilihan memiliki jumlah sama"
      ],
      jawaban: 1,
      pembahasan: "Jumlah siswa yang menyukai membaca = 20% × 40 = 8 siswa."
    },
    {
      indikator: "Mathematical Reasoning",
      pertanyaan: "Data jumlah sampah yang dikumpulkan selama empat hari adalah 5 kg, 8 kg, 6 kg, dan 10 kg. Hari dengan jumlah sampah terbanyak adalah ...",
      pilihan: [
        "Hari pertama",
        "Hari kedua",
        "Hari ketiga",
        "Hari keempat"
      ],
      jawaban: 3,
      pembahasan: "Jumlah terbesar adalah 10 kg yang diperoleh pada hari keempat."
    },
    {
      indikator: "Employing Mathematical Concepts, Facts, and Procedures",
      pertanyaan: "Jumlah siswa yang mengikuti kegiatan olahraga adalah 20 orang dari total 50 siswa. Berapakah besar sudut bagian olahraga pada diagram lingkaran?",
      pilihan: [
        "72°",
        "100°",
        "144°",
        "180°"
      ],
      jawaban: 2,
      pembahasan: "Sudut = (20 / 50) × 360° = 144°."
    },
    {
      indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
      pertanyaan: "Rata-rata nilai lima siswa adalah 80. Empat siswa memperoleh nilai 70, 80, 85, dan 90. Nilai siswa kelima adalah ...",
      pilihan: [
        "70",
        "75",
        "80",
        "85"
      ],
      jawaban: 1,
      pembahasan: "Jumlah seluruh nilai = 5 × 80 = 400. Nilai kelima = 400 - (70 + 80 + 85 + 90) = 75. Jadi, pilihan yang benar adalah B."
    }
  ];

  const [nomor, setNomor] = useState(0);
  const [jawabanSiswa, setJawabanSiswa] = useState({});
  const [selesai, setSelesai] = useState(false);
  const [statusSimpan, setStatusSimpan] = useState("");

async function selesaikanLatihan() {
  try {
    setStatusSimpan("menyimpan");

    await addDoc(collection(db, "nilai_siswa"), {
      nama: identitas.nama,
      kelas: identitas.kelas,
      nilai: nilai,
      jumlahBenar: jumlahBenar,
      jumlahSalah: jumlahSalah,
      totalSoal: soal.length,
      createdAt: serverTimestamp()
    });

    setStatusSimpan("berhasil");
    setSelesai(true);
  } catch (error) {
    console.error("Gagal menyimpan nilai:", error);
    setStatusSimpan("gagal");
    alert("Nilai gagal disimpan. Silakan coba lagi.");
  }
}

  const jumlahBenar = soal.filter(
    (item, index) => jawabanSiswa[index] === item.jawaban
  ).length;

  const jumlahSalah = soal.length - jumlahBenar;
  const nilai = jumlahBenar * 6;
  const soalAktif = soal[nomor];

  function ulangiLatihan() {
    setNomor(0);
    setJawabanSiswa({});
    setSelesai(false);
  }

  return (
    <div className="container">
      <section className="welcome">
        <h2>📝 Latihan Mathematical Literacy</h2>
        <p>Pilihlah satu jawaban yang paling tepat untuk setiap soal.</p>
        <p>Jumlah soal: 15 | Skor setiap soal: 6 | Nilai maksimal: 90</p>
      </section>

      {!selesai ? (
        <section className="welcome">
          <p>Soal {nomor + 1} dari {soal.length}</p>

          <div style={{
            backgroundColor: "#e5e7eb",
            height: "8px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}>
            <div style={{
              width: `${((nomor + 1) / soal.length) * 100}%`,
              height: "8px",
              backgroundColor: "#2563eb",
              borderRadius: "10px"
            }} />
          </div>

          <h3>{soalAktif.indikator}</h3>
          <p>{soalAktif.pertanyaan}</p>

          {soalAktif.pilihan.map((pilihan, index) => (
            <label
              key={index}
              style={{
                display: "block",
                padding: "12px",
                marginBottom: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  jawabanSiswa[nomor] === index ? "#dbeafe" : "white"
              }}
            >
              <input
                type="radio"
                name={`soal-${nomor}`}
                checked={jawabanSiswa[nomor] === index}
                onChange={() =>
                  setJawabanSiswa({
                    ...jawabanSiswa,
                    [nomor]: index
                  })
                }
              />
              {" "}
              {String.fromCharCode(65 + index)}. {pilihan}
            </label>
          ))}

          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
          }}>
            {nomor > 0 && (
              <button onClick={() => setNomor(nomor - 1)}>
                Sebelumnya
              </button>
            )}

            {nomor < soal.length - 1 ? (
              <button
                disabled={jawabanSiswa[nomor] === undefined}
                onClick={() => setNomor(nomor + 1)}
              >
                Berikutnya
              </button>
            ) : (
              <button
                disabled={jawabanSiswa[nomor] === undefined}
                onClick={selesaikanLatihan}
              >
                Selesai
              </button>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="welcome">
            <h2>🎉 Latihan Selesai!</h2>
            <h3>Hasil Pengerjaan Kamu</h3>

            <h2 style={{ color: "#2563eb" }}>
              Nilai: {nilai} / 90
            </h2>

            <p>Jawaban benar: {jumlahBenar} soal</p>
            <p>Jawaban salah: {jumlahSalah} soal</p>
            <p>
              Persentase benar: {((jumlahBenar / soal.length) * 100).toFixed(1)}%
            </p>

            <h3>
              {jumlahBenar >= 12
                ? "Hebat! Pertahankan hasil belajarmu! 🌟"
                : "Tetap semangat! Pelajari kembali pembahasannya, ya! 💪"}
            </h3>
          </section>

          <section className="welcome">
            <h3>📋 Hasil dan Pembahasan Setiap Soal</h3>

            {soal.map((item, index) => {
              const pilihanSiswa = jawabanSiswa[index];
              const benar = pilihanSiswa === item.jawaban;

              return (
                <div
                  key={index}
                  style={{
                    padding: "15px",
                    marginBottom: "15px",
                    border: `2px solid ${benar ? "#16a34a" : "#dc2626"}`,
                    borderRadius: "10px",
                    backgroundColor: benar ? "#f0fdf4" : "#fef2f2"
                  }}
                >
                  <h4>Soal {index + 1}</h4>
                  <p><strong>{item.indikator}</strong></p>
                  <p>{item.pertanyaan}</p>

                  <p>
                    <strong>Status: </strong>
                    <span style={{
                      color: benar ? "#15803d" : "#dc2626",
                      fontWeight: "bold"
                    }}>
                      {benar ? "✓ BENAR" : "✗ SALAH"}
                    </span>
                  </p>

                  <p>
                    Jawaban kamu: {String.fromCharCode(65 + pilihanSiswa)}.{" "}
                    {item.pilihan[pilihanSiswa]}
                  </p>

                  <p>
                    Kunci jawaban: {String.fromCharCode(65 + item.jawaban)}.{" "}
                    {item.pilihan[item.jawaban]}
                  </p>

                  <p>
                    <strong>Skor: {benar ? 6 : 0} / 6</strong>
                  </p>

                  <p>
                    <strong>Pembahasan:</strong> {item.pembahasan}
                  </p>
                </div>
              );
            })}
          </section>

          <section className="welcome">
            <button onClick={ulangiLatihan}>
              🔄 Ulangi Latihan
            </button>
          </section>
        </>
      )}
    </div>
  );
}

export default LatihanSoal;
