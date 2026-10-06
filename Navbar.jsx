import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          <div className="logo-mark">
            U
          </div>

          <div className="logo-text">
            <strong>UIN SUSKA RIAU</strong>
            <span>PUSAT BAHASA</span>
          </div>
        </Link>

        <nav className="nav-menu">
          <Link to="/">Beranda</Link>
          <Link to="/tentang">Tentang</Link>
          <Link to="/layanan">Layanan</Link>
          <Link to="/program">Program</Link>
          <Link to="/berita">Berita</Link>
          <Link to="/kontak">Kontak</Link>
        </nav>

        <Link to="/kontak" className="nav-button">
          Daftar Sekarang
        </Link>

      </div>
    </header>
  )
}

export default Navbar