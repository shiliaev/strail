import React from 'react';

import {Link, LinkProps} from "./Link";

export default {
    component: Link,
};

const Template = (args: LinkProps) => <Link onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} href={'#'} {...args}>Click me</Link>

export const Sandbox = Template.bind({});
