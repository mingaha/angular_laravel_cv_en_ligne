import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-accueil',
  templateUrl: './cv-accueil.component.html',
  styleUrls: ['./cv-accueil.component.css']
})
export class CvAccueilComponent implements OnInit {

  user: any;
  constructor( private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    const headers= new HttpHeaders({
       'Authorization':`Bearer ${localStorage.getItem('token')}`
    });

    this.http.get('http://127.0.0.1:8000/user',{headers: headers}).subscribe(
      result=>this.user=result,
      err=>{
        localStorage.removeItem('token');
        this.router.navigate(['/connexion']);
      }
    );
  }

}
