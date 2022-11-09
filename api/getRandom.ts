import fetch from "node-fetch";

const API_KEY = "keydJdxwQuUaBjQLA";
let adjs: string[] = [];

const randomNumber = (max: number) => Math.floor(Math.random() * max);

const getRandomBackgroundColor = (id: number) => {
  const alphaHexPertentages = [
    "33",
    "40",
    "4D",
    "59",
    "66",
    "73",
    "80",
    "8C",
    "99",
  ];
  let baseHexNumber = (id * 1000).toString(16).toUpperCase();

  if (baseHexNumber.length < 6) {
    for (let i = baseHexNumber.length; i < 6; i++) {
      baseHexNumber += "0";
    }
    baseHexNumber = [...baseHexNumber]
      .sort(() => 0.5 - Math.random())
      .toString()
      .replace(/,/g, "");
  }
  const randomAlpha =
    alphaHexPertentages[randomNumber(alphaHexPertentages.length)];

  return `${baseHexNumber}${randomAlpha}`;
};

export const getRandom = async () => {
  if (!adjs.length) {
    const response = await fetch(
      "https://api.airtable.com/v0/appzEOo9mZYfiP809/Adjetives?maxRecords=1000&view=Grid%20view&filterByFormula=%7BStatus%7D+%3D+'Live'",
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    adjs = await response
      .json()
      .then((r: any) => r.record.map((item) => item.Name));
  }
  const index = randomNumber(adjs.length);
  const color = getRandomBackgroundColor(index);
  return { adj: adjs[index], color };
};
