import { createContext } from "react";
import { TrackInfo } from "./lib";

//track selection context
export const setTrackContext = createContext(
  {} as React.Dispatch<React.SetStateAction<TrackInfo>>
);

//hiding results context
export const setIsResultsShownContext = createContext(
  {} as React.Dispatch<React.SetStateAction<boolean>>
);
