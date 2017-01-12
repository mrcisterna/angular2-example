import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user'
import { BackendService} from '../../services/backend-service.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users : User[]
  user : User

  constructor(private backend : BackendService) { }
  
  ngOnInit() {
    //this.users = this.backend.users.getUsers()
	this.user = new User()

	this.user.name = 'Martin'
  }

}
