import data from "./adjs.json";

const adjs: string[] = data;

function random(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

const getRandomBackgroundColor = (id: number) => {
  const hexEquivalent = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
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
  const divideToHexadecimal = 16;
  let baseTenNumber = id * 1000;
  let remainder = 0;
  let lightColor = "";

  do {
    [baseTenNumber, remainder] = [
      Math.floor(baseTenNumber / divideToHexadecimal),
      Math.floor(baseTenNumber % divideToHexadecimal),
    ];
    remainder < 10
      ? (lightColor += remainder)
      : (lightColor += hexEquivalent[remainder]);
  } while (baseTenNumber >= 1 && lightColor.length < 6);

  let sortedValueToHexadecimal = lightColor.split("").reverse().join("");
  if (sortedValueToHexadecimal.length < 6) {
    for (let i = sortedValueToHexadecimal.length; i < 6; i++) {
      sortedValueToHexadecimal += "0";
    }
    sortedValueToHexadecimal = Array.from(sortedValueToHexadecimal)
      .sort(() => 0.5 - Math.random())
      .toString()
      .replace(/,/g, "");
  }
  const randomAlpha =
    alphaHexPertentages[Math.floor(Math.random() * alphaHexPertentages.length)];

  return `${sortedValueToHexadecimal}${randomAlpha}`;
};

export const getRandom = () => {
  const index = random(adjs.length - 1);
  const color = getRandomBackgroundColor(index);
  return { adj: adjs[index], color };
};
