import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tree } from '../../models/tree/tree';

@Injectable({
  providedIn: 'root'
})

export class TreeManagerService {
  private treesURL: string = 'https://raw.githubusercontent.com/wrike/frontend-test/master/data.json';

  constructor(private http: HttpClient) { }

  public async getHierarchyTree(): Promise<Tree[]> {
    let trees = await this.getTree();

    trees = this.makeHierarchyTree(trees);
    return trees;
  }

  private async getTree(): Promise<Tree[]> {
    return await this.http.get<Tree[]>(this.treesURL).toPromise<Tree[]>();
  }

  private makeHierarchyTree(trees: Tree[]): Tree[]
  {
    let hierarchyTree = [];
    let draftArr = {};
    let arrElem;
    let draftElem;

    for (let i = 0, len = trees.length; i < len; i++)
    {
      arrElem = trees[i];
      draftArr[arrElem.id] = arrElem;
      draftArr[arrElem.id].children = [];
    }
    for (let id in draftArr)
    {
      if (draftArr.hasOwnProperty(id))
      {
        draftElem = draftArr[id];
        if (draftElem.parentId)
        {
          draftArr[draftElem.parentId].children.push(draftElem);
        }
        else
        {
          hierarchyTree.push(draftElem);
        }
      }
    }
    return hierarchyTree;
  }

}
