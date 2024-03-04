import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UnitTest2';
  Count:number=10;
  ShowMessage(msg:string){
    return msg;
  }

  IncreaseCount(num:number){
    this.Count = this.Count+num;
  }
  
  DecreaseCount(num:number){
    this.Count = this.Count-num;
  }
}
