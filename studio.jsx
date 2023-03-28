import React, { useRef, useState } from "react";
import pic from "./images/studio.jpg"
import Questions from "./questions";
import "./App.css"

const Studio = (props) => {


    const questionOrder = [

        {id:10,amount:"1.000.000"},
        {id:9, amount:"500.000"},
        {id:8, amount:"250.000"},
        {id:7, amount:"125.000"},
        {id:6, amount:"60.000"},
        {id:5, amount:"30.000"},
        {id:4, amount:"15.000"},
        {id:3, amount:"5.000"},
        {id:2, amount:"3.000"},
        {id:1, amount:"1.000"},

    ]

    const [order, setOrder] = useState(0)
    const [className1, setClassName1] = useState("activeAmount")
    
    const itemRef = useRef([])

        return(
            <div className="container">          

           

            <div className="questionSection">
                         <Questions order={order}
                          setOrder={setOrder} 
                          amount={questionOrder}
                          className1={className1}
                          setClassName1={setClassName1}/>
                     </div>

                     <div className="orderSection">
               
                            {questionOrder.map((e,index)=> {
                                
                                return(
                
                                    <div className="orderItem" key={index}>
                                        <li className={ order === e.id ? className1: "" } ref={el=> itemRef.current[order] = el}> 
                                            <span className="order">{e.id}</span> &nbsp;
                                            <span className="amount">{e.amount}</span>

                                        </li>
                                    </div>
                
                                )
                            })}
                     </div>          
            </div>
        )

}


export default Studio;