import Miniatura3 from './images/blog3.jpg';
import Miniatura4 from './images/blog4.jpg';
import Miniatura2 from './images/blog6.jpg';
import Miniatura1 from './images/blog2.jpg';


export  const ESQUEMA_POSTS = [
    {
        id: '1',
        miniatura: Miniatura3,
        category: 'Guias de viajes',
        title:'10 webs muy útiles para organizar un viaje',
        description: '¿Cuáles son las webs imprescindibles para preparar un viaje? ',
        authorID: 3
    },
    {
        id: '2',
        miniatura: Miniatura4,
        category:'Guias de ciudades',
        title:'Guía de Marruecos: toda la información para tu viaje',
        description: 'Con esta guía de Marruecos podrás organizar tu viaje a este fascinante país que estamos seguros, te dejará sin palabras al mismo tiempo que te enamorará nada más llegar.',
        authorID: 3
    },
    {
        id: '3',
        miniatura: Miniatura2,
        category: 'Destinos',
        title:'Los 20 Destinos más baratos en Europa para viajar este 2023',
        description: 'Si piensas en viajar por el viejo continente probablemente te preocupe cuánto vayas a gastar. ',
        authorID: 3
    }, {
        id: '4',
        miniatura: Miniatura1,
        category: 'Africa',
        title:'Africa',
        description: 'Si estás planeando un viaje a Marruecos y tenés granas de hacer la excursión Desierto de Merzouga, en este post te contamos lo que necesitas … ',
        authorID: 2
    },
]