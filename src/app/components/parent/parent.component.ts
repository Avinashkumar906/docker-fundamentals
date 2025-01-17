import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, computed, effect, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  flag:boolean = false;
  array :Array<any> = []
  @Input('title') title!:boolean;
  products = signal(1);
  updatedtotal = signal(0)
  total = computed(()=>this.products() * 5); 

  constructor(private httpService: TestService){ 
    effect(()=>{
      this.updatedtotalValue(this.products() * 5);
    },{ allowSignalWrites: true })
  }

  updatedtotalValue(total:number){
    this.updatedtotal.set(total)
  }
  ngOnInit(): void {
    this.flag = !(!this.title);
    this.httpService.getArticles().subscribe(console.log)
  }
}
