import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { FormsModule } from '@angular/forms';
import { UsersFooterComponent } from './users-footer/users-footer.component';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent,
    UsersFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
