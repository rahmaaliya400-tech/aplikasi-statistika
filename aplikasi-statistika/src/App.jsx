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
  const nadaRef = useRef(0)

  const nada = [
    523.25, 587.33, 659.25, 783.99,
    659.25, 587.33, 523.25, 440,
    523.25, 659.25, 783.99, 880,
    783.99, 659.25, 587.33, 523.25
  ]

  function mainkanNada() {
    const audio = audioRef.current
    if (!audio) return

    const sekarang = audio.currentTime
    const oscillator = audio.createOscillator()
    const volume = audio.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.value = nada[nadaRef.current]

    volume.gain.setValueAtTime(0.0001, sekarang)
    volume.gain.linearRampToValueAtTime(0.035, sekarang + 0.08)
    volume.gain.exponentialRampToValueAtTime(0.0001, sekarang + 0.55)

    oscillator.connect(volume)
    volume.connect(audio.destination)

    oscillator.start(sekarang)
    oscillator.stop(sekarang + 0.6)

    nadaRef.current = (nadaRef.current + 1) % nada.length
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

    nadaRef.current = 0
    mainkanNada()

    timerRef.current = setInterval(mainkanNada, 500)
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