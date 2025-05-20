import { useMemo, useState } from "react";

function FactorialUsingMemo(){

    const[inputValue, setInputValue] = useState(1);
   

    let Memox = useMemo(function(){
             let fact = 1;
        let num = parseInt(inputValue);
        console.log(num);
    
         for(let i=1;i<=num;i++)
        {
            fact = fact*i;
        } 
        return fact;
    },[inputValue])


    return <div>
            <input type="text"  value={inputValue}
            onChange={function (e)
                {
                    setInputValue(e.target.value)

                }
            } 
            placeholder="Wrie user inpur here to get the factorial">

            </input>
            {/* <button onClick={Memox}>Find factorial</button> */}
            {/* in this we can not use button onclick bcs in useMemo it directly calulcate the value and retrun number as a result. we can not pass a number input in button onclick event */}
            <p>The final factorial of {inputValue} is {Memox}</p>
    </div>

}
export default FactorialUsingMemo;