import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LogInService } from '../../services/log-in.service';
import { Router } from '@angular/router';
import { DataUsersService } from '../../services/data/data-users.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  users:any[] = []

  constructor(private login: LogInService, private router: Router , private dataUsers: DataUsersService) {}

  ngOnInit(): void {
    this.dataUsers.populateAllUsersArray(this.users);
  }

  onUserSelect(event: any): void {
    const selectedCpf = event.value;
    this.login.login(selectedCpf.toString())
    this.router.navigateByUrl('')
  }
}
