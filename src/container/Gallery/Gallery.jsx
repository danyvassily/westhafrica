import React from 'react';
import { SubHeading } from '../../components';

const Gallery = () => {
    return (
        <div className="flex flex-row bg-soft-white py-16 pl-24 pr-0 lg:flex-col sm:pl-8 sm:-mt-12 overflow-hidden" id="gallery">
            <div className="flex-1 flex justify-center items-start flex-col min-w-[500px] pr-8 lg:min-w-full sm:w-full animate-slideIn">
                <SubHeading title="Instagram" />
                <h1 className="font-title text-primary text-[64px] leading-[83.2px] tracking-wider capitalize sm:text-[22px]">
                    Pour nous suivre et voir plus de photos, cliquez sur le bouton 
                </h1>
               
                <a href="https://www.instagram.com/westafriica/"
                   className="group mt-4 inline-block">
                    <button type="button" 
                            className="bg-secondary text-soft-white font-base font-bold tracking-wider leading-7 text-base 
                                     py-2 px-6 rounded cursor-pointer transition-all duration-300 
                                     hover:bg-accent hover:shadow-lg transform hover:-translate-y-1
                                     sm:text-sm sm:px-4 sm:py-2">
                        Follow Instagram
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Gallery;