import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  imports: [PanelMenuModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pacientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/pacient',
      },
      {
        label: 'Historia Visual',
        icon: 'pi pi-fw pi-book',
        routerLink: '/visualhistory',
      },
      {
        label: 'Citas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/appointment',
      },
      {
        label: 'Optometras',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/optometry',
      },
      {
        label: 'Mediciones',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/visual-exam',
      },
      {
        label: 'Armazones',
        icon: 'pi pi-fw pi-clone',
        routerLink: '/frames',
      },
      {
        label: 'Lentes',
        icon: 'pi pi-fw pi-eye',
        routerLink: '/lenses',
      },
      {
        label: 'Órdenes',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/orden',
      },
      {
      label: 'Detalle de Órdenes',
      icon: 'pi pi-list',
      routerLink: ['/order-detail']
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-fw pi-truck',
        routerLink: '/supplier',
      },
      {
        label: 'Pagos',
        icon: 'pi pi-fw pi-credit-card',
        routerLink: '/payment',
      },
      {
        label: 'Entregas',
        icon: 'pi pi-fw pi-send',
        routerLink: '/delivery',
      }
    ];
  }
}

