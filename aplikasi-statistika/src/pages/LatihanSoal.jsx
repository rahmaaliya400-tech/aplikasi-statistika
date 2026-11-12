
import { useState } from "react";

function LatihanSoal() {
  const soal = [
    {
      indikator: "Mathematical Reasoning",
      pertanyaan:
        "Koperasi sekolah mencatat penjualan susu selama lima hari: Senin 20 kotak, Selasa 28 kotak, Rabu 25 kotak, Kamis 35 kotak, dan Jumat 42 kotak. Pengurus ingin mengetahui perkembangan penjualan dari hari ke hari. Diagram yang paling tepat digunakan adalah ...",
      pilihan: [
        "Diagram lingkaran, karena menunjukkan bagian dari keseluruhan",
        "Diagram garis, karena menunjukkan perubahan data dari waktu ke waktu",
        "Diagram lingkaran, karena menunjukkan kenaikan dan penurunan",
        "Diagram batang, karena selalu menunjukkan perubahan waktu"
      ],
      jawaban: 1,
      pembahasan:
        "Diagram garis paling tepat karena memperlihatkan perubahan penjualan dari hari ke hari, termasuk kenaikan dan penurunan."
    },
    {
      indikator: "Formulating Situations Mathematically",
      pertanyaan:
        "Sebanyak 40 siswa mengikuti ekstrakurikuler. Pramuka dipilih 16 siswa, PMR 10 siswa, Paskibra 8 siswa, dan KIR 6 siswa. Rumus untuk menentukan sudut bagian Pramuka pada diagram lingkaran adalah ...",
      pilihan: [
        "(16 / 40) × 100°",
        "(40 / 16) × 360°",
        "(16 / 40) × 360°",
        "(16 + 40) × 360°"
      ],
      jawaban: 2,
      pembahasan:
        "Rumus sudut diagram lingkaran adalah jumlah bagian dibagi jumlah seluruh data, kemudian dikalikan 360°. Hasilnya (16 / 40) × 360° = 144°."
    },
    {
      indikator: "Employing Mathematical Concepts, Facts, and Procedures",
      pertanyaan:
        "Jumlah pengunjung perpustakaan selama lima hari adalah Senin 20 siswa, Selasa 25 siswa, Rabu 30 siswa, Kamis 15 siswa, dan Jumat 10 siswa. Berapakah besar sudut untuk hari Rabu pada diagram lingkaran?",
      pilihan: [
        "72°",
        "90°",
        "108°",
        "120°"
      ],
      jawaban: 2,
      pembahasan:
        "Jumlah pengunjung = 20 + 25 + 30 + 15 + 10 = 100 siswa. Sudut hari Rabu = (30 / 100) × 360° = 108°."
    },
    {
      indikator: "Interpreting, Applying, and Evaluating Mathematical Outcomes",
      pertanyaan:
        "Jumlah pengunjung taman bacaan selama empat minggu adalah 40, 55, 70, dan 50 orang. Seorang siswa menyatakan bahwa pengunjung selalu meningkat. Kesimpulan yang tepat adalah ...",
      pilihan: [
        "Benar, karena jumlah minggu keempat lebih besar dari minggu pertama",
        "Salah, karena jumlah pengunjung menurun pada minggu keempat",
        "Benar, karena jumlah pengunjung selalu sama",
        "Salah, karena jumlah pengunjung tidak pernah meningkat"
      ],
      jawaban: 1,
      pembahasan:
        "Pengunjung meningkat dari 40 menjadi 55, lalu 70 orang. Namun, pada minggu keempat jumlahnya turun menjadi 50 orang. Jadi, pengunjung tidak selalu meningkat."
    }
  ];

  const [nomor, setNomor] = useState(0);
  const [jawabanSiswa, setJawabanSiswa] = useState({});
  const [selesai, setSelesai] = useState(false);

  const jumlahBenar = soal.filter(
    (item, index) => jawabanSiswa[index] === item.jawaban
  ).length;

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
        <p>
          Pilihlah satu jawaban yang paling tepat
          untuk setiap soal.
        </p>
        <p>Jumlah soal: 4 | Skor maksimal: 24</p>
      </section>

      {!selesai ? (
        <section className="welcome">
          <p>Soal {nomor + 1} dari {soal.length}</p>

          <div
            style={{
              backgroundColor: "#e5e7eb",
              height: "8px",
              borderRadius: "10px",
              marginBottom: "20px"
            }}
          >
            <div
              style={{
                width: `${((nomor + 1) / soal.length) * 100}%`,
                height: "8px",
                backgroundColor: "#2563eb",
                borderRadius: "10px"
              }}
            />
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
                  jawabanSiswa[nomor] === index
                    ? "#dbeafe"
                    : "white"
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

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
                onClick={() => setSelesai(true)}
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
            <h3>Hasil Pengerjaan</h3>
            <p>Jawaban benar: {jumlahBenar} dari 4 soal</p>
            <p>Jawaban salah: {4 - jumlahBenar} soal</p>
            <h2 style={{ color: "#2563eb" }}>
              Nilai: {nilai} / 24
            </h2>
          </section>

          <section className="welcome">
            <h3>📊 Rekap Nilai Setiap Indikator</h3>

            {soal.map((item, index) => {
              const benar =
                jawabanSiswa[index] === item.jawaban;

              const skor = benar ? 6 : 0;

              return (
                <div
                  key={index}
                  style={{
                    padding: "12px",
                    marginBottom: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px"
                  }}
                >
                  <strong>{item.indikator}</strong>
                  <p>Skor: {skor} / 6</p>
                  <p>
                    Status: {benar ? "Benar" : "Belum tepat"}
                  </p>
                </div>
              );
            })}
          </section>

          <section className="welcome">
            <h3>📖 Pembahasan Jawaban</h3>

            {soal.map((item, index) => {
              const benar =
                jawabanSiswa[index] === item.jawaban;

              return (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <h4>Soal {index + 1}</h4>

                  <p>
                    Jawaban kamu:{" "}
                    {String.fromCharCode(
                      65 + jawabanSiswa[index]
                    )}. {item.pilihan[jawabanSiswa[index]]}
                  </p>

                  <p>
                    Kunci jawaban:{" "}
                    {String.fromCharCode(65 + item.jawaban)}.{" "}
                    {item.pilihan[item.jawaban]}
                  </p>

                  <p>
                    <strong>
                      {benar ? "Jawaban benar!" : "Pelajari kembali, ya."}
                    </strong>
                  </p>

                  <p>{item.pembahasan}</p>
                </div>
              );
            })}
          </section>

          <section className="welcome">
            <button onClick={ulangiLatihan}>
              Ulangi Latihan
            </button>
          </section>
        </>
      )}
    </div>
  );
}

export default LatihanSoal;
