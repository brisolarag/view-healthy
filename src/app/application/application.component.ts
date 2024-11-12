import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { DataUsersService } from '../services/data/data-users.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {
  user:any = {};
  constructor(private dataUserService: DataUsersService) {}
  ngOnInit(): void {
    this.dataUserService.populateUserLocalStorage(this.user);
  }

}
