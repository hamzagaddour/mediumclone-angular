import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.servive';
import { registerAction } from './../../store/actions';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector : 'mc-register',
  templateUrl:'./register.component.html',
  styleUrls :['./register.component.scss']
})


export class RegisterComponent implements OnInit{
  form: FormGroup;
  isSubmitting$ : Observable<boolean>

  constructor(private fb : FormBuilder, private store:Store, private authService : AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues():void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log('isSubmitting', this.isSubmitting$);

  }

  initializeForm():void{
    console.log('iniatilizeForm');
    this.form = this.fb.group({
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  onSubmit():void {
    console.log("submit", this.form.value);
    this.store.dispatch(registerAction(this.form.value))
    this.authService.register(this.form.value).subscribe((currentUser : CurrentUserInterface)=>{
      console.log("currentUser", currentUser);

    })
  }
}
