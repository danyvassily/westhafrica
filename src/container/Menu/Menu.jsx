import React, { useEffect, useRef, useState } from 'react';
import menuImage from '../../assets/menu.jpg';

const Menu = () => {
    const menuRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                        entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleImageClick = () => {
        if (window.innerWidth < 768) {
            setIsFullScreen(true);
        }
    };

    return (
        <>
            {/* Menu normal */}
            <div className="w-full min-h-screen flex items-center justify-center bg-amber-50 p-4" id="menu">
                <div 
                    ref={menuRef}
                    className="w-full max-w-[100%] md:max-w-[80%] lg:max-w-[1000px] mx-auto 
                             transform transition-all duration-1000 ease-out
                             opacity-0 translate-y-10 scale-95"
                >
                    <img 
                        src={menuImage} 
                        alt="Menu West African Food" 
                        className="w-full h-auto rounded-lg shadow-2xl 
                                 hover:shadow-3xl transition-shadow duration-300
                                 cursor-pointer md:rounded-lg sm:rounded-none"
                        onClick={handleImageClick}
                    />
                    
                    {/* Indicateur de zoom sur mobile */}
                    <div className="md:hidden text-center mt-4 text-amber-800 text-sm italic">
                        Tapez sur l'image pour voir en plein écran
                    </div>
                </div>
            </div>

            {/* Overlay plein écran pour mobile */}
            {isFullScreen && (
                <div 
                    className="fixed inset-0 bg-black z-50 flex flex-col"
                    onClick={() => setIsFullScreen(false)}
                >
                    <div className="absolute top-4 right-4 z-50">
                        <button 
                            className="text-white bg-black/50 rounded-full p-2"
                            onClick={() => setIsFullScreen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full h-full overflow-auto">
                        <img 
                            src={menuImage} 
                            alt="Menu West African Food" 
                            className="w-full h-auto object-contain min-h-screen"
                            style={{ maxWidth: 'none' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;