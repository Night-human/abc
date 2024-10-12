import { AbcBackService } from '../Services/abc-back.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss'
})
export class UpdateFormComponent {
  form: FormGroup;
  @Output() hideCard = new EventEmitter<boolean>();
  @Input() id = 0;

  constructor(private formBuilder: FormBuilder, private abcBackService: AbcBackService) {
    this.form = this.formBuilder.group(
      {
        id: [0,],
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        position: ['', Validators.required],
      }
    )
  }

  isUpdateHide() {
    this.hideForm();
  }

  private hideForm() {
    this.hideCard.emit(true);
  }

  onSubmit() {
    if(this.form.valid) {
      this.abcBackService.updateUser(this.form.value,this.id).subscribe(data => {
        console.log(data);
        this.hideForm();
      });
    }
  }

}
