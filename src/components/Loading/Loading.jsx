import { useState, useEffect } from "react";


function Loading({speed}) {

    const [points, setPoints] = useState(" \u00A0\u00A0");

    const animate = () => {
        setTimeout(() => {
            setPoints(".\u00A0\u00A0");
        }, speed);
        setTimeout(() => {
            setPoints("..\u00A0");
        }, 2 * speed);

        setTimeout(() => {
            setPoints("...");
        }, 3 * speed);
        setTimeout(() => {
            setPoints(" ..");
        }, 4 * speed);

        setTimeout(() => {
            setPoints(" \u00A0.");
        }, 5 * speed);
        setTimeout(() => {
            setPoints(" \u00A0\u00A0");
        }, 6 * speed);
    }
    
    useEffect(() => {
        animate();
        setInterval(() => {
            animate();
        }, 3100)
    }, [])
    
        
   

    return <div>Loading{points}</div>
}

export default Loading;