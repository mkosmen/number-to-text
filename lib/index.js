import { reverse, chunk, getPieces } from "./utils";
export default (function (n) {
    var reverseTextOfn = reverse(n);
    var chunked = chunk(reverseTextOfn);
    var chunkedReversed = chunked.map(function (x) { return reverse(x); });
    return getPieces(chunkedReversed);
});
