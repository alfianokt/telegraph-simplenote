// src/path-parser.ts
var c = "abcdefghijklmnopqrstuvwxyzABCDEF";
var ca = c.split("");
var decode = (c2) => {
  try {
    const cs = c2.split("");
    return cs.map((e, i) => {
      const _ = ca.indexOf(e);
      return i < 2 ? _ < 10 ? `0${_}` : _ : _;
    }).join("-");
  } catch (e) {
    return null;
  }
};

// main.ts
console.log(decode("ccff"));
