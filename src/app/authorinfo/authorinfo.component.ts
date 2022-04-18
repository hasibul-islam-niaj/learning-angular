import { Component, OnInit } from '@angular/core';
import {Author} from './authorinfo.interface';
import {AUTHORS} from './authorinfo.mock-info';

@Component({
  selector: 'com-authorinfo',
  templateUrl: './authorinfo.component.html',
  styleUrls: ['./authorinfo.component.css']
})
export class AuthorinfoComponent implements OnInit {

  author: Author = {
    id: 'EMP1001',
    name: 'Hasibul Islam',
    company: 'Brain Station -23 Ltd.'
  };

  authors: Author[] = AUTHORS;

  constructor() { 

  }

  onEdit(author:Author) {
    this.author = author;
  }

  onView(author:Author) {
    alert(`Name: ${author.name}\nCompany: ${author.company}`)
  }

  ngOnInit(): void {

  }

}
