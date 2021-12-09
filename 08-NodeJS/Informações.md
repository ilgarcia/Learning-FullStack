### Download node

https://nodejs.org/en/

### cmder (opciona)

https://cmder.net/

**Iniciar NPM**

`npm init`

**Instalando pacotes**

`npm install <"pacote/endereço">`

**Instalando pacotes ja tento as referencias**

instala as dependencias referenciadas no package.json

`npm install`

**Site para verificar HTTP Status Codes**

https://www.restapitutorial.com/httpstatuscodes.html

**Encerrar servidor no Cmder**

ctrl + c

**Site Express**

https://expressjs.com/pt-br/


**Valores possíveis para o Type de uma resposta no express**

- res.type('.html') => 'text/html'
- res.type('html') => 'text/html'
- res.type('txt') => 'text/plain'
- res.type('json') => 'application/json'
- res.type('application/json') => 'application/json'
- res.type('png') => 'image/png'


**Api do tipo REST/Download REST Client**

https://insomnia.rest/download

**HTTP Request**

https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html

requisição - Comunicação do computador cliente com o computador servidor

Três partes:
- Linha de requisição/Metodo
- Caminho
- Qual a versão do HTTP

**HTTP Response**

Resposta - O servidor trata a requisição e responde para o computador do cliente

​https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Exemplos de codigos numericos de resposta
100 - Informativo
200 - Resposta com sucesso
300 - Requisição mudou de endereço
400 - Erro por falta de dados/acesso 
500 - Erro que acontece do lado do servidor

Três partes:
- Status
- Header
- Body

**Dinamica de funcionamento**

1. Usuario coloca o endereço no navegador
2. Node recebe essa requisição e entrega o html
3. Navegador processa este html
4. Gera uma nova requisição para o node e entrega os dados recebidos pelo javascript

**Vantagens**
- Atualização mais dinamica na tela

**Desvantagens**
- SEO do google

Uma forma de se resolver e executar somente ate a etapa 2

**Template-engine**
Para o VSCode identificar os comandos do EJS, vc pode instalar a extensão: EJS language support



