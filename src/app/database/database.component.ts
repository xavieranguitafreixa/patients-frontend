import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  providers:[DatabaseService]
})

export class DatabaseComponent implements OnInit {

  public  patients = [];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getInfo("").subscribe(data => this.patients = data);
  }

  refresh(){
    this.database.getInfo("").subscribe(data => this.patients = data);
  }

}
