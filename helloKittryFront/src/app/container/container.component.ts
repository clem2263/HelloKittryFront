import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input('width') width: string = '100%'
  @Input('height') height: string = '100%'
  @Input('containerTitle') containerTitle: string = 'Change this title with attribute "containerTitle"'

  constructor() { }

  ngOnInit(): void {
  }

}
