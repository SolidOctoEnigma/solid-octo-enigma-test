export interface Address {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}

export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: Address;
  website: string;
  image: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}
export interface Image {
  title: string;
  description: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  ean: string;
  upc: string;
  image: string;
  images: Image[];
  net_price: number;
  taxes: string;
  price: string;
  categories: string[];
  tags: string[];
}
