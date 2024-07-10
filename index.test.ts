import { expect, test } from "@jest/globals";
import number2Text from "./index";

const numbers = {
  1: "one",
  43: "forty three",
  50: "fifty",
  100: "one hundred",
  101: "one hundred one",
  259: "two hundred fifty nine",
  6147: "six thousand one hundred forty seven",
  83501: "eighty three thousand five hundred one",
};

Object.keys(numbers).forEach((f) => {
  test(`text of ${f}`, () => {
    expect(number2Text(+f)).toBe(numbers[f]);
  });
});
