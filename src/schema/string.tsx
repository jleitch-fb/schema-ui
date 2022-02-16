import { Schema } from "./schema";

export interface StringSchemaProps {
    reverse?: boolean
}

export function StringSchema(props?: StringSchemaProps): Schema<string> {
    const { reverse } = props ?? {};

    return {
        factory: () => '',
        render: (data: string, setData: (value: string) => void) => {
            const text = !reverse ? data : data.split('').reverse().join('');

            return (
                <input type="text" value={text} onChange={(e) => setData(e.target.value)} />
            );
        }
    };
};
