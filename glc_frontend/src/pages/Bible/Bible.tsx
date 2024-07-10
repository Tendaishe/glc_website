import { useState } from "react";
import IVerse from "./IVerse";
import "./Bible.css";
import Pagination from "./Pagination";
import Verse from "../../components/Verse/Verse";

const Bible = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchAttempted, setSearchAttempted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const versesPerPage = 10;

    const handlePageClick = (data: any) => {
        setCurrentPage(data.selected + 1);
        window.scrollTo(0, 0);
    };

    const indexOfFirstVerse = (currentPage - 1) * versesPerPage;
    const indexOfLastVerse = indexOfFirstVerse + versesPerPage;
    const currentVerses = results.slice(indexOfFirstVerse, indexOfLastVerse);

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

    const extractTextFromHTML = (htmlString: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const pElements = doc.querySelectorAll("p");
        let verses: IVerse[] = [];

        pElements.forEach((p) => {
            const childNodes = Array.from(p.childNodes);
            let currentReference = "";
            let verseText = "";

            childNodes.forEach((node) => {
                // Check if the node is an Element and has the required properties
                if (
                    node.nodeType === Node.ELEMENT_NODE &&
                    (node as Element).tagName === "SPAN" &&
                    (node as Element).classList.contains("v")
                ) {
                    // If we already have verseText, push the previous verse to the array
                    if (verseText) {
                        verses.push({
                            id: currentReference,
                            text: `<p>${verseText.trim()}</p>`,
                            reference: currentReference,
                        });
                    }
                    // Reset for the next verse
                    currentReference =
                        (node as Element).getAttribute("data-sid") || ""; // Safely accessing getAttribute
                    verseText = ""; // Reset verse text
                } else {
                    // Accumulate text until the next verse span is found
                    verseText += node.textContent || "";
                }
            });

            // Add the last verse in the paragraph if any text has been collected
            if (verseText && currentReference) {
                verses.push({
                    id: currentReference,
                    text: `<p>${verseText.trim()}</p>`,
                    reference: currentReference,
                });
            }
        });

        return verses;
    };

    const searchBibleVerses = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setSearchAttempted(true);
        setCurrentPage(1);

        const url = `/.netlify/functions/bibleProxy?query=${encodeURIComponent(
            query
        )}&sort=relevance`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.data && data.data.verses) {
                const formattedVerses = data.data.verses.map((verse: any) => ({
                    id: verse.id,
                    text: `<p>${verse.text}</p>`,
                    reference: verse.reference,
                }));
                setResults(formattedVerses);
            } else if (data.data && data.data.passages) {
                const allVerses = data.data.passages.flatMap((passage: any) =>
                    extractTextFromHTML(passage.content).map((verse: any) => ({
                        id: passage.id,
                        text: verse.text,
                        reference: verse.reference,
                    }))
                );
                setResults(allVerses);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
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
                    <>
                        <ul className="verses-container">
                            {currentVerses.map((verse: IVerse, index) => (
                                <Verse key={index} {...verse} />
                            ))}
                        </ul>
                        <Pagination
                            pageCount={Math.ceil(
                                results.length / versesPerPage
                            )}
                            onPageChange={handlePageClick}
                        />
                    </>
                ) : (
                    <p>No results found.</p>
                )
            ) : null}
        </div>
    );
};

export default Bible;
