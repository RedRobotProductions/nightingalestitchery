import './App.css'
import logo from './assets/nightingale-logo.png'

function App() {
  return (
    <div className="site">
      <div className="top-bar">
        Made to order in Crouch End, London N8 <span>×</span> Free UK shipping over £30 <span>×</span> Each piece stitched by hand 💗
      </div>

      <header className="nav">
        <nav>
          <a>Shop</a>
          <a>Made to Order</a>
          <a>About</a>
          <a>Contact</a>
          <button>Basket (0)</button>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-copy">
          <h1>NIGHTINGALE<br />STITCHERY</h1>
          <div className="meta">EST. 2026 · CROUCH END</div>
          <h2>Modern cross-stitch, made by hand.</h2>
          <p>
            Geometric and Japanese-inspired patterns, stitched one at a time in North London.
            Bookmarks, needle minders, cushion covers and totes — each one made just for you.
          </p>

          <div className="buttons">
            <button className="pink">Shop the collection</button>
            <button className="outline">Meet Emma</button>
          </div>

          <div className="stars">★★★★★ <span>Rated 5 stars by customers</span></div>
        </section>

        <section className="hero-logo">
          <img src={logo} alt="Nightingale Stitchery logo" />
          <div className="sticker">Handmade<br />with love</div>
        </section>
      </main>
    </div>
  )
}

export default App