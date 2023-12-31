import './App.css';
import images from './images.jpeg'
import { useState } from 'react';
function HomeCode() {
  const[open,setOpen]=useState(true);
  const [dropdown, setDropdown] = useState(false);
return (  
  <div className=' flex'>
    <div className={`${open ? " w-12" : " w-64" }  duration-500 h-screen bg-gray-900 relative  `}>
    <div className={`${open && "hidden"} ml-12 mt-8 -mb-16 font-bold text-white text-2xl`}> Menu</div>
            
    <a href='Home.js' className={`flex  bg-gray-900 mt-24 ursor-pointer mb-5  text-blue-600 hover:text-white `}>
              <img src='https://cdn-icons-png.flaticon.com/128/5973/5973800.png' alt='77'className='h-10 w-8 pt-2'/>
              <div className={` p-1 m-2 h-8 w-64 content-center font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Home
               </div>
            </a>
      
               
          <a href='DSA.js' className='flex  cursor-pointer  bg-gray-900  text-blue-600 hover:text-white  mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/7639/7639461.png' alt='77' className='h-10 w-8 pt-2 pl-0.5'/>
              <div className={` h-8 w-32 p-1 m-2  font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    DSA
              </div>
          </a>
            
            < a href='Aptitude.js' className='flex  cursor-pointer bg-gray-900   text-blue-600 hover:text-white mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/2117/2117691.png' alt='77' className='h-10 w-8 pt-2'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1 font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Aptitude
              </div>
            </a>

            <a href='Resume.js' className='flex  cursor-pointer  bg-gray-900  text-blue-600 hover:text-white  mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/3789/3789958.png' alt='77' className='h-10 w-8 pl-0.5'/>
              <div className={`h-8 w-32 pl-1 m-2 mt-1 font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Resume
              </div>
            </a>

        
          <a href='Subjects.js' className='flex  cursor-pointer  bg-gray-900  text-blue-600 hover:text-white mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/3330/3330314.png' alt='77' className='h-10 w-8 pl-0.5'/>
              <div className={`h-8 w-32 pl-1 m-2 mt-1  font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Core Subjects
              </div>
          </a>
        
          <a href='Projects.js' className='flex  cursor-pointer  bg-gray-900 text-blue-600 hover:text-white mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/4599/4599904.png' alt='77' className='h-12 w-9 pt-2 pl-0.5'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1  font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Projects
              </div>
          </a>

          <div className='flex  cursor-pointer  bg-gray-900  text-blue-600 hover:text-white mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/7407/7407709.png' alt='77' className='h-10 w-9 pt-2 pl-0.5'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1  font-bold text-md flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Previous Year Papers
              </div>
          </div>
    </div >


    {/* TopNavBar */}
      <div className='  text-2xl  bg-blue-600 h-screen w-screen  ' >
       <div className=' bg-indigo-400 flex cursor-pointer h-0' onClick={()=>setOpen(!open)} >
       <img src={images} className={`items-start h-6 absolute rounded-full w-6 mt-4 mb-5 bg-indigo-400 ${open ? "-ml-10" : "-ml-10 opacity-25" }  ${ !open && "rotate-90"}`} />
      </div>
      <div class=" bg-gray-900  flex  items-center  p-4">
            <ul class="font-medium flex space-x-20  mr-0 p-4 pl-20  border-gray-100  ">
                  <li>
                  <a href="#" class=" text-teal-500 hover:text-white" >Topics</a>
                  </li>
                  <li>
                  <a href="#" class=" text-teal-500 hover:text-white" >Mock tests</a>
                  </li>
                  <li>
                  <a href="#" class=" text-teal-500 hover:text-white" >Previous year papers</a>
                  </li>
            </ul>
            </div>
            <p className=' text-center mt-6'> The page is under development</p>
      </div>
      

  </div>
  );
}

export default HomeCode;
