import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tree } from '../../models/tree/tree';

@Injectable({
  providedIn: 'root'
})

export class TreeManagerService {
  private treesURL: string = 'https://raw.githubusercontent.com/wrike/frontend-test/master/data.json';

  constructor(private http: HttpClient) { }

  public async getSortedTree(): Promise<Tree[]> {
    let trees = await this.getTree();

    trees = this.unflatten(trees);
    console.log(trees);
    return trees;
  }

  private async getTree(): Promise<Tree[]> {
    return await this.http.get<Tree[]>(this.treesURL).toPromise<Tree[]>();
  }

  private unflatten(trees: Tree[]): Tree[]
  {
    let tree = [];
    let mappedArr = {};
    let arrElem;
    let mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (let i = 0, len = trees.length; i < len; i++)
    {
      arrElem = trees[i];
      mappedArr[arrElem.id] = arrElem;
      mappedArr[arrElem.id].children = [];
    }
    for (let id in mappedArr)
    {
      if (mappedArr.hasOwnProperty(id))
      {
        mappedElem = mappedArr[id];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.parentId)
        {
          mappedArr[mappedElem.parentId].children.push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else
        {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

}
