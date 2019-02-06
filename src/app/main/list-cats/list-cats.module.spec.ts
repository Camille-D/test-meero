import { ListCatsModule } from './list-cats.module';

describe('ListCatsModule', () => {
  let listCatsModule: ListCatsModule;

  beforeEach(() => {
    listCatsModule = new ListCatsModule();
  });

  it('should create an instance', () => {
    expect(listCatsModule).toBeTruthy();
  });
});
