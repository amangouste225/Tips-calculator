// import React, { useState } from 'react'

import { useState } from 'react'

// const messages = [
//   'Learn React ⚛️',
//   'Apply for jobs 💼',
//   'Invest your new income 🤑',
// ]

function App() {
  const [bill, setBill] = useState('')
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(0)

  const tip = bill * ((percent1 + percent2) / 2 / 100)

  function handleReset() {
    setPercent1(0)
    setPercent2(0)
    setBill('')
  }

  function handleChange(e) {
    setBill(Number(e.target.value))
  }

  return (
    <div className='container'>
      <Input bill={bill} onBillInput={handleChange} />
      <Percentage percentage={percent1} onSelect={setPercent1}>
        How did you like the service ?
      </Percentage>
      <Percentage percentage={percent2} onSelect={setPercent2}>
        How did your friend like the service ?
      </Percentage>
      {bill > 0 && (
        <>
          <Result bill={bill} tip={tip} />
          <button onClick={handleReset}>reset</button>
        </>
      )}
    </div>
  )
  // const [step, setStep] = useState(1)
  // const [isOpen, setOpen] = useState(true)
  // function handlePrevious() {
  //   if (step > 1) {
  //     setStep(step => step - 1)
  //     setStep(step => step - 1)
  //   }
  // }
  // function handleNext() {
  //   if (step < 3) {
  //     setStep(s => s + 1)
  //   }
  // }
  // function Btn({ color, backgroundColor, text, onClick, children }) {
  //   return (
  //     <button
  //       style={{ backgroundColor: '#7950F2', color: '#fff' }}
  //       onClick={onClick}
  //     >
  //       {children}
  //     </button>
  //   )
  // }
  // return (
  //   <>
  //     <button className='close' onClick={() => setOpen(is => !is)}>
  //       ❌
  //     </button>
  //     {isOpen && (
  //       <div className='steps'>
  //         <div className='numbers'>
  //           <div className={step >= 1 ? 'active' : ''}>1</div>
  //           <div className={step >= 2 ? 'active' : ''}>2</div>
  //           <div className={step >= 3 ? 'active' : ''}>3</div>
  //         </div>
  //         <p className='message'>
  //           Step : {step} : {messages[step - 1]}
  //         </p>
  //         <div className='buttons'>
  //           <Btn
  //             backgroundColor='#7950F2'
  //             color='#fff'
  //             onClick={handlePrevious}
  //           >
  //             Previous👈🏾😃
  //           </Btn>
  //           <Btn backgroundColor='#7950F2' color='#fff' onClick={handleNext}>
  //             Next👉🏾
  //           </Btn>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // )
}

function Input({ bill, onBillInput }) {
  return (
    <div className='flex'>
      <p className='title'>How much was the bill ?</p>
      <input type='number' value={bill} onChange={onBillInput} />
    </div>
  )
}

function Percentage({ children, bill, percentage, onSelect, tip }) {
  return (
    <div className='flex'>
      <p className='title' value='sort'>
        {children}
      </p>
      <select
        value={percentage}
        onChange={e => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Result({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  )
}
export default App
