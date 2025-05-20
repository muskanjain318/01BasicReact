import { useState } from "react";

function Factorial(){

    const[inputValue, setInputValue] = useState(1);
    const[factResult, setfactResult] = useState(1)
    

    function FindFact(){
        let fact = 1;
        let num = parseInt(inputValue);
        console.log(num);
    
         for(let i=1;i<=num;i++)
        {
            fact = fact*i;
        } 
        
          setfactResult(fact)
    }
    
    return <div>
            <input type="text"  value={inputValue}
            onChange={function (e)
                {
                    setInputValue(e.target.value)

                }
            } 
            placeholder="Wrie user inpur here to get the factorial">

            </input>
            <button onClick={FindFact}>Find factorial</button>
            <p>The final factorial of {inputValue} is {factResult}</p>
    </div>

}
export default Factorial;