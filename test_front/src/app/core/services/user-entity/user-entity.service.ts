import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { IApiRes } from '../../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class UserEntityService {
  private _http = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + '/userEntity';

  public getAll(): Observable<IApiRes> {
    return this._http
      .get<IApiRes>(`${this.apiUrl}/list-user-entity`)
      .pipe(tap((res) => console.log('user-entity list ', res)));
  }

  public getById(id: string): Observable<IApiRes> {
    return this._http
      .get<IApiRes>(`${this.apiUrl}/detail-user-entity/${id}`)
      .pipe(tap((res) => console.log('user-entity detail ', res)));
  }

  public deleteById(id: string): Observable<null> {
    return this._http
      .delete<null>(`${this.apiUrl}/delete-user-entity/${id}`)
      .pipe(tap(() => console.log('user-entity supprime ', id)));
  }

  public updateById(id: string, data: IApiRes): Observable<IApiRes> {
    return this._http
      .put<IApiRes>(`${this.apiUrl}/update-user-entity/${id}`, data)
      .pipe(tap((res) => console.log('user-entity modifie ', res)));
  }

  public create(data: IApiRes): Observable<IApiRes> {
    return this._http
      .post<IApiRes>(`${this.apiUrl}/create-user-entity`, data)
      .pipe(tap((res) => console.log('user-entity created ', res)));
  }
}
