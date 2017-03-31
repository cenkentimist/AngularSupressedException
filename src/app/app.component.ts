import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-subitem  *ngIf="outputvar" [inputvar]="3"><app-subitem>',
})
export class AppComponent implements OnInit{
  outputvar=false
  ngOnInit(){
      new Promise<boolean>((resolve, reject)=>{
          resolve(true)
      }).then((response)=>{
          this.outputvar=response
      }).catch((error)=>{
          console.log("an error has occured");
          console.log(error)
      })
  }
}
