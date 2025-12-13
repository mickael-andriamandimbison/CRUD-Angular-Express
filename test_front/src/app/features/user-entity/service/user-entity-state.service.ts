import { inject, Injectable, signal } from '@angular/core';
import { UserEntityService } from '../../../core/services/user-entity/user-entity.service';
import { map } from 'rxjs';
import { IUserEntity } from '../../../core/interfaces/UserEntity';
import { IApiRes } from '../../../core/interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class UserEntityStateService {
  private _userEntityService = inject(UserEntityService);

  loading = signal(false);
  userEntities = signal<IUserEntity[]>([]);
  error = signal<string | null>(null);
  selectedUserEntity = signal<IUserEntity | null>(null);
  successMsg = signal<string | null>(null);

  public getAll() {
    this.loading.set(true);
    this.error.set(null);

    this._userEntityService.getAll().subscribe({
      next: (res) => {
        this.loading.set(false);
        const list = Array.isArray(res.data) ? res.data : [];
        this.userEntities.set(list);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public getById(id: string) {
    this.loading.set(true);
    this.error.set(null);

    this._userEntityService.getById(id).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.selectedUserEntity.set(res.data || null);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public addUserEntity(data: IApiRes) {
    this.loading.set(true);
    this.error.set(null);

    this._userEntityService
      .create(data)
      .pipe(map((r) => r.data))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.userEntities.update((list) => [...list, res]);
        },
        error: (err) => {
          this.loading.set(false);
          this.error.set(err?.message || 'Erreur inconnue');
        },
      });
  }

  public update(id: string, data: IApiRes) {
    this.loading.set(true);
    this.error.set(null);

    this._userEntityService.updateById(id, data).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.userEntities.update((list) =>
          list.map((item) =>
            item.id_userEntity === id ? { ...item, ...data } : item
          )
        );
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public deleteById(id: string) {
    this.loading.set(true);
    this.error.set(null);

    this._userEntityService.deleteById(id).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMsg.set('Suppression avec succès');
        this.userEntities.update((list) =>
          list.filter((item) => item.id_userEntity !== id)
        );
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }
}
