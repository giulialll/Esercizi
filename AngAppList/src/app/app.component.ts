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
completato(id : number){
  for(let i in this.allTasks){
    if(this.allTasks[i] === id){
      this.allCompleted.push(this.allTasks[i]);
      this.allTasks.splice(this.allTasks.indexOf(id),1)
    }
  }
}

rimuoviTask(id :number){
  this.allCompleted.splice(this.allTasks.indexOf(id),1);
  this.allTasks.splice(this.allTasks.indexOf(id),1);
}








}
