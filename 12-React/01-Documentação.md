## Site React

https://pt-br.reactjs.org/

## React Script

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

```

## JSX
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## Create a React app

npx create-react-app my-app

npx create-react-app@5.0.0 my-app

## Optimize React app

npm run build

```
{
  **<Incluir Linha Abaixo antes de rodar npm run build>**
  "homepage": "Sua-homepage"
  **<Se for local>**
  "homepage": "."
  "name": "my-app",
  "version": "0.1.0",
```

## Redux

**Funcionamento do Redux**
- Action
  Pedido/ação (tipo e a carga)

- Dispatch
  Envia a ação para o Reducer

- Reducer
  Manipular o estado (gerar um novo estado e mandar esta estado modificado)

- State
  Estado da nossa aplicação
