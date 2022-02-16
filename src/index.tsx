import { useState } from "react";
import ReactDOM from "react-dom";
import { ShieldData, ShieldSchema } from "./fantasy/shield";
import { WeaponData, WeaponSchema } from "./fantasy/weapon";

const EXCALIBUR: WeaponData = {
    type: 'Sword',
    name: 'Excalibur',
    damage: 5,
    buffs: []
};

const MIRROR: ShieldData = {
    name: 'rorriM',
    defense: 10,
    blocksMagic: true
};

const DATA: any = {
    excalibur: EXCALIBUR,
    mirror: MIRROR
};

function App() {
    const [data, setData] = useState(DATA);
    return (
        <div>
            {WeaponSchema.render(data.excalibur, (value: WeaponData) => setData({ ...data, excalibur: value }))}
            {ShieldSchema.render(data.mirror, (value: ShieldData) => setData({ ...data, mirror: value }))}
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
