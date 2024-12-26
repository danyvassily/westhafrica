import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaRegStar, FaEllipsisV, FaGoogle } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
    const reviewsRef = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleReviews, setVisibleReviews] = useState([]);
    const BATCH_SIZE = 5;

    useEffect(() => {
        // Simulation du chargement initial
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            // Chargement progressif des avis par batch
            let currentBatch = 0;
            const loadNextBatch = () => {
                const start = currentBatch * BATCH_SIZE;
                const end = start + BATCH_SIZE;
                const newBatch = reviews.slice(0, end);
                setVisibleReviews(newBatch);
                currentBatch++;

                if (end < reviews.length) {
                    setTimeout(loadNextBatch, 300);
                }
            };

            loadNextBatch();
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading) {
            // Animation des avis
            reviewsRef.current.forEach((review, index) => {
                if (!review) return;

                gsap.fromTo(
                    review,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                        rotateX: -15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        duration: 0.8,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: review,
                            start: "top bottom-=100",
                            end: "top center",
                            toggleActions: "play none none reverse",
                        },
                        delay: index * 0.1
                    }
                );
            });

            // Animation pour l'appel à l'action
            gsap.fromTo(
                ".cta-section",
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".cta-section",
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, [isLoading, visibleReviews]);

    const reviews = [
        {
            username: "Clement Gracyk",
            rating: 5,
            date: "il y a 2 mois",
            text: "Si le service est un peu long, les plats sont d'une qualité incroyable. Tout comme les boissons maisons. Vraiment rien à redire sur ce restaurant, à tester absolument. Une super adresse !",
            visitDate: "Visité en octobre"
        },
        {
            username: "Jaeger Aurelie",
            rating: 5,
            date: "il y a 3 semaines",
            text: "À chaque fois que je commande un plat je suis toujours super bien servis ! La quantité et la qualité est juste incroyable ! Leurs plats sont tellement bon, succulent et délicieux ! Je recommande les yeux fermés ! ❤️",
            visitDate: "Visité en novembre",
            isNew: true
        },
        {
            username: "Feyza Arisoy",
            rating: 5,
            date: "il y a 4 mois",
            text: "Nourriture délicieuse avec des part généreuse et un personnel souriant aimable et à l'écoute. Les plats sont servis assez rapidement (nous étions un groupe de 5). Incroyable bonne découverte.",
            visitDate: "Visité en août"
        },
        {
            username: "Reda O",
            rating: 5,
            date: "il y a 2 jours",
            text: "Excellent, première fois que je goute West Africa et pas la dernière ! De l'entrée au dessert, tout était délicieux.",
            visitDate: "Visité en décembre",
            isNew: true
        },
        {
            username: "Mélissa M.",
            rating: 5,
            date: "il y a 3 semaines",
            text: "En plus d'une cuisine délicieuse et d'une ambiance chaleureuse, l'accueil a été irréprochable. Les employés sont prêts à se plier en quatre pour le bonheur des clients, et j'espère de tout cœur que le restaurant prospèrera à la hauteur de son service 👏",
            visitDate: "Visité en novembre",
            isNew: true
        },
        {
            username: "Mentor Reborn",
            rating: 5,
            date: "il y a 2 mois",
            text: "Très bonne expérience ce soir de West Africa ! Délice, ambiance et personnel sympa, tout était au rdv avec en bonus de cuisine...Je recommande.",
            visitDate: "Visité en octobre"
        },
        {
            username: "Soso",
            rating: 5,
            date: "il y a 2 mois",
            text: "Très bon accueil, très bon service et un staff au top, les plats sont succulents et généreux ! Merci !",
            visitDate: "Visité en octobre"
        },
        {
            username: "Clarisse Boulegnat",
            rating: 5,
            date: "il y a 3 mois",
            text: "Très belle découverte ! Les plats sont aussi délicieux de visuellement que gustativement. Une équipe très accueillante et à l'écoute attentive du client/client ! Je recommande !",
            visitDate: "Visité en septembre"
        },
        {
            username: "Lina Othello",
            rating: 5,
            date: "il y a 2 mois",
            text: "Restaurant super ! C'est un véritable régal à chaque repas ! Avec l'ambiance et le personnel au top ! Les plats sont copieux et savoureux ! Je recommande vivement ! Vous pouvez y aller les yeux fermés !",
            visitDate: "Visité en octobre"
        },
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (v, i) =>
            i < rating ? <FaStar key={i} className='text-yellow-400 text-sm'/> : <FaRegStar key={i} className='text-yellow-400 text-sm'/>
        );
    };

    if (isLoading) {
        return (
            <div className="bg-black text-white min-h-screen py-8 flex items-center justify-center">
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
                    </div>
                    <div className="text-yellow-400 text-center">Chargement des avis...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen py-8">
            <div className="container mx-auto px-4">
                {/* En-tête des avis */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                        <FaGoogle className="text-xl text-blue-500" />
                        <div>
                            <div className="text-2xl font-bold">4,9/5</div>
                            <div className="text-sm text-gray-400">{reviews.length} avis</div>
                        </div>
                    </div>
                </div>

                {/* Liste des avis */}
                <div className="grid gap-4">
                    {visibleReviews.map((review, index) => (
                        <div 
                            key={index}
                            ref={el => reviewsRef.current[index] = el}
                            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xl">
                                        {review.username[0]}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">{review.username}</h3>
                                            {review.isNew && (
                                                <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded">
                                                    NOUVEAU
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <div className="flex">
                                                {renderStars(review.rating)}
                                            </div>
                                            <span>•</span>
                                            <span>{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <FaEllipsisV />
                                </button>
                            </div>
                            <p className="text-gray-200 mb-2">{review.text}</p>
                            <div className="text-sm text-gray-400">{review.visitDate}</div>
                        </div>
                    ))}
                </div>

                {/* Appel à l'action */}
                <div className="mt-12 text-center cta-section">
                    <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl p-8 border border-yellow-400/30">
                        <h3 className="text-2xl font-bold mb-3">Envie de vivre une expérience culinaire sur Dijon ?</h3>
                        <p className="text-lg text-gray-300">
                            Rejoignez nos clients satisfaits et venez découvrir nos saveurs authentiques d'Afrique.
                            Une aventure gustative vous attend !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;