import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  toggleSidebar(event: Event) {
    event.preventDefault();
    const cls = window.innerWidth < 992 ? 'sidebar-open' : 'sidebar-collapse';
    document.body.classList.toggle(cls);
  }
}