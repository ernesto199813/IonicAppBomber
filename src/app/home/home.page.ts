import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MiembroEquipo {
  nombres: string;
  apellidos:string;
  cedula:string;
  jerarquia: string;
  edad: string;
  fecha_de_ingreso:string;
  telefono:string;
  mostrarDetalles: boolean;
  altura:string;
  tipo_de_sangre:string;
  Carga_Familiar:string;
  correo:string;
  imagenUrl:string;

}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  miembros: MiembroEquipo[] = [
    {
      nombres: 'Leomar',
      apellidos:'Acosta' ,
      cedula:'12.111.392',
      jerarquia: 'Coronel',
      correo:'leomaracosta574@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04141175008',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },
    {
      nombres: 'Luis',
      apellidos:'Liendo' ,
      cedula: '6.889.352',
      jerarquia: 'Coronel',
      correo:'liendoluis2021@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04127143907',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Dannis',
      apellidos:'Flames' ,
      cedula: '11.060.799',
      jerarquia: 'Coronel',
      correo:'dannyparaiso29@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04142365491',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Richard',
      apellidos:'Urpino' ,
      cedula: '6.280.285',
      jerarquia: 'Teniente coronel',
      correo:'richardurpinocolina@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04123687496',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Luis',
      apellidos:'Vallejo' ,
      cedula: '12.276.868',
      jerarquia: 'Teniente coronel',
      correo:'luisvallejo72@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04125957842',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },
   
    {
      nombres: 'Alexis Leonardo',
      apellidos:'Sojo' ,
      cedula: '11.064.261',
      jerarquia: 'Teniente coronel',
      correo:'alexisojo97@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04265153226',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Anthony Emilio',
      apellidos:'Sánchez',
      cedula: '12.642.986',
      jerarquia: 'Teniente coronel',
      correo:'yalaantonella2018@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'N/A',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Ángel',
      apellidos:'Pérez' ,
      cedula: '15.711.710',
      jerarquia: 'Mayor',
      correo:'perezangel2006@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'N/A',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },
  
    {
      nombres: 'Yoham',
      apellidos:'Villareal' ,
      cedula: '13.903.800',
      jerarquia: 'Mayor',
      correo:'yohanv78@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'N/A',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Egduar',
      apellidos:'Álvarez' ,
      cedula: '14.388.706',
      jerarquia: 'Mayor',
      correo:'egduaralvarez@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04129215611',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Ángel',
      apellidos:'Saya' ,
      cedula: '11.635.987',
      jerarquia: 'Mayor',
      correo:'miguelsaya1974@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04129725619',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Armando',
      apellidos:'Herrada',
      cedula: '16.075.646',
      jerarquia: 'Capitán',
      correo:'erradaal@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04125445641',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Carlos',
      apellidos:'Orta',
      cedula: '17.982.411',
      jerarquia: 'Sargento Mayor',
      correo:'carlosorta2520@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04241713529',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Álvaro',
      apellidos:'Donado' ,
      cedula: '19.979.382',
      jerarquia: 'Sargento primero',
      correo:'alvaro.rodriguezbombero@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'N/A',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Yeferson',
      apellidos:'Gutiérrez',
      cedula: '24.997.874',
      jerarquia: 'Sargento segundo',
      correo:'neoyeferson@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04241781762',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Christian',
      apellidos:'Acosta',
      cedula: '25.230.121',
      jerarquia: 'Sargento segundo',
      correo:'chris.acosta.05.96@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'N/A',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },

    {
      nombres: 'Cleyver',
      apellidos:'Jiménez',
      cedula: '18.754.736',
      jerarquia: 'Bombero raso',
      correo:'cleyverjimenez87@gmail.com',
      imagenUrl: 'https://us.123rf.com/450wm/artsonik/artsonik1608/artsonik160800123/61190940-bombero-icono-del-vector-ilustraci%C3%B3n-de-bombero-aislado-en-el-fondo-blanco-en-estilo-plano-icono.jpg?ver=6',
      fecha_de_ingreso:'N/A',
      telefono:'04129994099',
      edad:'N/A',
      altura:'N/A',
      tipo_de_sangre:'N/A',
      Carga_Familiar:'N/A',
      mostrarDetalles: false,
    },
    // Agrega más miembros según sea necesario
  ];

  constructor(private router: Router) {}


  toggleDetails(miembro: MiembroEquipo) {
    miembro.mostrarDetalles = !miembro.mostrarDetalles;
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
