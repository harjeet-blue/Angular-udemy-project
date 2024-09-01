import { Component } from '@angular/core';
import { HeaderComponenet } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponenet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  currentUserId = '' ;

  get selectedUser(){
    return this.users.find( (user)=> user.id === this.currentUserId);
  }
  onUserSelect(id: string){
    this.currentUserId = id;
  }

}
