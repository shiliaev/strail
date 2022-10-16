import React from 'react';

import {Button, ButtonOwnProps, ButtonVariant} from './Button';

export default {
    component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonOwnProps) => <Button {...args}>
    Button
</Button>;

export const Sandbox = Template.bind({});
