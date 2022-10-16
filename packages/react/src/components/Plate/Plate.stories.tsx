import React from 'react';

import {Plate, PlateProps} from "./Plate";

export default {
    component: Plate,
};

const Template = ({ title = 'Plate', children = `I scrupled not, warmly and freely, to declare my aversion to this proposal; but it was to no effect; she concluded, just as she had begun, by saying, that I should not have him, if I could do better.`, ...args}: PlateProps) => <Plate title={title} {...args}>{children}</Plate>
export const Sandbox = Template.bind({});
