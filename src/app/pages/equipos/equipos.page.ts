import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MisEquipos {

  nombre_equipo:string;
  estado: string;
  detalles:string;
  historial:string;
  imagenUrl: string,
  mostrarDetalles: boolean;
}



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})

export class EquiposPage implements OnInit {

  miembros: MisEquipos[] = [
    {
      nombre_equipo:'Barra Garfio',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.acha.com//images/catalogo/6680974504444749.jpg',
    },

    {
      nombre_equipo:'Bifurcadora',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
     
      mostrarDetalles: false,
      imagenUrl: 'https://isoseguridad.com/wp-content/uploads/2018/05/E.d.1.jpg',
    },

    {
      nombre_equipo:'Bidon de gasolina',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGgQBUnJX-6UqCDEikhijW8RYyd9THk4NLw&usqp=CAU',
    },





    {
      nombre_equipo:'Botas de bombero',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.kpnsafety.com/uy/wp-content/uploads/2022/07/kpn-safety_-Botas-para-bomberos-FHR-006.jpg',
    },

    {
      nombre_equipo:'Camion de bomberos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://i0.wp.com/efectococuyo.com/wp-content/uploads/2018/10/bomberos-de-distrito-capital.jpg?fit=700%2C350&ssl=1',
    },

    {
      nombre_equipo:'Camilla de ambulancia',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.kartsana.com/wp-content/uploads/2021/06/Serie-Jupiter-Carro-Camilla-2.jpeg',
    },


    {
      nombre_equipo:'Camilla de campaña',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://p.globalsources.com/IMAGES/PDT/B1187981638/camilla-plegable-de-los-bomberos.png',
    },

    {
      nombre_equipo:'Camilla telescopica',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://m.media-amazon.com/images/I/611og4KfptL.jpg',
    },

    {
      nombre_equipo:'Casco de bomberos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_701138-MLC48459103416_122021-O.webp',
    },

    {
      nombre_equipo:'Cauchos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktvJy8rFmdmOsUGLbDOQm6FpkZkR3GRTyzA&usqp=CAU',
    },


    {
      nombre_equipo:'Chaqueta de bomberos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.elexsa.com/assets/2014/11/Globe-Classix.png',
    },

    {
      nombre_equipo:'Cilindro de recarga',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_617801-MLV71350724846_082023-O.webp',
    },

    {
      nombre_equipo:'Conexiones de paño',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.segutecnica.com/images/000000000000000032593lacar-union-tipo-mandrilar-hembra-2-1.2-segutecnica.png',
    },

    {
      nombre_equipo:'Conos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.segutecnica.com/images/000000000000000090998dps-cono-pvc-premium-470-con-memoria-2-bandas-reflectivas-segutecnica.png',
    },

    {
      nombre_equipo:'Correa ajustable',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_653542-MLV51314141822_082022-O.webp',
    },

    {
      nombre_equipo:'Equipos de proteccion respiratoria',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.rocayol.com/2270-home_default/mascara-rostro-completo-de-silicon-ultra-twin-elite-msa.jpg',
    },

    {
      nombre_equipo:'Extintor de incendios',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_853463-MLV40938725741_022020-O.webp',
    },

    {
      nombre_equipo:'Escaleras',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://www.dissetodiseo.com/wp-content/uploads/2014/10/escalera-aluminio-pdl0150-01-1.jpg',
    },

    {
      nombre_equipo:'Guantes de bomberos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.protesegecu.com/wp-content/uploads/2020/11/Captura-de-Pantalla-2020-11-26-a-las-13.29.10.png',
    },

    {
      nombre_equipo:'Hacha',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://romak.com.mx/wp-content/uploads/2021/04/HAC1005-Hacha-para-bombero-6-lbs.png',
    },


    {
      nombre_equipo:'Linterna',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSKc_h1brkl5mtimcGaRJGRwSEtgVkGrAcg&usqp=CAU',
    },

    
    {
      nombre_equipo:'Llave copa',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      
      mostrarDetalles: false,
      imagenUrl: 'https://homecenterco.scene7.com/is/image/SodimacCO/550677_1?wid=800&hei=800&qlt=70',
    },

    {
      nombre_equipo:'Llave empalme',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.sakurasa.com/sistema/imagenes/articulos/0012765.jpg',
    },

    {
      nombre_equipo:'Llave en t',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_950667-MLA42475619408_072020-O.webp',
    },


    {
      nombre_equipo:'Machete',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.bomberomania.com.ar/wp-content/uploads/productos/Machete-Largo-Forestal-Acero-Maxima-Resistencia-Bellota-69cm-1.jpg',
    },

    {
      nombre_equipo:'Motosierra',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://agroesteros.com/wp-content/uploads/2021/07/Husqvarna-288.jpg',
    },

    {
      nombre_equipo:'Pala carbonera',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_843000-MLV41086905822_032020-O.webp',
    },


    {
      nombre_equipo:'Pala comun',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.desitec.com.mx/wp-content/uploads/2022/12/PALA.webp',
    },

    {
      nombre_equipo:'Pantalones de bomberos',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://www.elexsa.com/assets/2014/12/G-XTREME-Pantal%C3%B3n.png',
    },

    {
      nombre_equipo:'Pico',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://d7rh5s3nxmpy4.cloudfront.net/CMP4506/1/TALACHO_PICO-7809SPCM_C_BELLOTA.MAIN.png',
    },


    {
      nombre_equipo:'Planta electrica ',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://genpar.com.ve/wp-content/uploads/2023/07/planta-abierta.jpg',
    },

    {
      nombre_equipo:'Radio base',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://radiosdecomunicacion.com/wp-content/uploads/2022/05/radio_motorola_base_dem500.jpg',
    },

    {
      nombre_equipo:'Rastrillo Comun',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://hagalo.mx/27392-large_default/rastrillo-recto-16-dientes-60-pulgadas-truper-17880.jpg',
    },

    {
      nombre_equipo:'Tabla de rescate',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://catalogomedicomx.s3.amazonaws.com/produccion/img/p/3/6/3/2/8/36328-large_default.jpg',
    },

    {
      nombre_equipo:'Tapa de hidrante',
      estado: 'En buen estado',
      detalles:'N/A',
      historial:'N/A',
      mostrarDetalles: false,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_820238-MLV53355659053_012023-O.webp',
    },

   
  ];

  toggleDetails(miembro: MisEquipos) {
    miembro.mostrarDetalles = !miembro.mostrarDetalles;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }


  public active:boolean = false;
  
  setActive():void {
  
  this.active =!this.active  
  }


  headerItems = [
    {
      text: 'Personal de bomberos',
      link: '/home'
    },
    {
      text: 'Equipos de bomberos',
      link: '/equipos'
    },
    {
      text: 'Control de actividad',
      link: '/control'
    }

  ];


}


