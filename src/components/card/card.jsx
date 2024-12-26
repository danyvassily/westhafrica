import React from 'react';

const Card = () => {
    const menuSections = [
        {
            title: "Entrées",
            items: [
                "Accras de Morue x4 - 4.90",
                "Pastels Thon x4 (sauces au choix) - 6.50",
                "Pastels Viande Hachée x4 (sauces au choix) - 7.50",
                "Salade West Veggie - 7.90",
                "Salade West Thon - 8.90",
                "Salade West Poulet - 9.90"
            ]
        },
        {
            title: "Formules",
            items: [
                "West-Libreville - 22.90",
                "West-Conakry - 27.90",
                "West-Kirikou (-12ans) - 8.50"
            ]
        },
        {
            title: "Plats",
            items: [
                "Mafé - 14.00",
                "Yassa - 14.00",
                "Thieb - 14.00",
                "Attiéké - 16.00",
                "Ailes de Poulet x4 - 12.50"
            ]
        },
        {
            title: "Accompagnements",
            items: [
                "Alloco - 4.50",
                "Frites de Patate Douce - 4.50",
                "Nuggets x4 - 4.50",
                "Riz Blanc - 4.00",
                "Riz Rouge - 4.00"
            ]
        },
        {
            title: "Sauces",
            items: [
                "Pastels - 1.50",
                "Verte - 2.00",
                "Piment - 1.00"
            ]
        },
        {
            title: "Boissons",
            items: [
                "Bissap ou Gingembre - 3.50",
                "Vimto - 3.00",
                "Boisson 33cl - 2.00",
                "Eau Gazeuse - 2.00",
                "Eau Plate - 2.00",
                "Carafe de Bissap (1L) - 12.00"
            ]
        },
        {
            title: "Desserts",
            items: [
                "Thiakry / Dégué - 4.50",
                "Tiramisu Maison - 4.50",
                "Beignets x8 - 6.00"
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-r from-soft-gray to-soft-white text-primary p-8 font-alt w-full rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                {menuSections.map((section, index) => (
                    <div key={index} className="mb-8 sm:mb-10 w-full max-w-2xl">
                        <h2 className="text-secondary font-title text-2xl mb-6 text-center sm:text-xl">
                            {section.title}
                        </h2>
                        <ul className="list-none space-y-3">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} 
                                    className="mb-4 text-text-light text-center hover:text-secondary transition-colors duration-300 
                                             sm:text-sm sm:mb-2.5 flex justify-between items-center px-4">
                                    <span className="flex-1">{item.split(' - ')[0]}</span>
                                    <span className="text-accent font-semibold">{item.split(' - ')[1]}€</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;