import { TestBed, async } from '@angular/core/testing';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [
        PageComponent
      ],
    }).compileComponents();
  }));

  it('should have the title Servicer', async(() => {
    const fixture = TestBed.createComponent(PageComponent);
    const headerComponent = fixture.debugElement.componentInstance;
    expect(headerComponent.title).toEqual("Servicer");    
  }));

});
