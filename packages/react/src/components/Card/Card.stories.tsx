import React from 'react';

import {Card, CardProps} from "./Card";
import {Typography, TypographyVariant} from "../Typography";

export default {
    component: Card,
};

const Template = ({title = 'It was certainly a surprise to me', ...args}: CardProps) => <div style={{maxWidth: 600}}>
    <Card title={title} {...args}>
        It was certainly a surprise to me, and gave me a considerable shock, but Van Helsing was unmoved. He was now more sure than ever of his ground, and so emboldened to proceed in his task.
        "Are you satisfied now, friend John?" he asked.
    </Card>
</div>;

export const Sandbox = Template.bind({});
