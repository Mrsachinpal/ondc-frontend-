// import { ButtonGroup } from "@mui/material";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import Radio from "@mui/material/Radio";
// import { useState } from "react";
// export default function MaterialUi() {

//     const [gender,setGender]=useState("female")
//     function getvalue (e){
//         console.log(e,"this is data");   
//     }
//     const getData= (e)=>{
//    setGender(e.target.value);
 
//     }
//   return (
//     <div>
//       <h1> hi this is example of material Ui</h1>
//       <button>click me</button>
//       <Button variant="contained">click me</Button>
//       <Button color="secondary">Submit</Button>
//       <Button color="primary">Submit</Button>
//       <Button color="success">Submit</Button>
//       {/* Corrected the color value */}
//       <Button color="error">Submit</Button>
//       <Button color="secondary">Submit</Button>
//       {/* ButtonGroup */}
//       <div>
//         <ButtonGroup orientation="vertical" color="success" variant="contained">
//           <Button>submit</Button>
//           <Button>click</Button>
//           <Button>add</Button>
//         </ButtonGroup>
//       </div>
//       {/* Checkbox */}
//       <div>
//         <Checkbox  color="success" value="ajay" onChange={(e)=>{getvalue(e.target.value)}}/>
//         <Checkbox  color="success" value="vijay" onChange={(e)=>{getvalue(e.target.value)}}/>
//         <Checkbox  color="success" value="rawat" onChange={(e)=>{getvalue(e.target.value)}}/>
//         <Checkbox  color="success" value="sam" onChange={(e)=>{getvalue(e.target.value)}}/>
//         <Checkbox  color="success" value="suraj" onChange={(e)=>{getvalue(e.target.value)}}/>
//       </div>


//       <div>
//         <h1>Radio button</h1>
//         <div>
//         <Radio
//             value="male"
//             checked ={gender ==="male"}
//             onChange={getData}
//         />
//         <label>male</label>
//         </div>
//         <div>
//         <Radio
//             value="female"
//             checked={gender==="female"}
//             onChange={getData}
//         />
//         <label>female</label>
//         </div>
     

//       </div>
//     </div>
//   );
// }
