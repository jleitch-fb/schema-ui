import { Schema } from "./schema";

export interface BooleanSchemaProps { }

export function BooleanSchema(props?: BooleanSchemaProps): Schema {
    // const { } = props ?? {};

    return {
        factory: () => false,
        render: (data: boolean, setData: (value: boolean) => void) => {
            return (
                <input type="checkbox" checked={data} onChange={(e) => setData(e.target.checked)} />
            );
        }
    };
};
