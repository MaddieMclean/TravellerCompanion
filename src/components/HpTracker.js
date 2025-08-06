import { useState } from "react";

function HpTracker(){
    const [currentHp, setHp] = useState(0);
    const [hpMod, setHpMod] = useState(0);

    function handleClick(){
        setHp(currentHp => currentHp + hpMod)
        setHpMod(0);
    }

    function updateHpMod(element){
        setHpMod(Number(element.target.value))
    }

    return <div>
        <p>Modify Hit Points: <input type="number" value={hpMod} onChange={updateHpMod}/></p>
        <button onClick={handleClick}>Update Hit Points</button>
        <p>Current HP: {currentHp}</p>
    </div>
}

export default HpTracker;
