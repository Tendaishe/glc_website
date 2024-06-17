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

    const extractTextFromHTML = (htmlString: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const pElements = doc.querySelectorAll("p");
        let textContent = "";

        pElements.forEach((p) => {
            const spans = p.querySelectorAll("span.v");
            spans.forEach((span) => span.remove());
            textContent += p.textContent + " ";
        });

        return textContent.trim();
    };

    const searchBibleVerses = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setSearchAttempted(true);

        const bibleId = import.meta.env.VITE_BIBLE_ID;
        const apiKey = import.meta.env.VITE_BIBLE_API_KEY;

        // Construct the URL with additional parameters
        const url = `https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${encodeURIComponent(
            query
        )}&sort=relevance`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "api-key": apiKey,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response data:", data); // Debugging

            if (data.data && data.data.verses) {
                setResults(data.data.verses);
            } else if (data.data && data.data.passages) {
                setResults(
                    data.data.passages.map((passage: any) => ({
                        id: passage.id,
                        text: extractTextFromHTML(passage.content),
                        reference: passage.reference,
                    }))
                );
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        }
        setLoading(false);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
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
