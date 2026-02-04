import { useState } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { CoinGrid } from './components/CoinGrid';
import { Footer } from './components/Footer';
import './styles.css';

export type Category = 'all' | 'cat' | 'dog' | 'frog' | 'top100';
export type SortBy = 'marketCap' | 'volume' | 'change';

export interface MemeCoins {
  symbol: string;
  name: string;
  category: 'cat' | 'dog' | 'frog' | 'other';
  marketCap: number;
  volume24h: number;
  change24h: number;
  holders: number;
  isHot: boolean;
}

const mockCoins: MemeCoins[] = [
  { symbol: 'BONK', name: 'Bonk', category: 'dog', marketCap: 1800000000, volume24h: 245000000, change24h: 12.5, holders: 890000, isHot: true },
  { symbol: 'WIF', name: 'dogwifhat', category: 'dog', marketCap: 2100000000, volume24h: 380000000, change24h: -3.2, holders: 195000, isHot: true },
  { symbol: 'POPCAT', name: 'Popcat', category: 'cat', marketCap: 890000000, volume24h: 125000000, change24h: 28.7, holders: 78000, isHot: true },
  { symbol: 'MEW', name: 'cat in a dogs world', category: 'cat', marketCap: 650000000, volume24h: 89000000, change24h: 5.1, holders: 112000, isHot: false },
  { symbol: 'PEPE', name: 'Pepe', category: 'frog', marketCap: 420000000, volume24h: 52000000, change24h: -8.4, holders: 45000, isHot: false },
  { symbol: 'SAMO', name: 'Samoyedcoin', category: 'dog', marketCap: 38000000, volume24h: 4200000, change24h: 1.2, holders: 32000, isHot: false },
  { symbol: 'MYRO', name: 'Myro', category: 'dog', marketCap: 95000000, volume24h: 18000000, change24h: 15.3, holders: 28000, isHot: true },
  { symbol: 'SLERF', name: 'Slerf', category: 'frog', marketCap: 78000000, volume24h: 12000000, change24h: -2.1, holders: 19000, isHot: false },
  { symbol: 'KITTY', name: 'Kitty Coin', category: 'cat', marketCap: 45000000, volume24h: 8500000, change24h: 42.8, holders: 15000, isHot: true },
  { symbol: 'DUKO', name: 'Duko', category: 'dog', marketCap: 52000000, volume24h: 9800000, change24h: 7.6, holders: 21000, isHot: false },
  { symbol: 'FWOG', name: 'Fwog', category: 'frog', marketCap: 33000000, volume24h: 5600000, change24h: -12.4, holders: 8500, isHot: false },
  { symbol: 'TACO', name: 'TacoCat', category: 'cat', marketCap: 28000000, volume24h: 4100000, change24h: 3.9, holders: 12000, isHot: false },
  { symbol: 'CHEEMS', name: 'Cheems', category: 'dog', marketCap: 67000000, volume24h: 11000000, change24h: 22.1, holders: 35000, isHot: true },
  { symbol: 'GIGA', name: 'Gigachad', category: 'other', marketCap: 145000000, volume24h: 28000000, change24h: 8.9, holders: 42000, isHot: true },
  { symbol: 'TREMP', name: 'Doland Tremp', category: 'other', marketCap: 89000000, volume24h: 15000000, change24h: -5.6, holders: 25000, isHot: false },
  { symbol: 'BOME', name: 'BOOK OF MEME', category: 'other', marketCap: 680000000, volume24h: 95000000, change24h: 4.2, holders: 165000, isHot: true },
];

function App() {
  const [category, setCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortBy>('marketCap');
  const [showHotOnly, setShowHotOnly] = useState(false);

  const filteredCoins = mockCoins
    .filter(coin => {
      if (category === 'all') return true;
      if (category === 'top100') return true;
      return coin.category === category;
    })
    .filter(coin => !showHotOnly || coin.isHot)
    .sort((a, b) => {
      switch (sortBy) {
        case 'marketCap':
          return b.marketCap - a.marketCap;
        case 'volume':
          return b.volume24h - a.volume24h;
        case 'change':
          return b.change24h - a.change24h;
        default:
          return 0;
      }
    });

  const coinCount = filteredCoins.length;

  return (
    <div className="app">
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <Header />
      <main className="main-content">
        <FilterBar
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showHotOnly={showHotOnly}
          setShowHotOnly={setShowHotOnly}
          coinCount={coinCount}
        />
        <CoinGrid coins={filteredCoins} />
      </main>
      <Footer />
    </div>
  );
}

export default App;