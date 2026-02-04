import { MemeCoins } from '../App';

interface CoinCardProps {
  coin: MemeCoins;
  index: number;
}

function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function getCategoryEmoji(category: string): string {
  switch (category) {
    case 'cat':
      return '🐱';
    case 'dog':
      return '🐕';
    case 'frog':
      return '🐸';
    default:
      return '✨';
  }
}

export function CoinCard({ coin, index }: CoinCardProps) {
  const isPositive = coin.change24h >= 0;

  return (
    <div
      className={`coin-card ${coin.category} ${coin.isHot ? 'hot' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="card-header">
        <span className="category-badge">
          {getCategoryEmoji(coin.category)}
        </span>
        {coin.isHot && (
          <div className="hot-badge">
            <span className="dot" />
            Hot
          </div>
        )}
        <span className="coin-initial">{coin.symbol[0]}</span>
      </div>
      <div className="card-body">
        <h3 className="coin-name">{coin.name}</h3>
        <p className="coin-symbol">${coin.symbol}</p>
        <div className="coin-stats">
          <div className="stat">
            <div className="stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <div className="stat-value">${formatNumber(coin.marketCap)}</div>
              <div className="stat-label">MCap</div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <div className="stat-value">${formatNumber(coin.volume24h)}</div>
              <div className="stat-label">24h Vol</div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isPositive ? (
                  <path d="M18 15l-6-6-6 6" />
                ) : (
                  <path d="M6 9l6 6 6-6" />
                )}
              </svg>
            </div>
            <div>
              <div className={`stat-value ${isPositive ? 'positive' : 'negative'}`}>
                {isPositive ? '+' : ''}{coin.change24h.toFixed(1)}%
              </div>
              <div className="stat-label">24h</div>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="stat-value">{formatNumber(coin.holders)}</div>
              <div className="stat-label">Holders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}