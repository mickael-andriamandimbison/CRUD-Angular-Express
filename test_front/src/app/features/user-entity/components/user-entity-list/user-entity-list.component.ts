import { Component, inject, OnInit } from '@angular/core';
import { UserEntityStateService } from '../../service/user-entity-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-entity-list',
  imports: [],
  templateUrl: './user-entity-list.component.html',
  styleUrl: './user-entity-list.component.scss',
})
export class UserEntityListComponent implements OnInit {
  public userEntityStateService = inject(UserEntityStateService);
  public router = inject(Router);

  ngOnInit(): void {
    this.userEntityStateService.getAll();
  }

  public navigToFom(id: string) {
    this.router.navigate(['/user-entity/modifie-user-entity/', id]);
  }

  public deleteUserEntity(id: string) {
    this.userEntityStateService.deleteById(id);
  }

  public getDetails(id: string) {
    this.userEntityStateService.getById(id);
  }
}
