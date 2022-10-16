import React from 'react';

import {Card, CardProps} from "./Card";

export default {
    component: Card,
};

const Template = (args: CardProps) => <Card {...args}>
    Card
</Card>;

export const Sandbox = Template.bind({});
