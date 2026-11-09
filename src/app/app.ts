import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Gallery } from './gallery/gallery';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Gallery, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}