import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app/app.module';

describe('Feature: Organizing a webinaire', () => {
  it('should organize the webinaire', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = module.createNestApplication();
    await app.init();

    const result = await request(app.getHttpServer()).post('/webinaires').send({
      title: 'first webinaire',
      seats: 100,
      startDate: '2024-01-10T10:00:00.000Z',
      endDate: '2024-01-10T11:00:00.000Z',
    });

    expect(result.status).toBe(201);
    expect(result.body).toEqual({
      id: 'id-1',
    });
  });
});
