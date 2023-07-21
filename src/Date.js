import React, { useEffect, useState } from 'react'

const DateTime = () => {

  const date1 = new Date();


  let [Data, setDate] = useState(date1);

  // let [Day , setDay] = useState(day);
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(date1)
    }, 1000);
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <>
      <p>{Data.toDateString().toString()}</p>

    </>
  )
}

export default DateTime