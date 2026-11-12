
function DiagramGaris() {
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

  const garis = titik
    .map((item) => `${item.x},${item.y}`)
    .join(" ");

  return (
    <div className="container">
      <section className="welcome">
        <h2>📈 Mengenal Diagram Garis</h2>
        <p>
          Diagram garis digunakan untuk menyajikan data
          dan menunjukkan perubahan nilai dari waktu ke waktu.
        </p>
      </section>

      <section className="welcome">
        <h2>1. Diagram Garis Pengunjung Perpustakaan</h2>
        <p>
          Berikut adalah data jumlah pengunjung perpustakaan
          selama lima hari.
        </p>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <svg
            viewBox="0 0 520 310"
            width="100%"
            role="img"
            aria-label="Diagram garis pengunjung perpustakaan selama lima hari"
          >
            {[10, 15, 20, 25, 30, 35].map((nilai) => {
              const y = 250 - (nilai - 10) * 5;

              return (
                <g key={nilai}>
                  <line
                    x1="55"
                    y1={y}
                    x2="475"
                    y2={y}
                    stroke="#d1d5db"
                    strokeDasharray="4 4"
                  />
                  <text
                    x="42"
                    y={y + 5}
                    textAnchor="end"
                    fontSize="12"
                    fill="#374151"
                  >
                    {nilai}
                  </text>
                </g>
              );
            })}

            <line
              x1="55"
              y1="50"
              x2="55"
              y2="250"
              stroke="#374151"
              strokeWidth="2"
            />

            <line
              x1="55"
              y1="250"
              x2="475"
              y2="250"
              stroke="#374151"
              strokeWidth="2"
            />

            <polyline
              points={garis}
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {titik.map((item) => (
              <g key={item.hari}>
                <circle
                  cx={item.x}
                  cy={item.y}
                  r="5"
                  fill="#2563eb"
                />
                <text
                  x={item.x}
                  y={item.y - 12}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#1e40af"
                  fontWeight="bold"
                >
                  {item.jumlah}
                </text>
                <text
                  x={item.x}
                  y="272"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#374151"
                >
                  {item.hari}
                </text>
              </g>
            ))}

            <text
              x="265"
              y="300"
              textAnchor="middle"
              fontSize="12"
              fill="#374151"
            >
              Hari
            </text>

            <text
              x="14"
              y="150"
              textAnchor="middle"
              fontSize="12"
              fill="#374151"
              transform="rotate(-90 14 150)"
            >
              Jumlah Pengunjung
            </text>
          </svg>
        </div>
      </section>

      <section className="welcome">
        <h2>2. Tabel Data</h2>
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
                <td>{item.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="welcome">
        <h2>3. Kesimpulan</h2>
        <p>
          Jumlah pengunjung tertinggi terjadi pada hari Jumat,
          yaitu 35 orang. Jumlah terendah terjadi pada hari
          Rabu, yaitu 15 orang.
        </p>
        <p>
          Dari diagram terlihat bahwa jumlah pengunjung
          mengalami kenaikan dan penurunan.
        </p>
      </section>
    </div>
  );
}

export default DiagramGaris;
