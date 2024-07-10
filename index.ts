import { reverse, chunk, getPieces } from "./utils";

export default (n: number) => {
  const reverseTextOfn = reverse(n);
  const chunked = chunk(reverseTextOfn)!;
  const chunkedReversed = chunked.map((x) => reverse(x));

  return getPieces(chunkedReversed);
};
