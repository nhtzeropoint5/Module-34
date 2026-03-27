import { CircleCheck } from 'lucide-react';
import React from 'react';

const card = ({data}) => {

    console.log(data);
    return (
        // <div>
        //     <div className='bg-amber-100 border-2 border-amber-600 p-5 text-center rounded-xl m-5'>
        //         <h1 className='text-2xl'>{data.name}</h1>
        //         <h3 className='text-base'>{data.price}</h3>
          
        //     {   
        //         data.features.map((element, index) => (
               
        //         <p className='flex mt-4' key={index}> <CircleCheck className='mx-3'></CircleCheck> {element}</p>
        //         ))
        //     }

        //     <button className='btn btn-success mt-4'>Click Me</button>
           
        //     </div>
        // </div>

        <div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    {data.isPopular && <span class="badge badge-xs badge-warning">Most Popular</span>}
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">{data.name}</h2>
      <span class="text-xl">{data.price}</span>
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">

    
{
  data.features.map((element, index) => {
    return (
      <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>{element}</span>
      </li>
    );
  })
}
    </ul>
    <div class="mt-6">
      <button class="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>



    );
};

export default card;