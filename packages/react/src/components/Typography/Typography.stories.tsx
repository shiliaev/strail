import React from 'react';

import {Typography, TypographyProps} from "./Typography";

export default {
    component: Typography,
};

const Template = (args: TypographyProps) => <Typography {...args}>
    Hello there
</Typography>

export const Sandbox = Template.bind({});
