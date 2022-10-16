import React from 'react';

import {Link, LinkProps} from "./Link";

export default {
    component: Link,
};

const Template = (args: LinkProps) => <Link {...args} />

export const Sandbox = Template.bind({});
