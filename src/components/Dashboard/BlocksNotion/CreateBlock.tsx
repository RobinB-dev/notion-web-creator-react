import React from "react";
import { NotionBlock } from "../../../decl/notionPage.decl";
import BlockHeading1 from "./BlockHeading1";
import BlockHeading2 from "./BlockHeading2";
import BlockImage from "./BlockImage";
import BlockCallout from "./BlockCallout";

const CreateBlockLib = {
  heading1: BlockHeading1,
  heading2: BlockHeading2,
  img: BlockImage,
  callout: BlockCallout,
};


export const testObj = (o: object, search: string) => {
    for (const [key, value] of Object.entries(o)) {
        if (key === search) {
        return value
        }
    }
}

export const CreateBlock = (block: NotionBlock) => {
    
    
    // console.log(typeof testObj(CreateBlockLib, block.childrens));
    
  if (typeof testObj(CreateBlockLib, block.obj) !== "undefined") {
    if (block.childrens?.length === 0) {
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
  }

  return React.createElement(
    () => <div>The obj {block.obj} has not been created yet.</div>,
    { key: block.id }
  );
};