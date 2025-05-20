import React, { useState } from 'react'
import './App.css'
import Test from './Todo';

import WrapperComponent from './WrapperComponent';
import Hooks from './Hooks';
import Counter from './Counter';
import Factorial from './Assignment1';
import FactorialUsingMemo from './Assignment1UsingUseMemoHook';
import GenerateRanDome from './Assignment2UsingUseMemo';
import { Assignment3 } from './Assignment3';


function App() {
  // const [count, setCount] = useState(0)
  const [title, setTitle] = useState("this is default title")

  function changeTitle() {
    setTitle("this is title " + Math.random())
  }


  // Define the memoized Header component correctly
const Headers = React.memo(function Header({title}) {
  return <div>{title}</div>
});


  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div> */}

      <Headers title={title} />
      <Headers title="muskan2" />
      <Headers title="muskan2" />
      <Headers title="muskan2" />
      <button onClick={changeTitle}>Change Title</button>
      {/* <Test/>
      <WrapperComponent/>
      <Hooks/>
      <Counter/> */}
      {/* <Factorial/> */}
      {/* <FactorialUsingMemo/>
      <GenerateRanDome/> */}
      <Assignment3/>
    </>
  )


  
}

export default App
