import {
  IWebinaireRepository,
  OrganizeWebinaire,
  Webinaire,
} from './organize-webinaire';

describe('Feature: Organizing a webinaire', () => {
  it('should create a webinaire', async () => {
    class WebinaireRepository implements IWebinaireRepository {
      public database: Webinaire[] = [];
      async create(webinaire: Webinaire): Promise<void> {
        this.database.push(webinaire);
      }
    }

    const repository = new WebinaireRepository();
    const useCase = new OrganizeWebinaire(repository);
    const result = await useCase.execute({
      title: 'first webinaire',
    });

    expect(repository.database.length).toBe(1);

    const createdWebinaire = repository.database[0];

    expect(createdWebinaire.title).toBe('first webinaire');
  });
});
