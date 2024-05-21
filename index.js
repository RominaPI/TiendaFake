let listaProductos = document.querySelector('#listaProductos');

// Datos de productos
const productosObtenidos = [
  {
    "id": 47,
    "title": "BMW X5 2022",
    "price": 1850632,
    "description": "El BMW Serie 3 es una berlina deportiva de lujo reconocida por su elegancia y rendimiento dinámico. Con un diseño aerodinámico y detalles sofisticados, ofrece un interior lujoso y cómodo con tecnología de vanguardia. Equipado con motores potentes y eficientes, así como con sistemas avanzados de asistencia al conductor, el Serie 3 brinda una experiencia de conducción emocionante y segura. En resumen, el BMW Serie 3 es un icono de la ingeniería alemana que combina lujo, deportividad y tecnología en un paquete excepcional.",
    "images": ["https://www.carscoops.com/wp-content/uploads/2022/08/Hamann-BMW-X5M-The-Big-Red-2s.jpg"],
    "creationAt": "2024-05-20T03:36:51.000Z",
    "updatedAt": "2024-05-20T19:22:21.000Z",
    "category": {
      "id": 5,
      "name": "Change title",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T21:01:06.000Z"
    }
  },
  {
    "id": 48,
    "title": "BMW serie 3 2022",
    "price": 850632,
    "description": "El BMW X5 2022 es un SUV de lujo que ofrece un rendimiento potente y tecnología innovadora. Con un diseño elegante y espacioso interior lujoso, brinda comodidad y estilo. Equipado con opciones de motorización variadas y características de seguridad avanzadas, el X5 garantiza una experiencia de conducción dinámica y segura",
    "images": ["https://static.wixstatic.com/media/f52da6_bd278633f8fe417eb469ae7943a14a6d~mv2.png/v1/fill/w_480,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f52da6_bd278633f8fe417eb469ae7943a14a6d~mv2.png"],
    "creationAt": "2024-05-20T03:36:51.000Z",
    "updatedAt": "2024-05-20T19:22:21.000Z",
    "category": {
      "id": 5,
      "name": "Change title",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T21:01:06.000Z"
    }
  },
  {
    "id": 51,
    "title": "Mercedes Benz Clase A 2022",
    "price": 890000,
    "description": "El Mercedes-Benz Clase A 2022 es un compacto premium que fusiona estilo, tecnología y rendimiento. Con un diseño elegante y moderno, ofrece un interior lujoso y bien equipado con avanzados sistemas de infoentretenimiento y asistencia al conductor. Equipado con motores eficientes y opciones de tracción delantera o integral, el Clase A ofrece una experiencia de conducción ágil y emocionante. En resumen, el Mercedes-Benz Clase A 2022 es una opción atractiva para aquellos que buscan lujo y sofisticación en un vehículo compacto.",
    "images": ["https://www.mercedes-benz.com.mx/content/mexico/es/passengercars/models/saloon/v177-fl-23-1/amg/_jcr_content/root/responsivegrid/media_gallery/media_gallery_item/image.component.damq1.3361073140472.jpg/mercedes-amg-a-class-v177-exterior-iconic-radiator-grille-2176x1224-12-2022.jpg"],
    "creationAt": "2024-05-20T03:36:51.000Z",
    "updatedAt": "2024-05-20T19:19:01.000Z",
    "category": {
      "id": 5,
      "name": "Change title",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T21:01:06.000Z"
    }
  },
  {
    "id": 118,
    "title": "Chevrolet Onix 2022",
    "price": 548000,
    "description": " El Chevrolet Onix 2022 es un automóvil compacto con diseño moderno y eficiente. Ofrece tecnología avanzada, seguridad destacada y un amplio espacio interior. Con su motor eficiente y características de conectividad, es una opción atractiva para aquellos que buscan comodidad y estilo en un paquete asequible.",
    "images": [
      "https://www.carroya.com/noticias/sites/default/files/entradillas/459918618onixbaja.jpg",
      "https://cdn.baguer.co/uploads/2023/11/camisa-ml-scout-azul-oscuro-124202AO.jpg_LtBdhqr8meqqs3oG9kYd7ny1qDF8uXvC170g2097Ha5ov1XDHw.jpg",
      "https://www.carroya.com/noticias/sites/default/files/entradillas/459918618onixbaja.jpg"
    ],
    "creationAt": "2024-05-20T20:03:24.000Z",
    "updatedAt": "2024-05-20T20:03:24.000Z",
    "category": {
      "id": 1885,
      "name": "npm install json-server",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-20T17:01:19.000Z",
      "updatedAt": "2024-05-20T17:21:54.000Z"
    }
  },
  {
    "id": 119,
    "title": "Prius 2022",
    "price": 329452,
    "description": "El Toyota Prius es un automóvil híbrido líder en su clase, reconocido por su eficiencia y tecnología. Con un diseño aerodinámico, ofrece un amplio espacio interior y características de seguridad avanzadas. Equipado con un sistema híbrido eficiente y opciones de conectividad, el Prius es una elección popular para aquellos que valoran la economía de combustible y la innovación tecnológica.",
    "images": ["https://img.remediosdigitales.com/5a120a/toyota-prius-2022-precio-mexico_2/450_1000.jpeg"],
    "creationAt": "2024-05-20T20:28:57.000Z",
    "updatedAt": "2024-05-20T20:32:57.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T18:09:06.000Z"
    }
  },
  {
    "id": 120,
    "title": "Mazda 3 2022",
    "price": 845623,
    "description": "El Mazda 3 2022 es un sedán compacto que destaca por su elegante diseño y rendimiento dinámico. Con líneas fluidas y detalles sofisticados, ofrece un interior refinado y cómodo. Equipado con tecnología de punta y características de seguridad avanzadas, brinda una experiencia de conducción placentera y segura. Con su motor eficiente y opciones de tracción delantera o total, el Mazda 3 es una opción atractiva para aquellos que buscan estilo y rendimiento en un automóvil compacto.",
    "images": ["https://www.mazdautofinanciamiento.mx/img/AUTOS/Mazda_3_Sedan/Auto_03_02.jpg"],
    "creationAt": "2024-05-20T20:29:04.000Z",
    "updatedAt": "2024-05-20T20:29:04.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T18:09:06.000Z"
    }
  },
  {
    "id": 121,
    "title": "Territory 2023",
    "price": 956623,
    "description": "El Ford Territory 2023 es un SUV compacto que combina estilo, espacio y tecnología. Con un diseño contemporáneo y robusto, ofrece un interior espacioso y confortable. Equipado con características de seguridad avanzadas y sistemas de asistencia al conductor, proporciona una conducción segura y tranquila. Con opciones de motorización eficiente y tracción delantera o integral, el Territory ofrece un equilibrio entre rendimiento y economía de combustible. En resumen, el Ford Territory 2023 es una opción atractiva para aquellos que buscan versatilidad y comodidad en un SUV compacto.",
    "images": ["https://acnews.blob.core.windows.net/imgnews/medium/NAZ_6742f3587e8a4d46ae5a4c0b87ef282d.webp"],
    "creationAt": "2024-05-20T20:29:04.000Z",
    "updatedAt": "2024-05-20T20:29:04.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T18:09:06.000Z"
    }
  },
  {
    "id": 122,
    "title": "Range Rover Evoque 2022",
    "price": 956623,
    "description": "El Range Rover Evoque 2022 es un SUV compacto de lujo que ofrece un equilibrio excepcional entre estilo, rendimiento y comodidad. Con su diseño elegante y distintivo, combina materiales de alta calidad con tecnología de vanguardia para crear un interior lujoso y refinado. Equipado con características de seguridad avanzadas y sistemas de tracción en las cuatro ruedas, el Evoque brinda una experiencia de conducción segura y emocionante en diversas condiciones. Con opciones de motorización eficiente y una amplia gama de características personalizables, el Range Rover Evoque 2022 es la elección ideal para aquellos que buscan un SUV compacto que satisfaga sus exigencias de lujo y rendimiento.",
    "images": ["https://www.motortrend.com/uploads/2022/02/2022-Land-Rover-Range-Rover-Evoque_P300HST_Static_S44_01.jpg?fit=around%7C875:492"],
    "creationAt": "2024-05-20T20:29:04.000Z",
    "updatedAt": "2024-05-20T20:29:04.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-20T03:36:51.000Z",
      "updatedAt": "2024-05-20T18:09:06.000Z"
    }
  }

];

// Renderizar productos
productosObtenidos.forEach((producto, indice) => {
  listaProductos.innerHTML += `
    <div class="col-12 col-md-3">
        <div class="card">
            <img src="${producto.images[0]}" class="imagenProducto" class="card-img-top py-2" alt="${producto.title}">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">${producto.description.slice(0,100)}</p>
                <a href="#" class="btn btn-primary">${producto.price}</a>
            </div>
        </div>
    </div>
  `;
});