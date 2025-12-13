import { Component, effect, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserEntityStateService } from '../../service/user-entity-state.service';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '../../../user/service/user-state.service';
import { EntityStateService } from '../../../entity/services/entity-state.service';

@Component({
  selector: 'app-user-entity-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-entity-form.component.html',
  styleUrl: './user-entity-form.component.scss',
})
export class UserEntityFormComponent implements OnInit {
  constructor() {
    this.updateForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.getUserEntitySelected();
    this.userStateService.getAllUser();
    this.entityStateService.getAll();
  }

  private fb = inject(FormBuilder);
  private userEntityStateService = inject(UserEntityStateService);
  public userStateService = inject(UserStateService);
  public entityStateService = inject(EntityStateService);
  private route = inject(ActivatedRoute);

  public userEntityForm!: FormGroup;
  public isUpdate = false;

  private initForm() {
    this.userEntityForm = this.fb.group({
      id_User: ['', Validators.required],
      id_Entity: ['', Validators.required],
    });
  }

  public addUserEntity() {
    this.userEntityForm.markAllAsTouched();
    if (this.userEntityForm.valid) {
      let data = this.userEntityForm.value;
      this.userEntityStateService.addUserEntity(data);
    }
  }

  public getUserEntitySelected() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userEntityStateService.getById(id);
    }
    else{
      this.userEntityStateService.selectedUserEntity.set(null)
    }
  }

  private updateForm() {
    effect(() => {
      let userEntity = this.userEntityStateService.selectedUserEntity();
      if (userEntity) {
        this.isUpdate = true;
        this.userEntityForm.patchValue(userEntity);
      }
    });
  }

  public updateUserEntity() {
    if (this.userEntityForm.valid) {
      let data = this.userEntityForm.value;
      this.userEntityStateService.update(
        this.userEntityStateService.selectedUserEntity()?.id_userEntity!!,
        data
      );
    }
  }
}
