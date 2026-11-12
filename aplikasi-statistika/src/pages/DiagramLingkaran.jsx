
function DiagramLingkaran() {
  const data = [
    { kegiatan: "Sepak Bola", jumlah: 16, warna: "#2563eb" },
    { kegiatan: "Basket", jumlah: 12, warna: "#f59e0b" },
    { kegiatan: "Pramuka", jumlah: 8, warna: "#16a34a" },
    { kegiatan: "Musik", jumlah: 4, warna: "#dc2626" },
  ];

  const total = data.reduce(
    (hasil, item) => hasil + item.jumlah,
    0
  );

  const keliling = 2 * Math.PI * 80;
  let offset = 0;

  return (
    <div className="container">
      <section className="welcome">
        <h2>🥧 Mengenal Diagram Lingkaran</h2>
        <p>
          Diagram lingkaran adalah diagram berbentuk lingkaran
          yang digunakan untuk menunjukkan perbandingan
          bagian-bagian terhadap keseluruhan data.
        </p>
      </section>

      <section className="welcome">
        <h2>1. Contoh Data Kegiatan Favorit Siswa</h2>
        <p>
          Dari 40 siswa, diperoleh data kegiatan favorit
          sebagai berikut.
        </p>

        <table>
          <thead>
            <tr>
              <th>Kegiatan</th>
              <th>Jumlah Siswa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.kegiatan}>
                <td>{item.kegiatan}</td>
                <td>{item.jumlah}</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>{total}</th>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="welcome">
        <h2>2. Diagram Lingkaran</h2>
        <p>
          Perhatikan pembagian data kegiatan favorit
          dari 40 siswa berikut.
        </p>

        <div style={{ maxWidth: "320px", margin: "auto" }}>
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
              const persen = item.jumlah / total;
              const panjang = persen * keliling;
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
              fontSize="16"
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
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: item.warna,
                borderRadius: "3px",
              }}
            />
            <span>
              {item.kegiatan}: {item.jumlah} siswa
              ({(item.jumlah / total * 100).toFixed(0)}%)
            </span>
          </div>
        ))}
      </section>

      <section className="welcome">
        <h2>3. Cara Menghitung Persentase</h2>
        <p>
          Persentase = (Jumlah bagian / Jumlah seluruh data) × 100%
        </p>

        <p>
          Contoh persentase siswa yang menyukai sepak bola:
        </p>

        <p>
          = (16 / 40) × 100%
        </p>

        <p>
          = 40%
        </p>
      </section>

      <section className="welcome">
        <h2>4. Cara Menghitung Sudut</h2>
        <p>
          Sudut = (Jumlah bagian / Jumlah seluruh data) × 360°
        </p>

        <p>
          Contoh sudut untuk kegiatan sepak bola:
        </p>

        <p>
          = (16 / 40) × 360°
        </p>

        <p>
          = 144°
        </p>
      </section>

      <section className="welcome">
        <h2>5. Kesimpulan</h2>
        <p>
          Kegiatan yang paling banyak disukai adalah sepak bola,
          yaitu 16 siswa atau 40%.
        </p>
        <p>
          Kegiatan yang paling sedikit disukai adalah musik,
          yaitu 4 siswa atau 10%.
        </p>
      </section>
    </div>
  );
}

export default DiagramLingkaran;
