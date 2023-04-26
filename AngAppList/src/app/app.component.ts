import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
   allTasks: any[] = [];

aggiungiTask(task: string) {
  this.allTasks.push(task);

}

allCompleted: any [] = [];
completaTask(index : number){
  this.allCompleted.push(this.allTasks[index]);
  this.allTasks.splice(index,1)
}

rimuoviTask(index:number){
  this.allCompleted.splice(index, 1);
}








}
