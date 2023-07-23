import './App.css';
import images from './images.jpeg'
import { useState } from 'react';
function Home() {
  const[open,setOpen]=useState(true);
  return (  
  <div className=' flex'>
    <div className={`${open ? " w-10" : "w-60" }  duration-500 h-screen bg-gray-900 relative  `}>
            <div className={`${open && "hidden"} ml-10 mt-8 font-bold text-white text-2xl`}> Menu</div>

            <a href='Home.js' className='flex  bg-gray-900 mt-12 cursor-pointer hover:bg-gray-400 mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/5973/5973800.png' alt='77'className='h-10 w-8 pt-2'/>
              <div className={` p-1 m-2 h-8 w-60 content-center text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Home
               </div>
            </a>


            <a href='Resume.js' className='flex  cursor-pointer hover:bg-gray-400 bg-gray-900  mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/3789/3789958.png' alt='77' className='h-10 w-8 pl-0.5'/>
              <div className={`h-8 w-32 pl-1 m-2 mt-1 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Resume
              </div>
            </a>

            < a href='Aptitude.js' className='flex  cursor-pointer hover:bg-gray-400 bg-gray-900  mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/2117/2117691.png' alt='77' className='h-10 w-8 pt-2'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Aptitude
              </div>
            </a>


          <a href='DSA.js' className='flex  cursor-pointer  hover:bg-gray-400 bg-gray-900   mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/7639/7639461.png' alt='77' className='h-10 w-8 pt-2 pl-0.5'/>
              <div className={` h-8 w-32 p-1 m-2 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    DSA
              </div>
          </a>

        
          <a href='Subjects.js' className='flex  cursor-pointer hover:bg-gray-400 bg-gray-900 mb-5 '>
              <img src='https://cdn-icons-png.flaticon.com/128/3330/3330314.png' alt='77' className='h-10 w-8 pl-0.5'/>
              <div className={`h-8 w-32 pl-1 m-2 mt-1 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Core Subjects
              </div>
          </a>

        
          <a href='Projects.js' className='flex  cursor-pointer hover:bg-gray-400 bg-gray-900 mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/4599/4599904.png' alt='77' className='h-12 w-9 pt-2 pl-0.5'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Projects
              </div>
          </a>


          <div className='flex cursor-pointer hover:bg-gray-400 bg-gray-900  mb-5'>
              <img src='https://cdn-icons-png.flaticon.com/128/7407/7407709.png' alt='77' className='h-10 w-9 pt-2 pl-0.5'/>
              <div className={`h-8 w-32 p-1 m-2 mt-1 text-gray-300 text-sm flex items-center gap-x-4 
              ${open && "hidden"}`}>
                    Previous Year Papers
              </div>
          </div>
    </div >

    {/* TopNavBar */}
      <div className='  text-2xl bg-indigo-400 h-screen w-screen  ' >
       <div className=' bg-indigo-400 flex cursor-pointer h-0' onClick={()=>setOpen(!open)} >
            <img src={images} className={`items-start h-6 rounded-full w-6  mt-5 bg-indigo-400  ${ !open && "rotate-90"}`} />
      </div>
      <div class=" bg-gray-900  flex  items-center  p-4">
            <ul class="font-medium flex space-x-20  mr-0 p-4 pl-20  border-gray-100  ">
                  <li>
                  <a href="#" class=" text-blue-500 hover:text-white" >About</a>
                  </li>
                  <li>
                  <a href="#" class=" text-blue-500 hover:text-white" >Contact</a>
                  </li>
                  <li>
                  <a href="#" class=" text-blue-500 hover:text-white" >Login</a>
                  </li>
                  <li>
                  <a href="#" class=" text-blue-500 hover:text-white" >SignUp</a>
                  </li>
                  <li className='flex absolute absolute right-0'>
                  <button className=' bg-blue-600 rounded-md pt-1 pl-5 pr-5 pb-2 mr-10 hover:bg-slate-100'> Login</button>    
                  <button className=' bg-blue-600 rounded-md pt-1 pl-5 pr-5 pb-2 mr-10 hover:bg-slate-100'> SignUp</button>    

                  </li>
            </ul>
            </div>
      </div>
      

  </div>
  );
}

export default Home;
