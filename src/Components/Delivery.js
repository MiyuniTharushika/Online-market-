import React from 'react'
import Process1 from "../assets/images/process1.png"
import Process2 from "../assets/images/process2.png"
import Process3 from "../assets/images/process3.png"

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process" >
    <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="mb-3">
          <img src={Process1} className='w-50 h-50' alt=""/>
        </div>
        <h2>Pick Your Veg</h2>
        <p>Select from our fresh assortment of hand-picked vegetables for the perfect addition to your basket!</p>
        
      </div>
      <div className="col px-5 text-center">
        <div className="mb-3">
        <img src={Process2} className='w-50 h-50' alt=""/>
        </div>
        <h2>We Deliver the Bag</h2>
        <p>Sit back and relax as we bring your carefully packed bag of goodies straight to your doorstep!</p>
        
      </div>
      <div className="col px-5 text-center">
        <div className="mb-3">
        <img src={Process3} className='w-50 h-50' alt=""/>
        </div>
        <h2>You Enjoy Your Veg</h2>
        <p>Savor the farm-fresh goodness of your chosen veggies as you create delicious meals for yourself and your loved ones!</p>
        
      </div>
    </div>
  </div>
  )
}

export default Delivery
