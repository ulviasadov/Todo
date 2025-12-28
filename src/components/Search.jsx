import "../assets/search.css";

export default function Search({setSearchValue}) {
    return <div className="search-container">
        <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="search-input" />
    </div>
}