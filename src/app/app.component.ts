import { Component , OnInit} from '@angular/core';
import { etudiant } from './list_personne';
import { personne } from './personne';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  title = 'MY APPLICATION';
  ngOnInit(): void {
    console.table(this.eleve);
  }
  // showImage: boolean;

  // constructor() {
  //   this.showImage = false;
  // }
  etudiant1 :personne[]= etudiant;
  personne_click( p : personne) {
         console.log("la personne a tapée :", p);
  }
  eleve : personne[] = etudiant;
  tab : number=6;
  th : number=6;
  
  /*person_select : personne|undefined;
   
  Oneperson(valeur : string ){
    const id : number = +valeur;
    console.log(this.eleve[id]);
  }*/
  OnpersnneClicked(event : MouseEvent)
{
  const index : number = +(event.target as HTMLInputElement).value;
  console.log(this.etudiant1[index].age);
}
onSubmit(sub : NgForm){
  console.log(sub.value);
}

}
