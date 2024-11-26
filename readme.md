# API de Filmes

Esta API permite gerenciar uma lista de filmes, possibilitando operações de leitura, adição, atualização e remoção de filmes (CRUD). Desenvolvida usando Express.js.

---

## Endpoints

### 1. **GET /filmes**
Retorna a lista completa de filmes em formato JSON.

- **Exemplo de URL**: `http://localhost:3000/filmes`

---

### 2. **GET /filmes/:id**
Recupera um filme pelo seu `id`.

- **Descrição**:  
  Se o filme for encontrado, retorna o objeto do filme.  
  Caso contrário, retorna um status 404 com a mensagem:  
  `"Filme não encontrado"`.

- **Exemplo de URL**:  
  `http://localhost:3000/filmes/2`

---

### 3. **GET /filmes/nome/:titulo**
Busca filmes pelo título.

- **Descrição**:  
  Converte o termo de busca para minúsculas para comparação sem distinção de maiúsculas e minúsculas.  
  Se filmes correspondentes ao título forem encontrados, retorna-os.  
  Caso contrário, retorna um status 404 com a mensagem:  
  `"Nenhum filme encontrado com esse título"`.

- **Exemplo de URL**:  
  `http://localhost:3000/filmes/nome/parasita`

---

### 4. **POST /filmes**
Adiciona um novo filme à lista.

- **Validações**:  
  Verifica se um filme com o mesmo título e ano de lançamento já existe.  
  - Se existir: retorna um status 400 com a mensagem:  
    `"Este filme já foi adicionado"`.  
  - Caso contrário:  
    - Atribui um novo `id` ao filme.  
    - Adiciona o filme à lista.  
    - Retorna um status 201 com uma mensagem de sucesso e o filme adicionado.

---

### 5. **PUT /filmes/:id**
Atualiza um filme existente pelo seu `id`.

- **Descrição**:  
  - Se o filme for encontrado:  
    Mescla os dados existentes do filme com os novos dados fornecidos no corpo da requisição.  
    Retorna uma mensagem de sucesso.  
  - Se o filme não for encontrado:  
    Retorna um status 404 com a mensagem:  
    `"Filme não encontrado"`.

---

### 6. **DELETE /filmes/:id**
Deleta um filme pelo seu `id`.

- **Descrição**:  
  - Se o filme for encontrado:  
    Remove-o da lista e retorna uma mensagem de sucesso.  
  - Se o filme não for encontrado:  
    Retorna um status 404 com a mensagem:  
    `"Filme não encontrado"`.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.  
- **Express.js**: Framework para criar APIs RESTful.  
- **CORS**: Middleware para permitir requisições de outras origens.  

---

## Lista de Filmes na API

- **Parasita**  
- **A vida é bela**  
- **O fabuloso destino de Amélie Poulain**  
- **Cidade de Deus**  
- **O Labirinto do Fauno**  
- **O Artista**  
- **Intocáveis**  
- **Rashomon**  
- **Roma**  
- **O Tigre e o Dragão**

---

## Informações sobre o Código JavaScript

O código JavaScript fornecido permite buscar e exibir dados de filmes da API em uma página web. 

### Principais Funções:

#### 1. **buscarFilmes**
- Recupera a entrada do usuário a partir de um elemento HTML com o ID `searchInput`.
- Faz uma requisição à API para buscar dados de filmes.
- Filtra os filmes com base no título informado pelo usuário e exibe os resultados.

#### 2. **exibirFilmes**
- Recebe um array de objetos de filmes e exibe na página web.
- Exibe uma mensagem se nenhum filme for encontrado.

#### 3. **getPlatformIcon**
- Retorna uma string HTML contendo uma tag `<a>` com o ícone de uma plataforma.
- Determina o ícone e o link com base no nome da plataforma.

---

## Exemplo de Estrutura de Exibição

Para cada filme, são exibidas as seguintes informações:

- **Pôster**  
- **Título**  
- **Idioma**  
- **Duração**  
- **Atores Principais**  
- **Ano de Lançamento**  
- **Avaliação**  
- **Sinopse**  
- **Ícones das Plataformas**

```html
<div class="filme-card">
  <img src="poster_url" alt="Poster do Filme" />
  <h3>Título do Filme</h3>
  <p>Idioma: Português</p>
  <p>Duração: 120 minutos</p>
  <p>Atores: Nome 1, Nome 2</p>
  <p>Ano: 2023</p>
  <p>Avaliação: 8.5</p>
  <p>Sinopse: Esta é a sinopse do filme.</p>
  <div class="plataformas">
    <a href="link_da_plataforma">
      <img src="icone_plataforma.png" alt="Plataforma" />
    </a>
  </div>
</div>
