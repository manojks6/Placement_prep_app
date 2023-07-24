import './App.css';
import images from './images.jpeg'
import { useState } from 'react';
function DSA() {
  const[open,setOpen]=useState(true);
  return (  
  <div className=' flex '>
    <div className={`${open ? " w-12 " : " w-64" }  duration-500 bg-gray-900 relative  `}>

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
      <div className='  text-2xl bg-blue-600 h-screen w-screen  ' >
       <div className=' bg-indigo-400 flex cursor-pointer h-0' onClick={()=>setOpen(!open)} >
            <img src={images} className={`items-start h-6 absolute rounded-full w-6 mt-4 mb-5 bg-indigo-400 ${open ? "-ml-10" : "-ml-10 opacity-25" }  ${ !open && "rotate-90"}`} />
      </div>
      <div class=" bg-gray-900  flex flex-wrap items-center justify-between mx-auto p-4">
            <ul class="font-medium flex space-x-14 ml-20 p-4 pl-10  border-gray-100  ">
                  <li>
                  <a href="DSA_Problems.js" class=" text-teal-500 hover:text-white -ml-10" >Problems</a>
                  </li>
                  <li>
                  <a href="https://neetcode.io/roadmap" class=" text-teal-500 hover:text-white " >RoadMap  </a>
                  </li>
                  <li>
                  <a href="https://www.youtube.com/@takeUforward" class=" text-teal-500 hover:text-white" >Tutorial(YouTube)</a>
                  </li>
                  <li>
                  <a href="#" class=" text-teal-500 hover:text-white  " ></a>
                  </li>
            </ul>
            </div>
            <div className=' flex '>
                  <div className=''>
                  <div className='w-80 h-64 p-2 ml-8 overflow-hidden'>
                              <a href="#" class="block max-w-sm p-8 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Basics</h5>
                              <p class="font-normal text-gray-400">Start from Basics of Time and Space Complexity Analysis and more</p>
                              </a>
                        </div>
                       
                        <div className=' w-80 h-64 p-2 ml-8 overflow-hidden'>
                              <a href="#" class="block max-w-sm p-5 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Problems on Linked Lists.</h5>
                              <p class="font-normal text-gray-400">Click here to see top 100 most asked qustions on array along with solution.</p>
                              </a>
                        </div>
                  </div>
                  <div>
                        <div className=' w-80 h-64 p-2 ml-8 overflow-hidden '>
                              <a href="#" class="block max-w-sm p-8 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Problems on Top Algorithms</h5>
                              <p class="font-normal text-gray-400">Top most important Algorithms and problems on them.</p>
                              </a>
                        </div>
                        <div className=' w-80 h-64 p-2 ml-8 overflow-hidden '>
                              <a href="#" class="block max-w-sm p-8 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Problems on Arrays and Strings.    </h5>
                              <p class="font-normal text-gray-400 text-start"> 100 most asked qustions on array along with solution.</p>
                              </a>
                        </div>
                  </div>
                  <div>
                        <div className=' w-80 h-64 p-2 ml-8 overflow-hidden '>
                              <a href="#" class="block max-w-sm p-8 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Advance DSA</h5>
                              <p class="font-normal text-gray-400"> Advance DSA such as Binary Trees,Dynamic Programming And Graphs</p>
                              </a>
                        </div>
                        <div className='w-80 h-64 p-2 ml-8  overflow-hidden'>
                              <a href="#" class="block max-w-sm p-8 rounded-lg bg-gray-800 hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold  dark:text-white" >Noteworthy technology acquisitions 2021</h5>
                              <p class="font-normal text-gray-400">Here are the biggest enterprise technology</p>
                              </a>
                        </div>
                        
                  </div> 
                  
            </div>

      </div>
  </div>
  );
}

export default DSA;
