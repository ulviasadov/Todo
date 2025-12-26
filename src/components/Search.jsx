import { useState } from "react";
import "../assets/search.css";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");

    return <div className="search-container">
        <input value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="search-input" />
        <button type="submit" className="button-search">Search</button>
    </div>
}