import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IApiRes } from '../../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private _http = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl + '/entity';

  public getAll(): Observable<IApiRes> {
    return this._http
      .get<IApiRes>(`${this.apiUrl}/list-entity`)
      .pipe(tap((res) => console.log('entity list ', res)));
  }

  public getById(id: string): Observable<IApiRes> {
    return this._http
      .get<IApiRes>(`${this.apiUrl}/detail-entity/${id}`)
      .pipe(tap((res) => console.log('entity detail ', res)));
  }

  public delete(id: string): Observable<null> {
    return this._http
      .delete<null>(`${this.apiUrl}/delete-entity/${id}`)
      .pipe(tap(() => console.log('entity supprime ', id)));
  }

  public update(id: string, data: IApiRes): Observable<IApiRes> {
    return this._http
      .put<IApiRes>(`${this.apiUrl}/update-entity/${id}`, data)
      .pipe(tap((res) => console.log('entity modifie ', res)));
  }

  public create(data: IApiRes): Observable<IApiRes> {
    return this._http
      .post<IApiRes>(`${this.apiUrl}/create-entity`, data)
      .pipe(tap((res) => console.log('entity created ', res)));
  }
}
