
import { useState } from "react";

function IdentitasSiswa({ onMulai }) {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");

  function mulaiBelajar(e) {
    e.preventDefault();

    if (!nama.trim() || !kelas.trim()) {
      alert("Nama dan kelas harus diisi.");
      return;
    }

    onMulai({ nama: nama.trim(), kelas: kelas.trim() });
  }

  return (
    <main className="container">
      <section className="welcome">
        <h2>Selamat Datang di Statistika Asyik!</h2>
        <p>Silakan isi identitas sebelum memulai pembelajaran.</p>

        <form onSubmit={mulaiBelajar}>
          <label>Nama Siswa</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama lengkap"
            required
          />

          <br /><br />

          <label>Kelas</label>
          <input
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            placeholder="Contoh: VII A"
            required
          />

          <br /><br />

          <button type="submit">Mulai Belajar</button>
        </form>
      </section>
    </main>
  );
}

export default IdentitasSiswa;
