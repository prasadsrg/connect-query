import { TestBed, inject } from '@angular/core/testing';

import { ConnectPageService } from './connect-page.service';

describe('ConnectPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectPageService]
    });
  });

  it('should be created', inject([ConnectPageService], (service: ConnectPageService) => {
    expect(service).toBeTruthy();
  }));
});
