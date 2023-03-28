import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";




const questions = [

    //Question1

    {
        id:0,
        text: "What is the capital city of China",

        answers : [
            
            { id:1, letter: "A",answerText:"Tokyo",correct: 0,},

            { id:0, letter: "B",answerText:"Pekin", correct: 1, },

            { id:2, letter: "C", answerText:"Beijing", correct: 0, },

            { id:3, letter: "D",answerText:"Paris",correct: 0, },
            
        ]

    },

    //question 2
    {
        id:1,
        text: "Which language is spoken in Austria ?",

        answers : [
            

            { 
                
               letter: "A",
               answerText:"Arabic",    
               correct: 0, 
                   
            },

            { letter: "B",
            answerText:"Russian",    
            correct: 0, 
          
             },

            { letter: "C",
            answerText:"German",    
            correct: 1, 
             },

            { letter: "D",
            answerText:"Italian",    
            correct: 0, 
        
             },
            

        ]

    },


        //question 3

    {
        id:2,
        text: "In a competition, If you passed out second contestant what would be your rank",

        answers : [

            { letter: "A",answerText:"4",correct: 0, },

            { letter: "B",answerText:"1", correct: 0,},

            { letter: "C", answerText:"2", correct: 1,},

            { letter: "D",answerText:"3",correct: 0,},
            
        ]

    },

    {
        id:3,
        text: "Which name is etyhmologically originated Persian",

        answers : [
            
            { letter: "A",answerText:"Casper",correct: 1,},

            { letter: "B",answerText:"Ahmed", correct: 0,},

            { letter: "C", answerText:"Draven", correct: 0,},

            { letter: "D",answerText:"Ares",correct: 0,},
            
        ]

    },

    {
        id:4,
        text: "Which civilisation is not originally from Ancient Mesopotamia",

        answers : [
            
            { letter: "A",answerText:"Sumerians",correct: 0,},

            { letter: "B",answerText:"Assyrians", correct: 0,},

            { letter: "C", answerText:"Babylon", correct: 0,},

            { letter: "D",answerText:"Scythians",correct: 1,},
            
        ]

    },


    {
        id:5,
        text: "Who is the known explorer of America",

        answers : [
            
            { letter: "A",answerText:"Americo Wespuchi",correct: 0,},

            { letter: "B",answerText:"Christoph Colomb", correct: 1,},

            { letter: "C", answerText:"Pri Reis", correct: 0,},

            { letter: "D",answerText:"Alexander the Great",correct: 0,},
            
        ]

    },

    {
        id:6,
        text: "Which actor played Vanya Hargreevs character in Umbrella Academy",

        answers : [
            
            { letter: "A",answerText:"Kristen Stewart",correct: 0,},

            { letter: "B",answerText:"Elliot Page", correct: 1,},

            { letter: "C", answerText:"Marcus Roy", correct: 0,},

            { letter: "D",answerText:"Joe Dolce",correct: 0,},
            
        ]

    },

    {
        id:7,
        text: "Who is the first African American president of US",

        answers : [
            
            { letter: "A",answerText:"Donald Trump",correct: 0,},

            { letter: "B",answerText:"Joe Biden", correct: 0,},

            { letter: "C", answerText:"Barrack Obama", correct: 1,},

            { letter: "D",answerText:"George Bush",correct: 0,},
            
        ]

    },

    {
        id:8,
        text: "If your dad(49) was 25 years old, 3 years before you was born, how old are you today ",

        answers : [
            
            { letter: "A",answerText:"21",correct: 1,},

            { letter: "B",answerText:"19", correct: 0,},

            { letter: "C", answerText:"31", correct: 0,},

            { letter: "D",answerText:"18",correct: 0,},
            
        ]

    },



    {
        id:9,
        text: "Do you need how many bag to put 1 million dollar as 100 banknots",

        answers : [
            
            {  letter: "A",answerText:"5",correct: 0,},

            { letter: "B",answerText:"1", correct: 0,},

            { letter: "C", answerText:"2", correct: 1,},

            { letter: "D",answerText:"3",correct: 0,},
            
        ]

    },



]

export default function Questions(props,e){

const [data,setData] = useState(null)
const [questionNumber, setQuestionNumber] = useState(props.order)
const answerRef = useRef([])
const [className, setClassName] = useState(null)
const [error,setError] = useState(0)


//setQuestionNumber(props.order)


function handleClick(e){


   console.log(questionNumber)






    if(e.target.value===1){
       

        for(var i =0;i<4;i++){

            if(answerRef.current[i].value != 1) {
 
                 answerRef.current[i].className="disabled"
 
            }

            if(answerRef.current[i].value ===1){
                answerRef.current[i].className="active"
            }
 
           }

                setTimeout(()=>{

                    for(var i =0;i<4;i++){
                             answerRef.current[i].className=""
                       }

                },901)


                setTimeout(()=>{

                    console.log(questionNumber)
                    /*
                    if(error===0){
                        props.setOrder(props.order+2)
                        setQuestionNumber(props.order)
                        setError(1)
                        console.log("hi")
                    } */


                 //   else if(error===1){
                        props.setOrder(props.order+1)
                        setQuestionNumber(questionNumber+1)
                 //   }

                  

                    console.log(questionNumber)


                    if(questionNumber<=10){
                    
                        alert("Congratilations, you earn "+props.amount[9-(questionNumber)].amount+" dollar")
                       
                        if(props.amount[9-questionNumber].amount>1000){
                            props.setClassName1("activeAmount")

                        }


                    }

         

                },900)  
                

              setTimeout(()=>{

               // setClassName("active")
             //   alert("true")

             if(questionNumber===9){
                    setClassName("disabled")
            }


              },2000)  
               
             
    }



   else if(e.target.value ===0){

        setTimeout(()=>{

            for(var y = 0 ; y<4;y++){
                if(answerRef.current[y].value==1){
                    answerRef.current[y].className="active"

                }
                else  answerRef.current[y].className="disabled"
                ;

            }

          },200) 

          setTimeout(()=>{

            alert("Wrong Answer")

          },2000) 

      
    }


 
   
}


    
useEffect(()=>{

    if(questionNumber<=9){
        setData(questions[questionNumber])

    }

},[questions,questionNumber,props.order,props.setOrder])










    return(


        <div>

            <p className="questionText" id={questions?.id}>{data?.text}</p>
                <div className="qElements">

                {data?.answers.map((answer,index)=>{

                        return(   
                             <li key={index} className={className}  id={index} ref={el=> answerRef.current[index]=el} onClick={ handleClick } value={answer.correct}> &nbsp; {answer.letter}.)&nbsp; {answer.answerText}</li>
                        )
                })}
 
                </div>
        </div>
    )


}