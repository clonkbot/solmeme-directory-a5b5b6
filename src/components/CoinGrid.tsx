import { MemeCoins } from '../App';
import { CoinCard } from './CoinCard';

interface CoinGridProps {
  coins: MemeCoins[];
}

export function CoinGrid({ coins }: CoinGridProps) {
  return (
    <div className="coin-grid">
      {coins.map((coin, index) => (
        <CoinCard key={coin.symbol} coin={coin} index={index} />
      ))}
    </div>
  );
}