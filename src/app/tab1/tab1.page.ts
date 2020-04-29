import { Component, OnInit } from "@angular/core";
import * as data from "../../assets/users.json";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  users = [];
  constructor() {}
  ngOnInit(): void {
    console.log(data.users);
    this.users = data.users;
  }
}
