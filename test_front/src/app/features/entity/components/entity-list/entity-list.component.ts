import { Component, inject, OnInit } from '@angular/core';
import { EntityStateService } from '../../services/entity-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-list',
  imports: [],
  templateUrl: './entity-list.component.html',
  styleUrl: './entity-list.component.scss',
})
export class EntityListComponent implements OnInit {
  public entityStateService = inject(EntityStateService);
  public router = inject(Router);

  ngOnInit(): void {
    this.entityStateService.getAll();
  }

  public navigToFom(id: string) {
    this.router.navigate(['/entity/modifie-entity/', id]);
  }

  public deleteEntity(id: string) {
    this.entityStateService.deleteById(id);
  }

  public getDetails(id: string) {
    this.entityStateService.getById(id);
  }
}
