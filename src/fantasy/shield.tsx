import { Schema } from "../schema/schema";
import { BooleanSchema } from "../schema/boolean";
import { NumberSchema } from "../schema/number";
import { StringSchema } from "../schema/string";
import { StructSchema } from "../schema/struct";

export interface ShieldData {
    name: string,
    defense: number,
    blocksMagic: boolean
}

export const ShieldSchema: Schema<ShieldData> = StructSchema<ShieldData>({
    name: StringSchema({ reverse: true }),
    defense: NumberSchema({ min: 1, max: 10 }),
    blocksMagic: BooleanSchema()
});
