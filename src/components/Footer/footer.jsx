import React from 'react';
import { images } from '../../constants';

const Footer = () => {
    return (
        <div className="w-full relative z-10 flex justify-start items-center flex-col bg-custom-black pt-0 px-24 py-12 sm:p-0 sm:pb-6" id="contact">
            <div className="w-full flex justify-between items-start mt-12 px-8 lg:items-center lg:flex-col lg:p-0">
                <div className="flex-1 m-2 text-center">
                    <h1 className="font-heading text-golden text-2xl leading-[42px] mb-3 2xl:text-3xl 2xl:leading-[48px] font-bold drop-shadow-lg">
                        Contactez-nous
                    </h1>
                    <a href="https://www.google.com/maps/dir//64+Rue+d'Auxonne,+21000+Dijon/@47.3138551,4.9664439,20137m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x47f29d7b9ce189f3:0xe46d28b314db2d50!2m2!1d5.0488427!2d47.3138815?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" 
                       className="block mb-1.5 hover:text-golden transition-all duration-300">
                        <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize rounded-md">64 rue d'auxonne</p>
                    </a>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize mb-1.5 rounded-md">21000 Dijon</p>
                    <a href="tel:+330952259198" 
                       className="block hover:text-golden transition-all duration-300">
                        <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize rounded-md">+33 09 52 25 91 98</p>
                    </a>
                </div>

                <div className="flex-1 m-2 text-center">
                    <img src={images.logo} alt="footer_logo" className="w-52 mb-3 pb-1 mx-auto hover:opacity-90 transition-all duration-300 rounded-xl" />
                </div>

                <div className="flex-1 m-2 text-center">
                    <h1 className="font-heading text-golden text-2xl leading-[42px] mb-3 2xl:text-3xl 2xl:leading-[48px] font-bold drop-shadow-lg">
                        Heures d'ouverture
                    </h1>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize mb-1.5 rounded-md">Lundi : Fermé</p>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize mb-1.5 rounded-md">Mardi, Mercredi, Jeudi, Samedi :</p>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize mb-3 rounded-md">11h30 à 14h30, 18h30 à 23h</p>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize mb-1.5 rounded-md">Vendredi, Dimanche :</p>
                    <p className="font-body text-black py-0.5 text-base font-normal tracking-wider capitalize rounded-md">18h30 à 23h</p>
                </div>
            </div>

            <div className="mt-3 border-t border-golden/30 pt-4 w-full text-center">
                <p className="font-body text-black bg-white/90 py-0.5 text-sm font-normal tracking-wider capitalize rounded-md inline-block px-4">
                    2024 West Africa. Tous droits réservés, Danyvassiliakos dev/Web contact  danyvassiliakos@gmail.com.
                </p>
            </div>
        </div>
    );
};

export default Footer;