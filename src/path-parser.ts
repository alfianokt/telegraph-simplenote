const c = "abcdefghijklmnopqrstuvwxyzABCDEF";
const ca = c.split('');

/**
 * Encode path to code
 *
 * @param {String} p path
 * @returns {String}
 */
export const encode = (p: String) => {
  try {
    const ps = p.split('-');
    return [
      ca[parseInt(ps[1])],
      ca[parseInt(ps[2])],
      ps.length > 3 ? ps[3].split('').map((e) => ca[e]).join('') : ''
    ].join('');
  } catch (e) {
    return '';
  }
};

/**
 * Decode code to path
 *
 * @param {String} c code
 * @returns {String}
 */
export const decode = (c: String) => {
  try {
    const cs = c.split('');
    return cs
      .map((e, i) => {
        const _ = ca.indexOf(e);
        return i < 2
          ? (_ < 10 ? `0${_}` : _).toString() + (i == 0 || (i == 1 && cs.length > 2) ? '-' : '')
          : _;
      })
      .join('');
  } catch (e) {
    return null;
  }
};
