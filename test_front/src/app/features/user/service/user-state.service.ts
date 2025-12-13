import { Router } from '@angular/router';
import { IUser } from './../../../core/interfaces/User';
import { inject, Injectable, signal } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { map, single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private _userService = inject(UserService);
  private router = inject(Router)

  loading = signal(false);
  users = signal<IUser[]>([]);
  error = signal<string | null>(null);
  selectedUser = signal<IUser | null>(null);
  succesMsg = signal<string | null>(null);

  public getAllUser() {
    this.loading.set(true);
    this.error.set(null);
    this._userService.getAllUser().subscribe({
      next: (res) => {
        this.loading.set(false);
        const userlist = Array.isArray(res.data) ? res.data : [];
        this.users.set(userlist);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.message || 'Erreur inconnue');
      },
    });
  }

  public getUserByid(id: string) {
    this.loading.set(true);
    this.error.set(null);
    this._userService.getUserById(id).subscribe({
      next: (user) => {
        this.selectedUser.set(user.data);
        console.log("userdetail",this.selectedUser())
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err);
      },
    });
  }

  public AddUser(user: IUser) {
    this.loading.set(true);
    this.error.set(null);
    this._userService.addUser(user).pipe(map((r)=>r.data[0])).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.users.update((u) => [...u, res]);
        this.router.navigate(['/users'])
      },
      error: (err) => {
        this.error.set(err);
      },
    });
  }

  public updateUser(id: string, data: IUser) {
    this.loading.set(true);
    this.error.set(null);
    this._userService.updateUserById(id, data).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.users.update((lisetUser) =>
          lisetUser.map((user) => (user.id_User === data.id_User ? data : user))
        );
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err);
      },
    });
  }

  public deleteUserById(id: string) {
    this.loading.set(true);
    this.error.set(null);

    this._userService.deletUser(id).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.succesMsg.set('Suppression avec succés');
      },
      error: (err) => {
        this.error.set(err);
      },
    });
  }
}
