import { useRef } from "react"

function App() {
  const check1 = useRef()
  const ifChecked1 = () => {
    check1.current.style.textDecoration = 'line-through'
    const completed = window.localStorage.getItem("done") || []
    const temp = JSON.stringify(check1.current.value)
    const toStorage = completed.push(temp)
    window.localStorage.setItem("done", toStorage)
  }

  const check2 = useRef()
  const ifChecked2 = () => {
    check2.current.style.textDecoration = 'line-through'
    const completed = window.localStorage.getItem("done") || []
    const temp = JSON.stringify(check1.current.value)
    const toStorage = completed.push(temp)
    window.localStorage.setItem("done", toStorage)
  }

  const check3 = useRef()
  const ifChecked3 = () => {
    check3.current.style.textDecoration = 'line-through'
    const completed = window.localStorage.getItem("done") || []
    const temp = JSON.stringify(check1.current.value)
    const toStorage = completed.push(temp)
    window.localStorage.setItem("done", toStorage)
  }

  const check4 = useRef()
  const ifChecked4 = () => {
    check4.current.style.textDecoration = 'line-through'
    const completed = window.localStorage.getItem("done") || []
    const temp = JSON.stringify(check1.current.value)
    const toStorage = completed.push(temp)
    window.localStorage.setItem("done", toStorage)
  }

  return (
    <>
    <div className="flex h-screen justify-center items-center bg-red-200">
      <div className="flex flex-col gap-2 w-1/3 h-2/3 rounded-4xl bg-white py-4 px-6">     {/* card */}
        <div className="flex justify-between">   {/* header */}
          <div className="flex items-center text-[#F9DB78] font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M10,22L0,12L10,2l1.78,1.77L3.55,12l8.23,8.23L10,22Z"/></svg>
            All iCloud
          </div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M6,22q-0.82,0-1.41-0.59T4,20V10Q4,9.17 4.59,8.59T6,8H9v2H6V20H18V10H15V8h3q0.82,0 1.41,0.59T20,10V20q0,0.82-0.59,1.41T18,22H6Zm5-6V4.82L9.4,6.43L8,5l4-4l4,4L14.6,6.43L13,4.82V16H11Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M8.06,13.06Q8.5,12.63 8.5,12T8.06,10.94T7,10.5T5.94,10.94T5.5,12t0.44,1.06T7,13.5t1.06-0.44Zm5,0Q13.5,12.63 13.5,12t-0.44-1.06T12,10.5t-1.06,0.44T10.5,12t0.44,1.06T12,13.5t1.06-0.44Zm5,0Q18.5,12.63 18.5,12t-0.44-1.06T17,10.5t-1.06,0.44T15.5,12t0.44,1.06T17,13.5t1.06-0.44ZM12,22q-2.07,0-3.9-0.79q-1.82-0.79-3.17-2.14Q3.58,17.73 2.79,15.9T2,12Q2,9.92 2.79,8.1Q3.58,6.27 4.93,4.93Q6.28,3.57 8.1,2.79Q9.93,2 12,2t3.9,0.79t3.17,2.14q1.35,1.35 2.14,3.17Q22,9.92 22,12t-0.79,3.9t-2.14,3.17q-1.35,1.35-3.17,2.14T12,22Zm0-2q3.35,0 5.68-2.32T20,12T17.68,6.32T12,4T6.33,6.32T4,12t2.33,5.68T12,20Zm0-8Z"/></svg>
          </div>
        </div>
        <div className="flex flex-col grow">   {/* main */}
          <h1 className="flex justify-center text-2xl font-bold pb-4">weekend to-do list</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <label ref={check1} className="cursor-pointer" htmlFor=""><input onClick={ifChecked1} type="checkbox" name="" id="" />  laundry, candles, and comfort shows</label>
            </div>
            <div className="flex gap-2 items-center">
              <label ref={check2} className="cursor-pointer" htmlFor=""><input onClick={ifChecked2} type="checkbox" name="" id="" />  nighttime skincare in a matching pj set</label>
            </div>
            <div className="flex gap-2 items-center">
              <label ref={check3} className="cursor-pointer" htmlFor=""><input onClick={ifChecked3} type="checkbox" name="" id="" />  sunday grocery run in an oversized sweatshirt</label>
            </div>
            <div className="flex gap-2 items-center">
              <label ref={check4} className="cursor-pointer" htmlFor=""><input onClick={ifChecked4} type="checkbox" name="" id="" />  morning coffee and podcast walk</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">   {/* footer */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M5.55,19L2,15.45l1.4-1.4l2.13,2.13l4.25-4.25l1.4,1.43L5.55,19Zm0-8L2,7.45l1.4-1.4L5.53,8.17L9.78,3.92l1.4,1.43L5.55,11ZM13,17V15h9v2H13Zm0-8V7h9V9H13Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M12,17.5q1.88,0 3.19-1.31T16.5,13T15.19,9.81T12,8.5T8.81,9.81T7.5,13t1.31,3.19T12,17.5Zm0-2q-1.05,0-1.77-0.72T9.5,13t0.73-1.78T12,10.5t1.78,0.72T14.5,13t-0.72,1.78T12,15.5ZM4,21q-0.82,0-1.41-0.59T2,19V7Q2,6.18 2.59,5.59T4,5H7.15L9,3h6l1.85,2H20q0.83,0 1.41,0.59Q22,6.18 22,7V19q0,0.82-0.59,1.41T20,21H4Zm0-2H20V7H15.95L14.13,5H9.88L8.05,7H4V19Zm8-6Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M18,15.75q0,2.6-1.82,4.43T11.75,22T7.33,20.18T5.5,15.75V6.5q0-1.88 1.31-3.19T10,2t3.19,1.31T14.5,6.5v8.75q0,1.15-0.8,1.95T11.75,18T9.8,17.2T9,15.25V6h2v9.25q0,0.32 0.21,0.54T11.75,16t0.54-0.21t0.21-0.54V6.5q-0.02-1.05-0.74-1.78T10,4T8.23,4.72T7.5,6.5v9.25q-0.02,1.77 1.22,3.01Q9.98,20 11.75,20q1.75,0 2.98-1.24T16,15.75V6h2v9.75Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F9DB78"><path d="M4,14V12h7v2H4Zm0-4V8H15v2H4ZM4,6V4H15V6H4Zm9,14V16.93l5.53-5.5q0.22-0.22 0.5-0.32T19.58,11q0.3,0 0.57,0.11q0.27,0.11 0.5,0.34l0.93,0.93q0.2,0.22 0.31,0.5T22,13.43t-0.1,0.56T21.58,14.5L16.08,20H13Zm7.5-6.58L19.58,12.5l0.92,0.92Zm-6,5.08h0.95l3.03-3.05l-0.45-0.47l-0.48-0.45L14.5,17.55V18.5Zm3.53-3.53l-0.48-0.45l0.93,0.92l-0.45-0.47Z"/></svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
