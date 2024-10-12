import { AbcBackService } from '../Services/abc-back.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {
  form: FormGroup;
  @Output() hideAddCard = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private abcBackService: AbcBackService) {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        position: ['', Validators.required],
      }
    )
  }

  isAddHide() {
    this.hideForm();
  }

  private hideForm() {
    this.hideAddCard.emit(true);
  }

  onSubmit() {
    if(this.form.valid) {
      this.abcBackService.addUser(this.form.value).subscribe(data => {
        this.hideForm();
      });
    }
  }
}
