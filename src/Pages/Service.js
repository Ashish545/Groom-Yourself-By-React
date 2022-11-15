import Card from "../Components/Card";
import data from "./data";


function Service() {
  return (

    <>



<div className="my-5">
    <h1 className="text-center"> Our Servicres </h1>
    

  </div>          


        <div className="container-fluid mb-5">
                    <div class="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                           {
                            data.map((items,index)=>{
                                return <Card imgsrc={items.img} title={items.title}/>

                            })
                           }
                          
                           

                        </div>
                    </div>
                    </div>
                </div>

        





        

   
    

    </>
  );
}

export default Service;
