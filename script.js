const API_KEY = process.env.API_KEY; // Ensure this is correctly set in your environment

async function searchChatGPT() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;

    // Open ChatGPT in a new tab
    const chatGPTUrl = "https://chat.openai.com/";
    const chatGPTTab = window.open(chatGPTUrl, '_blank');

    // Wait for a second to allow the new tab to load, then try to paste the query
    setTimeout(() => {
        navigator.clipboard.writeText(query).then(() => {
            alert("Copied to clipboard! Paste it in ChatGPT.");
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    }, 1000);
}

function searchGoogle() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

function searchYouTube() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    }
}

function multiSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        setTimeout(() => {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
        }, 500);
    }
}
