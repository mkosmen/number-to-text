import { numbers, pieces } from "./constants";

export const reverse = (t: string | number) => {
  if (typeof t === "number") {
    t = t.toString();
  }

  return t.split("").reverse().join("");
};

export const chunk = (t: string, end = 3) =>
  t.match(new RegExp(`.{1,${end}}`, "g"));

export const getPieces = (n: string[]) => {
  const p: string[] = [];

  n.forEach((t, i) => {
    let r = "";

    switch (t.length) {
      case 1:
        r += numbers[t as keyof typeof numbers];
        break;

      case 2:
      case 3:
        r += numbers.hasOwnProperty(t as keyof typeof numbers)
          ? numbers[t as keyof typeof numbers]
          : writeNumber(t);
        break;
    }

    if (i in pieces) {
      r += ` ${pieces[i as unknown as keyof typeof pieces]}`;
    }

    p.push(r);
  });

  return p.reverse().join(" ");
};

const writeNumber = (t: string) => {
  switch (t.length) {
    case 1:
      return numbers[t[0] as keyof typeof numbers];

    case 2:
      return `${numbers[`${t[0]}0` as keyof typeof numbers]} ${
        t[1] === "0" ? "" : numbers[t[1] as keyof typeof numbers]
      }`;

    case 3:
      let result = `${numbers[t[0] as keyof typeof numbers]} hundred`;

      if (t[1] !== "0") {
        result += ` ${numbers[`${t[1]}0` as keyof typeof numbers]}`;
      }

      if (t[2] !== "0") {
        result += ` ${numbers[t[2] as keyof typeof numbers]}`;
      }

      return result;
  }
};
