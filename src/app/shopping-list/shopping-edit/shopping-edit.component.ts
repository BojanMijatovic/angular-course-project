import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  // public onAddItem(name: HTMLInputElement, amount: HTMLInputElement): void {
  //   this.ingredients.push(new Ingredient(name.value, (+amount.value)));
  //   console.log(this.ingredients);
  //   name.value = '';
  //   amount.value = '';
  // }

  // public onAddItem(): void {
  //   this.ingredientAdded.emit({
  //     name: this.nameInputRef.nativeElement.value,
  //     amount: this.amountInputRef.nativeElement.value
  //   });
  // }

  public onAddItem(): void {
    const ingridientName = this.nameInputRef.nativeElement.value;
    const ingridientAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingridientName, ingridientAmount);
    this.ingredientAdded.emit(newIngridient);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

}
