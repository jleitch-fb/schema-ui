import { BuffData, BuffSchema } from "./buff";
import { Schema } from "../schema/schema";
import { NumberSchema } from "../schema/number";
import { StringSchema } from "../schema/string";
import { StructSchema } from "../schema/struct";
import { ArraySchema } from "../schema/array";

export interface WeaponData {
    type: string,
    name: string,
    damage: number,
    buffs: BuffData[]
}

export const WeaponSchema: Schema<WeaponData> = StructSchema<WeaponData>({
    type: StringSchema(),
    name: StringSchema(),
    damage: NumberSchema(),
    buffs: ArraySchema(BuffSchema)
});
