import { TestBed, async } from '@angular/core/testing';

import { PageBodyComponent } from './page-body.component';

describe('PageBodyComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [
        PageBodyComponent
      ],
    }).compileComponents();
  }));

  it('should have the title Servicer', async(() => {
    const fixture = TestBed.createComponent(PageBodyComponent);
    const headerComponent = fixture.debugElement.componentInstance;
    expect(headerComponent.title).toEqual("Servicer");    
  }));

});
