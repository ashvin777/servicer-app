import { TestBed, async } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should have the title Servicer', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const headerComponent = fixture.debugElement.componentInstance;

    expect(headerComponent.title).toEqual("Servicer");
    
  }));

});
