import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  
  @Input() tree;
  
  public visibleTree = true;

  constructor() { }

  toggle(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    target = target.nextElementSibling.classList.toggle('hide');
  }
}
