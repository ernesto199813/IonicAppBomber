import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MisEquipos {

  descripcion_actividad:string;
  responsable_actividad:string;
  estado_actividad:string;
  fecha_de_inicio:string;
  fecha_de_finalizacion:string;
  reporte:string;
  /*imagenUrl: string,*/
  mostrarDetalles: boolean;
  dia_de_la_semana:string;
  H67:string;
  H1214:string;

}

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {

  showGridVariable = false; // Initialize as false to hide the grid initially

  showGrid() {
    this.showGridVariable = !this.showGridVariable; // Toggle the visibility
  }


  
  
  miembros: MisEquipos[] = [
    {

    dia_de_la_semana:'Lunes',
      descripcion_actividad:'Limpieza de baños de la estacion de bomberos',
      responsable_actividad:'Coronel',
      estado_actividad:'Iniciada',
      fecha_de_inicio:'11-09-24',
      fecha_de_finalizacion:'20-11-24',
      reporte:'Ninguno',
      mostrarDetalles: false,
      /*imagenUrl: '',*/
      H67:'Inicio del horario de descanso',
     H1214:'Hora de almuerzo y descanso',
  
    },
    { 
      
      dia_de_la_semana:'Martes',
      descripcion_actividad:'Limpieza de la cocina de la estacion de bomberos',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Inicio del horario de descanso',
      H1214:'Hora de almuerzo y descanso',
    },

    { 
      
      dia_de_la_semana:'Miercoles',
      descripcion_actividad:'Limpieza del comedor de la estacion de bomberos',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Inicio del horario de descanso',
      H1214:'Hora de almuerzo y descanso',
    },

    { 
      
      dia_de_la_semana:'Jueves',
      descripcion_actividad:'Limpieza de la sala de la estacion de bomberos',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Inicio del horario de descanso',
      H1214:'Hora de almuerzo y descanso',
    },

    { 
      
      dia_de_la_semana:'Viernes',
      descripcion_actividad:'Limpieza del estacionamiento de la estacion de bomberos',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Inicio del horario de descanso',
      H1214:'Hora de almuerzo y descanso',
    },

    { 
      
      dia_de_la_semana:'Sabado',
      descripcion_actividad:'Dia libre y de actividades recreativas',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Dia libre y de actividades recreativas',
      H1214:'Hora de almuerzo y descanso',
    },

    { 
      
      dia_de_la_semana:'Domingo',
      descripcion_actividad:'Dia libre y de actividades recreativas',
      responsable_actividad:'',
      estado_actividad:'',
      fecha_de_inicio:'',
      fecha_de_finalizacion:'',
      reporte:'',
      mostrarDetalles: false,
      /*imagenUrl: 'https://acortar.link/TxOaDW',*/
      H67:'Dia libre y de actividades recreativas',
      H1214:'Hora de almuerzo y descanso',
    },

    // Agrega más miembros según sea necesario
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
