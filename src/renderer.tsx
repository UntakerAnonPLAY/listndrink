import "./styles/index.css";

import { createRoot } from "react-dom/client";
import { Search } from "./components/Search";
import React, { useState } from "react";
import { setTrackContext } from "./Contexts";
import { TrackInfo } from "./lib/lib";
import { Article } from "./components/Article";

function App() {
  const [selectedTrack, setSelectedTrack] = useState({} as TrackInfo);

  return (
    <>
      <setTrackContext.Provider value={setSelectedTrack}>
        <Search />
      </setTrackContext.Provider>
      {"id" in selectedTrack && <Article track={selectedTrack} />}
    </>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
