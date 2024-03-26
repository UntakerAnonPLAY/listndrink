import React from "react";

//a React wrapper around Spotify Embed
export function SpotifyEmbed({ trackId }: { trackId: string }) {
  return (
    <iframe
      style={{
        borderRadius: "12px",
        width: "100%",
        boxSizing: "border-box",
      }}
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
      height="152"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
