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

describe('Testes de Qualidade - Métricas', () => {
    it('Deve retornar 404 ao buscar um pedido que não existe (Redução de Risco)', async () => {
        const res = await request(app).get('/orders/9999');
        expect(res.status).toBe(404);
    });

    it('Deve retornar 400 ao tentar criar pedido sem nome (Validação de Code Smell)', async () => {
        const res = await request(app).post('/orders').send({ itemName: '', quantity: 1 });
        expect(res.status).toBe(400);
    });
});