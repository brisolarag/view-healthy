import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.scss'
})
export class NavBarItemComponent {
  constructor(private router:Router) {}
  @Input() text: any;
  @Input() link: any;


  goTo() {
    this.router.navigate([this.link]);
  }
}
