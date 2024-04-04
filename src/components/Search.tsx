import React, { useContext, useRef, useState } from "react";
import { getSuggestions, TrackInfo, getSearchSuggestions } from "../lib/lib";
import { Knobs } from "./Knob";
import { setTrackContext, setIsResultsShownContext } from "../Contexts";
import styles from "../styles/search.module.css";
import SearchIcon from "../../assets/images/icons/SearchIcon.svg";
import Knob from "../../assets/images/icons/Knob.svg";

export function Search() {
  const [searchResults, setSearchResults] = useState([] as TrackInfo[]);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const resultBox = useRef();

  return (
    <nav className={styles.search}>
      <setIsResultsShownContext.Provider value={setIsResultsShown}>
        <SearchBar setSearchResults={setSearchResults} resultBox={resultBox} />
        {searchResults.length > 0 && isResultsShown && (
          <SearchResults searchData={searchResults} />
        )}
      </setIsResultsShownContext.Provider>
    </nav>
  );
}

function SearchBar({ setSearchResults, resultBox }: any) {
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
      <ConstrainSettings />
      <img src={SearchIcon} />
    </section>
  );
}

function ConstrainSettings() {
  const [isKnobsShown, setIsKnobsShow] = useState(false);
  function handleClick(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();

    setIsKnobsShow(!isKnobsShown);
  }
  return (
    <section style={{ position: "relative" }}>
      <img src={Knob} onClick={handleClick} />
      {isKnobsShown && <Knobs />}
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
