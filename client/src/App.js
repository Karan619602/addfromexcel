import React, { Component,useState } from "react";
import "./App.css";
import axios from "axios";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       file: {},
//       msg: null,
//     };
//   }
//   handleFile = (e) => {
//     console.log(e.target.files[0]);
//     this.setState({
//       file: e.target.files[0],
//       msg: null,
//     });
//   };
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const fd = new FormData();
//     fd.append("excel", this.state.file);
//     this.setState({ msg: "Excel Sheet Added Successfully" });
//     await axios.post(`http://localhost:4000/upload/excel/data`, fd, {
//       withCredentials: true,
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div className="App App-header">
//         <div className="d-flex row container  justify-content-center">
//           <div className="col-lg-8 col-sm-10 col-11">
//             {this.state.msg && (
//               <div class="alert alert-warning " role="alert">
//                 <p>{this.state.msg}</p>
//               </div>
//             )}
//             <form
//               style={{ backgroundColor: "white", borderRadius: 15 }}
//               className="shadow py-4 px-4"
//             >
//               <h3 className="text-center my-3">Add Your Excel Sheet</h3>

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Excel File Input
//                 </label>
//                 <input
//                   class="form-control"
//                   type="file"
//                   id="formFile"
//                   onChange={this.handleFile}
//                 />
//               </div>

//               <div class="d-grid gap-2">
//                 <button
//                   class="btn btn-primary"
//                   type="submit"
//                   onClick={this.handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const App=()=>{

 const [result,setresult]=useState(false)
 const [message,setmessage]=useState(false)
const [obj,setobj]=useState({})
const handlechange=(e)=>{
  setobj(e.target.files[0])


}

 const  handleSubmit = async (e) => {

  if(Object.keys(obj).length===0){
    setmessage(true)
   
      }


  console.log(message)
   console.log(obj);
      e.preventDefault();
      const fd = new FormData();
      fd.append("excel", obj);
     // this.setState({ msg: "Excel Sheet Added Successfully" });
    const output=   await axios.post(`upload/excel/data`, fd, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

    
      setresult(output.data.success)
    
    };
 


  return (result? <div className="App App-header">
  <div className="d-flex row container  justify-content-center">
<div className="col-lg-8 col-sm-10 col-11">
<form
                  style={{ backgroundColor: "white", borderRadius: 15 }}
                  className="shadow py-4 px-4"
                  onSubmit={handleSubmit}
                >
                  <h4 className="text-center my-3"  style={{ color: "green" }}>Thank You</h4>
                  <h4 className="text-center my-3"> File Successfully Uploaded </h4>
                  <h4 className="text-center my-3">Your records will be processed shortly</h4>
                  </form>

</div>
            </div>
          </div>:

          <div className="App App-header">
            <h5>Add Candidates to database</h5>
            <div className="d-flex row container  justify-content-center">
 <div className="col-lg-8 col-sm-10 col-11">
            
                <form
                  style={{ backgroundColor: "white", borderRadius: 15 }}
                  className="shadow py-4 px-4"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-center my-3">Add Your Excel Sheet</h3>
    
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Excel File Input
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onChange={(e)=>handlechange(e)}
                    />
                     {message?<p style={{ color: "Red" }}>Please select a file</p>:''}
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      type="submit"
                     
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
}

export default App;