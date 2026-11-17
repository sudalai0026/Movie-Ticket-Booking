import "./Registeration.css"
import { useState } from "react"
export default function Register(){  
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [pass,setPass]=useState("")
const [comf,setComf]=useState("")
return(
    <>
 <div className="fullbox">
   
<form>
     <h2>Registration Form</h2>
    <table>
        
        <tr>
        <td><lable>Full Name:</lable></td> 
        <td><input  type="text" 
        value={name}
        onChange={(i)=>setName(i.target.value)}
        placeholder="Enter your Name..."
        /></td>
        </tr>
<br/>    
        <tr> 
        <td> <label>Email Id:</label></td>
         <td><input
         type="email"
         value={email}
         onChange={(i)=>setEmail(i.target.value)}
          placeholder="Enter your Email..."
         /></td>
         </tr>
<br/>

         <tr>
         <td><label>Password:</label></td>
         <td><input
         type="password"
         value={pass}
         onChange={(i)=>setPass(i.target.value)}
          placeholder="Enter your Password..."
         /></td>
         </tr>
<br/>
        <tr>

         <td><label>Confirm</label></td>
         <td><input
         type="password"
         value={comf}
         onChange={(i)=>setComf(i.target.value)}
        placeholder="Enter confirm Password..."
         
         /></td>
         </tr>
</table>

</form>   
     
    </div>
    </>
)

}