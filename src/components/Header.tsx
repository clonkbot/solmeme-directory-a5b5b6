export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-icon">S</div>
        <div className="logo-text">
          <span className="logo-title">SOLMEME</span>
          <span className="logo-subtitle">Meme Coin Directory</span>
        </div>
      </div>
      <nav className="header-nav">
        <button className="nav-btn primary">Browse</button>
        <button className="nav-btn secondary">Leaderboard</button>
      </nav>
    </header>
  );
}