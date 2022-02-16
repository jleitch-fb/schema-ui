import { Schema } from "./schema";

export interface NumberSchemaProps {
    min?: number,
    max?: number
}

export function NumberSchema(props?: NumberSchemaProps): Schema {
    const { min, max } = props ?? {};

    return {
        factory: () => min ?? 0,
        render: (data: number, setData: (value: number) => void) => {
            return (
                <input type="range" min={min ?? 0} max={max ?? 100} value={data} onChange={(e) => setData(e.target.valueAsNumber)} />
            );
        }
    };
};
