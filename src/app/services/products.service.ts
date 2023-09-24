import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private products: Product[] = [
    {
      name: 'Hoodie Hombre Gris',
      description: 'Buso en algodón perchado Monaco, capucha con forro liso, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 5,
      price: 100000,
      identifier: 'Hoodie Hombre Gris',
      img: '../../assets/img/store/55.png',
      qty: 1,
    },
    {
      name: 'Hoodie Hombre Azul Marino',
      description: 'Buso en algodón perchado Monaco, capucha con forro liso, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 6,
      price: 100000,
      identifier: 'Hoodie Hombre Azul Marino',
      img: '../../assets/img/store/6.png',
      qty: 1,
    },
    {
      name: 'Hoodie Hombre Negro',
      description: 'Buso en algodón perchado Monaco, capucha con forro liso, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 7,
      price: 100000,
      identifier: 'Hoodie Hombre Negro',
      img: '../../assets/img/store/7.png',
      qty: 1,
    },
    {
      name: 'Hoodie Hombre Blanco',
      description: 'Buso en algodón perchado Monaco, capucha con forro liso, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'airpods',
      id: 8,
      price: 100000,
      identifier: 'Hoodie Hombre Blanco',
      img: '../../assets/img/store/8.png',
      qty: 1,
    },
    {
      name: 'Hoodie Mujer Azul Marino',
      description: 'Buso en algodón perchado Monaco, capucha con forro afelpado, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 1,
      price: 100000,
      identifier: 'Hoodie Mujer Azul Marino',
      img: '../../assets/img/store/1.png',
      qty: 1,
    },
    {
      name: 'Hoodie Mujer Gris',
      description: 'Buso en algodón perchado Monaco, capucha con forro afelpado, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 2,
      price: 100000,
      identifier: 'Hoodie Mujer Gris',
      img: '../../assets/img/store/2.png',
      qty: 1,
    },
    {
      name: 'Hoodie Mujer Negro',
      description: 'Buso en algodón perchado Monaco, capucha con forro afelpado, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 3,
      price: 100000,
      identifier: 'Hoodie Mujer Negro',
      img: '../../assets/img/store/3.png',
      qty: 1,
    },
    {
      name: 'Hoodie Mujer Blanco',
      description: 'Buso en algodón perchado Monaco, capucha con forro afelpado, mangas y cintura en tela Reed, cordón de buen calibre y resistente, ojal y campana en acero inoxidable, costura frontal bolsillo - hombro, tallas XS - XL.',
      category: 'Hoodie',
      id: 4,
      price: 100000,
      identifier: 'Hoodie Mujer Blanco',
      img: '../../assets/img/store/4.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Amarillo-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 9,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Amarillo-Blanco',
      img: '../../assets/img/store/9.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Azul-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 10,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Azul-Blanco',
      img: '../../assets/img/store/10.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Gris Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 11,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Gris Blanco',
      img: '../../assets/img/store/11.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Negro-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 12,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Negro-Blanco',
      img: '../../assets/img/store/12.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Rojo-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 13,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Rojo-Blanco',
      img: '../../assets/img/store/13.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Blanco-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 14,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Blanco-Gris',
      img: '../../assets/img/store/14.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Negro-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 15,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Negro-Gris',
      img: '../../assets/img/store/15.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Rojo-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 16,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Rojo-Gris',
      img: '../../assets/img/store/16.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Gris-Negro',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 17,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Gris-Negro',
      img: '../../assets/img/store/17.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Mujer Rojo-Negro',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 18,
      price: 70000,
      identifier: 'Camisa Raglan Mujer Rojo-Negro',
      img: '../../assets/img/store/18.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Gris-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 19,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Gris-Blanco',
      img: '../../assets/img/store/19.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Azul-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 20,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Azul-Blanco',
      img: '../../assets/img/store/20.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Negro-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 21,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Negro-Blanco',
      img: '../../assets/img/store/21.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Rojo-Blanco',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 22,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Rojo-Blanco',
      img: '../../assets/img/store/22.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Blanco-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 23,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Blanco-Gris',
      img: '../../assets/img/store/23.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Negro-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 24,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Negro-Gris',
      img: '../../assets/img/store/24.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Rojo-Gris',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 25,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Rojo-Gris',
      img: '../../assets/img/store/25.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Gris-Negro',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 26,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Gris-Negro',
      img: '../../assets/img/store/26.png',
      qty: 1,
    },
    {
      name: 'Camisa Raglan Hombre Negro-Rojo',
      description:'Camisa en tela Circuito, colores customizables, cuello en tela Reed, manga larga - 3x4 - corta, cuello normal - bandeja para dama, gran detalle en terminados',
      category: 'Raglan',
      id: 27,
      price: 70000,
      identifier: 'Camisa Raglan Hombre Negro-Rojo',
      img: '../../assets/img/store/27.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Mujer Gris',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 28,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Mujer Gris',
      img: '../../assets/img/store/28.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Hombre Gris',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 29,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Hombre Gris',
      img: '../../assets/img/store/29.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Mujer Blanca',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 30,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Mujer Blanca',
      img: '../../assets/img/store/30.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Hombre Blanca',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 31,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Hombre Blanca',
      img: '../../assets/img/store/31.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Mujer Negra',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 32,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Mujer Negra',
      img: '../../assets/img/store/32.png',
      qty: 1,
    },
    {
      name: 'Camiseta Básica Algodón Hombre Negra',
      description:'Camiseta en algodón básica de calidad, gran detalle en terminados.',
      category: 'Camisetas',
      id: 33,
      price: 35000,
      identifier: 'Camiseta Básica Algodón Hombre Negra',
      img: '../../assets/img/store/33.png',
      qty: 1,
    },
    {
      name: 'Estampado Sencillo',
      description:'Estampado en la parte frontal o reversa, se aplica técnica de serigrafía obteniendo un estampado de calidad y duradero, diseño customizable.',
      category: 'Estampados',
      id: 34,
      price: 25000,
      identifier: 'Estampado Sencillo',
      img: '../../assets/img/store/34.png',
      qty: 1,
    },
    {
      name: 'Estampado Doble',
      description:'Estampado en la parte frontal y reversa del torso, se aplica técnica de serigrafía obteniendo un estampado de calidad y duradero, diseño customizable.',
      category: 'Estampados',
      id: 35,
      price: 50000,
      identifier: 'Estampado Doble',
      img: '../../assets/img/store/35.png',
      qty: 1,
    },
    {
      name: 'Estampado Triple',
      description:'Estampado en la parte frontal, reversa y mangas, se aplica técnica de serigrafía obteniendo un estampado de calidad y duradero, diseño customizable.',
      category: 'Estampados',
      id: 36,
      price: 70000,
      identifier: 'Estampado Triple',
      img: '../../assets/img/store/36.png',
      qty: 1,
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
