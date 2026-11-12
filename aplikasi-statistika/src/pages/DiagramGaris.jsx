
import { useState } from "react";

function DiagramGaris() {
  const [jawaban, setJawaban] = useState("");
  const [periksa, setPeriksa] = useState(false);
  const [lihatPembahasan, setLihatPembahasan] = useState(false);

  const data = [
    { hari: "Senin", jumlah: 20 },
    { hari: "Selasa", jumlah: 25 },
    { hari: "Rabu", jumlah: 15 },
    { hari: "Kamis", jumlah: 30 },
    { hari: "Jumat", jumlah: 35 },
  ];

  const titik = data.map((item, index) => ({
    x: 70 + index * 100,
    y: 250 - (item.jumlah - 10) * 5,
    ...item,
  }));

  const garis = titik.map((item) => `${item.x},${item.y}`).join(" ");

  const benar = jawaban === "20";

  return (
    <div className="container" style={{ paddingBottom: "35px" }}>

      {/* PEMBUKA */}
      <section className="welcome" style={{
        background: "linear-gradient(135deg, #e0f2fe, #f3e8ff)",
        borderRadius: "22px",
        padding: "25px"
      }}>
        <span style={{ fontSize: "38px" }}>📈🌈</span>
        <h2>Petualangan Diagram Garis</h2>
        <p>
          Yuk, belajar membaca perubahan data melalui diagram garis!
          Kita akan menjadi detektif data yang hebat.
        </p>
        <p style={{ fontWeight: "bold", color: "#6d28d9" }}>
          🎯 Tujuan belajar: Siswa mampu memahami, membuat,
          membaca, dan menafsirkan diagram garis.
        </p>
      </section>

      {/* PENGERTIAN */}
      <section className="welcome">
        <h2>📚 1. Apa Itu Diagram Garis?</h2>
        <p>
          Diagram garis adalah penyajian data dalam bentuk titik-titik
          yang dihubungkan menggunakan garis. Diagram ini digunakan
          untuk menunjukkan perubahan suatu data secara berurutan,
          misalnya dari hari ke hari, bulan ke bulan, atau tahun ke tahun.
        </p>

        <div style={{
          background: "#eff6ff",
          padding: "16px",
          borderRadius: "14px",
          marginTop: "15px"
        }}>
          <strong>💡 Contoh dalam kehidupan sehari-hari:</strong>
          <ul>
            <li>Perubahan jumlah pengunjung perpustakaan.</li>
            <li>Perubahan suhu udara setiap hari.</li>
            <li>Jumlah penjualan toko setiap bulan.</li>
            <li>Perkembangan jumlah siswa yang hadir.</li>
          </ul>
        </div>
      </section>

      {/* FUNGSI */}
      <section className="welcome">
        <h2>🎯 2. Fungsi Diagram Garis</h2>
        <p>Diagram garis memiliki beberapa kegunaan, yaitu:</p>
        <ul>
          <li>Menunjukkan perubahan data dari waktu ke waktu.</li>
          <li>Mempermudah perbandingan nilai data.</li>
          <li>Mengetahui kenaikan dan penurunan data.</li>
          <li>Membantu pembaca melihat kecenderungan atau pola data.</li>
          <li>Menyajikan informasi agar lebih mudah dipahami.</li>
        </ul>
      </section>

      {/* CIRI-CIRI */}
      <section className="welcome">
        <h2>🔎 3. Ciri-Ciri Diagram Garis</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "12px"
        }}>
          {[
            ["📍", "Memiliki titik data", "Setiap titik menunjukkan nilai tertentu."],
            ["〰️", "Titik dihubungkan", "Titik-titik dihubungkan dengan garis."],
            ["↔️", "Sumbu mendatar", "Biasanya menunjukkan waktu atau kategori berurutan."],
            ["↕️", "Sumbu tegak", "Menunjukkan nilai atau jumlah data."]
          ].map((item) => (
            <div key={item[1]} style={{
              background: "#f5f3ff",
              borderRadius: "14px",
              padding: "15px"
            }}>
              <span style={{ fontSize: "28px" }}>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UNSUR */}
      <section className="welcome">
        <h2>🧩 4. Unsur-Unsur Diagram Garis</h2>
        <ol>
          <li><strong>Judul:</strong> menjelaskan informasi yang disajikan.</li>
          <li><strong>Sumbu X:</strong> menunjukkan waktu atau kategori.</li>
          <li><strong>Sumbu Y:</strong> menunjukkan nilai atau jumlah data.</li>
          <li><strong>Skala:</strong> menunjukkan jarak nilai pada sumbu.</li>
          <li><strong>Titik data:</strong> menunjukkan posisi setiap nilai.</li>
          <li><strong>Garis penghubung:</strong> menghubungkan titik-titik data secara berurutan.</li>
        </ol>
      </section>

      {/* LANGKAH */}
      <section className="welcome">
        <h2>📝 5. Cara Membuat Diagram Garis</h2>
        {[
          "Siapkan data yang akan disajikan.",
          "Buat tabel berdasarkan data yang tersedia.",
          "Gambarkan sumbu mendatar (X) dan sumbu tegak (Y).",
          "Tentukan skala yang sesuai dengan nilai data.",
          "Letakkan setiap titik sesuai pasangan datanya.",
          "Hubungkan titik-titik secara berurutan.",
          "Berikan judul dan keterangan pada diagram."
        ].map((langkah, index) => (
          <div key={index} style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            background: index % 2 === 0 ? "#eff6ff" : "#faf5ff",
            padding: "12px",
            borderRadius: "12px",
            marginBottom: "9px"
          }}>
            <span style={{
              background: "#8b5cf6",
              color: "white",
              minWidth: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold"
            }}>
              {index + 1}
            </span>
            <span>{langkah}</span>
          </div>
        ))}
      </section>

      {/* CONTOH DATA */}
      <section className="welcome">
        <h2>📊 6. Ayo Amati Contoh Data!</h2>
        <p>
          Perpustakaan sekolah mencatat jumlah pengunjung selama
          lima hari. Berikut data yang diperoleh.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Hari</th>
                <th>Jumlah Pengunjung</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.hari}>
                  <td>{item.hari}</td>
                  <td>{item.jumlah} orang</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GRAFIK */}
      <section className="welcome">
        <h2>🎨 7. Diagram Garis Pengunjung Perpustakaan</h2>
        <p>
          Perhatikan titik-titik dan garis yang menggambarkan
          perubahan jumlah pengunjung berikut ini.
        </p>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <svg
            viewBox="0 0 520 310"
            width="100%"
            role="img"
            aria-label="Diagram garis jumlah pengunjung perpustakaan"
          >
            {[10, 15, 20, 25, 30, 35].map((nilai) => {
              const y = 250 - (nilai - 10) * 5;
              return (
                <g key={nilai}>
                  <line x1="55" y1={y} x2="475" y2={y}
                    stroke="#d1d5db" strokeDasharray="4 4" />
                  <text x="42" y={y + 5} textAnchor="end"
                    fontSize="12" fill="#374151">{nilai}</text>
                </g>
              );
            })}

            <line x1="55" y1="50" x2="55" y2="250"
              stroke="#374151" strokeWidth="2" />
            <line x1="55" y1="250" x2="475" y2="250"
              stroke="#374151" strokeWidth="2" />

            <polyline points={garis} fill="none"
              stroke="#8b5cf6" strokeWidth="4"
              strokeLinejoin="round" strokeLinecap="round" />

            {titik.map((item) => (
              <g key={item.hari}>
                <circle cx={item.x} cy={item.y} r="6" fill="#ec4899" />
                <text x={item.x} y={item.y - 13}
                  textAnchor="middle" fontSize="12"
                  fill="#7c3aed" fontWeight="bold">
                  {item.jumlah}
                </text>
                <text x={item.x} y="272" textAnchor="middle"
                  fontSize="11" fill="#374151">{item.hari}</text>
              </g>
            ))}

            <text x="265" y="300" textAnchor="middle"
              fontSize="12" fill="#374151">Hari</text>
            <text x="14" y="150" textAnchor="middle"
              fontSize="12" fill="#374151"
              transform="rotate(-90 14 150)">
              Jumlah Pengunjung
            </text>
          </svg>
        </div>

        <p style={{
          background: "#fdf2f8",
          borderRadius: "12px",
          padding: "13px"
        }}>
          🌟 Ingat! Setiap titik menunjukkan jumlah pengunjung
          pada hari tertentu. Garis membantu kita melihat
          perubahan jumlah pengunjung.
        </p>
      </section>

      {/* MEMBACA GRAFIK */}
      <section className="welcome">
        <h2>🔍 8. Cara Membaca dan Menafsirkan Diagram</h2>
        <ul>
          <li>Jumlah pengunjung pada hari Senin adalah 20 orang.</li>
          <li>Hari Selasa mengalami kenaikan menjadi 25 orang.</li>
          <li>Hari Rabu mengalami penurunan menjadi 15 orang.</li>
          <li>Hari Kamis meningkat menjadi 30 orang.</li>
          <li>Hari Jumat meningkat menjadi 35 orang.</li>
        </ul>

        <div style={{
          background: "#ecfdf5",
          padding: "16px",
          borderRadius: "14px"
        }}>
          <h3>✨ Kesimpulan dari grafik</h3>
          <p>
            Jumlah pengunjung tertinggi terjadi pada hari Jumat,
            yaitu 35 orang. Jumlah terendah terjadi pada hari Rabu,
            yaitu 15 orang.
          </p>
          <p>
            Secara keseluruhan, jumlah pengunjung mengalami
            perubahan dari hari ke hari.
          </p>
        </div>
      </section>

      {/* CONTOH SOAL */}
      <section className="welcome">
        <h2>✏️ 9. Contoh Soal dan Pembahasan</h2>
        <p>
          Berdasarkan diagram pengunjung perpustakaan, berapakah
          selisih jumlah pengunjung pada hari Jumat dan hari Rabu?
        </p>

        <button
          onClick={() => setLihatPembahasan(!lihatPembahasan)}
          style={{ marginTop: "10px" }}
        >
          {lihatPembahasan ? "Tutup Pembahasan" : "💡 Lihat Pembahasan"}
        </button>

        {lihatPembahasan && (
          <div style={{
            background: "#eff6ff",
            padding: "16px",
            borderRadius: "14px",
            marginTop: "15px"
          }}>
            <p><strong>Diketahui:</strong></p>
            <p>Pengunjung hari Jumat = 35 orang.</p>
            <p>Pengunjung hari Rabu = 15 orang.</p>
            <p><strong>Ditanyakan:</strong> Selisih pengunjung.</p>
            <p><strong>Penyelesaian:</strong></p>
            <p>Selisih = 35 - 15</p>
            <p>Selisih = 20 orang.</p>
            <p><strong>Jadi, selisih pengunjung adalah 20 orang.</strong></p>
          </div>
        )}
      </section>

      {/* KUIS */}
      <section className="welcome">
        <h2>🏆 10. Kuis Mini: Uji Pemahamanmu!</h2>
        <p>
          Berdasarkan diagram di atas, berapa kenaikan jumlah
          pengunjung dari hari Senin ke hari Selasa?
        </p>

        {["5", "10", "15", "20"].map((pilihan) => (
          <button
            key={pilihan}
            onClick={() => {
              setJawaban(pilihan);
              setPeriksa(false);
            }}
            style={{
              display: "block",
              width: "100%",
              marginBottom: "9px",
              background: jawaban === pilihan ? "#7c3aed" : "#e0e7ff",
              color: jawaban === pilihan ? "white" : "#312e81",
              border: "none",
              borderRadius: "10px",
              padding: "12px",
              textAlign: "left"
            }}
          >
            {pilihan} orang
          </button>
        ))}

        <button
          onClick={() => setPeriksa(true)}
          disabled={!jawaban}
        >
          Periksa Jawaban
        </button>

        {periksa && (
          <div style={{
            background: benar ? "#dcfce7" : "#fee2e2",
            padding: "15px",
            borderRadius: "12px",
            marginTop: "14px"
          }}>
            <h3>{benar ? "🎉 Hebat! Jawabanmu benar!" : "💪 Belum tepat, ayo coba lagi!"}</h3>
            <p>
              Jawaban yang benar adalah 5 orang,
              karena 25 - 20 = 5 orang.
            </p>
          </div>
        )}
      </section>

      <section className="welcome" style={{
        background: "linear-gradient(135deg, #fce7f3, #ede9fe)",
        textAlign: "center"
      }}>
        <h2>🌟 Hebat! Kamu Telah Menyelesaikan Materi!</h2>
        <p>
          Sekarang kamu sudah mengenal pengertian, fungsi,
          unsur, cara membuat, serta cara membaca diagram garis.
        </p>
        <p>Terus semangat belajar dan jadilah detektif data! 🕵️‍♀️</p>
      </section>
    </div>
  );
}

export default DiagramGaris;
