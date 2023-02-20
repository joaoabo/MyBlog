---
date: 2023-02-20 14:54:23
title: Renderizando Elementos
description: Elementos são os menores blocos de construção de aplicativos React.
category: React-js
background: " #61DAFB "
---

# Um elemento descreve o que você quer ver na tela:

```javascript
const element = <h1>Hello, world</h1>;
```


Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. O React DOM é o responsável por atualizar o DOM para exibir os elementos React.
## Nota:
> Pode-se confundir elementos com o conceito mais amplo de “componentes”. Nós apresentaremos os componentes na seção seguinte. Elementos compõem os componentes e nós recomendamos ler esta seção antes de prosseguir.

### Renderizando um Elemento no DOM

Suponhamos que exista um `<div>` em algum lugar do seu código HTML:

```javascript
<div id="root"></div>
```

Nós o chamamos de nó raiz do DOM porque tudo dentro dele será gerenciado pelo React DOM.

Aplicações construídas apenas com React geralmente tem apenas um único nó raiz no DOM. Se deseja integrar o React a uma aplicação existente, você pode ter quantos nós raiz precisar.

Para renderizar um elemento React, primeiro passe o elemento DOM para ReactDOM.createRoot(), depois passe o elemento React para root.render():

```javascript
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```
Assim, é exibido “Hello, world” na página.