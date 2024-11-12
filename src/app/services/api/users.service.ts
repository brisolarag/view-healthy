import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly URL = 'http://localhost:5095'

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.URL}/User/allUsers`);
  }

  getUserByCpf(cpf:number) : Observable<any> {
    return this.http.get<any>(`${this.URL}/User/cpfSearch?cpf=${cpf}`);
  }
}
