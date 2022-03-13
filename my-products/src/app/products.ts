export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
  id: 1,
  name: 'Volvo',
  price: 2000,
  description: 'Good car'
},
  {
    id: 2,
    name: 'Volswagen',
    price: 2500,
    description: 'Economic car'
  },
  {
    id: 3,
    name: 'BMW',
    price: 3000,
    description: 'Expensive car'
  }
  ];
