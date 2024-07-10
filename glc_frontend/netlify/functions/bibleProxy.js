// netlify/functions/bibleProxy.js
// const fetch = require("node-fetch");
import fetch from "node-fetch";
exports.handler = async function (event) {
    // Get the query parameter from the request
    const query = event.queryStringParameters.query;

    // Define the API endpoint and key
    const url = `https://api.scripture.api.bible/v1/bibles/${
        process.env.VITE_BIBLE_ID
    }/search?query=${encodeURIComponent(query)}&sort=relevance`;
    const api_key = process.env.VITE_BIBLE_API_KEY;

    try {
        // Make the request to the Bible API
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "api-key": api_key,
                Accept: "application/json",
            },
        });
        const data = await response.json();

        // Return a successful response with the API data
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
    } catch (error) {
        // Handle errors gracefully
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() }),
        };
    }
};
