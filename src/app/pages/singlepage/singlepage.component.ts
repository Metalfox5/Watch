import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private hero:HeroService){}
  
  data= this.hero.giveData()
  
  brands:any
  ngOnInit()
  {
    let id=Number(localStorage.getItem('id'))
    console.log(id)
    if(id==1)
    {
      this.brands=this.hero.givedata1()
    }
    else if(id==2)
    {
      this.brands=this.hero.givedata2()
    }
    else if(id==3)
    {
      this.brands=this.hero.givedata3()
    }
    else if(id==4)
    {
      this.brands=this.hero.givedata4()
    }

  }
}
