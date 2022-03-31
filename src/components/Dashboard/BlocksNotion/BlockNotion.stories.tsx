// BlockHeading1.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlockHeading1 from "./BlockHeading1";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "BlockHeading1",
  component: BlockHeading1,
} as ComponentMeta<typeof BlockHeading1>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof BlockHeading1> = (args) => (
  <BlockHeading1 {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  key: 0,
  block: {},
};
