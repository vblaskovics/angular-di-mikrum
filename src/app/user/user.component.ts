import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = '';
  userService: UserService;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService = injector.get(UserService);
  }

  signIn() : void {
    this.userService.setUser({
      name: 'Peter'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is:', this.userName);
  }

  ngOnInit(): void {
  }

}
