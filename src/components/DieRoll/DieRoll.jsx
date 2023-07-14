export default function DieRoll() {
    const coin = ["Head", "Tail"];
    const cond1 = coin[Math.floor(Math.random() * coin.length)]
    const cond2 = coin[Math.floor(Math.random() * coin.length)]
    const styles= {color:"green"}
    const result = cond1 === cond2 ? "Die match:(" : "Die Not Match:(" //Third method condition
    // First method
    // if (cond1 === cond2){
    //     return (
    //         <>
    //         <h1>Die Match</h1>
    //             <h3>Die Roll 2: {cond2}</h3>
    //             <h3>Die Roll 1: {cond1}</h3>

    //         </>
    //     )
    // }else{
    //     return (
    //         <>
    //         <h1>Die Not match</h1>
    //             <h3>Die Roll 1: {cond1}</h3>
    //             <h3>Die Roll 2: {cond2}</h3>
    //         </>
    //     )
    // }

    // Second method
    // return(
    //     <>
    //         <h1>{cond1 == cond2 ? "Die match" : "Die Not match"} Die Roll 1: {cond1},  Die Roll 2: {cond2}</h1>
    //     </>
    // )
   
//    Third Method Condition
    // return (
    //     <>
    //         <h1>{result}</h1>
    //         <h3>Die Roll 1: {cond1}</h3>
    //         <h3>Die Roll 2: {cond2}</h3>
    //     </>
    // )

    // Fourth method Condition
    return (
            <>
                <h1 style= {styles}>{cond1 === cond2 ? "Die match:(" : "Die Not Match:("}</h1>
                <h3>Die Roll 1: {cond1}</h3>
                <h3>Die Roll 2: {cond2}</h3>
            </>
        )

}