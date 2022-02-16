import { Data, Schema } from "./schema";

export function StructSchema<T extends Data>(fields: { [key in keyof T]: Schema }): Schema {
    return {
        factory: () => Object.fromEntries(Object.entries<Schema>(fields).map(([key, schema]) => [key, schema.factory()])),
        render: (data: any, setData: (value: any) => void) => (
            <div>
                {Object.entries<Schema>(fields).map(([key, schema]) => (
                    <div key={key}>
                        {key}: {schema.render(data[key], (value: any) => setData({ ...data, [key]: value }))}
                    </div>
                ))}
            </div>
        )
    };
}
