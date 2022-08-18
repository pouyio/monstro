import data from "./adjs.json";

const adjs: string[] = data;

const random = (max: number) => Math.floor(Math.random() * (max));

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
  let baseHexNumber = (id * 1000).toString(16).toUpperCase()

  if (baseHexNumber.length < 6) {
    for (let i = baseHexNumber.length; i < 6; i++) {
      baseHexNumber += "0";
    }
    baseHexNumber = [...baseHexNumber]
      .sort(() => 0.5 - Math.random())
      .toString()
      .replace(/,/g, "");
  }
  const randomAlpha = alphaHexPertentages[random(alphaHexPertentages.length)];

  return `${baseHexNumber}${randomAlpha}`;
};

export const getRandom = () => {
  const index = random(adjs.length);
  const color = getRandomBackgroundColor(index);
  return { adj: adjs[index], color };
};
