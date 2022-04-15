import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmitForm(form:NgForm){
    console.log(form.value.search); 
    this.router.navigate(['search', form.value.search])
  }
}