import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  users: any[] = [
    { id: 1, name: 'Juan Pérez', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 3, name: 'María García', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 2, name: 'Carlos López', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Ana Martínez', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Luis Rodríguez', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Sofía Hernández', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, name: 'Pedro Díaz', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Laura Gómez', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'Jorge Ruiz', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Marta Sánchez', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
];


post: any[] = [
  { id: 2, name: 'Carlos García', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', img: 'assets/images/usuario.png', heart: 1200, comment: 15, share: 25, description: 'Disfrutando de las vistas increíbles desde la cima.', date: 'Hace 1 día' },
  { id: 1, name: 'Ana Torres', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', img: 'assets/images/usuario.png', heart: 950, comment: 8, share: 12, description: 'Compartiendo mi receta secreta de pastel de chocolate.', date: 'Hace 3 días' },
  { id: 3, name: 'José Martínez', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', img: 'assets/images/usuario.png', heart: 1100, comment: 20, share: 30, description: 'Relajándome bajo el sol y el sonido de las olas.', date: 'Hace 5 días' },
  { id: 4, name: 'María Rodríguez', avatar: 'https://randomuser.me/api/portraits/women/11.jpg', img: 'assets/images/usuario.png', heart: 800, comment: 5, share: 10, description: 'Maratón de películas clásicas con amigos.', date: 'Hace 2 días' },
  { id: 5, name: 'Luis Pérez', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', img: 'assets/images/usuario.png', heart: 1500, comment: 25, share: 40, description: 'Viviendo la música en vivo como nunca antes.', date: 'Hace 4 días' },
  { id: 6, name: 'Lucía Fernández', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', img: 'assets/images/usuario.png', heart: 700, comment: 12, share: 18, description: 'Momentos de relajación y cuidado personal.', date: 'Hace 6 días' },
  { id: 7, name: 'Pablo González', avatar: 'https://randomuser.me/api/portraits/men/13.jpg', img: 'assets/images/usuario.png', heart: 1300, comment: 18, share: 22, description: 'Descubriendo rincones ocultos de la ciudad.', date: 'Hace 1 día' },
  { id: 8, name: 'Marta Sánchez', avatar: 'https://randomuser.me/api/portraits/women/13.jpg', img: 'assets/images/usuario.png', heart: 900, comment: 10, share: 15, description: 'Celebrando con amigos y familiares.', date: 'Hace 3 días' },
  { id: 9, name: 'Ricardo López', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', img: 'assets/images/usuario.png', heart: 600, comment: 7, share: 9, description: 'Recorriendo nuevos caminos sobre dos ruedas.', date: 'Hace 7 días' },
  { id: 10, name: 'Isabel González', avatar: 'https://randomuser.me/api/portraits/women/14.jpg', img: 'assets/images/usuario.png', heart: 1000, comment: 14, share: 20, description: 'Disfrutando de una cena exquisita en un restaurante de lujo.', date: 'Hace 2 días' },
  { id: 11, name: 'Fernando Ruiz', avatar: 'https://randomuser.me/api/portraits/men/15.jpg', img: 'assets/images/usuario.png', heart: 1400, comment: 22, share: 35, description: 'Capturando el momento perfecto del atardecer.', date: 'Hace 4 días' },
  { id: 12, name: 'Laura Jiménez', avatar: 'https://randomuser.me/api/portraits/women/15.jpg', img: 'assets/images/usuario.png', heart: 750, comment: 9, share: 11, description: 'Encontrando las mejores ofertas en la ciudad.', date: 'Hace 5 días' },
  { id: 13, name: 'Antonio Díaz', avatar: 'https://randomuser.me/api/portraits/men/16.jpg', img: 'assets/images/usuario.png', heart: 850, comment: 11, share: 14, description: 'Conectando con la naturaleza en su máximo esplendor.', date: 'Hace 3 días' },
  { id: 14, name: 'Raquel Pérez', avatar: 'https://randomuser.me/api/portraits/women/16.jpg', img: 'assets/images/usuario.png', heart: 500, comment: 6, share: 8, description: 'Encontrando paz y equilibrio en cada postura.', date: 'Hace 8 días' },
  { id: 15, name: 'David Gómez', avatar: 'https://randomuser.me/api/portraits/men/17.jpg', img: 'assets/images/usuario.png', heart: 1200, comment: 16, share: 24, description: 'Experimentando con nuevas técnicas fotográficas.', date: 'Hace 2 días' },
  { id: 16, name: 'Carmen Morales', avatar: 'https://randomuser.me/api/portraits/women/17.jpg', img: 'assets/images/usuario.png', heart: 650, comment: 8, share: 10, description: 'Aprovechando el día para leer y tomar café.', date: 'Hace 6 días' },
  { id: 17, name: 'José Antonio Ramírez', avatar: 'https://randomuser.me/api/portraits/men/18.jpg', img: 'assets/images/usuario.png', heart: 950, comment: 13, share: 17, description: 'Disfrutando de música en vivo en un ambiente íntimo.', date: 'Hace 4 días' },
  { id: 18, name: 'Beatriz Castillo', avatar: 'https://randomuser.me/api/portraits/women/18.jpg', img: 'assets/images/usuario.png', heart: 700, comment: 10, share: 12, description: 'Disfrutando del aire fresco y la naturaleza.', date: 'Hace 3 días' },
  { id: 19, name: 'Juan Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/19.jpg', img: 'assets/images/usuario.png', heart: 800, comment: 9, share: 13, description: 'Risas y diversión con juegos de mesa.', date: 'Hace 5 días' },
  { id: 20, name: 'Elena Fernández', avatar: 'https://randomuser.me/api/portraits/women/19.jpg', img: 'assets/images/usuario.png', heart: 1100, comment: 20, share: 30, description: 'Compartiendo la alegría de alcanzar nuevas metas.', date: 'Hace 2 días' },
];



}
