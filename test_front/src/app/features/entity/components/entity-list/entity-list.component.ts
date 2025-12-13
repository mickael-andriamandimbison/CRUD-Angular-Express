import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { EntityStateService } from '../../services/entity-state.service';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-entity-list',
  imports: [],
  templateUrl: './entity-list.component.html',
  styleUrl: './entity-list.component.scss',
})
export class EntityListComponent implements OnInit ,AfterViewInit{
  public entityStateService = inject(EntityStateService);
  public router = inject(Router);

  ngOnInit(): void {
    this.entityStateService.getAll();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      initFlowbite()
    },1000)
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
