import { CustomersRoutingModule } from './customers.routing.module';

describe('Customers.RoutingModule', () => {
  let customersRoutingModule: CustomersRoutingModule;

  beforeEach(() => {
    customersRoutingModule = new CustomersRoutingModule();
  });

  it('should create an instance', () => {
    expect(customersRoutingModule).toBeTruthy();
  });
});
