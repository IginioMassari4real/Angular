import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {

  persone = [

    {nome: "Antonino", cognome: "Cannavacciuolo", numero: "000", età:45, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },
 
    {nome: "Bruno", cognome: "Barbieri",numero: "111", età:39, colore:"yellow", isOnline:false, immagine:"../../assets/brunonurb.jpg"},
 
    {nome: "Alessandro", cognome: "Barbero",numero: "222", età:46, colore:"pink", isOnline:true, immagine:"../../assets/barbero.jpg"},
 
    {nome: "Iginio", cognome: "Massari",numero: "333", età:19, colore:"lightblue", isOnline:true, immagine:"../../assets/iginio.jpg"},

    {nome: "Luca", cognome: "Mastrangelo",numero: "444", età:60, colore:"gray", isOnline:false, immagine:"../../assets/MASTRANGELO.jpeg"},

    {nome: "Rudy", cognome: "Zerbi",numero: "555", età:71, colore:"brown", isOnline:false, immagine:"../../assets/rudy.jpg"},

    {nome: "Giorgio", cognome: "Muratore",numero: "666", età:32, colore:"purple", isOnline:true, immagine:"../../assets/giorgio muratore.jpeg"},

    {nome: "Francesco", cognome: "Schettino",numero: "777", età:29, colore:"orange", isOnline:false, immagine:"../../assets/CAPITAN SCHETTINO.jpg"},

    {nome: "Mario", cognome: "Balotelli",numero: "888", età:36, colore:"white", isOnline:false, immagine:"../../assets/balotelli.jpg"},

    {nome: "Gerry", cognome: "Scotti",numero: "999", età:50, colore:"lightpink",isOnline:true, immagine:"../../assets/gerry_2.jpeg"},
 
  ]

}
