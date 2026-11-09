import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  items = [
    { title: 'Trail boot, upper', info: '1.0 MB · 1600×1600' },
    { title: 'Narrow street', info: '4.2 MB · 3840×2160' },
    { title: 'Canal, long exposure', info: '3.1 MB · 3000×2000' },
    { title: 'Old bridge', info: '2.4 MB · 2400×1600' },
    { title: 'Market square', info: '3.8 MB · 3200×2100' },
    { title: 'Harbor morning', info: '2.9 MB · 2800×1800' },
    { title: 'Stone steps', info: '1.7 MB · 2000×2000' },
    { title: 'Rooftops', info: '4.0 MB · 3600×2400' },
    { title: 'Quiet alley', info: '2.2 MB · 2200×1500' },
    { title: 'River bend', info: '3.3 MB · 3000×2000' },
    { title: 'Clock tower', info: '1.9 MB · 1800×2400' },
    { title: 'Night lights', info: '5.1 MB · 4000×2667' }
  ];
}