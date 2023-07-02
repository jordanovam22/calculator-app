import style from './style.css';

const CalculatorButtons=(props)=>{
    return (
        <div class={style.calculatorButtons}>
            <span class={style.aa} data-value="1" datatype="integer" onClick={()=>{props.actions.numberClick("1")}}>1</span>
            <span class={style.ab} data-value="2" datatype="integer" onClick={()=>{props.actions.numberClick("2")}}>2</span>
            <span class={style.ac} data-value="3" datatype="integer" onClick={()=>{props.actions.numberClick("3")}}>3</span>

            <span class={style.ad} data-value="/" datatype="operand" onClick={()=>{props.actions.operandClick("/")}}>&#247;</span>

            <span class={style.ba} data-value="4" datatype="integer" onClick={()=>{props.actions.numberClick("4")}}>4</span>
            <span class={style.bb} data-value="5" datatype="integer" onClick={()=>{props.actions.numberClick("5")}}>5</span>
            <span class={style.bc} data-value="6" datatype="integer" onClick={()=>{props.actions.numberClick("6")}}>6</span>

            <span class={style.bd} data-value="*" datatype="operand" onClick={()=>{props.actions.operandClick("*")}}>x</span>

            <span class={style.ca} data-value="7" datatype="integer" onClick={()=>{props.actions.numberClick("7")}}>7</span>
            <span class={style.cb} data-value="8" datatype="integer" onClick={()=>{props.actions.numberClick("8")}}>8</span>
            <span class={style.cc} data-value="9" datatype="integer" onClick={()=>{props.actions.numberClick("9")}}>9</span>

            <span class={style.cd} data-value="-" datatype="operand" onClick={()=>{props.actions.operandClick("-")}}>-</span>

            <span class={style.da} data-value="0" datatype="integer" onClick={()=>{props.actions.numberClick("0")}}>0</span>
            <span class={style.db} data-value="." datatype="integer" onClick={()=>{props.actions.numberClick(".")}}>.</span>
            {props.isActive===true ?
                <span class={style.dc} data-value="=" datatype="equalsBtn" onClick={props.actions.equalClick}>=</span>
                : <span class={style.clearCalculator} data-value="=" datatype="equalsBtn" onClick={props.actions.resetGame}>&#8634;</span>
            }
            <span class={style.dd} data-value="+" datatype="operand" onClick={()=>{props.actions.operandClick("+")}}>+</span>
        </div>
    );
}

export default CalculatorButtons;