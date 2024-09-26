import React, { useState } from 'react'

const BMI = () => {
  const [weight, setweight] = useState('')
  const [height, setheight] = useState('')
  const [Bmi, setbmi] = useState('')
  const [msg, setmsg] = useState('')


  let handlesubmit=(e)=>{
    e.preventDefault()
    if(weight == 0 || height == 0){
      alert("please enter valid value of both weight and height ")
    }
    else{
      let Bmi=(weight/(height*height)*703) 
      setbmi(Bmi.toFixed(1))

      if(Bmi<25){
        setmsg("You are underweight")
      }
      else if(Bmi>=25 && Bmi<=30){
        setmsg("You are healthy")
      }
      else{
        setmsg("You are overweight")
      }
  }


  }


  let reload=()=>{
    window.location.reload()
  }
  return (
    <>
      <div className="container-fluid mt-0 " style={{backgroundColor:"lightgray"}}>
        <div className="row  p-5">
          <div className="col-md-4"></div>
          <div className="col-md-5 p-5 " style={{backgroundColor:"#a5b7c7"}}>
            <h2 className='text-center'>BMI Calculator</h2>
            <br />
            <br />
            <form onSubmit={handlesubmit}>
              <div className='form-group'>
                <label htmlFor="">Weight(lbs)</label>
                <input className='form-control' type="text" value={weight} onChange={(e) => setweight(e.target.value)} placeholder='Your weight value' />
              </div>
              <br />
              <div className='form-group'>
                <label htmlFor="">height(cm)</label>
                <input className='form-control' type="text" value={height} onChange={(e) => setheight(e.target.value)} placeholder='Your height value' />
              </div><br /><br />
              <div className=' '>
                <input style={{width:"100%"}} className='btn   btn-outline-success  ' value="submit" type='submit'/> <br /><br />
                <input style={{width:"100%"}} className='btn  btn-outline-primary ' value="Reload"   onClick={reload} />

              </div>
            
              <div>
                <h3>Your BMI is :{Bmi}</h3>
                <p>Result:{msg}</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default BMI
