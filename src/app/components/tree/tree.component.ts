import { Component, OnInit, Input } from '@angular/core';

import { Tree } from '../../models/tree/tree';
import { TreeManagerService } from '../../services/tree-manager/tree-manager.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})

export class TreeComponent implements OnInit {
  public trees: Tree[] = [];

  constructor(private _treeManager: TreeManagerService) {}

  ngOnInit() {
    this.getTreesFromManager();
  }

  private async getTreesFromManager(): Promise<void> {
    this.trees = await this._treeManager.getSortedTree();
  }
}
