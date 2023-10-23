import React from "react";
import Code from "./code";

export default {
  title: "Артикул (Code)"
};
const Template = (args) => <Code {...args} />;

export const defaultCode = Template.bind({});

defaultCode.args = {
  children: "3432343"
};
