// import react,{useContext} from "react"
// import cricketContext from "../Context/CricketContext"

// // 2 ways
// // using consumer eassy way
// const Hello = ()=>{

//    const name  = useContext(cricketContext)
    
//    return (
//         <div>
//         <h1>Hello Cricketer</h1>
//            <h2>{name}</h2>
//         <hr></hr>
//         </div>
//     )
// }

// export default Hello




// variable updated as dynamically updated value

import react,{useContext} from "react"
import cricketContext from "../Context/CricketContext"

// 2 ways
// using consumer eassy way
const Hello = ()=>{


   const {cricketer, setCricketer}  = useContext(cricketContext)
    

   function updateSachinAge(){
      setCricketer({...cricketer, age:cricketer.age+1})
   }


   return (
        <div>
            <h1>Hello {cricketer.name}</h1>
               <p>Age: {cricketer.age}</p>
               <p>Country: {cricketer.country}</p>
               <p>Retired: {cricketer.retired ? "Yes":"No"}</p>
               <button onClick={updateSachinAge}>Update Sachin Age</button>
               <hr/>
        </div>
    )
}

export default Hello