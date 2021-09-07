import { test } from 'uvu';
import * as assert from 'uvu/assert';
import config from "../src/config";
import contentParser from "../src/content-parser";

const data = {
  original: {
    title: 'title',
    description: 'description',
    link: 'link',
    link_name: 'link_name'
  },
  telegraph: [
    {
      "tag": "a",
      "attrs": {
        "href": config.promotion.link,
      },
      "children": [
        'title'
      ]
    },
    {
      "tag": "img",
      "attrs": {
        "src": config.promotion.image
      }
    },
    {
      "tag": "ul",
      "children": [
        {
          "tag": "li",
          "children": [
            "title"
          ]
        },
        {
          "tag": "li",
          "children": [
            "description"
          ]
        },
        {
          "tag": "li",
          "children": [
            "link"
          ]
        },
        {
          "tag": "li",
          "children": [
            "link_name"
          ]
        }
      ]
    }
  ]
}

test('Content parser can encode', () => {
  // @ts-ignore
  assert.equal(contentParser.encode(data.original, data.original.title), data.telegraph, "Matches encode");
});

test('Content parser can decode', () => {
  // @ts-ignore
  assert.equal(contentParser.decode(data.telegraph, data.original.title), data.original, "Matches decode");
});

export default test;