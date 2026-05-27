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
      <section className="shop-section">
  <p className="section-kicker">Browse the shop</p>
  <h2>What would you like stitched?</h2>

  <div className="category-grid">
    <div className="category-card">
      <div className="stitch-icon">◯</div>
      <h3>Bookmarks</h3>
    </div>

    <div className="category-card">
      <div className="stitch-icon">✣</div>
      <h3>Needle Minders</h3>
    </div>

    <div className="category-card">
      <div className="stitch-icon">×</div>
      <h3>Cushion Covers</h3>
    </div>

    <div className="category-card">
      <div className="stitch-icon">♥</div>
      <h3>Tote Bags</h3>
    </div>

    <div className="category-card">
      <div className="stitch-icon">❦</div>
      <h3>Made to Order</h3>
    </div>
  </div>
</section>
<section className="featured-section">
  <p className="section-kicker">Fresh off the hoop</p>
  <h2>Featured pieces</h2>
  <p className="section-intro">
    A few favourites to start with. Every design can be made in your choice of cloth colour — just ask.
  </p>

  <div className="product-grid">
    <div className="product-card">
      <div className="product-image pink-card">✧ ◯ ✧</div>
      <h3>Crescent Moon Bookmark</h3>
      <p className="price">£12.00</p>
      <p>Cream & coral on hot pink Aida</p>
    </div>

    <div className="product-card">
      <div className="product-image coral-card">♥</div>
      <h3>Heart & Frame Bookmark</h3>
      <p className="price">£12.00</p>
      <p>Cream & lime on coral Aida</p>
    </div>

    <div className="product-card">
      <div className="product-image black-card">▦ ▦ ▦</div>
      <h3>Seigaiha Wave Cushion</h3>
      <p className="price">£38.00</p>
      <p>Japanese wave pattern on black</p>
    </div>

    <div className="product-card">
      <div className="product-image soft-card">☀</div>
      <h3>Sunshine Needle Minder</h3>
      <p className="price">£9.50</p>
      <p>Tangerine & lime on soft pink</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default App