import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';

const Histoire = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-scaleIn', 'opacity-100');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-soft-gray px-24 py-16 sm:px-4 sm:py-8 sm:-mt-12 overflow-hidden" id="about">
            <div className="text-center lg:text-left animate-fadeIn">
              
                <h1 className="font-title text-primary text-5xl leading-[83.2px] tracking-wider capitalize lg:text-3xl sm:text-2xl sm:mb-4
                             hover:text-secondary transition-colors duration-300">
                    Notre Histoire
                </h1>
            </div>

            <div className="flex justify-between items-center lg:flex-col mt-12">
                <div 
                    ref={imageRef}
                    className="opacity-0 translate-y-10 transition-all duration-700"
                >
                    <img 
                        src={images.chef} 
                        alt="chef" 
                        className="h-[600px] border border-secondary rounded-[34%_66%_39%_61%/70%_30%_70%_30%] 
                                 shadow-[0_24px_25px_var(--accent),0_-8px_15px_var(--accent),0_4px_6px_var(--accent),0_12px_13px_var(--accent)]
                                 lg:h-[400px] lg:mb-8 sm:h-[200px] sm:mb-8
                                 hover:scale-105 hover:rotate-4 transition-all duration-500
                                 animate-float"
                    />
                </div>

                <div 
                    ref={textRef}
                    className="w-[65%] text-xl leading-8 ml-16 font-body text-text-light font-normal tracking-wider 
                              lg:w-full lg:text-base lg:mt-8 lg:ml-0 sm:text-sm sm:mx-2 sm:mt-4
                              opacity-0 translate-y-10 transition-all duration-700
                              bg-soft-white p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <p className="relative">
                        <span className="absolute -left-8 top-0 text-6xl text-secondary opacity-25 sm:text-4xl sm:-left-4">
                            "
                        </span>
                        Chers amis, derrière chaque plat que vous dégustez chez WEST AFRICA, il y a l'histoire de deux 
                        jeunes passionnés de Dijon : Ibrahim et Jean-Brice. Ils ont voulu partager avec vous les saveurs 
                        authentiques et riches de l'Afrique de l'Ouest, qu'ils affectionnent tant. En créant ce lieu 
                        chaleureux, ils avaient en tête de vous offrir bien plus qu'un simple repas, mais une véritable 
                        expérience culinaire. Chaque bouchée est préparée avec soin pour vous faire voyager, et c'est un 
                        plaisir pour eux de vous accueillir jour après jour. Alors, installez-vous et laissez-vous guider 
                        par leurs passions et découvertes.
                        <span className="absolute -right-8 bottom-0 text-6xl text-secondary opacity-25 sm:text-4xl sm:-right-4">
                            "
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Histoire;