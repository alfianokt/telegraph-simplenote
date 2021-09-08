import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as pathParser from "../src/path-parser";

const title = 'title';
const data = [
  {
    path: 'title-01-01',
    code: 'bb'
  },
  {
    path: 'title-01-01-2',
    code: 'bbc'
  },
  {
    path: 'title-12-01',
    code: 'mb'
  },
  {
    path: 'title-12-01-2',
    code: 'mbc'
  },
  {
    path: 'title-01-31',
    code: 'bF'
  },
  {
    path: 'title-01-31-2',
    code: 'bFc'
  },
  {
    path: 'title-01-31-22',
    code: 'bFcc'
  },
]

test('Path parser can encode', () => {
  data.forEach(el => {
    assert.equal(pathParser.encode(el.path), el.code, "Matches encode");
  });

  assert.equal(pathParser.encode('foo'), '', "Must be null");
});

test('Path parser can decode', () => {
  data.forEach(el => {
    assert.equal(`${title}-${pathParser.decode(el.code)}`, el.path, "Matches decode");
  });
});

export default test;