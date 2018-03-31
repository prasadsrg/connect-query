import { TestBed, inject } from '@angular/core/testing';

import { MysqlConnectionService } from './mysql-connection.service';

describe('MysqlConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlConnectionService]
    });
  });

  it('should be created', inject([MysqlConnectionService], (service: MysqlConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
