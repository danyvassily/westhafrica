import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../../constants';
import salle from '../../assets/salle.png';
import new2 from '../../assets/new2.png';
import im2 from '../../assets/im2.png';
import im1 from '../../assets/im1.png';
import food5 from '../../assets/food5.png';
import food1 from '../../assets/food1.png';

gsap.registerPlugin(ScrollTrigger);

const allImages = [
    { src: images.person1, text: "Un moment de complicité autour de saveurs uniques." },
    { src: images.person2, text: "Partagez, savourez, créez des souvenirs." },
    { src: images.person3, text: "Emportez la gourmandise partout avec vous." },
    { src: images.person4, text: "Un festin à partager, des sourires garantis." },
    { src: images.food2, text: "Des saveurs authentiques qui vous transportent." },
    { src: food5, text: "L'excellence de la cuisine africaine." },
    { src: salle, text: "Notre espace chaleureux et accueillant." },
    { src: im2, text: "Des plats généreux et savoureux." },
    { src: im1, text: "Une expérience culinaire unique." },
    { src: food1, text: "La passion de la cuisine africaine." }
];

const Event = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedImages = useRef(0);

    // Préchargement des images
    useEffect(() => {
        const preloadImages = () => {
            loadedImages.current = 0;
            allImages.forEach(({ src }) => {
                const img = new Image();
                img.onload = () => {
                    loadedImages.current += 1;
                    if (loadedImages.current === allImages.length) {
                        setImagesLoaded(true);
                    }
                };
                img.src = src;
            });
        };

        preloadImages();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        if (isMobile) {
            const animation = gsap.to(sectionRef.current, {
                x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    start: "top top",
                    end: () => `+=${sectionRef.current.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (allImages.length - 1),
                        duration: { min: 0.2, max: 0.5 },
                        ease: "power1.inOut"
                    },
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const images = gsap.utils.toArray('.mobile-image');
                        
                        images.forEach((img, i) => {
                            const imgProgress = (progress * allImages.length) - i;
                            const scale = gsap.utils.clamp(0.8, 1, 1 - Math.abs(imgProgress) * 0.2);
                            const opacity = gsap.utils.clamp(0.5, 1, 1 - Math.abs(imgProgress) * 0.5);
                            
                            gsap.to(img, {
                                scale: scale,
                                opacity: opacity,
                                duration: 0.5,
                                overwrite: "auto"
                            });
                        });
                    }
                }
            });

            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
            };
        } else {
            const sections = gsap.utils.toArray('.desktop-section');
            const animation = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    start: "top top",
                    end: () => `+=${sections.length * 100}%`,
                    scrub: 1.5,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: { min: 0.3, max: 0.6 },
                        ease: "power2.inOut"
                    },
                    onUpdate: (self) => {
                        const progress = self.progress;
                        sections.forEach((section, i) => {
                            const images = section.querySelectorAll('.image-container');
                            const texts = section.querySelectorAll('.text-container');
                            
                            const sectionProgress = (progress * sections.length) - i;
                            const scale = gsap.utils.clamp(0.9, 1, 1 - Math.abs(sectionProgress) * 0.15);
                            const opacity = gsap.utils.clamp(0.6, 1, 1 - Math.abs(sectionProgress) * 0.4);
                            
                            images.forEach(img => {
                                gsap.to(img, {
                                    scale: scale,
                                    opacity: opacity,
                                    duration: 0.5,
                                    overwrite: "auto"
                                });
                            });

                            texts.forEach(text => {
                                gsap.to(text, {
                                    y: sectionProgress * 20,
                                    opacity: opacity,
                                    duration: 0.5,
                                    overwrite: "auto"
                                });
                            });
                        });
                    }
                }
            });

            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
            };
        }
    }, [isMobile, imagesLoaded]);

    if (isMobile) {
        return (
            <div className="bg-black overflow-hidden" id="events">
                <div ref={triggerRef} className="relative">
                    <div 
                        ref={sectionRef}
                        className="flex flex-nowrap bg-black"
                        style={{ width: `${allImages.length * 100}vw` }}
                    >
                        {allImages.map((item, index) => (
                            <div 
                                key={index}
                                className="w-screen h-screen flex items-center justify-center px-4"
                            >
                                <div className="mobile-image w-full h-[80vh] relative flex flex-col items-center justify-center">
                                    <img 
                                        src={item.src}
                                        alt={`image-${index + 1}`}
                                        loading="lazy"
                                        className={`w-full h-full object-contain transition-all duration-500 ${
                                            item.src === salle || 
                                            item.src === images.person1 || 
                                            item.src === images.person2 || 
                                            item.src === images.person3 || 
                                            item.src === images.person4 || 
                                            item.src === images.food2 
                                            ? 'rounded-[40px]' : 'rounded-2xl'
                                        } ${!imagesLoaded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black overflow-hidden" id="events">
            <div ref={triggerRef}>
                <div 
                    ref={sectionRef} 
                    className="flex flex-nowrap h-screen bg-black"
                    style={{ width: `${(allImages.length / 2) * 100}vw` }}
                >
                    {allImages.reduce((pairs, item, index) => {
                        if (index % 2 === 0) {
                            pairs.push(
                                <div key={index} className="desktop-section flex w-screen h-screen bg-black">
                                    <div className="w-1/2 h-full p-4 flex flex-col items-center justify-center">
                                        <div className="image-container relative w-full h-[80%] transform transition-all duration-500">
                                            <img 
                                                src={item.src} 
                                                alt={`image-${index + 1}`} 
                                                className={`w-full h-full object-contain ${
                                                    item.src === salle || 
                                                    item.src === images.person1 || 
                                                    item.src === images.person2 || 
                                                    item.src === images.person3 || 
                                                    item.src === images.person4 || 
                                                    item.src === images.food2 
                                                    ? 'rounded-[30px]' : 'rounded-lg'}`}
                                            />
                                            <div className="text-container transform transition-all duration-500">
                                                <p className="text-white text-center text-lg mt-4 font-light">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {allImages[index + 1] && (
                                        <div className="w-1/2 h-full p-4 flex flex-col items-center justify-center">
                                            <div className="image-container relative w-full h-[80%] transform transition-all duration-500">
                                                <img 
                                                    src={allImages[index + 1].src} 
                                                    alt={`image-${index + 2}`} 
                                                    className={`w-full h-full object-contain ${
                                                        allImages[index + 1].src === salle || 
                                                        allImages[index + 1].src === images.person1 || 
                                                        allImages[index + 1].src === images.person2 || 
                                                        allImages[index + 1].src === images.person3 || 
                                                        allImages[index + 1].src === images.person4 || 
                                                        allImages[index + 1].src === images.food2 
                                                        ? 'rounded-[30px]' : 'rounded-lg'}`}
                                                />
                                                <div className="text-container transform transition-all duration-500">
                                                    <p className="text-white text-center text-lg mt-4 font-light">
                                                        {allImages[index + 1].text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return pairs;
                    }, [])}
                </div>
            </div>
        </div>
    );
};

export default Event;