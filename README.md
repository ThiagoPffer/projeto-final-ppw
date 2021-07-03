<h1>Projeto Final PPW 2</h1>
<p>Projeto desenvolvido como trabalho final para a disciplina de Programação para Web II, ministrada pelo prof. Ramon Venson</p>

<p>Disponível publicamente na URL: <a>https://pfinalppw2thiago.herokuapp.com/api/</a></p>

<h2>Estrutura dos recursos:</h2>

<h5>Personagem (/personagens)<h5>
<ul>
    <li>nome: String,</li>
    <li>sexo: String,</li>
    <li>classe: Object,</li>
    <li>jogo: Object (Retirado de API externa)</li>
</ul>

<h5>Classe (/classes)<h5>
<ul>
    <li>nome: String,</li>
    <li>status_primario: String,</li>
    <li>alcance: String,</li>
    <li>funcao: String</li>
</ul>

<h2>Requisições:</h2>
<ul>
    <li><b>GET</b> /api/personagens/ --> Retorna uma lista com todos os personagens</li>
    <li><b>POST</b> /api/personagens/ --> Cria um novo personagem</li>
    <li><b>GET</b> /api/personagens/{id} --> Retorna um único personagem</li>
    <li><b>PUT</b> /api/personagens/{id} --> Altera um personagem</li>
    <li><b>DELETE</b> /api/personagens/{id} --> Deleta um personagem</li>
    <li><b>GET</b> /api/classes/ --> Retorna uma lista com todas as classes</li>
    <li><b>GET</b> /api/classes/{id} --> Retorna uma única classe</li>
    <li><b>POST</b> /api/classes/ --> Cria uma nova classe</li>
    <li><b>GET</b> /api/classes/{id} --> Retorna uma única classe</li>
    <li><b>PUT</b> /api/classes/{id} --> Altera uma classe</li>
    <li><b>DELETE</b> /api/classes/{id} --> Deleta uma classe</li>
</ul>
