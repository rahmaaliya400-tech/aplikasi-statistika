
import { useState } from "react";

function DiagramLingkaran() {
  const data = [
    { kegiatan: "Sepak Bola", jumlah: 16, warna: "#6366f1" },
    { kegiatan: "Basket", jumlah: 12, warna: "#f59e0b" },
    { kegiatan: "Pramuka", jumlah: 8, warna: "#10b981" },
    { kegiatan: "Musik", jumlah: 4, warna: "#f472b6" },
  ];

  const total = data.reduce((hasil, item) => hasil + item.jumlah, 0);

  const [tampilPembahasan, setTampilPembahasan] = useState(false);
  const [jawaban, setJawaban] = useState("");
  const [periksa, setPeriksa] = useState(false);

  const keliling = 2 * Math.PI * 80;
  let offset = 0;

  return (
    <div className="container">
      <section className="welcome">
        <h2>🥧 Mengenal Diagram Lingkaran</h2>
        <p>
          Yuk, belajar menyajikan dan membaca data menggunakan
          diagram lingkaran! Diagram ini membantu kita melihat
          perbandingan setiap bagian terhadap keseluruhan data.
        </p>
      </section>

      <section className="welcome">
        <h2>🎯 Tujuan Pembelajaran</h2>
        <ul>
          <li>Menjelaskan pengertian diagram lingkaran.</li>
          <li>Mengenali unsur dan ciri-ciri diagram lingkaran.</li>
          <li>Menghitung persentase dan besar sudut.</li>
          <li>Menyajikan data dalam bentuk diagram lingkaran.</li>
          <li>Membaca dan menafsirkan informasi dari diagram.</li>
        </ul>
      </section>

      <section className="welcome">
        <h2>📖 1. Pengertian Diagram Lingkaran</h2>
        <p>
          Diagram lingkaran adalah penyajian data dalam bentuk
          lingkaran yang dibagi menjadi beberapa bagian.
          Setiap bagian menunjukkan jumlah atau proporsi
          suatu kategori terhadap seluruh data.
        </p>
        <p>
          Besar bagian lingkaran disesuaikan dengan banyaknya
          data pada setiap kategori.
        </p>
      </section>

      <section className="welcome">
        <h2>💡 2. Fungsi Diagram Lingkaran</h2>
        <ul>
          <li>Menunjukkan perbandingan antar kategori.</li>
          <li>Mempermudah melihat bagian terbesar dan terkecil.</li>
          <li>Menyajikan informasi secara sederhana dan menarik.</li>
          <li>Membantu pembaca memahami proporsi keseluruhan data.</li>
        </ul>
      </section>

      <section className="welcome">
        <h2>✨ 3. Ciri-Ciri Diagram Lingkaran</h2>
        <ul>
          <li>Berbentuk lingkaran yang terbagi menjadi beberapa sektor.</li>
          <li>Setiap sektor mewakili kategori data.</li>
          <li>Seluruh bagian membentuk satu lingkaran penuh.</li>
          <li>Total sudut seluruh sektor adalah 360°.</li>
          <li>Total persentase seluruh kategori adalah 100%.</li>
        </ul>
      </section>

      <section className="welcome">
        <h2>🔎 4. Unsur-Unsur Diagram Lingkaran</h2>
        <ul>
          <li><b>Judul:</b> menjelaskan informasi yang disajikan.</li>
          <li><b>Lingkaran:</b> menggambarkan keseluruhan data.</li>
          <li><b>Sektor:</b> bagian lingkaran yang mewakili kategori.</li>
          <li><b>Legenda:</b> menjelaskan warna setiap kategori.</li>
          <li><b>Persentase:</b> menunjukkan bagian data dalam persen.</li>
        </ul>
      </section>

      <section className="welcome">
        <h2>🧮 5. Rumus Menghitung Persentase</h2>
        <p>
          Persentase digunakan untuk mengetahui seberapa besar
          bagian suatu kategori dibandingkan seluruh data.
        </p>
        <p><b>Rumus:</b></p>
        <p>
          Persentase = (Jumlah bagian ÷ Jumlah seluruh data) × 100%
        </p>
        <p><b>Contoh:</b> 16 siswa menyukai sepak bola dari 40 siswa.</p>
        <p>Persentase = (16 ÷ 40) × 100%</p>
        <p>Persentase = 0,4 × 100% = <b>40%</b></p>
      </section>

      <section className="welcome">
        <h2>📐 6. Rumus Menghitung Besar Sudut</h2>
        <p>
          Besar sudut digunakan untuk menentukan ukuran sektor
          pada diagram lingkaran.
        </p>
        <p><b>Rumus:</b></p>
        <p>
          Sudut = (Jumlah bagian ÷ Jumlah seluruh data) × 360°
        </p>
        <p><b>Contoh sepak bola:</b></p>
        <p>Sudut = (16 ÷ 40) × 360°</p>
        <p>Sudut = 0,4 × 360° = <b>144°</b></p>
      </section>

      <section className="welcome">
        <h2>📝 7. Langkah-Langkah Membuat Diagram Lingkaran</h2>
        <ol>
          <li>Kumpulkan data dari suatu kegiatan.</li>
          <li>Hitung jumlah seluruh data.</li>
          <li>Hitung persentase setiap kategori.</li>
          <li>Hitung besar sudut setiap kategori.</li>
          <li>Gambarkan lingkaran dan bagi sesuai besar sudut.</li>
          <li>Tambahkan judul dan keterangan warna.</li>
        </ol>
      </section>

      <section className="welcome">
        <h2>📊 8. Contoh Data Kegiatan Favorit Siswa</h2>
        <p>
          Sebanyak 40 siswa kelas VII ditanya mengenai kegiatan
          yang paling mereka sukai. Hasilnya sebagai berikut.
        </p>

        <table>
          <thead>
            <tr>
              <th>Kegiatan</th>
              <th>Jumlah Siswa</th>
              <th>Persentase</th>
              <th>Sudut</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.kegiatan}>
                <td>{item.kegiatan}</td>
                <td>{item.jumlah}</td>
                <td>{((item.jumlah / total) * 100).toFixed(0)}%</td>
                <td>{((item.jumlah / total) * 360).toFixed(0)}°</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>{total}</th>
              <th>100%</th>
              <th>360°</th>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="welcome">
        <h2>🥧 9. Diagram Lingkaran Kegiatan Favorit</h2>
        <p>
          Perhatikan diagram berikut. Setiap warna menunjukkan
          kategori kegiatan yang berbeda.
        </p>

        <div style={{ maxWidth: "340px", margin: "20px auto" }}>
          <svg
            viewBox="0 0 300 300"
            width="100%"
            role="img"
            aria-label="Diagram lingkaran kegiatan favorit siswa"
          >
            <circle
              cx="150"
              cy="150"
              r="80"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="55"
            />

            {data.map((item) => {
              const panjang = (item.jumlah / total) * keliling;
              const bagianOffset = offset;
              offset += panjang;

              return (
                <circle
                  key={item.kegiatan}
                  cx="150"
                  cy="150"
                  r="80"
                  fill="none"
                  stroke={item.warna}
                  strokeWidth="55"
                  strokeDasharray={`${panjang} ${keliling - panjang}`}
                  strokeDashoffset={-bagianOffset}
                  transform="rotate(-90 150 150)"
                />
              );
            })}

            <circle cx="150" cy="150" r="48" fill="white" />
            <text
              x="150"
              y="145"
              textAnchor="middle"
              fontSize="17"
              fontWeight="bold"
              fill="#1f2937"
            >
              {total} Siswa
            </text>
            <text
              x="150"
              y="165"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
            >
              Total Data
            </text>
          </svg>
        </div>

        {data.map((item) => (
          <div
            key={item.kegiatan}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "15px",
                height: "15px",
                flexShrink: 0,
                backgroundColor: item.warna,
                borderRadius: "4px",
              }}
            />
            <span>
              <b>{item.kegiatan}</b>: {item.jumlah} siswa,
              {` ${((item.jumlah / total) * 100).toFixed(0)}%`}
              {` atau ${((item.jumlah / total) * 360).toFixed(0)}°`}
            </span>
          </div>
        ))}
      </section>

      <section className="welcome">
        <h2>🔍 10. Membaca dan Menafsirkan Diagram</h2>
        <p>
          Berdasarkan diagram di atas, kita dapat mengetahui bahwa:
        </p>
        <ul>
          <li>Sepak bola memiliki bagian terbesar, yaitu 40%.</li>
          <li>Basket memiliki bagian sebesar 30%.</li>
          <li>Pramuka memiliki bagian sebesar 20%.</li>
          <li>Musik memiliki bagian terkecil, yaitu 10%.</li>
        </ul>
        <p>
          Artinya, sepak bola merupakan kegiatan yang paling
          banyak disukai oleh siswa dalam data tersebut.
        </p>
      </section>

      <section className="welcome">
        <h2>📚 11. Contoh Soal dan Pembahasan</h2>
        <p>
          Dari 40 siswa, sebanyak 12 siswa menyukai basket.
          Berapakah persentase siswa yang menyukai basket?
        </p>

        <button onClick={() => setTampilPembahasan(!tampilPembahasan)}>
          {tampilPembahasan ? "Tutup Pembahasan" : "Lihat Pembahasan"}
        </button>

        {tampilPembahasan && (
          <div style={{ marginTop: "15px" }}>
            <p>Jumlah siswa yang menyukai basket = 12.</p>
            <p>Jumlah seluruh siswa = 40.</p>
            <p>Persentase = (12 ÷ 40) × 100%</p>
            <p>Persentase = 0,3 × 100%</p>
            <p><b>Jadi, jawabannya adalah 30%.</b></p>
          </div>
        )}
      </section>

      <section className="welcome">
        <h2>🎮 12. Kuis Mini Diagram Lingkaran</h2>
        <p>
          Dari 40 siswa, sebanyak 8 siswa memilih kegiatan pramuka.
          Berapa persentase siswa yang memilih pramuka?
        </p>

        {["10%", "20%", "30%", "40%"].map((pilihan) => (
          <button
            key={pilihan}
            onClick={() => {
              setJawaban(pilihan);
              setPeriksa(false);
            }}
            style={{
              margin: "5px",
              backgroundColor:
                jawaban === pilihan ? "#6366f1" : "#e0e7ff",
              color: jawaban === pilihan ? "white" : "#312e81",
            }}
          >
            {pilihan}
          </button>
        ))}

        <div>
          <button
            onClick={() => setPeriksa(true)}
            disabled={!jawaban}
          >
            Periksa Jawaban
          </button>
        </div>

        {periksa && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            {jawaban === "20%"
              ? "🎉 Benar! (8 ÷ 40) × 100% = 20%."
              : "Belum tepat. Coba hitung lagi dengan rumus persentase, ya!"}
          </p>
        )}
      </section>

      <section className="welcome">
        <h2>🌟 Kesimpulan</h2>
        <p>
          Diagram lingkaran merupakan salah satu cara menyajikan
          data untuk menunjukkan perbandingan setiap kategori
          terhadap keseluruhan data.
        </p>
        <p>
          Untuk membuat diagram lingkaran, kita perlu memahami
          jumlah seluruh data, persentase, dan besar sudut.
        </p>
        <p>
          Ingat: total persentase adalah 100% dan total sudut
          adalah 360°.
        </p>
      </section>
    </div>
  );
}

export default DiagramLingkaran;
