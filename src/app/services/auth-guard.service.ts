import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loggedService: LogInService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.loggedService.isUserLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
