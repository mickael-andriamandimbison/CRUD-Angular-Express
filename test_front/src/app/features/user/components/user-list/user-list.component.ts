import { Component, effect, inject, OnInit } from '@angular/core';
import { UserStateService } from '../../service/user-state.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit{

  public userStateService = inject(UserStateService)
  public router = inject(Router)

  ngOnInit(): void {
    this.userStateService.getAllUser()
  }

  public getDetails(id:string){
    this.userStateService.getUserByid(id)
  }

  public deleteUser(id:string){
    this.userStateService.deleteUserById(id)
  }

  public navigToFom(id:string){
    this.router.navigate(['/users/modifie-user/',id])
  }
}
