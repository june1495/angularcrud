import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdftemplate',
  templateUrl: './pdftemplate.component.html',
  styleUrls: ['./pdftemplate.component.css'],
})
export class PdftemplateComponent implements OnInit {
  @Input() product!: any;
  constructor() {}

  ngOnInit(): void {}
}
