import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';

const controller = new NegociacaoController();
const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
const body = JSON.stringify(negociacao);
const method = 'POST';
headers.set('Content-Type', 'application/json');

const config = {
    method,
    headers,
    body
};

fetch('/negociacoes', config).then(() => console.log('Dado Enviado com sucesso'));
//# sourceMappingURL=app.js.map