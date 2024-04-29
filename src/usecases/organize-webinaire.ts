export class Webinaire {
  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}

export interface IWebinaireRepository {
  create(webinaire: Webinaire): Promise<void>;
}

export class OrganizeWebinaire {
  constructor(private readonly repository: IWebinaireRepository) {}
  execute(data: { title: string }) {
    return this.repository.create(new Webinaire(data.title));
  }
}
