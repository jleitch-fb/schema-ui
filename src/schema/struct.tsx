import { Schema } from "./schema";

export function StructSchema<T>(fields: { [key in keyof T]: Schema<T[key]> }): Schema<T> {
    return {
        factory: () => Object.fromEntries(Object.entries<Schema<any>>(fields).map(([key, schema]) => [key, schema.factory()])) as T,
        render: (data: any, setData: (value: any) => void) => (
            <div>
                {Object.entries<Schema<any>>(fields).map(([key, schema]) => (
                    <div key={key}>
                        {key}: {schema.render(data[key], (value: any) => setData({ ...data, [key]: value }))}
                    </div>
                ))}
            </div>
        )
    };
}
