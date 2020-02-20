import { Component, OnInit } from "@angular/core";
import {FormGroup, FormBuilder,  Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public userForm : FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
this.createForm();
  }
  createForm() {
    this.userForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  onSubmit(data)
  {
    console.log(data);
  }
}
