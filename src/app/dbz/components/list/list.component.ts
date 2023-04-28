import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character [] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public  onDelete: EventEmitter<string> = new EventEmitter();
  //public  onDelete: EventEmitter<number> = new EventEmitter();
  //public  onDelete = new EventEmitter<number>();

  //onDeleteCharacter(index: number): void {
  //onDeleteCharacter(id: string): void {
  onDeleteCharacter(id?: string): void {
    // TODO: emitir el ID del personaje
    //console.log({index});

    // if( index < 0 || index >= this.characterList.length ) return;
    // this.onDelete.emit(index);

    // if( index < 0 || index >= this.characterList.length ) return;
    // this.onDelete.emit(this.characterList[index].id);

    if (!id) return;
    this.onDelete.emit(id);

  }
}
