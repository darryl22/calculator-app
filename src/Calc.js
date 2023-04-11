import React from "react";

function Calc() {

    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        document.addEventListener('keydown', keyPress, true)
    }, [])

    function keyPress(e) {
        setValue(prev => prev += e.key)
    }

    function updateValue(val) {
        setValue(prev => prev += val)
    }

    function deleteValue() {
        setValue(prev => {
            let newval = prev.slice(0, -1)
            return newval
        })
    }

    return(
        <div className="calc-div">
            <div className="calc-container">
                <div className="section-one">
                    <p className="section-one-text">calc</p>
                    <div className="theme-select">
                        <p>THEME</p>

                        <div className="selector-box">
                            <div className="selector-numbers">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            <div className="selector">
                                <div className="selector-item"></div>
                                <div className="selector-item"></div>
                                <div className="selector-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-two">
                    <p>{value}</p>
                </div>
                <div className="section-three">
                    <div className="numbers" onClick={() => updateValue(7)}>7</div>
                    <div className="numbers" onClick={() => updateValue(8)}>8</div>
                    <div className="numbers" onClick={() => updateValue(9)}>9</div>
                    <div className="numbers del" onClick={deleteValue}>del</div>

                    <div className="numbers" onClick={() => updateValue(4)}>4</div>
                    <div className="numbers" onClick={() => updateValue(5)}>5</div>
                    <div className="numbers" onClick={() => updateValue(6)}>6</div>
                    <div className="numbers">+</div>

                    <div className="numbers" onClick={() => updateValue(1)}>1</div>
                    <div className="numbers" onClick={() => updateValue(2)}>2</div>
                    <div className="numbers" onClick={() => updateValue(3)}>3</div>
                    <div className="numbers">-</div>

                    <div className="numbers">.</div>
                    <div className="numbers" onClick={() => updateValue(0)}>0</div>
                    <div className="numbers">/</div>
                    <div className="numbers">x</div>
                    <div className="numbers reset" onClick={() => setValue("")}>reset</div>
                    <div className="numbers eq">=</div>
                </div>
            </div>
        </div>
    )
}

export default Calc