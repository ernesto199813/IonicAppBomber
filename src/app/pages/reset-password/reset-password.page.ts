import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadChildren } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})

export class ResetPasswordPage implements OnInit {

  

    email: string;
    showTimer: boolean = false;
    countdown: number = 60;
  
    constructor(private navCtrl: NavController, private toastController: ToastController) { 

      this.email = '';
    }


login(){

  this.navCtrl.navigateForward('login');

}

    ngOnInit() {
    }
    resetEmail() {
      // Aquí deberías enviar el código de verificación al correo electrónico
      // Puedes usar un servicio Angular para manejar la lógica de envío de correo.
  
      // Simulación de temporizador
      this.showTimer = true;
      this.startTimer();
    }
  
    startTimer() {
      const timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(timer);
          this.showTimer = false;
          this.countdown = 60; // Reinicia el temporizador para futuros intentos
        }
      }, 1000);
    }
  }
 




