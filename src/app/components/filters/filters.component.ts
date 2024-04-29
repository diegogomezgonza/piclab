import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent  implements OnInit {
  selectedImage: string | ArrayBuffer = '';
  selectedFilter: string = '';
  constructor() { }

  ngOnInit() {}
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
