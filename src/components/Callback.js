import React, { useCallback, useMemo } from 'react';

export default function Callback() {
    const number = 5;

    const numCallback = useCallback(() => {
        return number * 2;
    }, [number]);

    const numMemo = useMemo(() => {
        return number * 2;
    }, [number]);

    return (
        <>
            <h2>Callback: {numCallback.toString()}</h2>
            <h2>Memo: {numMemo}</h2>
        </>
    )
}