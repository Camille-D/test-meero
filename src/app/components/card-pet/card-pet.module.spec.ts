import { CardPetModule } from './card-pet.module';

describe('CardPetModule', () => {
  let cardPetModule: CardPetModule;

  beforeEach(() => {
    cardPetModule = new CardPetModule();
  });

  it('should create an instance', () => {
    expect(cardPetModule).toBeTruthy();
  });
});
