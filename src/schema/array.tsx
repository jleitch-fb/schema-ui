import { Schema } from "./schema";

export function ArraySchema(elementSchema: Schema): Schema {
    return {
        factory: () => [],
        render: (data: Array<any>, setData: (value: Array<any>) => void) => (
            <div>
                <button onClick={() => setData([...data, elementSchema.factory()])}>+</button>
                <div>
                    {data.map((element, index) => (
                        <div key={index}>
                            <button onClick={() => setData([...data.slice(0, index), ...data.slice(index + 1)])}>-</button>
                            {elementSchema.render(element, (value) => setData([...data.slice(0, index), value, ...data.slice(index + 1)]))}
                        </div>
                    ))}
                </div>
            </div>
        )
    };
}
