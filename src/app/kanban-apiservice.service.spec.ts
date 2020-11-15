import { TestBed } from '@angular/core/testing';

import { KanbanAPIServiceService } from './kanban-apiservice.service';

describe('KanbanAPIServiceService', () => {
  let service: KanbanAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
