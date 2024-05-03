
import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import milvusvid from "../data/milvus.mp4";

function Project() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

     {/* <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item, idx) => (
            <div key={idx}
              className='w-[220px] inline-block p-2 m-10 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-slate-300'
            > {item} </div>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div> */}

  return (
    <div className='mx-20 ml-40 p-10'>
      <h1 className="text-center mt-10 font-bold text-blue_picton">My project</h1>
     
      <div className="flex flex-col md:flex-row mt-5">
        {/* Partie vidéo */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex justify-center">
          <video
            className="w-full"
            src={milvusvid}
            controls
          />
        </div>

        {/* Partie description */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-5 md:p-10">
          <p className='text-center'>
            In a world where travel and exploration are becoming increasingly important, innovation plays a crucial role in enhancing the traveler's experience. 
            One of the most exciting advances in this field is the use of artificial intelligence to facilitate the search for places, attractions and experiences.
            Smartour is an application that revolutionizes travel exploration using AI with the Milvus database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
