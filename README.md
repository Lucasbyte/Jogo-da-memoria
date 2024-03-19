# Jogo de Memória em Angular

Este é um aplicativo Angular que implementa um jogo de memória simples, onde o jogador precisa encontrar pares de símbolos iguais clicando neles.

## Funcionalidades Principais

1. **Novo Jogo:**
   - Ao clicar no botão "New Game", os símbolos são embaralhados e o jogo é reiniciado.
   - Os símbolos são exibidos por alguns segundos para que o jogador possa memorizá-los antes de começar a jogar.

2. **Seleção de Símbolos:**
   - O jogador pode clicar nos símbolos para tentar encontrar pares.
   - Se o jogador encontrar um par correto, ganha pontos.
   - Se o jogador errar, perde pontos e os símbolos selecionados são redefinidos.

3. **Pontuação:**
   - A pontuação é atualizada conforme o jogador encontra pares corretos ou erra.
   - Cada par correto adiciona pontos à pontuação total, enquanto cada erro subtrai pontos.

## Estrutura do Código

- **app.component.ts:** Contém a lógica principal do jogo, como a inicialização de um novo jogo, manipulação de cliques nos símbolos e atualização da pontuação.
- **index.html:** Arquivo de modelo que define a estrutura HTML da interface do jogo, incluindo a exibição dos símbolos e botões interativos.
- **app.component.css:** Arquivo de estilos que define o visual e o layout da interface do jogo.

## Como Executar o Jogo

1. Certifique-se de ter o Node.js e o Angular CLI instalados em seu ambiente de desenvolvimento.
2. Clone o repositório ou faça o download dos arquivos do jogo.
3. Abra o terminal na pasta do projeto e execute o comando `npm install` para instalar as dependências.
4. Em seguida, execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:4200` para jogar o Jogo de Memória.

## Melhorias Possíveis

- Implementar um temporizador para limitar o tempo de cada rodada.
- Adicionar mais níveis de dificuldade com diferentes números de símbolos.
- Incluir animações para tornar a experiência do jogo mais interativa e atraente.
- Adicionar funcionalidades como ranking de jogadores, opções de personalização e modos de jogo alternativos.

Divirta-se jogando o Jogo de Memória em Angular! Qualquer feedback ou contribuição é bem-vindo.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).

---

Certifique-se de incluir um arquivo `LICENSE.md` na raiz do projeto com os termos da licença MIT ou outra licença de sua escolha. Isso é importante para informar aos usuários sobre como eles podem usar, modificar e distribuir o seu código.
