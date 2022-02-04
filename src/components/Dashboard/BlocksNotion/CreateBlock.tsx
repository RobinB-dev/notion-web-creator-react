import React from "react";
import { NotionBlock } from "../../../decl/notionPage.decl";
import BlockHeading1 from "./BlockHeading1";
import BlockHeading2 from "./BlockHeading2";
import BlockImage from "./BlockImage";
import BlockCallout from "./BlockCallout";
import BlockParagraph from "./BlockParagraph";
import { testObj } from "../../../decl";

// associate notion block with react component
const CreateBlockLib = {
  heading_1: BlockHeading1,
  heading_2: BlockHeading2,
  heading_3: BlockHeading2,
  image: BlockImage,
  callout: BlockCallout,
  paragraph: BlockParagraph,
};



export const CreateBlock = (block: NotionBlock) => {

  // if type of block does not exist in CreateBlockLib
  if (typeof testObj(CreateBlockLib, block.obj) === "undefined") {
    return React.createElement(
      () => <div>The obj {block.obj} does not exist.</div>,
      { key: block.id }
    );
  }

  // if block does not have childrens
  if (block.childrens?.length === 0) {
    // create a react element with the block
    return React.createElement(testObj(CreateBlockLib, block.obj), {
      key: block.id,
      block: block
    });
  } else {
    return React.createElement(testObj(CreateBlockLib, block.obj), {
      key: block.id,
      block: block,
      childrens: block.childrens
    });
  }
};