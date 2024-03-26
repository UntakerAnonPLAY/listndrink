import type { GenericWineDescription } from "../types/genericWineDescription";

//support only red wines for now
const config: GenericWineDescription[] = [
  {
    type: "red",
    taste: "berried'n'fresh",
    tasteDescription: {
      taste: `Berried and fresh reds are light or medium-bodied wines infused with the flavours and acidity of fresh berries.
	  		You can discern ripe cranberry, raspberry and cherry notes in these wines.
	  		Crisp freshness makes them ideal for a variety of foods.`,
      tipsForUse: `Berried and fresh reds go well with pasta, vegetable and chicken dishes and internal organs, such as liver, but also with fish.
	  		Try with tomato-based pasta dishes, chicken stew with Moroccan spices or oven-baked salmon topped with blue cheese.`,
      howToServe: `Red wines are best served slightly below room temperature, at 16-18°C.
	  		Chilling a bottle from room temperature to the perfect serving temperature takes about half an hour in a fridge.`,
    },
  },
  {
    type: "red",
    taste: "smooth'n'fruity",
    tasteDescription: {
      taste: `Smooth and fruity reds are medium-bodied or full-bodied wines that often have a trace of sweetness. Soft fruitiness is a typical characteristic of these wines.
	  		You can discern notes of ripe or dried fruits and delicate spiciness in these wines.
			With low or medium tannins, they are also suitable for those with a sensitive mouth.`,
      tipsForUse: `These versatile players of the red wine world are ideal for socialising and buffet tables.
			Try with sweet-and-sour pork stew, Thai chicken curry or spicy sausages, such as chorizo or salami.`,
      howToServe: `Red wines are best served slightly below room temperature, at 16-18°C.
	  		Chilling a bottle from room temperature to the perfect serving temperature takes about half an hour in a fridge.`,
    },
  },
  {
    type: "red",
    taste: "luscious'n'jammy",
    tasteDescription: {
      taste: `Luscious and jammy reds are medium-bodied, full-bodied or very full-bodied wines that combine ripe berry notes and pronounced jammy flavours.
	  		You can discern notes of cherry jam, wild berry jam or dark plum in these wines.
	  		Ripe tannins add the necessary structure for pairing the wines with food.`,
      tipsForUse: `Wines with rich flavours and aromas are a good choice when serving meat dishes.
	  		Try with BBQ-marinated pork ribs, beef and vegetable skewers or T bone steaks.`,
      howToServe: `Red wines are best served slightly below room temperature, at 16-18°C.
	  		Chilling a bottle from room temperature to the perfect serving temperature takes about half an hour in a fridge.`,
    },
  },
  {
    type: "red",
    taste: "nuanced'n'developed",
    tasteDescription: {
      taste: `Nuanced and developed reds are medium-bodied or full-bodied wines in which maturation has created notes of leather, stable, oak and herbs.
	  		These earthy flavours and aromas become more pronounced as the wine matures and develops.
			Oak maturation also adds spicy and vanilla notes.`,
      tipsForUse: `Nuanced and developed wines go well will rustic meat dishes. You can also pair them with cheese or enjoy them on their own.
	  		Try with reindeer steak, entrecôte or hard, aged cheeses, such as Gouda, Parmesan or Manchego.`,
      howToServe: `Red wines are best served slightly below room temperature, at 16-18°C.
	  		Chilling a bottle from room temperature to the perfect serving temperature takes about half an hour in a fridge.`,
    },
  },
  {
    type: "red",
    taste: "robust'n'powerful",
    tasteDescription: {
      taste: `Robust and powerful reds are full-bodied or very full-bodied wines that have rich flavours.
	  		Due to oak maturation, you can discern powerful spicy notes.
	  		High tannins lend these wines a good structure.`,
      tipsForUse: `Due to their tannins, these wines are a good match for equally robust foods, such as game and other hearty meat dishes or strong cheeses.
	  		Try with venison or rabbit stew, herb-marinated lamb chops or strong cheeses, such as aged Gruyère or Roquefort.`,
      howToServe: `Red wines are best served slightly below room temperature, at 16-18°C.
	  		Chilling a bottle from room temperature to the perfect serving temperature takes about half an hour in a fridge.`,
    },
  },
  {
    type: "default",
    tasteDescription: {
      taste: "This wine type is not yet supported.",
      tipsForUse: "This wine type is not yet supported.",
      howToServe: "This wine type is not yet supported.",
    },
  },
];

export default config;
