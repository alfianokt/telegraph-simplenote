var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/path-parser.ts
var path_parser_exports = {};
__export(path_parser_exports, {
  decode: () => decode,
  encode: () => encode
});
var c = "abcdefghijklmnopqrstuvwxyzABCDEF";
var ca = c.split("");
var encode = (p) => {
  try {
    const ps = p.split("-");
    return [
      ca[parseInt(ps[1])],
      ca[parseInt(ps[2])],
      ps.length > 3 ? ps[3].split("").map((e) => ca[e]).join("") : ""
    ].join("");
  } catch (e) {
    return "";
  }
};
var decode = (c2) => {
  try {
    const cs = c2.split("");
    return cs.map((e, i) => {
      const _ = ca.indexOf(e);
      return i < 2 ? (_ < 10 ? `0${_}` : _) + "-" : _;
    }).join("");
  } catch (e) {
    return null;
  }
};

// main.ts
console.log(path_parser_exports.encode("p-02-02-5765"));
console.log(path_parser_exports.decode("ccfhgf"));
