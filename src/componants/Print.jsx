import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Print = () => {
    const[title,settitle]=useState('');
    const[price,setprice]=useState('');
    const[category,setcategory]=useState('');
    const[description,setdescription]=useState('');
    const[error,seterror]=useState(false);

    
        
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(settitle.length ==0 && price.length == 0 && category.length==0 ){
          seterror(true)
        }
      
      }
    
    return (
        <div className="  my-5 ">
       <div className="  ">

       <form action="" onSubmit={handlesubmit} >   
       <section class="m-auto my-5 ">
        <div class="row m-auto   ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4  col-sm-4 ">
                <label for="">الاسم بالعربي:</label>
                <input type="text" name="title" placeholder=" ادخل اسمك بالعربي "  onChange={(e)=>{settitle(e.target.value)}}  class="form-control  "/>
            </div>
            <div class="col-md-4   col-sm-4 ">
                <label for="">الاسم بالانجليزي :</label>
                <input type="text" name="category" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setcategory(e.target.value)}}  class="form-control  "/>
            </div>
        </div>
    </section>
    <section class="m-auto  ">
        <div class="row m-auto   ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4 col-sm-4 ">
                <label for="">الاسم المختصر بالعربي:</label>
                <input type="text"  name="price" placeholder=" المختصر بالعربي "  onChange={(e)=>{setprice(e.target.value)}} class="form-control  "/>
            </div>
            <div class="col-md-4  col-sm-4  ">
                <label for="">الاسم المختصر بالانجليزي:</label>
                <input type="text" name="description" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setdescription(e.target.value)}} class="form-control  "/>
            </div>
        </div>
    </section>
<br />
    <div class="m-auto text-center">
    <Link 
      type="submit" value="Submit" to='/homeee' className='btn btn-success'  onClick={()=>{
        fetch(`http://localhost:3100/mydata`, {
         method: "POST", 
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({title,category,price,description}),
   }) }}
   >حفظ</Link>
        <Link  to="/homeee" class="btn btn-danger m-2 ">الغاء</Link>
    </div>
       </form>
  
    </div>


        </div>
    );
}

export default Print;
