// import React from "react"
// import cricketContext  from "./CricketContext"

// const CricketerProvider = (props) =>{


//     let name = " Sachin Tendulkar"

//     return (
//         <cricketContext.Provider value={name}>
//            {props.children}
//         </cricketContext.Provider>
//     )

// }


// export default CricketerProvider


//if we need updated the value 
import React, {useState} from "react"
import cricketContext  from "./CricketContext"

const CricketerProvider = (props) =>{

    const [cricketer, setCricketer] = useState({
        name:"Sachin tendulkar",
        age:47,
        country:"India",
        retired:true
    })

  

    return (
        <cricketContext.Provider value={{
            cricketer: cricketer,
            setCricketer: setCricketer
        }
        }>
           {props.children}
        </cricketContext.Provider>
    )

}


export default CricketerProvider