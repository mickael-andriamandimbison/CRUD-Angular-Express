import { Component, effect, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EntityStateService } from '../../services/entity-state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-form',
  imports: [ReactiveFormsModule],
  templateUrl: './entity-form.component.html',
  styleUrl: './entity-form.component.scss',
})
export class EntityFormComponent implements OnInit {
  constructor() {
    this.updateForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.getEntitySelected();
  }

  private fb = inject(FormBuilder);
  private entityStateService = inject(EntityStateService);
  private route = inject(ActivatedRoute);

  public entityForm!: FormGroup;
  public isUpdate = false;

  private initForm() {
    this.entityForm = this.fb.group({
      entityname: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public addEntity() {
    this.entityForm.markAllAsTouched();
    if (this.entityForm.valid) {
      let entity = this.entityForm.value;
      this.entityStateService.addEntity(entity);
    }
  }

  public getEntitySelected() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityStateService.getById(id);
    }
    else{
      this.entityStateService.selectedEntity.set(null)
    }
  }

  private updateForm() {
    effect(() => {
      let entity = this.entityStateService.selectedEntity();
      if (entity) {
        this.isUpdate = true;
        this.entityForm.patchValue(entity);
      }
    });
  }

  public updateEntity() {
    if (this.entityForm.valid) {
      let data = this.entityForm.value;
      this.entityStateService.update(
        this.entityStateService.selectedEntity()?.id_Entity!!,
        data
      );
    }
  }
}
