import { useState } from "react";

function Calculator() {
    let [question, setQuestion] = useState('')

    const handleClick = (e) => {
        const value = e.target.value;
        switch(value){
            case '=': {

                if (question !== ''){
                    var ans = '';
                        try{
                            ans = eval(question);
                        }catch(err){
                            setQuestion('Match Error')
                        }
                        if (ans===undefined){
                            setQuestion('Undefined')
                        }else{
                            setQuestion(ans)
                        }

                
                    
                }
                break;
            }
            case 'clear': {
                setQuestion('')
                break;
            }
            case 'sign': {
                setQuestion(-1*question)
                break;
            }
            default: {
                setQuestion(question += value)
                break;
            }
        }
    }
    return (
        <div className="calculator">
            <div id="display-container">
                <input name="" value={question} readOnly />
            </div>
            <div className="button-container">
                
                <button value='clear' onClick={handleClick}>AC</button>
                
                <button value='sign' onClick={handleClick}>+/-</button>
                
                <button value='%' onClick={handleClick}>%</button>
                
                <button className="red" value='/' onClick={handleClick}>/</button>

                <button value='7' onClick={handleClick}>7</button>

                <button value='8' onClick={handleClick}>8</button>

                <button value='9' onClick={handleClick}>9</button>

                <button className="red" value='*' onClick={handleClick}>*</button>

                <button value='4' onClick={handleClick}>4</button>

                <button value='5' onClick={handleClick}>5</button>

                <button value='6' onClick={handleClick}>6</button>

                <button className="red" value='-' onClick={handleClick}>-</button>

                <button value='1' onClick={handleClick}>1</button>

                <button value='2' onClick={handleClick}>2</button>

                <button  value='3' onClick={handleClick}>3</button>

                <button className="red" value='+' onClick={handleClick}>+</button>

                <button id="button-zero" value='0' onClick={handleClick}>0</button>

                <button value='.' onClick={handleClick}>.</button>

                <button className="red" value='=' onClick={handleClick}>=</button>

            </div>
        </div>
    );
  }
  
  export default Calculator;