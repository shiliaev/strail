import React from "react";

import {Table, TableProps} from "./Table";

export default {
    component: Table,
};

const Template = ({
                      ...args
                  }: TableProps<any>) => (
    <Table
        {...args}
        headers={[
            { field: 'title', label: 'Title' },
            { field: 'description', label: 'description' },
        ]}
        data={
            [
                { title: 'some title #1', description: 'some description #1', unknown: 'unknown header #1' },
                { title: 'some title #2', description: 'some description #2', unknown: 'unknown header #2' },
            ]
        }
    />
);

export const Sandbox = Template.bind({});
