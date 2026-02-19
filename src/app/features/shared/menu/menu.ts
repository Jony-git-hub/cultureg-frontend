import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {Router, RouterLink} from '@angular/router';
import {Tooltip} from 'primeng/tooltip';
import {Divider} from 'primeng/divider';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'shared-menu',
  imports: [
    Button,
    RouterLink,
    Tooltip,
    Divider,
    Menu,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent implements OnInit {
  home = { label: 'Home', icon: 'pi pi-home', route: '/' };
  login = { label: 'Login', icon: 'pi pi-user', route: '/login' };
  register = { label: 'Register', icon: 'pi pi-user', route: '/register' };

  play = { label: 'Play', icon: 'pi pi-play', route: '/play' };
  decksManager = { label: 'Decks Manager', icon: 'pi pi-database', route: '/decks-manager' };


  adminItems = [
    {
      label: 'Users Manager',
      icon: 'pi pi-users',
      command: () => {
        this.router.navigate(['/admin-users-manager']);
      }
    },
    { separator: true },
    {
      label: 'Decks Manager',
      icon: 'pi pi-users',
      command: () => {
        this.router.navigate(['/admin-decks-manager']);
      }
    },
  ];

  settings = { label: 'Settings', icon: 'pi pi-settings', route: '/settings' };
  chatBot: { label: string, icon: string, route: string }[] = [];



  items: MegaMenuItem[] | undefined;
  isLoggedIn: boolean = false;
  constructor(
    public router: Router,

  ) {}

  ngOnInit() {

  }

  protected isRouteActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  protected isAdminRouteActive() {
    return this.router.isActive('/admin-users-manager', true) /*|| this.router.isActive('/next', true)*/
  }
}
