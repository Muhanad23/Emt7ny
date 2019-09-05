import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = 'مدرس';
  type = 2;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  editExam() {
    this.router.navigateByUrl('/previewExam/ahmed/1');
  }
  deleteExam() {

  }
  newExam() {
    this.router.navigateByUrl('/AddQuestion/5');
  }
}
