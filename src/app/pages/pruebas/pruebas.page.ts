import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {
  
  email: string;
  password: string;
  repassword:string;

  constructor(private navCtrl: NavController, private toastController: ToastController) { 

    this.email = '';
    this.password = '';
 this.repassword = '';
  }

  ngOnInit() {
  }

  login() {
    // Valida el correo y la contraseña
    if (!this.email.trim()) {
      this.alert('El campo de correo es obligatorio.');
      return;
    }

    if (!this.password.trim()) {
      this.alert('El campo de contraseña es obligatorio.');
      return;
    }

    if (!this.repassword.trim()) {
      this.alert('El campo de contraseña es obligatorio.');
      return;
    }

    if (!/^\w+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(this.email)) {
      this.alert('El correo electrónico no es válido.');
      return;
    }

    // Valida la contraseña
    if (this.password.length < 8) {
      this.alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (this.repassword.length < 8) {
      this.alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }


    // Redirige al usuario a la pantalla principal
    this.navCtrl.navigateForward('home');
  }


  async alert(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger' // Puedes ajustar el color de acuerdo a tus preferencias
    });
    toast.present();
  }



 
}
