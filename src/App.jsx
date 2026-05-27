import './App.css'
import hero from './assets/nightingale-logo.png'
function App() {
  return (
    <div className="site">

      <div className="top-bar">
        Made to order in Crouch End, London N8 ✕ Free UK shipping over £30 ✕ Each piece stitched by hand
      </div>

      <header className="nav">

        <div className="logo">
          NIGHTINGALE STITCHERY
        </div>

        <nav>
          <a>Shop</a>
          <a>Made to Order</a>
          <a>About</a>
          <a>Contact</a>

          <button>Basket (0)</button>
        </nav>

      </header>

      <main className="hero">

        <section className="hero-text">

          <h1>
            NIGHTINGALE
            <br />
            STITCHERY
          </h1>

          <div className="meta">
            EST. 2026 &nbsp;&nbsp; CROUCH END
          </div>

          <h2>
            Modern cross-stitch, made by hand.
          </h2>

          <p>
            Geometric and Japanese-inspired patterns,
            stitched one at a time in North London.
            Bookmarks, needle minders, cushion covers
            and totes — each one made just for you.
          </p>

          <div className="buttons">

            <button className="primary">
              Shop the collection
            </button>

            <button className="secondary">
              Meet Emma
            </button>

          </div>

          <div className="rating">
            ★★★★★ Rated 5 stars by customers
          </div>

        </section>

        <section className="hero-image">

<img
  src={hero}
  alt="Nightingale Stitchery"
/>

          <div className="sticker">
            Handmade with love
          </div>

        </section>

      </main>

    </div>
  )
}

export default App