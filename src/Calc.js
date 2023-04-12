import React from "react";

function Calc() {

    const [value, setValue] = React.useState("")
    const [theme, setTheme] = React.useState(1)
    const [calculate, setCalculate] = React.useState({
        val: null,
        operator: null
    })

    React.useEffect(() => {
        document.addEventListener('keydown', keyPress, true)
    }, [])

    // theme styles

    const bodyStyle = {
        backgroundColor: theme === 1 ? "hsl(222, 26%, 31%)" : theme === 2 ? "hsl(0, 0%, 90%)" : "hsl(268, 75%, 9%)"
    }

    const screenStyle = {
        backgroundColor: theme === 1 ? "hsl(224, 36%, 15%)" : theme === 2 ? "hsl(0, 0%, 93%)" : "hsl(268, 71%, 12%)",
        color: theme === 1 ? "hsl(0, 0%, 100%)" : theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)",
        fontSize: value.length > 21 ? "1.7em" : "2.7em"
    }

    const keypadStyle = {
        backgroundColor: theme === 1 ? "hsl(223, 31%, 20%)" : theme === 2 ? "hsl(0, 5%, 81%)" : "hsl(268, 71%, 12%)"
    }

    const keyStyles = {
        backgroundColor: theme === 1 ? "hsl(30, 25%, 89%)" : theme === 2 ? "hsl(45, 7%, 89%)" : "hsl(268, 47%, 21%)",
        boxShadow: theme === 1 ? "0px 3px hsl(28, 16%, 65%)" : theme === 2 ? "0px 3px hsl(35, 11%, 61%)" : "0px 3px hsl(290, 70%, 36%)",
        color: theme === 1 ? "hsl(221, 14%, 31%)" : theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"
    }

    const deleteStyles = {
        backgroundColor: theme === 1 ? "hsl(225, 21%, 49%)" : theme === 2 ? "hsl(185, 42%, 37%)" : "hsl(281, 89%, 26%)",
        boxShadow: theme === 1 ? "0px 3px hsl(224, 28%, 35%)" : theme === 2 ? "0px 3px hsl(185, 58%, 25%)" : "0px 3px hsl(285, 91%, 52%)",
    }

    const eqStyle = {
        backgroundColor: theme === 1 ? "hsl(6, 63%, 50%)" : theme === 2 ? "hsl(25, 98%, 40%)" : "hsl(176, 100%, 44%)",
        boxShadow: theme === 1 ? "0px 3px hsl(6, 70%, 34%)" : theme === 2 ? "0px 3px hsl(25, 99%, 27%)" : "0px 3px hsl(177, 92%, 70%)",
        color: theme === 3 ? "hsl(198, 20%, 13%)" : "white"
    }

    //functions

    function keyPress(e) {
        let numbers = "0123456789"
        if (numbers.includes(e.key)){
            setValue(prev => prev += e.key)
        }
    }

    function updateValue(val) {
        setValue(prev => prev += val)
    }

    function deleteValue() {
        setValue(prev => {
            let newval = prev.toString().slice(0, -1)
            return newval
        })
    }

    function handleCalculate(opr) {
        if (calculate.val === null){
            setCalculate({
                val: parseFloat(value),
                operator: opr
            })
            setValue("")
        }else{
            setCalculate(prev => {
                return {...prev, operator: opr}}
            )
            if (calculate.operator === "+") {
                let result = calculate.val + parseFloat(value)
                setCalculate(prev => {
                    return {operator: null, val: result}
                })
                setValue("")
            }else if (calculate.operator === "-") {
                let result = calculate.val - parseFloat(value)
                setCalculate(prev => {
                    return {operator: null, val: result}
                })
                setValue("")
            } else if (calculate.operator === "*") {
                let result = calculate.val * parseFloat(value)
                setCalculate(prev => {
                    return {operator: null, val: result}
                })
                setValue("")
            } else if (calculate.operator === "/") {
                let result = calculate.val / parseFloat(value)
                setCalculate(prev => {
                    return {operator: null, val: result}
                })
                setValue("")
            }
        }
        
    }

    return(
        <div className="calc-div" style={bodyStyle}>
            <div className="calc-container">
                <div className="section-one" style={{color: screenStyle.color}}>
                    <p className="section-one-text">calc</p>
                    <div className="theme-select">
                        <p>THEME</p>

                        <div className="selector-box">
                            <div className="selector-numbers">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            <div className="selector" style={keypadStyle}>
                                <div className="selector-item" style={{backgroundColor: theme === 1 ? "hsl(6, 63%, 50%)" : "rgb(87, 136, 180, 0)"}} onClick={() => setTheme(1)}></div>
                                <div className="selector-item" style={{backgroundColor: theme === 2 ? "hsl(25, 98%, 40%)" : "rgb(87, 136, 180, 0)"}} onClick={() => setTheme(2)}></div>
                                <div className="selector-item" style={{backgroundColor: theme === 3 ? "hsl(176, 100%, 44%)" : "rgb(87, 136, 180, 0)"}} onClick={() => setTheme(3)}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-two" style={screenStyle}>
                    <div>
                        {calculate.val != null &&  <p style={{fontSize: "0.7em"}}>{calculate.val} {calculate.operator}</p>}
                        <p>{value}</p>
                    </div>
                </div>
                <div className="section-three" style={keypadStyle}>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("7")}>7</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("8")}>8</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("9")}>9</div>
                    <div className="numbers del" style={deleteStyles} onClick={deleteValue}>del</div>

                    <div className="numbers" style={keyStyles} onClick={() => updateValue("4")}>4</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("5")}>5</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("6")}>6</div>
                    <div className="numbers" style={keyStyles} onClick={() => handleCalculate("+")}>+</div>

                    <div className="numbers" style={keyStyles} onClick={() => updateValue("1")}>1</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("2")}>2</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("3")}>3</div>
                    <div className="numbers" style={keyStyles} onClick={() => handleCalculate("-")}>-</div>

                    <div className="numbers" style={keyStyles} onClick={() => updateValue(".")}>.</div>
                    <div className="numbers" style={keyStyles} onClick={() => updateValue("0")}>0</div>
                    <div className="numbers" style={keyStyles} onClick={() => handleCalculate("/")}>/</div>
                    <div className="numbers" style={keyStyles} onClick={() => handleCalculate("*")}>x</div>

                    <div className="numbers reset" style={deleteStyles} onClick={() => {setValue(""); setCalculate({val: null, operator: null})}}>reset</div>
                    <div className="numbers eq" style={eqStyle} onClick={() => handleCalculate("=")}>=</div>
                </div>
            </div>
        </div>
    )
}

export default Calc