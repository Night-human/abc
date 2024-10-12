import { UpdateFormComponent } from '../update-form/update-form.component';
import { AddFormComponent } from '../add-form/add-form.component';
import { Component } from '@angular/core';
import { AbcBackService } from '../Services/abc-back.service';
import { User } from '../entities/user';
import { TableModule } from 'primeng/table';
import { Response } from '../entities/response';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, UpdateFormComponent, AddFormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  isDeleteHiden = true;
  isAddHiden = true;
  isUpdateHiden = true;
  users: User[] = [];
  id = 0;
  deletionMessage?: Response;

  constructor(private abcBackService:AbcBackService){
    this.getAllUsers();
  }

  private getAllUsers() {
    this.abcBackService.getAllUsers().subscribe(data => {this.users = data});
  }

  showDeleteAlert(id:number) {
    this.isDeleteHiden = false;
    this.id = id;
  }

  showAddAlert() {
    this.isAddHiden = false;
  }

  showUpdateAlert(id: number) {
    this.isUpdateHiden = false;
    this.id = id;
  }

  hideAddAlert(ishiden: boolean) {
    this.isAddHiden = ishiden;
    this.getAllUsers();
  }

  hideUpdateAlert(ishiden: boolean) {
    this.isUpdateHiden = ishiden;
    this.getAllUsers();
  }

  delete() {
      this.getAllUsers();
      this.abcBackService.deleteUser(this.id).subscribe(data => {
        this.deletionMessage;
        this.getAllUsers();});
    this.hide();
  }

  hide() {
    this.isDeleteHiden = true;
  }
}
