// DADOS.JS - Arquivo de dados do sistema

// 1. Configuração das Cotas
export const COTAS = { 1: 10, 2: 6, 3: 4 };
export const LIMITE_TOTAL_BASE = 19;

// 2. Lista de Bases e Docentes
export const BASES_CONFIG = [
    { id: 1, nome: "Base 1", docente: "Profa. Alice" },
    { id: 2, nome: "Base 2", docente: "Prof. Glauco" },
    { id: 3, nome: "Base 3", docente: "Profa. Jordana" },
    { id: 4, nome: "Base 4", docente: "Profª. Sharon" },
    { id: 5, nome: "Base 5", docente: "Profª. Luciana" },
    { id: 6, nome: "Base 6", docente: "Prof. Washington" },
    { id: 7, nome: "Base 7", docente: "Profª. Izabel" },
    { id: 8, nome: "Base 8", docente: "Profa. João" },
    { id: 9, nome: "Base 9", docente: "Profa. Gustavo" },
];

// 3. Banco de Dados de Estudantes (Sua lista gigante vem aqui)
export const DATABASE_ALUNAS = [
    { matricula: "12345", nome: "Jordana Eid", ano: 1 },
    { matricula: "23456", nome: "Marcos Ramon", ano: 1 },
    { matricula: "34567", nome: "Alice Watson", ano: 2 },
    { matricula: "45678", nome: "Glauco Feijó", ano: 3 },
    { matricula: "00001", nome: "Pessoa 1", ano: 3 },
    { matricula: "00002", nome: "Pessoa 2", ano: 3 },
    { matricula: "00003", nome: "Pessoa 3", ano: 3 },
    { matricula: "00004", nome: "Pessoa 4", ano: 3 },
    { matricula: "00005", nome: "Pessoa 5", ano: 2 },
    { matricula: "00006", nome: "Pessoa 6", ano: 2 },
    { matricula: "00007", nome: "Pessoa 7", ano: 2 },
    { matricula: "00008", nome: "Pessoa 8", ano: 1 },
    { matricula: "00009", nome: "Pessoa 9", ano: 1 },
    // ... cole as outras alunas aqui ...
];
