import { useState } from "react";
import IVerse from "./IVerse";
import "./Bible.css";
import Verse from "../../components/Verse/Verse";

const Bible = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchAttempted, setSearchAttempted] = useState(false);

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

    const searchBibleVerses = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setSearchAttempted(true);
        const url = `https://api.scripture.api.bible/v1/bibles/${
            import.meta.env.VITE_BIBLE_ID
        }/search?query=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "api-key": import.meta.env.VITE_BIBLE_API_KEY,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log(data);
            if (data.data && data.data.verses) {
                setResults(data.data.verses);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error(error);
            setResults([]);
        }
        setLoading(false);
    };

    const handleKeyDown = (event: any) => {
        if (event.key == "Enter") {
            searchBibleVerses();
        }
    };

    return (
        <div className="bible-search-container">
            <h2 className="bible-search-heading">Search the Bible</h2>
            <div className="search-box">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter verse, phrase, or keyword"
                    className="search-input"
                />
                <button onClick={searchBibleVerses} className="search-button">
                    Search
                </button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : searchAttempted ? (
                results.length > 0 ? (
                    <ul className="verses-container">
                        {results.map((verse: IVerse, index) => (
                            <Verse key={index} {...verse} />
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )
            ) : null}
        </div>
    );
};

export default Bible;
