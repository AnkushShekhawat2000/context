import react,{useContext} from "react"
import cricketContext from "../Context/CricketContext"

// 2 ways
// using consumer eassy way
const Hii  = ()=>{

   const {cricketer, setCricketer} = useContext(cricketContext)
    
   return (
        <div>
        <h1>Hii Cricketer</h1>
           <h2>{cricketer.age}</h2>
  
        </div>
    )
}

export default Hii