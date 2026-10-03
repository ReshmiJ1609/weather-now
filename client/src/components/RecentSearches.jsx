function RecentSearches({ searches, onSelectCity }) {
  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div className="recent-searches">
      <h2>🕘 Recent Searches</h2>

      <div className="recent-list">
        {searches.map((search) => (
          <button
            key={search._id}
            onClick={() => onSelectCity(search.city)}
          >
            📍 {search.city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;