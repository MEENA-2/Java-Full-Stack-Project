import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  isLowerGrade : boolean = true;
  lowGrade = '';

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.lowGrade = this.route.snapshot.params['lowerGrade'];
    console.log("lower grade " +this.lowGrade);

    
  }

  /* This method is called from html page to get the truthy value of lower grade */
  checkLowerGrade():boolean{
    if(this.lowGrade == 'true'){
      this.isLowerGrade = true;
      console.log("Lower grade");
    }
    else{
      this.isLowerGrade = false;
      console.log("Higher Grade");
    }

    return this.isLowerGrade;
  }

}


//highGrade : boolean = true;

// else{ 
    //   this.lowGrade = true;
    //   this.highGrade = false;
    //   console.log("lower grade inside else " +this.lowGrade);
    //   console.log("higher grade inside else " +this.highGrade);
    // }

    //  this.isHigherGrade = !(this.isLowerGrade);
  //   console.log("higher grade " +this.isHigherGrade);


    // this.isLowerGrade = this.route.snapshot.params['lowerGrade'];
    // console.log("lower grade " +this.isLowerGrade);

    // if(this.isLowerGrade === false){
    //   this.isHigherGrade = true;
    //   console.log("higher grade " +this.isHigherGrade);
    // }