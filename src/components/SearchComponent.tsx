import React, { useState } from "react";

interface SearchComponentProps {
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder = "Search..." }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Element[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Clear previous highlights
    document.querySelectorAll(".highlight").forEach((el) => {
      el.classList.remove("highlight");
    });

    if (query.trim()) {
      const matches = Array.from(
        document.querySelectorAll("*:not(script):not(style):not(input):not(textarea)")
      ).filter((el) => el.textContent?.toLowerCase().includes(query.toLowerCase()));

      matches.forEach((match) => {
        const htmlWithHighlight = match.innerHTML.replace(
          new RegExp(`(${query})`, "gi"),
          `<span class="highlight">$1</span>`
        );
        match.innerHTML = htmlWithHighlight;
      });

      setSearchResults(matches);
    } else {
      setSearchResults([]);
    }
  };

  const navigateToMatch = (direction: "next" | "prev") => {
    if (!searchResults.length) return;

    let newIndex = currentIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % searchResults.length;
    } else {
      newIndex = (currentIndex - 1 + searchResults.length) % searchResults.length;
    }

    setCurrentIndex(newIndex);
    const target = searchResults[newIndex];
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        style={styles.input}
      />
      <button
        onClick={() => navigateToMatch("prev")}
        style={styles.button}
        disabled={!searchResults.length}
      >
        Prev
      </button>
      <button
        onClick={() => navigateToMatch("next")}
        style={styles.button}
        disabled={!searchResults.length}
      >
        Next
      </button>
      <style>
        {`
          .highlight {
            background-color: yellow;
            color: black;
            padding: 2px;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  searchContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    backgroundColor: "#1e293b",
    padding: "8px 16px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "16px",
    padding: "4px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "4px 8px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default SearchComponent;
