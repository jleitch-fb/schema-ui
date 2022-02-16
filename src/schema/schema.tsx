import { ReactElement } from "react";

export interface Data { }
export interface Schema {
    factory: () => any;
    render: (data: any, setData: (value: any) => void) => ReactElement;
}
