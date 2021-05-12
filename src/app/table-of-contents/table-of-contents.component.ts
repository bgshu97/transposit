import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() jsonString?: JSON;


  // parsedJson = JSON.parse(this.jsonString.toString());

  // parsedJson = {h1: [ 'Feature', { h2: ['On Activity Close', { h3: ['header 3']}], }, 'Architecture Overview' ], };
  parsedJson = [
    { 
      h1: "header 1",
      h2: ["header 2"],
      h3: ["header 3", "header 3 21"], 
    },
    {
      h1: "article 1",
      h2: ["some more info", "equally important info"],
    },
    { 
      h1: "unique header",
      h3: ["unique header 3"], 
    },
  ];
}

