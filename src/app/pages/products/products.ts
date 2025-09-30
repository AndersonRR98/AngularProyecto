import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  
   addToCart(productName: string) {
    alert(`¡${productName} añadido al carrito!`);
    // Aquí puedes implementar la lógica real del carrito
  }

}
