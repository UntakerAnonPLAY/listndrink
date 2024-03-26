import React, { useContext, useState } from "react";
import { getSuggestions, TrackInfo } from "../lib";
import { setTrackContext, setIsResultsShownContext } from "../Contexts";
import styles from "../styles/search.module.css";
import Knob from "../../assets/images/icons/Knob.svg";
import SearchIcon from "../../assets/images/icons/SearchIcon.svg";

export function Search() {
  const [searchResults, setSearchResults] = useState([] as TrackInfo[]);
  const [isResultsShown, setIsResultsShown] = useState(false);

  return (
    <nav className={styles.search}>
      <setIsResultsShownContext.Provider value={setIsResultsShown}>
        <SearchBar setSearchResults={setSearchResults} />
        {searchResults.length > 0 && isResultsShown && (
          <SearchResults searchData={searchResults} />
        )}
      </setIsResultsShownContext.Provider>
    </nav>
  );
}

function SearchBar({ setSearchResults }: any) {
  const setIsResultsShown = useContext(setIsResultsShownContext);
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      return setSearchResults([]);
    }

    getSuggestions(event.target.value).then((trackInfos) =>
      setSearchResults(trackInfos)
    );
  }
  return (
    <section className={styles.searchBox}>
      <input
        type="text"
        onInput={handleInput}
        // onBlur={() => setIsResultsShown(false)}
        onFocus={() => setIsResultsShown(true)}
      ></input>
      <img src={Knob} />
      <img src={SearchIcon} />
    </section>
  );
}

function SearchResults({ searchData }: { searchData: TrackInfo[] }) {
  return (
    <div className={styles.results}>
      {searchData.map((trackInfo) => (
        <SearchResult key={trackInfo.id} trackInfo={trackInfo} />
      ))}
    </div>
  );
}

function SearchResult({ trackInfo }: { trackInfo: TrackInfo }) {
  const setSelectedTrack = useContext(setTrackContext);
  const setIsResultsShown = useContext(setIsResultsShownContext);

  function handleClick(event: any) {
    event.stopPropagation();

    setSelectedTrack(trackInfo);
    setIsResultsShown(false);
  }

  return (
    <div className={styles.track} onClick={handleClick}>
      <img src={trackInfo.imgUrl} alt={trackInfo.name} />
      <div>
        <h3>{trackInfo.name}</h3>
        <p>{trackInfo.artist}</p>
      </div>
    </div>
  );
}
