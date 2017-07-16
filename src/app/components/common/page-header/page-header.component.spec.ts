import { TestBed, async } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should have the title Servicer', async(() => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const headerComponent = fixture.debugElement.componentInstance;
    expect(headerComponent.title).toEqual("Servicer");    
  }));

});
