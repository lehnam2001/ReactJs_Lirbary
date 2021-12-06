import { useState } from 'react';
import "./Random.css"
function RandomNumber() {
    const [minNumber, setMinNumber] = useState(1)
    const [maxNumber, setMaxNumber] = useState(10)
    const [randomNum, setRandomNum] = useState(2);

    const handleRandomNumber = () => {
        setRandomNum(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));
    }


    return (
        <div className="container-randomNum">
           <div className="body-randomNum">
                <div className="result-left">
                    <p>{randomNum}</p>
                </div>
                <div className="input-right">
                   <div className="input-min">
                       <p>Min</p>
                        <input 
                            type="input"
                            value={minNumber}
                            onChange={e => setMinNumber(+e.target.value)}
                        />
                   </div>

                   <div className="input-max">
                       <p>Max</p>
                        <input 
                            type="input"
                            value={maxNumber}
                            onChange={e => setMaxNumber(+e.target.value)}
                        />
                   </div>
                </div>
           </div>
           <div className="footer">
                <div className="btn-footer" onClick={handleRandomNumber}>Generate</div>
           </div>
        </div>
    )
}

export default RandomNumber;