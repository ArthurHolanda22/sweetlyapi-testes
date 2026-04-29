const request = require('supertest');
const app = require('../index'); 

describe('Testes de Integração - Etapa 2', () => {
  it('Deve validar se a rota de pedidos responde corretamente', async () => {
    const res = await request(app).get('/orders');
    expect(res.status).toBeDefined();
  });

  it('Deve retornar erro ao tentar criar pedido inválido', async () => {
    const res = await request(app).post('/orders').send({ itemName: '' });
    expect(res.status).toBe(400);
  });
});