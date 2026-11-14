import { useState, useEffect, useRef } from 'react'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import './App.css'

import IdentitasSiswa from './pages/IdentitasSiswa'
import DiagramGaris from './pages/DiagramGaris'
import DiagramLingkaran from './pages/DiagramLingkaran'
import LatihanSoal from './pages/LatihanSoal'


function MusikLatar() {
  const [aktif, setAktif] = useState(false)
  const audioRef = useRef(null)
  const timerRef = useRef(null)
  const langkahRef = useRef(0)

  const melodi = [
    523, 659, 784, 659, 587, 698, 880, 698,
    659, 784, 988, 784, 698, 880, 1047, 880,
    784, 880, 988, 880, 784, 698, 659, 587,
    523, 659, 784, 880, 784, 659, 587, 523,
    659, 784, 880, 1047, 988, 880, 784, 659,
    587, 698, 880, 988, 880, 698, 659, 523
  ]

  const bass = [
    131, 131, 165, 165,
    110, 110, 147, 147,
    131, 131, 165, 165,
    98, 98, 147, 147
  ]

  function bunyikan(frekuensi, durasi, volume, tipe = 'sine') {
    const audio = audioRef.current
    if (!audio) return

    const waktu = audio.currentTime
    const oscillator = audio.createOscillator()
    const gain = audio.createGain()

    oscillator.type = tipe
    oscillator.frequency.value = frekuensi

    gain.gain.setValueAtTime(0.001, waktu)
    gain.gain.linearRampToValueAtTime(volume, waktu + 0.025)
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      waktu + durasi
    )

    oscillator.connect(gain)
    gain.connect(audio.destination)

    oscillator.start(waktu)
    oscillator.stop(waktu + durasi + 0.02)
  }

  function mainkanMusik() {
    const i = langkahRef.current
    const nada = melodi[i % melodi.length]

    // Melodi utama
    bunyikan(nada, 0.22, 0.055, 'triangle')

    // Nada harmoni
    if (i % 4 === 0) {
      bunyikan(nada * 1.25, 0.65, 0.018, 'sine')
    }

    // Irama bass
    if (i % 2 === 0) {
      const nadaBass = bass[Math.floor(i / 2) % bass.length]
      bunyikan(nadaBass, 0.35, 0.045, 'triangle')
    }

    // Bunyi ketukan ringan
    if (i % 4 === 0) {
      bunyikan(180, 0.08, 0.012, 'sine')
    }

    langkahRef.current = (i + 1) % melodi.length
  }

  async function toggleMusik() {
    if (aktif) {
      clearInterval(timerRef.current)
      timerRef.current = null

      if (audioRef.current) {
        await audioRef.current.close()
        audioRef.current = null
      }

      setAktif(false)
      return
    }

    const AudioContext =
      window.AudioContext || window.webkitAudioContext

    if (!AudioContext) {
      alert('Browser belum mendukung fitur musik.')
      return
    }

    const audio = new AudioContext()
    audioRef.current = audio

    await audio.resume()

    langkahRef.current = 0
    mainkanMusik()

    timerRef.current = setInterval(mainkanMusik, 250)
    setAktif(true)
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current)

      if (audioRef.current) {
        audioRef.current.close()
      }
    }
  }, [])

  return (
    <button
      onClick={toggleMusik}
      style={{
        position: 'fixed',
        bottom: '22px',
        right: '22px',
        zIndex: 9999,
        border: 'none',
        borderRadius: '30px',
        padding: '13px 20px',
        background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}
    >
      {aktif ? '🔇 Matikan Musik' : '🎵 Putar Musik'}
    </button>
  )
}


function App() {
  const [identitas, setIdentitas] = useState(null)
  const [halaman, setHalaman] = useState('beranda')

  async function mulaiBelajar(data) {
    try {
      await addDoc(collection(db, 'nilai_siswa'), {
        nama: data.nama,
        kelas: data.kelas,
        createdAt: serverTimestamp()
      })

      setIdentitas(data)
      setHalaman('beranda')
    } catch (error) {
      console.error('Gagal menyimpan data:', error)
      alert('Data siswa gagal disimpan. Coba lagi ya!')
    }
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

      <MusikLatar />

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
                <LatihanSoal identitas={identitas} />
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