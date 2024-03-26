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

export async function getSuggestions(value: string): Promise<TrackInfo[]> {
  const trackInfos: TrackInfo[] = [];
  await spotifyClient.search(value, ["track"]).then((data) => {
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
