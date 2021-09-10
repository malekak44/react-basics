import { useState, useEffect } from "react";

export default function Cleanup() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    return (
        <>
            <h1>The window's width is {width}px.</h1>
        </>
    );
}