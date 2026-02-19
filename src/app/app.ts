import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './features/shared/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cultureg-frontend');
}
