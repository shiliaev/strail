import { ReactNode, useCallback, useMemo } from "react";
import { nanoid } from "nanoid";

export interface TableHeader {
    field: string;
    label?: ReactNode;
    sortable?: boolean;
    filterable?: boolean;
}

export type DataType = Record<string, ReactNode>;
export type TableData<D extends DataType> = Array<D>

export interface TableProps<D extends DataType> {
    headers: TableHeader[];
    data?: TableData<D>;
}

const RowKey = Symbol('Strail.Table.Row');
type DataWithRowKey<D extends DataType> = D & { [RowKey]: string };

export function Table<D extends DataType>({ headers, data }: TableProps<D>) {
    const mappedData = useMemo<Array<DataWithRowKey<DataType>>>(() => {
        return data?.map((values) => ({ [RowKey]: nanoid(), ...values })) || [];
    }, [data]);

    const onHeaderClick = useCallback(
        (header: TableHeader) => {
            if (header.sortable) {}
            if (header.filterable) {}
        },
        [],
    );

    const onRowClick = useCallback(
        (row: DataWithRowKey<DataType>) => {

        },
        [],
    );

    const onCellClick = useCallback(
        (row: DataWithRowKey<DataType>) => {

        },
        [],
    );

    return (<table className={'sl-Table'}>
        <thead className={'sl-Table__header'}>
            <tr className={'sl-Table__row'}>
                {headers.map((header) => (
                    <th
                        key={header.field}
                        className={'sl-Table__data'}
                        onClick={() => onHeaderClick(header)}
                    >
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className={'sl-Table__body'}>
            {mappedData?.map((row) => (
                <tr
                    key={ row[RowKey] }
                    className={'sl-Table__row'}
                    onClick={() => onRowClick(row)}
                >
                    {headers.map(({ field }) => (
                        <td
                            key={`${row[RowKey]}-${field}`}
                            className={'sl-Table__data'}
                            onClick={() => onCellClick(row)}
                        >
                            { row?.[field] }
                        </td>)
                    )}
                </tr>)
            )}
        </tbody>
    </table>)
}
