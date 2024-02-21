"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
app.use(express_1.default.json());
class Aluno {
    constructor(n, i, m) {
        this.nome = n;
        this.idade = i;
        this.matricula = m;
    }
}
const aluno1 = new Aluno('James', 35, '12345');
route.get('/', (req, res) => {
    res.json(aluno1);
});
app.use(route);
app.listen(3333, () => 'server running on port 3333');
