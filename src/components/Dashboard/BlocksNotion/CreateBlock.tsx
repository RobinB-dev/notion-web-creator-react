import React from "react";
import { NotionBlock } from "../../../decl/notionPage.decl";
import BlockHeading1 from "./BlockHeading1";
import BlockHeading2 from "./BlockHeading2";
import BlockImage from "./BlockImage";
import BlockCallout from "./BlockCallout";

const CreateBlock = {
  heading1: BlockHeading1,
  heading2: BlockHeading2,
  img: BlockImage,
  callout: BlockCallout,
};

export default (block: NotionBlock) => {
    
    function testObj (o: object, search: string) {
        for (const [key, value] of Object.entries(o)) {
            if (key === search) {
            return value
            }
        }
    }

    console.log(block.childrens?.length);
    
    // console.log(typeof testObj(CreateBlock, block.childrens));
    
  if (typeof testObj(CreateBlock, block.obj) !== "undefined") {
    if (block.childrens?.length === 0) {
      return React.createElement(testObj(CreateBlock, block.obj), {
        key: block.id,
        block: block
      });
    } else {
      return React.createElement(testObj(CreateBlock, block.obj), {
        key: block.id,
        block: block,
        childrens: block.childrens
      });
    }
  }

  return React.createElement(
    () => <div>The obj {block.obj} has not been created yet.</div>,
    { key: block.id }
  );
};