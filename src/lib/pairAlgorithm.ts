import wineTypesConfig from "../configs/genericWineDescription.config";

const wineTypes = wineTypesConfig.map((wineDesc) => {
  return [wineDesc.type, wineDesc.taste];
});

export function pairTrack(trackId: string) {
  return wineTypes[Math.floor(Math.random() * wineTypes.length)];
}
