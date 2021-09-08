import { NodeElement } from "telegra.ph/typings/telegraph";
import config from './config';

export type Content = {
  title: string | any;
  description: string | any;
  link: string | any;
  link_name: string | any;
};

/**
 * Encode note to telegraph NodeElement
 *
 * @param {Content} content
 * @param {String} title
 * @returns {Content}
 */
export const encode = (content: Content, title: String): Array<NodeElement> => {
  return [
    {
      tag: "a",
      attrs: {
        href: config.promotion.link,
      },
      // @ts-ignore
      children: [title],
    },
    {
      tag: "img",
      attrs: {
        src: config.promotion.image,
      },
    },
    {
      tag: "ul",
      children: [
        {
          tag: "li",
          children: [content.title],
        },
        {
          tag: "li",
          children: [content.description],
        },
        {
          tag: "li",
          children: [content.link],
        },
        {
          tag: "li",
          children: [content.link_name],
        },
      ],
    },
  ];
}
/**
 * Decode NodeElement to note content
 *
 * @param {Array<NodeElement>} nodes
 * @param {String} title
 * @returns {Content}
 */
export const decode = (nodes: Array<NodeElement>, title: String): Content => {
  if (nodes.length > 0) {
    if (nodes[0].tag == 'a' && nodes[0].children == title) {
      try {
        const content = {
          // @ts-ignore
          title: nodes[2].children[0].children[0],
          // @ts-ignore
          description: nodes[2].children[1].children[0],
          // @ts-ignore
          link: nodes[2].children[2].children[0],
          // @ts-ignore
          link_name: nodes[2].children[3].children[0],
        };

        return content;
      } catch (e) {
        return null;
      }
    }
  }

  return null;
}

