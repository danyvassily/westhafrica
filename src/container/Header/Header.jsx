import React, { useEffect, useRef, useState, useMemo } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const bannerRef = useRef(null);
    const animatedTextRef = useRef(null);
    
    const refs = useMemo(() => ({
        title: titleRef,
        text: textRef,
        image: imageRef,
        banner: bannerRef,
        animatedText: animatedTextRef
    }), []);

    const scrollToMenu = () => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Détection de la taille d'écran
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640); // 640px est le breakpoint sm de Tailwind
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        // Animation GSAP pour le texte (seulement sur tablette et desktop)
        if (!isMobile) {
            gsap.to(refs.animatedText.current, {
                duration: 2,
                text: {
                    value: "Au coeur de l'Afrique de l'Ouest",
                    delimiter: ""
                },
                ease: "none",
                opacity: 1,
                stagger: 0.05
            });

            // Observer pour les animations sur desktop/tablet
            const observer = new IntersectionObserver(
                entries => entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === refs.title.current) {
                            entry.target.classList.add('opacity-100', 'translate-x-0');
                            entry.target.classList.remove('opacity-0', '-translate-x-full');
                        } else if (entry.target === refs.text.current) {
                            entry.target.classList.add('opacity-100', 'translate-x-0');
                            entry.target.classList.remove('opacity-0', 'translate-x-full');
                        } else {
                            entry.target.classList.add('animate-scaleIn', 'opacity-100');
                            entry.target.classList.remove('opacity-0', 'translate-y-10');
                        }
                    }
                }),
                { threshold: 0.2, rootMargin: '0px' }
            );

            Object.values(refs).forEach(ref => ref.current && observer.observe(ref.current));
            return () => observer.disconnect();
        } else {
            // Sur mobile, afficher directement tous les éléments
            if (refs.animatedText.current) {
                refs.animatedText.current.textContent = "Au coeur de l'Afrique de l'Ouest";
                refs.animatedText.current.style.opacity = "1";
            }
            if (refs.title.current) {
                refs.title.current.classList.add('opacity-100', 'translate-x-0');
                refs.title.current.classList.remove('opacity-0', '-translate-x-full');
            }
            if (refs.text.current) {
                refs.text.current.classList.add('opacity-100', 'translate-x-0');
                refs.text.current.classList.remove('opacity-0', 'translate-x-full');
            }
        }
    }, [isMobile, refs]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-black" id="home">
            {/* Section Logo */}
            <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0">
                <div ref={refs.image} className="w-full h-full flex items-center justify-center p-4">
                    <img 
                        src={images.logo} 
                        alt="Logo du restaurant"
                        className="w-auto h-auto max-w-[80%] max-h-[50vh] md:max-w-[70%] md:max-h-[60vh] lg:max-w-[60%] lg:max-h-[70vh] object-contain"
                    />
                </div>
            </div>

            {/* Section Texte */}
            <div className="relative z-10 mt-[100vh]">
                <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center">
                    <div className="w-full max-w-3xl mx-auto text-center">
                        <div className={`mb-4 sm:mb-6 ${isMobile ? 'opacity-100' : 'animate-fadeIn'}`}>
                            <SubHeading title="Bienvenue" className="animate-slideInFromLeft text-lg sm:text-xl md:text-2xl" />
                        </div>
                        
                        <div ref={refs.title} className={`transition-all duration-1000 ease-out mb-4 sm:mb-6 md:mb-8 ${isMobile ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                            <h1 className="font-heading text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wider uppercase font-bold px-2 sm:px-4">
                                <span ref={refs.animatedText} className="inline-block"></span>
                            </h1>
                        </div>

                        <div ref={refs.text} className={`transition-all duration-1000 ease-out mb-6 sm:mb-8 md:mb-12 ${isMobile ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                            <p className="font-body text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal px-2 sm:px-4">
                                À Dijon, au 64 Rue d'Auxonne, notre restaurant fondé par deux jeunes passionnés 
                                vous invite à découvrir une cuisine authentique, riche en saveurs et en convivialité. 
                                <br className="hidden sm:block" /><br className="hidden sm:block" />
                                Ici, chaque plat est une ode à la chaleur et à la générosité de l'Afrique de l'Ouest.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Bouton */}
            <div className="relative z-10 mt-4 sm:mt-6 md:mt-8">
                <div className="flex justify-center px-4">
                    <button 
                        onClick={scrollToMenu}
                        className="bg-accent hover:bg-accent/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-12 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-base sm:text-lg"
                    >
                        Découvrir notre menu
                    </button>
                </div>
            </div>

            {/* Section Image */}
            <div className="w-full mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16 flex justify-center items-center relative px-2 sm:px-4 md:px-6">
                <div className="relative w-full max-w-6xl mx-auto">
                    <img 
                        src={images.caption} 
                        alt="Équipe du restaurant"
                        className="w-full object-cover rounded-[10%] sm:rounded-[15%] shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
};

export default Header;