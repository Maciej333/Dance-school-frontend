import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  users: User[];

  @Output() hideEmitter = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      load: [
        'all'
      ],
      user: [
        null,
        {
          validators: [
            Validators.required,
          ]
        }
      ]
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  get user() {
    return this.loginForm.get('user');
  }

  handleLogin(event: Event) {
    event.preventDefault();

    let selectedUser: User[] = this.users.filter(user => {
      return (user.id == this.user.value)
    });
    this.authService.loginUser(selectedUser[0]);
    this.router.navigate(['/user', 'user']);
  }

  hideForm() {
    this.hideEmitter.emit(false);
  }



  load(whatToLoad: string){
    if(whatToLoad === 'instructors'){
      this.userService.getInstructors().subscribe(users => {
        this.users = users;
      });
    }else if (whatToLoad === 'all'){
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
    }
  }


}
