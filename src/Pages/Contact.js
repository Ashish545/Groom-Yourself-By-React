import { useState } from "react";

function Contact(){

    const [data,setData] =useState({
        name:"",
        phone:"",
        email:"",
        msg:""
    })

    function InputEvent(event){

        const{name,value} =event.target

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })

    }
    function formSubmit(e){
        e.preventDefault();
        alert(`My Name is ${data.name}. My Phone no. is  ${data.phone} My Email Address is  ${data.email} And I Want to Learn  ${data.msg} `)



    }
    return(
        <>

        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>

        </div>

        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form onSubmit={formSubmit}>

                                <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
            <input type="text" class="form-control"  name="name" value={data.name} onChange={InputEvent}  placeholder="Enter Your Name"/>
            </div>

                                <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Enter Your Phone No.</label>
            <input type="number" class="form-control"  name="phone" value={data.phone} onChange={InputEvent}  placeholder="Enter Your Phone No."/>
            </div>

                                <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control"  id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address"/>
            </div>

 
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your interest</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="msg" value={data.msg} onChange={InputEvent}></textarea>
            </div>

            <button className="btn btn-outline-primary" type="submit">
                Submit Form

            </button>


                    </form>

                </div>
            </div>

        </div>
        
  
        </>
    )
}

export default Contact;