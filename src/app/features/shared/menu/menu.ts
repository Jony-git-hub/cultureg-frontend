import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {Router, RouterLink} from '@angular/router';
import {Tooltip} from 'primeng/tooltip';
import {Divider} from 'primeng/divider';
import {Menu} from 'primeng/menu';
import {
  ADMIN_ICON,
  DECK_ICON,
  HOME_ICON, LANGUAGE_ICON,
  MARKET_PLACE_ICON,
  PLAY_ICON,
  THEME_ICON,
  USER_ICON
} from '../../../core/icon/icon.constants';

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
  home = { label: 'Home', icon: HOME_ICON, route: '/' };
  login = { label: 'Login', icon: USER_ICON, route: '/login' };
  register = { label: 'Register', icon: USER_ICON, route: '/register' };

  play = { label: 'Play', icon: PLAY_ICON, route: '/play' };
  decksManager = { label: 'Decks Manager', icon: DECK_ICON, route: '/decks-manager' };
  marketPlace = { label: 'Market Place', icon: MARKET_PLACE_ICON, route: '/market-place' };


  adminItems = [
    {
      label: 'Users Manager',
      icon: USER_ICON,
      command: () => {
        this.router.navigate(['/admin-users-manager']);
      }
    },
    { separator: true },
    {
      label: 'Languages Manager',
      icon: LANGUAGE_ICON,
      command: () => {
        this.router.navigate(['/admin-languages-manager']);
      }
    },
    { separator: true },
    {
      label: 'Themes Manager',
      icon: THEME_ICON,
      command: () => {
        this.router.navigate(['/admin-themes-manager']);
      }
    },
    { separator: true },
    {
      label: 'Decks Manager',
      icon: DECK_ICON,
      command: () => {
        this.router.navigate(['/admin-decks-manager']);
      }
    },
  ];
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
    return this.router.isActive('/admin-users-manager', true) ||
      this.router.isActive('/admin-languages-manager', true) ||
      this.router.isActive('/admin-themes-manager', true) ||
      this.router.isActive('/admin-decks-manager', true)
  }

  protected readonly ADMIN_ICON = ADMIN_ICON;
}
