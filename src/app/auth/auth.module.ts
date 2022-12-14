import { AuthService } from './services/auth.servive';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';

const routes  = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers)
  ],



  declarations: [RegisterComponent],
  providers : [AuthService]
})
export class AuthModule {}
