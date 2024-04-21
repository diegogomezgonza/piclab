import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Corrige la importación eliminando la extensión .ts
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Especifica el tipo de la variable email como string y asigna una cadena vacía como valor inicial
  password: string = ''; // Especifica el tipo de la variable password como string y asigna una cadena vacía como valor inicial

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página principal o a donde desees
      this.navCtrl.navigateRoot('/home');
    } catch (error: any) {
      // Si hay un error en el inicio de sesión, muestra un mensaje de error al usuario
      this.presentToast(error.message);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
