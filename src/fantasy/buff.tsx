import { Schema } from "../schema/schema";
import { StringSchema } from "../schema/string";
import { StructSchema } from "../schema/struct";

export interface BuffData {
    name: string,
}

export const BuffSchema: Schema = StructSchema<BuffData>({
    name: StringSchema(),
});
