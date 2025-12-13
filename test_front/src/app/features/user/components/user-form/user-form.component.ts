import { ActivatedRoute, Routes } from '@angular/router';
import { Component, effect, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserStateService } from '../../service/user-state.service';
import { IUser } from '../../../../core/interfaces/User';
@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  constructor(){
    this.updateForm()
  }
  ngOnInit(): void {
    this.initForm()
    this.getUserSelected()
  }

  private fb = inject(FormBuilder);
  private userStateService = inject(UserStateService);
  private route = inject(ActivatedRoute);

  public userForm: FormGroup;
  public isUpdate = false;

  private initForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public addUser() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      let user = this.userForm.value;
      this.userStateService.AddUser(user);
    }
  }

  public getUserSelected() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userStateService.getUserByid(id);
    }else{
      this.userStateService.selectedUser.set(null)
    }
  }

  private updateForm() {
    effect(()=>{
      let user = this.userStateService.selectedUser()
      if(user){
        this.isUpdate=true
        this.userForm.patchValue(user)
      }
    })
  }

  public updateUser() {
    if (this.userForm.valid) {
      let data = this.userForm.value;
      this.userStateService.updateUser(
        this.userStateService.selectedUser()?.id_User!!,
        data
      );
    }
  }
}
