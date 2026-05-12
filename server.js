/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  QUIXA TOUR — Backend API (Node.js + Express)           ║
 * ║  Arquivo: server.js                                      ║
 * ║  Para rodar: npm install && node server.js               ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ─── Middlewares ─── */
app.use(cors());
app.use(express.json());

/* ─── Simulated in-memory "database" ─── */
const db = {

  locais: [
    {
      id: 1,
      nome: "Pedra da Galinha Choca",
      tipo: "Monólito",
      tagClasse: "",
      categoria: "Patrimônio Natural",
      descricao: "O símbolo de Quixadá. Uma imensa rocha granítica que lembra a silhueta de uma galinha chocando.",
      imagem: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=600&q=80",
      imgAlt: "Grande rocha granítica em formato de galinha em Quixadá ao pôr do sol",
      coordenadas: { lat: -4.9736, lng: -39.0163 },
      horario: "Livre (acesso público)",
      entrada: "Gratuito",
      dificuldade: "Moderado"
    },
    {
      id: 2,
      nome: "Açude do Cedro",
      tipo: "Patrimônio Histórico",
      tagClasse: "verde",
      categoria: "Engenharia Histórica",
      descricao: "Uma das primeiras grandes obras de engenharia do Ceará, inaugurado em 1906. Cenário para pesca e passeios de barco.",
      imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      imgAlt: "Açude de grande porte cercado por monólitos no sertão cearense",
      coordenadas: { lat: -4.9648, lng: -39.0221 },
      horario: "Livre",
      entrada: "Gratuito",
      dificuldade: "Fácil"
    },
    {
      id: 3,
      nome: "Igreja Matriz N. S. do Rosário",
      tipo: "Patrimônio Cultural",
      tagClasse: "dourado",
      categoria: "Arquitetura Religiosa",
      descricao: "Igreja histórica no coração da cidade, com arquitetura colonial e artefatos do século XIX.",
      imagem: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
      imgAlt: "Fachada de uma Igreja colonial branca com torres sineiras ao entardecer",
      coordenadas: { lat: -4.9724, lng: -39.0149 },
      horario: "Seg-Sex 08h-17h | Sáb-Dom 08h-12h",
      entrada: "Gratuito",
      dificuldade: "Fácil"
    },
    {
      id: 4,
      nome: "Serra do Estevão",
      tipo: "Trilha",
      tagClasse: "verde",
      categoria: "Ecoturismo",
      descricao: "Trilha de dificuldade moderada com vista privilegiada dos monólitos. Recomendada para o nascer do sol.",
      imagem: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      imgAlt: "Trilha rochosa com vista panorâmica de uma cadeia de monólitos de granito",
      coordenadas: { lat: -4.9812, lng: -39.0095 },
      horario: "05h-18h",
      entrada: "R$ 15,00",
      dificuldade: "Moderado"
    },
    {
      id: 5,
      nome: "Museu de Arte Sacra",
      tipo: "Cultura",
      tagClasse: "dourado",
      categoria: "Museu",
      descricao: "Acervo com imagens sacras, documentos históricos e objetos religiosos que contam séculos da história de Quixadá.",
      imagem: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
      imgAlt: "Interior de um museu com vitrines iluminadas exibindo objetos históricos",
      coordenadas: { lat: -4.9729, lng: -39.0151 },
      horario: "Ter-Sáb 09h-17h",
      entrada: "R$ 5,00",
      dificuldade: "Fácil"
    },
    {
      id: 6,
      nome: "Campus Universitário",
      tipo: "Cultura & Educação",
      tagClasse: "",
      categoria: "Polo Universitário",
      descricao: "O polo universitário que transformou Quixadá em referência em tecnologia e inovação no Ceará.",
      imagem: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
      imgAlt: "Campus universitário moderno com prédio de fachada envidraçada",
      coordenadas: { lat: -4.9844, lng: -39.0177 },
      horario: "Seg-Sex 07h-22h",
      entrada: "Gratuito",
      dificuldade: "Fácil"
    }
  ],

  passeios: [
    {
      id: 1,
      nome: "Circuito dos Monólitos",
      guia: "João Alves",
      duracao: "4h",
      distancia: "8km",
      dificuldade: "Difícil",
      preco: 90.00,
      vagas: 10,
      descricao: "Suba pelos monólitos de granito ao amanhecer e aprecie uma das vistas mais incríveis do Ceará."
    },
    {
      id: 2,
      nome: "Passeio de Barco no Cedro",
      guia: "Fernanda Lima",
      duracao: "2h",
      distancia: "Barco",
      dificuldade: "Fácil",
      preco: 50.00,
      vagas: 15,
      descricao: "Passeio tranquilo pelo maior açude histórico do Ceará. Ideal para famílias."
    },
    {
      id: 3,
      nome: "Roteiro Histórico Urbano",
      guia: "Fernanda Lima",
      duracao: "3h",
      distancia: "3km",
      dificuldade: "Fácil",
      preco: 45.00,
      vagas: 20,
      descricao: "Percorra a pé o centro histórico: igrejas, museu e edificações do século XIX."
    }
  ],

  restaurantes: [
    {
      id: 1,
      nome: "Sabores do Sertão",
      categoria: "restaurante",
      avaliacao: 5,
      distancia: "150m da Pedra da Galinha Choca",
      especialidade: "Baião de dois, carne de sol, buchada",
      horario: "Seg-Dom 11h-15h | Ter-Dom 18h-22h"
    },
    {
      id: 2,
      nome: "Canto do Açude",
      categoria: "lanchonete",
      avaliacao: 4,
      distancia: "80m do Açude do Cedro",
      especialidade: "Tapioca recheada, sucos naturais, café coado",
      horario: "Ter-Dom 07h-18h"
    },
    {
      id: 3,
      nome: "Café Monolito",
      categoria: "cafe",
      avaliacao: 5,
      distancia: "200m da Igreja Matriz",
      especialidade: "Café especial, bolos caseiros, brunch",
      horario: "Ter-Dom 07h-20h"
    }
  ],

  usuarios: []
};

/* ═══════════════════════════════════════════════════════════
   ROTAS — LOCAIS TURÍSTICOS
═══════════════════════════════════════════════════════════ */

/** GET /api/locais — lista todos os locais */
app.get('/api/locais', (req, res) => {
  const { tipo, categoria } = req.query;
  let resultado = [...db.locais];

  if (tipo)      resultado = resultado.filter(l => l.tipo.toLowerCase().includes(tipo.toLowerCase()));
  if (categoria) resultado = resultado.filter(l => l.categoria.toLowerCase().includes(categoria.toLowerCase()));

  res.json(resultado);
});

/** GET /api/locais/:id — detalhe de um local */
app.get('/api/locais/:id', (req, res) => {
  const local = db.locais.find(l => l.id === parseInt(req.params.id));
  if (!local) return res.status(404).json({ erro: 'Local não encontrado.' });
  res.json(local);
});

/* ═══════════════════════════════════════════════════════════
   ROTAS — PASSEIOS
═══════════════════════════════════════════════════════════ */

/** GET /api/passeios — lista todos os passeios */
app.get('/api/passeios', (req, res) => {
  const { dificuldade } = req.query;
  let resultado = [...db.passeios];
  if (dificuldade) resultado = resultado.filter(p => p.dificuldade.toLowerCase() === dificuldade.toLowerCase());
  res.json(resultado);
});

/** GET /api/passeios/:id */
app.get('/api/passeios/:id', (req, res) => {
  const passeio = db.passeios.find(p => p.id === parseInt(req.params.id));
  if (!passeio) return res.status(404).json({ erro: 'Passeio não encontrado.' });
  res.json(passeio);
});

/* ═══════════════════════════════════════════════════════════
   ROTAS — RESTAURANTES
═══════════════════════════════════════════════════════════ */

/** GET /api/restaurantes */
app.get('/api/restaurantes', (req, res) => {
  const { categoria } = req.query;
  let resultado = [...db.restaurantes];
  if (categoria && categoria !== 'todos') {
    resultado = resultado.filter(r => r.categoria === categoria);
  }
  res.json(resultado);
});

/* ═══════════════════════════════════════════════════════════
   ROTAS — AUTENTICAÇÃO (simulado)
═══════════════════════════════════════════════════════════ */

/** POST /api/auth/login */
app.post('/api/auth/login', (req, res) => {
  const { email, senha, perfil } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
  }

  const usuario = db.usuarios.find(u => u.email === email && u.senha === senha);
  if (!usuario) {
    return res.status(401).json({ erro: 'Credenciais inválidas.' });
  }

  /* Em produção: gerar JWT */
  res.json({
    mensagem: 'Login realizado com sucesso.',
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil },
    token: `token_simulado_${usuario.id}_${Date.now()}`
  });
});

/** POST /api/auth/cadastro */
app.post('/api/auth/cadastro', (req, res) => {
  const { nome, sobrenome, email, senha, perfil } = req.body;

  if (!nome || !email || !senha || !perfil) {
    return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ erro: 'E-mail inválido.' });
  }

  if (senha.length < 8) {
    return res.status(400).json({ erro: 'A senha deve ter pelo menos 8 caracteres.' });
  }

  const perfisValidos = ['turista', 'guia', 'comerciante'];
  if (!perfisValidos.includes(perfil)) {
    return res.status(400).json({ erro: 'Perfil inválido. Use: turista, guia ou comerciante.' });
  }

  if (db.usuarios.find(u => u.email === email)) {
    return res.status(409).json({ erro: 'Este e-mail já está cadastrado.' });
  }

  const novoUsuario = {
    id: db.usuarios.length + 1,
    nome,
    sobrenome: sobrenome || '',
    email,
    senha, /* Em produção: usar bcrypt para hash */
    perfil,
    criadoEm: new Date().toISOString()
  };

  db.usuarios.push(novoUsuario);

  res.status(201).json({
    mensagem: `Conta criada com sucesso! Bem-vindo(a), ${nome}!`,
    usuario: { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email, perfil: novoUsuario.perfil }
  });
});

/* ═══════════════════════════════════════════════════════════
   ROTA RAIZ — Documentação mínima
═══════════════════════════════════════════════════════════ */
app.get('/', (req, res) => {
  res.json({
    projeto: 'Quixa Tour API',
    versao: '1.0.0',
    descricao: 'Sistema Integrado de Apoio ao Turismo Local — Quixadá, CE',
    endpoints: {
      locais:        'GET  /api/locais',
      localDetalhe:  'GET  /api/locais/:id',
      passeios:      'GET  /api/passeios',
      restaurantes:  'GET  /api/restaurantes',
      login:         'POST /api/auth/login',
      cadastro:      'POST /api/auth/cadastro'
    }
  });
});

/* 404 genérico */
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

/* ─── Start ─── */
app.listen(PORT, () => {
  console.log(`\n🌵 Quixa Tour API rodando em http://localhost:${PORT}`);
  console.log(`📍 Endpoints disponíveis:`);
  console.log(`   GET  http://localhost:${PORT}/api/locais`);
  console.log(`   GET  http://localhost:${PORT}/api/passeios`);
  console.log(`   GET  http://localhost:${PORT}/api/restaurantes`);
  console.log(`   POST http://localhost:${PORT}/api/auth/login`);
  console.log(`   POST http://localhost:${PORT}/api/auth/cadastro\n`);
});
