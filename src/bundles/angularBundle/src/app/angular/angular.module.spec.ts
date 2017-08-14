import { AngularModule } from './angular.module';

describe('AngularModule', () => {
  let angularModule: AngularModule;

  beforeEach(() => {
    angularModule = new AngularModule();
  });

  it('should create an instance', () => {
    expect(angularModule).toBeTruthy();
  });
});
