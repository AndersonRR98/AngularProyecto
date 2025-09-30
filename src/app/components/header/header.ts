import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  activeSection: string = 'home'; // Cambiado de activeRoute a activeSection
  private router = inject(Router);

  ngOnInit() {
    // Escuchar cambios de ruta para marcar el enlace activo
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.activeSection = this.getSectionFromUrl(event.url);
      });
  }

  // Método para navegar a secciones
  navigateToSection(section: string) {
    this.activeSection = section;
    
    // Mapear secciones a rutas
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'products': '/products',
      'contact': '/contact'
    };
    
    const route = routeMap[section] || '/';
    this.router.navigate([route]);
  }

  // Extraer la sección de la URL
  private getSectionFromUrl(url: string): string {
    if (url === '/') return 'home';
    if (url.startsWith('/about')) return 'about';
    if (url.startsWith('/products')) return 'products';
    if (url.startsWith('/contact')) return 'contact';
    return 'home';
  }
}