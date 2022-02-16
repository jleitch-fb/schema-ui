import { ReactElement } from "react";

export interface Schema<T> {
    factory: () => T;
    render: (data: T, setData: (value: T) => void) => ReactElement;
}
