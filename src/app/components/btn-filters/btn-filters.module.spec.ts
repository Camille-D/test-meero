import { BtnFiltersModule } from './btn-filters.module';

describe('BtnFiltersModule', () => {
  let btnFiltersModule: BtnFiltersModule;

  beforeEach(() => {
    btnFiltersModule = new BtnFiltersModule();
  });

  it('should create an instance', () => {
    expect(btnFiltersModule).toBeTruthy();
  });
});
