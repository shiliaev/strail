import React from "react";

import { Typography, TypographyProps, TypographyVariant } from "./Typography";

export default {
  component: Typography,
};

const Template = ({
  variant = TypographyVariant.Heading1,
  ...args
}: TypographyProps) => (
  <Typography variant={variant} {...args}>
    And what is that, friend John?
  </Typography>
);

export const Sandbox = Template.bind({});
