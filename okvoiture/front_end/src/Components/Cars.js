import React from 'react';
import CategoriesV from './CategoriesV';

const cars = [
  {
    brand: 'Toyota',
    description: 'Voiture haut de gamme pour des trajets confortables',
    image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8diVDMyVBOWhpY3VsZSUyMHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    pricePerDay: 30
  },
  {
    brand: 'BMWV',
    description: 'Voiture haut de gamme pour des trajets confortables',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9pdHVyZSUyMEJNV1Z8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    pricePerDay: 50
  },
  {
    brand: 'BMWV',
    description: 'Voiture haut de gamme pour des trajets confortables',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9pdHVyZSUyMEJNV1Z8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    pricePerDay: 50
  },
  {
    brand: 'BMWV',
    description: 'Voiture haut de gamme pour des trajets confortables',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9pdHVyZSUyMEJNV1Z8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    pricePerDay: 50
  }
];

function Cars() {
  return (
    <CategoriesV cars={cars} />
  );
}

export default Cars;
