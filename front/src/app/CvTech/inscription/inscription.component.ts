import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(
    private router: Router, private fb:FormBuilder, private http: HttpClient
  ) { }

  form:FormGroup;
  ngOnInit(): void {
    this.form= this.fb.group({
      name:['',Validators.required],
      prenom:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      numero:['',Validators.required],
      password:['',Validators.required],
      password_confirmation:['',Validators.required],
      description:['',Validators.required],
    })
  }

submit(){
  const formData=this.form.getRawValue();

   this.http.post('http://127.0.0.1:8000/register',formData).subscribe(
     result=>{
      this.router.navigate(['/Accueil'])},
     err=> console.log(err)
   )
       const data={
      username:formData.email,
      password: formData.password,
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

  GoToConnexion(){
    const link = ['connexion'];
    this.router.navigate(link);
  }

}
