import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavBarItemComponent } from "../nav-bar-item/nav-bar-item.component";
import { LogInService } from '../../services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, NavBarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent {
  constructor(private login: LogInService, private router: Router) {}
  @Input() user: any;


  logout() {
    this.login.logout();
    this.router.navigateByUrl('/login')
  }
}
