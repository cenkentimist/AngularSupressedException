import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subitem',
  template: 'doing a thing {{invalid_var.invalid_attr}} done',
})
export class SubitemComponent implements OnInit {

  @Input() inputvar
  constructor() { }

  ngOnInit() {
  }

}
