import React from 'react';
import CircleBtn from '../ui/CircleBtn';
import NavigateButton from '../ui/NavigateButton';
import { eventList , getImage } from '../constants/eventList';

const Events = () => {
    return <div className='bg-(--west-bg) py-16'>
        <div className='container flex flex-col'>
           <div className='flex justify-between'>
              <div className='space-y-8'>
                <CircleBtn text="EVENTS" />
                <h1 className='text-5xl md:text-6xl lg:text-7xl md:max-w-[550px] '>Grow your network & ideas.</h1>
              </div>
            <div className='flex items-end max-md:hidden'>
              <NavigateButton 
               text="VIEW ALL EVENTS" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16'>
            {
                eventList.map((item)=>{
                    const imgsrc = getImage(item.imgName);
                        return (
                            <div key={item.id} className="group space-y-8">
                                <div className="relative overflow-hidden rounded-3xl md:h-[350px] transition-all group-hover:rounded-full">
                                    <img
                                        src={imgsrc}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:opacity-70"
                                        />
                                    <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="opacity-0 scale-95 transition-all text-white duration-400 group-hover:opacity-100 group-hover:scale-100 pointer-events-auto">
                                        <NavigateButton text="VIEW EVENT" />
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='text-gray-500'>{item.d_and_b}</h1>
                                <h1 className='text-3xl group-hover:underline'>{item.title}</h1>
                                <h1 className='text-gray-500' >{item.mail}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>

            <div className="md:hidden mt-8">
                <div className="flex">
                    <NavigateButton text="VIEW ALL EVENTS" />
                </div>
            </div>
        </div>
    </div>;
}

export default Events;