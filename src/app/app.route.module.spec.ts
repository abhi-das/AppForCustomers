import { AppRouteModule } from './app.route.module';

describe('APP Router Module',() => {

    let appRouterMod: AppRouteModule;

    beforeEach( () => {
        appRouterMod = new AppRouteModule();   
    });

    it('Create App Router Module', () => {
        expect(appRouterMod).toBeTruthy();
    });
});
