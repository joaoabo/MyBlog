---
date: 2023-02-20 14:35:23
title : Iniciando um app em React-js
description : Mostrando a simplicidade de iniciar um app em react.
category : React-js
background : " #61DAFB "
---

#  Create React App

Create React App é um ambiente confortável para `aprender React,` e é a melhor maneira de começar um `single-page application` em React.

Além de configurar seu ambiente de desenvolvimento para utilizar as funcionalidades mais recentes do JavaScript, ele fornece uma experiência de desenvolvimento agradável, e otimiza o seu app para produção. Será necessário ter Node >= 14.0.0 and npm >= 5.6 na sua máquina. Para criar um novo projeto, rode:

```javascript
npx create-react-app my-app
cd my-app
npm start
```

##  Nota

> `npx` na primeira linha não é erro de digitação — é um package runner que vem com npm 5.2+.

Create React App não lida com lógica de backend nem banco de dados. Ele apenas cria um build pipeline para o frontend, podendo portanto ser utilizado com qualquer backend de sua escolha. Por trás, Babel e Webpack estão sendo utilizados, mas não é necessário saber nada sobre eles.