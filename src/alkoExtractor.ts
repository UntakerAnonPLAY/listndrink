import axios from "axios";
import he from "he";
import { parse, HTMLElement } from "node-html-parser";

//no need in imgSlug, can be constructed from id and name
export interface WineData {
  id: string; //
  name: string; //
  type: string;
  taste: string;
  description: string; //
  country: string;
  grapeSort: string;
  tags: string[];
  price: number; //
  imgSlug: string; //
  productDetails: ProductDetails;
}

// ProductDetails doesn't correspond fully to the Product Details on Alko website
interface ProductDetails {
  alcohol: number;
  sugar: number;
  acids: number;
  energy: number;
  litres: number;
  packaging: string;
  closure: string;
}

//Alko's website contains itemprop attributes, which can be used to extract data
const itempropActions: {
  prop: string;
  hook: (el: HTMLElement) => string | number;
}[] = [
  {
    prop: "name",
    hook: (el) => he.decode(el.innerText).trim(),
  },
  {
    prop: "description",
    hook: (el) => he.decode(el.innerText).trim(),
  },
  {
    prop: "price",
    hook: (el) => Number(el.getAttribute("content")),
  },
  {
    prop: "image",
    hook: (el) => {
      const href = el.getAttribute("href");
      //need only last part, because url can be constructed cdn+id+slug
      const imgSlug = href.substring(href.lastIndexOf("/") + 1);
      return imgSlug;
    },
  },
  {
    prop: "sku",
    hook: (el) => el.innerText,
  },
];

async function ExtractWineData(url: string) {
  const config = {
    headers: {
      "upgrade-insecure-requests": 1,
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Sec-CH-UA": `"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"`,
      "Sec-CH-UA-Mobile": "?0",
      "Sec-CH-UA-Platform": `"macOS"`,
      "Sec-Fetch-Site": "cross-site",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Accept-Language": "en-US,en;q=0.9,ru;q=0.8",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
      Host: "www.alko.fi",
    },
  };
  console.log((await axios.get(url, config)).data);
  // const html = parse((await axios.get(url)).data, {
  //   blockTextElements: {
  //     script: false,
  //     noscript: false,
  //     style: false,
  //   },
  // });

  // itempropActions.forEach((itempropAction) => {
  //   const el = html.querySelector(`*[itemprop="${itempropAction.prop}"]`);
  //   console.log(itempropAction.hook(el));
  // });

  // html.querySelectorAll(".food-pairings li a").forEach((el) => {
  //   console.log(el.getAttribute("aria-label"));
  // });

  // html.querySelectorAll(".hard-facts").forEach((el) => {
  //   console.log(he.decode(el.innerText.trim()));
  // });
}

// ExtractWineData(
//   "https://www.alko.fi/en/products/941973/Graf-von-Sch-nborn-Riesling-Feinherb-2018/"
// );
const config = {
  headers: {
    "upgrade-insecure-requests": 1,
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15",
    "Sec-CH-UA": `"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"`,
    "Sec-CH-UA-Mobile": "?0",
    "Sec-CH-UA-Platform": `"macOS"`,
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Accept-Language": "en-US,en;q=0.9,ru;q=0.8",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    //visid_incap_2611631:
    //  "vmmKONFmRHm12DiBgfvW0vfA6GUAAAAAQUIPAAAAAAABxatP4T8ZRcbcnJjn1vw8",
    //incap_ses_722_2611631:
    //  "hisbCeAJmylQcxz9ghAFCvfA6GUAAAAAMQg4UfRsaXADyClSBqKu8Q==",
  },
};

axios
  .get(
    "https://www.alko.fi/en/products/941973/Graf-von-Sch-nborn-Riesling-Feinherb-2018/",
    config
  )
  .then(async (res) => {
    console.log(res.data);
  });
