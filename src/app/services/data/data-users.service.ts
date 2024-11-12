import { Injectable } from '@angular/core';
import { tap, catchError, of, Observable } from 'rxjs';
import { UsersService } from '../api/users.service';
import { LogInService } from '../log-in.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class DataUsersService {
  constructor(private usersService: UsersService, private loginService: LogInService) { }

  populateUserLocalStorage(target:any): void {
    if (!target) {
      console.error('O target fornecido é inválido');
      return;
    }
    if (this.loginService.isUserLoggedIn()) {
      const cpf = this.loginService.getCpf();
      this.usersService.getUserByCpf(cpf!).pipe(
        tap(response => {
          if (response?.data) {
            console.log(response?.data)
            Object.assign(target, response.data);
            console.log('Usuário carregado e atribuído ao target:', target);
          }
        }),
        catchError(error => {
          console.error('Erro ao buscar todos os usuários:', error);
          return of();
        })
      ).subscribe();
    }
  }

  // @param targetArray - O array que será preenchido.
  populateAllUsersArray<T>(targetArray: T[]): void {
    this.usersService.getAllUsers().pipe(
      tap(response => {
        if (response?.data && Array.isArray(response.data)) {
          targetArray.push(...response.data);
        }
      }),
      catchError(error => {
        console.error('Erro ao buscar todos os usuários:', error);
        return of();
      })
    ).subscribe();
  }
}
