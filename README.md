# TypeScript

### Instalação:
**npm i -g typescript** *(global)*
***
### Rodando com code-runner:
**npm i -g ts-node** *(global)*
***
### Comandos:
**tsc --init** - Iniciar na pasta.<br>
**tsc -v** - Sobre a versão.<br>
 **tsc nome-do-arquivo.ts** - Compila o arquivo e gera um .JS compilado(terminal).<br>
 **node nome-do-arquivo.js** - Executar o arquivo compilado em *.js*(terminal).<br>
 **tsc -w** - Irá monitorar e compilar qualquer alteração automaticamente.(Usar o comando na pasta principal do projeto.)
 ***
### Inicializar com pacotes node:
**npm init -y** - Irá criar um arquivo package.json.<br>

**npm i -s live-server** - Criando dependência no servidor *live-server*(**-s** para salvar a referência dessa dependência dentro do package.json do projeto.)<br>
Dentro do *package.json/script:* adicione **"start": "live-server"**<br>
Agora use **npm start** - irá iniciar o browser da sua aplicação.
***


### Dicas:
O compilador TypeScript sempre irá compilar, mesmo com erro no arquivo ts(Isso pode ser configurado para compilar somente quando não conter nenhum erro).<br>
