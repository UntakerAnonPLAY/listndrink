import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const spotifyClient = SpotifyApi.withClientCredentials(
  "60b0cdf71e324bf688a2bdf7d5b5a4b9",
  "ae7a9cb11b654580925f0cd8f407950d"
);

export interface TrackInfo {
  id: string;
  name: string;
  imgUrl: string;
  artist: string;
}

//fixed value in Spotify web API
const MAX_NUMBER_OF_SUGGESTIONS = 1000;

export async function* getSearchSuggestions(value: string, amount = 20) {
  for (let page = 0; page <= MAX_NUMBER_OF_SUGGESTIONS / amount; page++) {
    const trackInfos: TrackInfo[] = [];
    const data = await spotifyClient.search(
      value,
      ["track"],
      null,
      amount as any,
      page * amount
    );

    //preserve the order of the results
    for (let i = 0; i < data.tracks.items.length; i++) {
      const track = data.tracks.items[i];
      trackInfos.push({
        id: track.id,
        name: track.name,
        //get middle size image
        imgUrl: track.album.images.filter((img) => img.width === 300)[0].url,
        artist: track.artists.map((artist) => artist.name).join(", "),
      });
    }

    yield trackInfos;
  }
}

export async function getSuggestions(
  value: string,
  amount = 20
): Promise<TrackInfo[]> {
  const trackInfos: TrackInfo[] = [];
  await spotifyClient
    .search(value, ["track"], null, amount as any)
    .then((data) => {
      //preserve the order of the results
      for (let i = 0; i < data.tracks.items.length; i++) {
        const track = data.tracks.items[i];
        trackInfos.push({
          id: track.id,
          name: track.name,
          //get middle size image
          imgUrl: track.album.images.filter((img) => img.width === 300)[0].url,
          artist: track.artists.map((artist) => artist.name).join(", "),
        });
      }
    });

  return trackInfos;
}

export async function getWineRecommendation(trackId: string) {
  const audioFeatures = await spotifyClient.tracks.audioFeatures(trackId);
  return ["red", "smooth'n'fruity"];
}
