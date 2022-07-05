import React from "react"
import "./Mcreate.css"

// const target = document.querySelectorAll("[data-anime]")
// console.log("target:", target)

function Mcreate(){
  
    return(
        <div className="Modal--create--overlay" data-anime="left">
            <div className="Modal--create">
    
            <p>Tarefa criada com sucesso!</p>
        </div> 
        </div>       
    )
}

export default Mcreate;