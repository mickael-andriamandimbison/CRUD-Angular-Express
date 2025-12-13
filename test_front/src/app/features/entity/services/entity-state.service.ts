import { inject, Injectable, signal } from '@angular/core';
import { EntityService } from '../../../core/services/entity/entity.service';
import { map } from 'rxjs';
import { IEntity } from '../../../core/interfaces/Entity';
import { IApiRes } from '../../../core/interfaces/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class EntityStateService {
  private _entityService = inject(EntityService);

  loading = signal(false);
  entitys = signal<IEntity[]>([]);
  error = signal<string | null>(null);
  selectedEntity = signal<IEntity | null>(null);
  successMsg = signal<string | null>(null);

  public getAll() {
    this.loading.set(true);
    this.error.set(null);

    this._entityService.getAll().subscribe({
      next: (res) => {
        this.loading.set(false);
        const entityList = Array.isArray(res.data) ? res.data : [];
        this.entitys.set(entityList);
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

    this._entityService.getById(id).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.selectedEntity.set(res.data[0] || null);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public addEntity(entity: IApiRes) {
    this.loading.set(true);
    this.error.set(null);

    this._entityService.create(entity).pipe(map(r => r.data[0])).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.entitys.update(list => [...list, res]);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public update(id: string, entity: IApiRes) {
    this.loading.set(true);
    this.error.set(null);

    this._entityService.update(id, entity).subscribe({
      next: (res) => {
        this.loading.set(false);
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

    this._entityService.delete(id).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMsg.set('Suppression avec succès');
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }
}
