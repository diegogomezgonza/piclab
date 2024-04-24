import { Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedImage: string | ArrayBuffer = ''; // Variable para almacenar la imagen seleccionada
  selectedFilter: string = '';
  
  @ViewChild('swiper', { static: false }) swiperContainer: any;

  constructor() {}

  ngAfterViewInit() {
    // Inicializa Swiper.js
    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto', // Muestra tantos botones como quepan en el contenedor
      spaceBetween: 10, // Espacio entre los botones
      freeMode: true, // Desplazamiento libre
      scrollbar: {
        el: '.swiper-scrollbar', // Selector del scrollbar
      },
    });
  }


  // Método que se ejecuta cuando se selecciona un archivo
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
      const reader = new FileReader(); // Crea un objeto FileReader
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result; // Almacena la imagen seleccionada en la variable
        this.selectedFilter = ''; // Reinicia el filtro seleccionado al cargar una nueva imagen
      };
      reader.readAsDataURL(file); // Lee el contenido del archivo como URL
    }
  }

  // Método para eliminar la imagen seleccionada
  deleteImage() {
    this.selectedImage = ''; // Vacía la variable que contiene la imagen
    this.selectedFilter = ''; // Reinicia el filtro seleccionado al eliminar la imagen
  }

  // Método para descargar la imagen seleccionada
  downloadImage() {
    // Verifica si la imagen es una URL válida
    if (typeof this.selectedImage === 'string') {
      // Crea un enlace temporal para descargar la imagen
      const a = document.createElement('a');
      a.href = this.selectedImage;
      a.download = 'imagen'; // Nombre del archivo de descarga
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // La imagen no es una URL válida
      console.error('No se puede descargar la imagen. La imagen no es una URL válida.');
    }
  }

  applyFilter(filterName: string) {
    this.selectedFilter = filterName;
  }
}
