import { Component, OnInit } from '@angular/core';
import {Author} from './authorinfo.interface';

@Component({
  selector: 'app-authorinfo',
  templateUrl: './authorinfo.component.html',
  styleUrls: ['./authorinfo.component.css']
})
export class AuthorinfoComponent implements OnInit {

  author: Author = {
    id: 'EMP1001',
    name: 'Hasibul Islam',
    company: 'Brain Station -23 Ltd.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
