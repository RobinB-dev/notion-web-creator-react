// Tooltip.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";
import { NavLink } from "react-router-dom";
import { IconFolder } from "../Icons/Icons";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <NavLink to="projects">
      <IconFolder colorType="fill" />
    </NavLink>
  ),
  content: "",
  position: "bottom",
};
