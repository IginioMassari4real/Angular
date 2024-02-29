import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {

  persone = [

    {nome: "Antonino", cognome: "Cannavacciuolo", numero: "000", età:45, colore:"rosso", isOnline:true, },
 
    {nome: "Bruno", cognome: "Barbieri",numero: "111", età:39, colore:"giallo", isOnline:false,},
 
    {nome: "Carlo", cognome: "Cracco",numero: "222", età:46, colore:"verde", isOnline:true,},
 
    {nome: "Iginio", cognome: "Massari",numero: "333", età:19, colore:"blu", isOnline:true,},

    {nome: "Luca", cognome: "Mastrangelo",numero: "444", età:60, colore:"nero", isOnline:false,},

    {nome: "Francesco", cognome: "Totti",numero: "555", età:71, colore:"marrone", isOnline:false,},

    {nome: "Dario", cognome: "Moccia",numero: "666", età:32, colore:"viola", isOnline:true,},

    {nome: "Stefano", cognome: "Lepri",numero: "777", età:29, colore:"arancione", isOnline:false,},

    {nome: "Salvatore", cognome: "Cinquegrana",numero: "888", età:36, colore:"bianco", isOnline:false,},

    {nome: "Cristiano", cognome: "Verderio",numero: "999", età:50, colore:"indaco",isOnline:true,},
 
  ]

}
