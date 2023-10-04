import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiHotelLine } from 'react-icons/ri';
import { LiaBathSolid } from 'react-icons/lia';
import { LiaBedSolid } from 'react-icons/lia';
import { BsArrowsMove } from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';
import Data from '../../Data.json';

function Body() {
  const [activeCity, setActiveCity] = useState('New York');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [propertiesToShow, setPropertiesToShow] = useState(6); // Number of properties to display

  const handleCityClick = (city) => {
    setActiveCity(city);
    // Reset the number of properties to show when the city changes
    setPropertiesToShow(6);
  };

  // Calculate the start and end index for items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + propertiesToShow;

  // Filter data based on the active city
  const filteredData = Data.filter((item) => item.city === activeCity);

  // Slice the data array to get items for the current page
  const displayedData = filteredData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(Data.length / itemsPerPage);

  // Function to load more properties
  const handleShowMore = () => {
    // Increase the number of properties to show by 3
    setPropertiesToShow(propertiesToShow + 3);
  };
  
  return (
    <div className='px-4 py-5'>
      <div className='text-center flex flex-col items-center justify-center'>
        <h1 className='font-extrabold text-3xl pt-4'>Featured Listed Property</h1>
        <p className='max-w-md mt-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti possimus dolores itaque dolore dolor harum
          optio enim aut.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-bold ${
            activeCity === 'New York' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } mr-2 cursor-pointer`}
          onClick={() => handleCityClick('New York')}
        >
          New York
        </span>
        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-bold ${
            activeCity === 'Paris' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } mr-2 cursor-pointer`}
          onClick={() => handleCityClick('Paris')}
        >
          Paris
        </span>
        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-bold ${
            activeCity === 'Mumbai' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } mr-2 cursor-pointer`}
          onClick={() => handleCityClick('Mumbai')}
        >
          Mumbai
        </span>
        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-bold ${
            activeCity === 'London' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          } cursor-pointer`}
          onClick={() => handleCityClick('London')}
        >
          London
        </span>
      </div>


          <div className="grid grid-cols-3 gap-5 place-items-center p-4">
                {
                    displayedData.map((data) => {
                        return (
                            
                                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg" key={ data.id }>
                                    <div className="relative">
                                        <img className="w-full h-auto p-2 rounded-2xl" src={data.icon} alt="Card Image" />
                                        <span className="bg-white hover:bg-red-300 hover:text-white text-blue-500 cursor-pointer rounded-full px-2 py-2 absolute top-4 right-4 z-10"><AiOutlineHeart/></span>
                                        <span className="bg-white text-blue-700 text-sm cursor-pointer rounded-full px-3 py-1 absolute top-4 left-4 z-10">For rent</span>
                                        {data.isPopular && (
                                          <span className="bg-blue-500 text-sm text-white rounded-sm px-2 py-[2px] absolute top-[13.2rem] left-[-0.5rem] z-10">Popular</span>
                                          
                                        )}
                                      </div>
                                        <div className="px-5 py-2 relative">
                                          <div className='text-sm flex items-center gap-2'><CiLocationOn/>{data.location}</div>
                                            <div className="font-bold text-md my-4">{data.name}</div>
                                                <div className='grid grid-cols-4 place-items-center pb-4 pt-2 border-b-2'>
                                                    <div><RiHotelLine className=' ml-6 mb-2'/>3 Room</div>
                                                        <div><LiaBedSolid className=' ml-4 mb-2'/>4 Bed</div>
                                                            <div><LiaBathSolid className=' ml-4 mb-2'/>1 Bath</div>
                                                                <div><BsArrowsMove className=' ml-4 mb-2'/>732 sft</div>
                                                                
                                                </div>
                                        </div>
                                        <div className="px-4 py-2 mb-2 text-lg flex items-center">
                                            {data.price}
                                            <span className="inline-block text-sm text-gray-700">/month</span>
                                            <div className='outline outline-1 rounded-full cursor-pointer px-4 py-2 text-sm text-blue-500 ml-[9rem]'>Read More</div>
                                        </div>
                                </div>
                            
                        )
                    
                    })
                }
        </div>
        {propertiesToShow < filteredData.length && (
        <div className='text-center flex flex-col items-center justify-center pt-5'>
          <button
            className="bg-blue-500 rounded-full px-4 py-2 text-sm font-semibold text-white"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  )
}

export default Body