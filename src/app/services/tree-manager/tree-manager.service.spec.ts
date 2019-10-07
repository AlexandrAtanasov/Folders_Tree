import { TestBed } from '@angular/core/testing';

import { TreeManagerService } from './tree-manager.service';

describe('TreeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeManagerService = TestBed.get(TreeManagerService);
    expect(service).toBeTruthy();
  });
});
