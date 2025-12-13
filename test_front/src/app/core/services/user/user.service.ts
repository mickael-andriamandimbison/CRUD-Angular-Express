import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { IUser } from '../../interfaces/User';
import { IApiRes } from '../../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + '/user';

  public getAllUser(): Observable<IApiRes> {
    return this._http.get<IApiRes>(`${this.apiUrl}/list-user`);
  }

  public getUserById(id: string): Observable<IApiRes> {
    return this._http.get<IApiRes>(`${this.apiUrl}/detail-user/${id}`);
  }

  public deletUser(id: string): Observable<null> {
    return this._http.delete<null>(`${this.apiUrl}/delete-user/${id}`);
  }

  public updateUserById(id: string, data: IUser): Observable<IApiRes> {
    return this._http.put<IApiRes>(`${this.apiUrl}/update-user/${id}`, data);
  }

  public addUser(user: IUser): Observable<IApiRes> {
    return this._http.post<IApiRes>(`${this.apiUrl}/create-user`, user);
  }
}
