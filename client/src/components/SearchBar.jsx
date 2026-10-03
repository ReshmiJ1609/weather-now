import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedCity = city.trim();

    if (trimmedCity === "") {
      return;
    }

    onSearch(trimmedCity);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading || city.trim() === ""}
      >
        {loading ? "Searching..." : "🔍 Search"}
      </button>

    </form>
  );
}

export default SearchBar;