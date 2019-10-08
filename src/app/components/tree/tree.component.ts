import { Component, OnInit, Input } from '@angular/core';

import { Tree } from '../../models/tree/tree';
import { TreeManagerService } from '../../services/tree-manager/tree-manager.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})

export class TreeComponent implements OnInit {
  public tree: Tree[] = [];

  constructor(private treeManager: TreeManagerService) {}

  ngOnInit() {
    this.getTreesFromManager();
  }

  private async getTreesFromManager(): Promise<void> {
    this.tree = await this.treeManager.getHierarchyTree();
  }
}
