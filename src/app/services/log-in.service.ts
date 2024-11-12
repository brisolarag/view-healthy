import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  login(cpf:number) {
    localStorage.setItem('loggedInUser', cpf.toString());
  }

  getCpf() {
    const cpfstring = localStorage.getItem('loggedInUser')
    if (cpfstring) {
      return Number(cpfstring);
    }
    
    return null;
  }
}
