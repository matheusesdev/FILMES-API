const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

// lista de todos os filmes
let filmes = [
    {
      id: 1,
      titulo_filme: 'Parasita',
      idioma: 'Coreano',
      duracao: 132,
      atores_principais: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
      plataformas: ['Netflix', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/bik2BZjmVjeE6LOZqtuTjb4jJPQ.jpg',
      ano_lancamento: 2019,
      avaliacao: 8.6,
      sinopse: 'Um pobre trabalhador se infiltra na vida de uma rica família coreana, com resultados inesperados.'
    },
    {
      id: 2,
      titulo_filme: 'A Vida é Bela',
      idioma: 'Italiano',
      duracao: 116,
      atores_principais: ['Roberto Benigni', 'Nicoletta Braschi', 'Giorgio Cantarini'],
      plataformas: ['Disney+', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mdqU2CHabmbdkWKs1IvCfksbtNM.jpg',
      ano_lancamento: 1997,
      avaliacao: 8.6,
      sinopse: 'Durante a Segunda Guerra Mundial, um homem usa seu humor e criatividade para proteger seu filho do sofrimento.'
    },
    {
      id: 3,
      titulo_filme: 'O Fabuloso Destino de Amélie Poulain',
      idioma: 'Francês',
      duracao: 122,
      atores_principais: ['Audrey Tautou', 'Mathieu Kassovitz', 'Jamel Debbouze'],
      plataformas: ['Netflix', 'YouTube'],
      poster: 'https://image.tmdb.org/t/p/original/4zMUKCBq1OqMXFnNSLMVT0MgHXz.jpg',
      ano_lancamento: 2001,
      avaliacao: 8.3,
      sinopse: 'Amélie, uma jovem mulher excêntrica, tenta melhorar a vida das pessoas ao seu redor, enquanto encontra o amor.'
    },
    {
      id: 4,
      titulo_filme: 'Cidade de Deus',
      idioma: 'Português',
      duracao: 130,
      atores_principais: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
      plataformas: ['HBO Max', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/gfnXixcGC060QcG6JPxN6AMdVsq.jpg',
      ano_lancamento: 2002,
      avaliacao: 8.6,
      sinopse: 'A história de jovens que crescem na favela Cidade de Deus, enfrentando a violência e a pobreza.'
    },
    {
      id: 5,
      titulo_filme: 'O Labirinto do Fauno',
      idioma: 'Espanhol',
      duracao: 118,
      atores_principais: ['Ivana Baquero', 'Sergi López', 'Maribel Verdú'],
      plataformas: ['Netflix', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/53ZMT8Y18gwLpInzRLMEebAZxew.jpg',
      ano_lancamento: 2006,
      avaliacao: 8.2,
      sinopse: 'Uma jovem menina se refugia em um mundo fantástico durante a Guerra Civil Espanhola.'
    },
    {
      id: 6,
      titulo_filme: 'O Artista',
      idioma: 'Inglês',
      duracao: 100,
      atores_principais: ['Jean Dujardin', 'Bérénice Bejo', 'John Goodman'],
      plataformas: ['Netflix', 'Disney+'],
      poster: 'https://image.tmdb.org/t/p/original/sVBZ45hWFuzZtQc57TUf323R4VF.jpg',
      ano_lancamento: 2011,
      avaliacao: 7.9,
      sinopse: 'Um ator de cinema mudo enfrenta dificuldades enquanto o cinema falado toma conta.'
    },
    {
      id: 7,
      titulo_filme: 'Intocáveis',
      idioma: 'Francês',
      duracao: 112,
      atores_principais: ['François Cluzet', 'Omar Sy', 'Anne Le Ny'],
      plataformas: ['Netflix', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/2tAzFC2xUAXEx96l5Xixb6WLAyO.jpg',
      ano_lancamento: 2011,
      avaliacao: 8.5,
      sinopse: 'A história de um aristocrata tetraplégico que forma uma amizade improvável com um cuidador de origem humilde.'
    },
    {
      id: 8,
      titulo_filme: 'Rashomon',
      idioma: 'Japonês',
      duracao: 88,
      atores_principais: ['Toshiro Mifune', 'Machiko Kyō', 'Takashi Shimura'],
      plataformas: ['YouTube', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/moA41Cxu1ExsYg7Dp8oUxGeGO6P.jpg',
      ano_lancamento: 1950,
      avaliacao: 8.2,
      sinopse: 'Várias versões de um crime são mostradas, cada uma com suas próprias interpretações da verdade.'
    },
    {
      id: 9,
      titulo_filme: 'Roma',
      idioma: 'Espanhol',
      duracao: 135,
      atores_principais: ['Yalitza Aparicio', 'Marina de Tavira', 'Diego Cortina Autrey'],
      plataformas: ['Netflix'],
      poster: 'https://image.tmdb.org/t/p/original/x4P6WSN8a5Ypbf3AuXK7EdtAiQo.jpg',
      ano_lancamento: 2018,
      avaliacao: 8.0,
      sinopse: 'A história de uma empregada doméstica que trabalha para uma família de classe média na Cidade do México nos anos 70.'
    },
    {
      id: 10,
      titulo_filme: 'O Tigre e o Dragão',
      idioma: 'Mandarim',
      duracao: 120,
      atores_principais: ['Chow Yun-fat', 'Michelle Yeoh', 'Zhang Ziyi'],
      plataformas: ['Netflix', 'Amazon Prime Video'],
      poster: 'https://image.tmdb.org/t/p/original/6ZPfaWGAir5qgGK0VfBOzOqB3yF.jpg',
      ano_lancamento: 2000,
      avaliacao: 7.9,
      sinopse: 'A história de guerreiros e mistérios no contexto da antiga China, com foco em dois guerreiros que buscam uma espada lendária.'
    }
  ];
  

// mostrar todos os filmes
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// buscar um filme pelo id
app.get('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);
  if (filme) {
    res.json(filme);
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});
//buscar filmes pelo nome
app.get('/filmes/nome/:titulo', (req, res) => {
  const titulo = req.params.titulo.toLowerCase(); // Converte o título para minúsculas para comparação
  const filmesEncontrados = filmes.filter(f =>
    f.titulo_filme.toLowerCase().includes(titulo) // Verifica se o título contém o termo buscado
  );

  if (filmesEncontrados.length > 0) {
    res.json(filmesEncontrados); // Retorna os filmes encontrados
  } else {
    res.status(404).json({ mensagem: 'Nenhum filme encontrado com esse título.' });
  }
});


//aqui eu adiciono o filme, o ID é atribuído automaticamente e ainda existe a verificação se o filme já foi adicionado anteriormente.
app.post('/filmes', (req, res) => {
  const novoFilme = req.body;
  const filmeExistente = filmes.find(f => f.titulo_filme === novoFilme.titulo_filme && f.ano_lancamento === novoFilme.ano_lancamento);

  if (filmeExistente) {
    return res.status(400).json({ mensagem: 'Este filme já foi adicionado.' });
  }
novoFilme.id = filmes.length ? filmes[filmes.length - 1].id + 1 : 1;

filmes.push(novoFilme);

  res.status(201).json({ mensagem: 'Filme adicionado com sucesso!', filme: novoFilme });
});

// Att filme
app.put('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);
  if (index !== -1) {
    filmes[index] = { ...filmes[index], ...req.body };
    res.json({ mensagem: 'Filme atualizado com sucesso!', filme: filmes[index] });
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});

// deletar
app.delete('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);
  if (index !== -1) {
    const filmeRemovido = filmes.splice(index, 1);
    res.json({ mensagem: 'Filme removido com sucesso!', filme: filmeRemovido });
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});


app.listen(port, () => {
  console.log(`API de Filmes rodando em http://localhost:${port}`);
});
