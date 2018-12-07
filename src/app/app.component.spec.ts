import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppRouteModule } from './app.route.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

describe('App Component Specs', () => {

    let app: AppComponent;
    let fixture: ComponentFixture< AppComponent >;

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            imports: [ RouterModule, AppRouteModule ],

            declarations: [ AppComponent, HeaderComponent, FooterComponent ],

            providers: [
                {
                    provide: APP_BASE_HREF, useValue: '/'
                }
            ]
        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent( AppComponent );
        app = fixture.debugElement.componentInstance;
    })

    it('Create app', async(() => {
        expect(app).toBeTruthy();
    }));

});
