import { useState, useMemo } from "react";

export default function Memo() {
    const [num, setNum] = useState(0);

    const doubleNum = useMemo(() => {
        return slow(num);
    }, [num]);

    return (
        <div style={{ width: "25rem", margin: "auto" }}>
            <h1 className="section-header">Memo</h1>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value, 0))}
            />
            <h1>
                {num} * 2 = <span>{doubleNum}</span>
            </h1>
        </div>
    );
}

const slow = (num) => {
    for (let i = 0; i <= 1000000000000; i++) {
        return num * 2;
    }
};