import style from './style.css';

const CalculatorResponse=(props)=>{
    return (
        <div class={style.calculatorResponse}>
            {props.content ? props.content : "Press any number"}
        </div>
    );
}
export default CalculatorResponse;