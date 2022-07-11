import {
  FaTwitter,
  FaEllipsisH,
  FaHouseUser,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaUser,
  FaFeather
} from "react-icons/fa";
import './sideBar.css'


const SideBar = () => {
  return (
    <>
      <div
        className="mySideBar bg-light border-end fixed-top"
        style={{ width: "13%",height:'100%' }}
      >
        <div className="">
        <ul className="nav flex-column text-end fs-3">
         
         <li>
         <div className="p-1 me-2 rounded-circle text-center">
           <a href="#" style={{color:'black'}}><FaTwitter /></a>
           </div>
         </li>
      

         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaHouseUser />
           </div>
         </li>
         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaHashtag />
           </div>
         </li>
         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaBell />
           </div>
         </li>
         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaEnvelope />
           </div>
         </li>
         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaUser />
           </div>
         </li>
         <li>
         <div className="p-1 me-2 rounded-circle text-center">

           <FaEllipsisH />
           </div>
         </li>
       </ul>
       <div className="row gx-0 me-3">
         <div className="col-7"></div>
<div className="col-3">
<div style={{fontSize:'17px',width:'5vw',height:'5vw'}} className="bg-info p-3 text-center rounded-circle m-0">
         <a href="#" style={{textDecoration:'none',color:'black'}}><span style={{fontSize:'12px'}}>+</span><FaFeather /></a>
         </div>
</div>
        
        
       </div>
        </div>
     
    

      </div>
      
     
    </>
  );
};

export default SideBar;
