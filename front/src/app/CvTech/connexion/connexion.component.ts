import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  // constructor(
  //   private router: Router
  // ) { }

constructor(private fb:FormBuilder, private http: HttpClient, private router:Router ){

}

  ngOnInit(): void {
    this.form=this.fb.group({
      email: '',
      password: ''
    });
  }
  form:FormGroup;

  submit(){
   const  formdata= this.form.getRawValue();


    const data={
      username:formdata.email,
      password: formdata.password,
      grant_type:'password',
      client_id:2,
      client_secret: 'C4WNvQXAQSFaDQPJjZIDziy7TP6XArPGQQK2fZoP',
      scope: '*'
    };
    this.http.post('http://127.0.0.1:8000/oauth/token',data).subscribe(
      (result: any)=>{
        localStorage.setItem('token',result.access_token);
        this.router.navigate(['/Accueil'])
      },
      error=>{
        console.log('error');
        console.log(error);
      }
    );
  }

  goToInscription(){
    const link = ['inscription'];
   this.router.navigate(link);
  }

}
