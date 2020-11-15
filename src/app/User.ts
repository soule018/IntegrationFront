import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { logging } from 'protractor';
import { Fiche } from './fiche';

export class User {

   name: string;
   id:number ;
   fiche: Fiche[];
}
