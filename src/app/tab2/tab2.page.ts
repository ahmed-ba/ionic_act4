import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  constructor(private userService: UsersService) {}
  users = [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      let result: any = data;
      this.users = result.users;
      console.log(result);
    });
  }
}
