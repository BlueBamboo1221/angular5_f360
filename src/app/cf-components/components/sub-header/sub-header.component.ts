import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() innerMenuItems: Array<string>;
  @Input() light: boolean = false;


  @Output('innermenuitemsname') menuname = new EventEmitter<string>();//rki_add
  saveTitle(val)
  {
    this.menuname.emit(val);
  }
  constructor() {}

  ngOnInit() {}
}
