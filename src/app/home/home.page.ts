import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedImage: string | ArrayBuffer = ''; // Variable para almacenar la imagen seleccionada

  constructor() {}

  // Método que se ejecuta cuando se selecciona un archivo
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      const reader = new FileReader(); // Crea un objeto FileReader
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result; // Almacena la imagen seleccionada en la variable
      };
      reader.readAsDataURL(file); // Lee el contenido del archivo como URL
    }
  }

  // Método para eliminar la imagen seleccionada
  deleteImage() {
    this.selectedImage = ''; // Vacía la variable que contiene la imagen
  }
}
