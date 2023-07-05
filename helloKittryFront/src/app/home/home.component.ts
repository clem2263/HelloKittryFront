import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected username!: string;
  formData: { name: string } = { name: '' };

  constructor() {}

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Nom :', this.formData.name);
  }

}
