
import { useState } from 'react'
import './App.css'

import IdentitasSiswa from './pages/IdentitasSiswa'
import DiagramGaris from './pages/DiagramGaris'
import DiagramLingkaran from './pages/DiagramLingkaran'
import LatihanSoal from './pages/LatihanSoal'

function App() {
  const [identitas, setIdentitas] = useState(null)
  const [halaman, setHalaman] = useState('beranda')

  function mulaiBelajar(data) {
    setIdentitas(data)
    setHalaman('beranda')
  }

  return (
    <div className="app">
      <div className="floating-decor decor-one">⭐</div>
      <div className="floating-decor decor-two">📐</div>
      <div className="floating-decor decor-three">🧮</div>
      <div className="floating-decor decor-four">☁️</div>
      <div className="floating-decor decor-five">✨</div>

      <header className="header">
        <div className="header-content">
          <span className="header-label">🌈 MEDIA PEMBELAJARAN INTERAKTIF</span>
          <h1>Statistika Asyik!</h1>
          <p>Belajar Matematika Jadi Petualangan Seru!</p>
          <div className="header-mascot">🧸</div>
        </div>
      </header>

      {!identitas ? (
        <IdentitasSiswa onMulai={mulaiBelajar} />
      ) : (
        <>
          {halaman === 'beranda' ? (
            <main className="container">
              <section className="hero-card">
                <div>
                  <span className="hero-label">🎉 HALO, TEMAN BELAJAR!</span>
                  <h2>Hai, {identitas.nama}!</h2>
                  <p>Kelas {identitas.kelas}</p>
                  <p>
                    Siap menjelajahi dunia statistika?
                    Yuk, belajar sambil bermain!
                  </p>
                </div>
                <div className="hero-character">🦊</div>
              </section>

              <section className="materi">
                <div className="section-heading">
                  <span>🚀</span>
                  <div>
                    <h2>Pilih Petualanganmu!</h2>
                    <p>Ayo pilih materi yang ingin kamu pelajari.</p>
                  </div>
                </div>

                <div className="materi-list">
                  <div className="materi-card card-garis">
                    <div className="card-emoji">📈</div>
                    <span className="card-level">LEVEL 01</span>
                    <h3>Diagram Garis</h3>
                    <p>
                      Yuk, amati perubahan data dan temukan
                      informasi dari diagram garis!
                    </p>
                    <button onClick={() => setHalaman('garis')}>
                      Mulai Belajar →
                    </button>
                  </div>

                  <div className="materi-card card-lingkaran">
                    <div className="card-emoji">🥧</div>
                    <span className="card-level">LEVEL 02</span>
                    <h3>Diagram Lingkaran</h3>
                    <p>
                      Kenali bagian, persentase, dan sudut
                      dalam penyajian data!
                    </p>
                    <button onClick={() => setHalaman('lingkaran')}>
                      Mulai Belajar →
                    </button>
                  </div>

                  <div className="materi-card card-latihan">
                    <div className="card-emoji">🎯</div>
                    <span className="card-level">LEVEL 03</span>
                    <h3>Latihan Soal</h3>
                    <p>
                      Uji kemampuan literasi matematis
                      dan kumpulkan poinmu!
                    </p>
                    <button onClick={() => setHalaman('latihan')}>
                      Mulai Tantangan →
                    </button>
                  </div>
                </div>
              </section>

              <section className="fun-banner">
                <span>💡</span>
                <div>
                  <h3>Tahukah Kamu?</h3>
                  <p>
                    Statistika membantu kita memahami informasi
                    melalui data dalam kehidupan sehari-hari!
                  </p>
                </div>
                <span>🌟</span>
              </section>
            </main>
          ) : (
            <main>
              <div className="container page-navigation">
                <p>
                  👩‍🎓 {identitas.nama} · Kelas {identitas.kelas}
                </p>
                <button onClick={() => setHalaman('beranda')}>
                  🏠 Kembali ke Beranda
                </button>
              </div>

              {halaman === 'garis' ? (
                <DiagramGaris />
              ) : halaman === 'lingkaran' ? (
                <DiagramLingkaran />
              ) : (
                <LatihanSoal />
              )}
            </main>
          )}
        </>
      )}

      <footer className="footer">
        <p>🌈 Statistika Asyik · Belajar Jadi Lebih Seru! ⭐</p>
      </footer>
    </div>
  )
}

export default App
