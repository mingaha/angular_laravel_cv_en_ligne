import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoToAnnonce(){
    const link = ['Annonce'];
    this.router.navigate(link);
  }

  GoToConnexion(){
    const link = ['connexion'];
    this.router.navigate(link);
  }

}
