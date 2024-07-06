import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRrssComponent } from './footer-rrss.component';

describe('FooterRrssComponent', () => {
  let component: FooterRrssComponent;
  let fixture: ComponentFixture<FooterRrssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRrssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRrssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
