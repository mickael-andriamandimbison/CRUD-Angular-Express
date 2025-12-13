import { Component, effect, inject, OnInit } from '@angular/core';
import { UserStateService } from '../../service/user-state.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  providers : [UserStateService]
})
export class UserListComponent implements OnInit{

  public userStateService = inject(UserStateService)

  ngOnInit(): void {
    this.userStateService.getAllUser()
  }

}
