import { Category, SortBy } from '../App';

interface FilterBarProps {
  category: Category;
  setCategory: (cat: Category) => void;
  sortBy: SortBy;
  setSortBy: (sort: SortBy) => void;
  showHotOnly: boolean;
  setShowHotOnly: (show: boolean) => void;
  coinCount: number;
}

export function FilterBar({
  category,
  setCategory,
  sortBy,
  setSortBy,
  showHotOnly,
  setShowHotOnly,
  coinCount,
}: FilterBarProps) {
  return (
    <div>
      <div className="filter-bar">
        <div className="filter-left">
          <span className="filter-label">Sort by:</span>
          <button
            className={`filter-btn ${sortBy === 'marketCap' ? 'active' : ''}`}
            onClick={() => setSortBy('marketCap')}
          >
            Market Cap
          </button>
          <button
            className={`filter-btn ${sortBy === 'volume' ? 'active' : ''}`}
            onClick={() => setSortBy('volume')}
          >
            Volume
          </button>
          <button
            className={`filter-btn ${sortBy === 'change' ? 'active' : ''}`}
            onClick={() => setSortBy('change')}
          >
            24h Change
          </button>
          <button
            className={`filter-btn hot-toggle ${showHotOnly ? 'active' : ''}`}
            onClick={() => setShowHotOnly(!showHotOnly)}
          >
            <span className="dot" />
            Hot Only
          </button>
        </div>
        <div className="filter-right">
          {coinCount} tokens
        </div>
      </div>
      <div className="category-tabs">
        <button
          className={`category-tab ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory('all')}
        >
          <span className="emoji">🌟</span>
          All Tokens
        </button>
        <button
          className={`category-tab ${category === 'top100' ? 'active' : ''}`}
          onClick={() => setCategory('top100')}
        >
          <span className="emoji">🏆</span>
          Top 100
        </button>
        <button
          className={`category-tab ${category === 'cat' ? 'active' : ''}`}
          onClick={() => setCategory('cat')}
        >
          <span className="emoji">🐱</span>
          Cat Tokens
        </button>
        <button
          className={`category-tab ${category === 'dog' ? 'active' : ''}`}
          onClick={() => setCategory('dog')}
        >
          <span className="emoji">🐕</span>
          Dog Tokens
        </button>
        <button
          className={`category-tab ${category === 'frog' ? 'active' : ''}`}
          onClick={() => setCategory('frog')}
        >
          <span className="emoji">🐸</span>
          Frog Tokens
        </button>
      </div>
    </div>
  );
}