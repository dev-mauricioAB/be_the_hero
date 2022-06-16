<div align="center" style="display:flex;flex-direction:column;align-items:center">
  <img width="120" src=".github/logo.svg" >
  <img width="1200" src=".github/dark_1.gif" style="margin-top:1rem;border-radius:5px">
  <p>Apoie ONGs, apoie as boas causas, <strong>be a hero!</strong><p>

  [![Netlify Status](https://api.netlify.com/api/v1/badges/a105875c-8c87-46d0-888a-f6b21ddb5323/deploy-status)](https://app.netlify.com/sites/be-thehero/deploys) ![](https://img.shields.io/badge/omnistack-11-blueviolet?style=flat-square)
  ![alt release](https://img.shields.io/github/v/release/dev-mauricioAB/be_the_hero?style=flat-square)
</div>

![alt Mockup frontend](.github/mockup.png)

## 💡 Sobre o Projeto

A idéia central é disponibilizar um canal onde ONG's cadastrem situações, que aqui chamaremos de 'Casos', onde necessitem alguma ajuda financeira. Então através desse portal, pessoas que estejam aptas a contribuir podem vizualizar esses Casos cadastrados e entrar em contato com a ONG para fornecer algum tipo de auxilio, seja ele financeiro ou não.

## 🦸🏿 O que é e qual a importância de ajudar uma ONG? 
As ONGs são entidades privadas da sociedade civil cujo propósito é defender e promover uma causa. Essa causa pode ser de qualquer tipo: **direitos humanos**, **direitos dos animais**, **direitos indígenas**, **gênero**, **luta contra o racismo**, **meio ambiente**, **questões urbanas**, **imigrantes**, entre muitos outros. Como não possuem fins lucrativos, as ONGs precisam buscar formas alternativas para continuar em atividade. Para isso, contam com o apoio financeiro de outras entidades privadas (do terceiro setor ou do empresariado), de pessoas físicas (cidadãos conscientes e engajados como eu e você) e até mesmo do governo, que pode fornecer recursos e apoio para atividades em que ambos possam unir forças. 

(créditos para essa explicação sobre a importância de ajudar ONG's à [Ana Carolina Hernandes](https://github.com/anacarolinahernandes/be-the-hero))

## 👩🏽‍💻 Executando o projeto localmente na sua maquina
Para rodar esse projeto você precisará ter em sua maquina:
- [Git](https://www.atlassian.com/br/git/tutorials/install-git)
- [NodeJS](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm)

Após instalar esses caras, basta clonar esse projeto na pasta onde você salve seus projetos, e podemos iniciar! ✈ 
``` bash
// clonando com ssh
git clone git@github.com:dev-mauricioAB/be_the_hero.git

// clonando com http
git clone https://github.com/dev-mauricioAB/be_the_hero.git
```

Após clonar, repare que há três pastas no projeto: backend, frontend e modile. Você precisará executar os comandos abaixo via terminal, dentro de cada pasta, conforme os passos indicam.


### 🎒 Back-end
Primeiramente instale todas dependências do projeto.
``` bash
npm install

```
Agora rode o comando que irá configurar a estrutura de banco de dados inicial.
``` bash
npm run migrate

```
Por fim, basta rodar o comando abaixo e o servidor de backend estará pronto!
``` bash
npm run start
```

### 🖥️ Front-end
Primeiramente instalamos todos as dependências.
``` bash
npm install
```
Agora basta rodar o projeto e ele abrirá no navegador.
``` bash
npm run start
```

### 🐸 Mobile
Para rodar localmente o ambiente mobile é um pouco mais complicado, mas possível! 😁
Siga os passos desse tutorial, conforme seu ambiente e depois volte aqui. [Tutorial](https://react-native.rocketseat.dev/)

Conseguiu!? Parabéns! Eu sei que não deve ter sido fácil. Mas agora é só rodas os comandos a baixo e dará tudo certo!

Primeiro instalamos as dependências do projeto.
``` bash
npm install
```
Agora basta executar o projeto.
``` bash 
npm run start
```

## 🔦 Tecnologias Utilizadas

<h3>🖥️ Front-End</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="HTML5 logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" width="50" />
        <br>
        <span>HTML</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="CSS3 logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" width="50" />
        <br>
        <span>CSS</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="JavaScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" width="50" />
        <br>
        <span>JavaScript</span>
      </td>
    </tr>
    <tr>
     <td align="center" height="110" width="140">
        <img alt="React logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" title="React" width="50" />
        <br>
        <span>React</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Axios logo" src="https://avatars.githubusercontent.com/u/32372333?v=4&s=400" title="Axios" width="50" />
        <br>
        <span>Axios</span>
      </td>
    </tr>
    <tr>
  </tbody>
</table>

<h3>🎒 Back-End</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Node.js logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="Node.js" width="50" />
        <br>
        <span>Node.js</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Express.js logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" title="Express.js" width="50" />
        <br>
        <span>Express.js</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="SQLite logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg" title="Sqlite" width="50" />
        <br>
        <span>Sqlite</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Jest logo" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" title="Jest" width="50" />
        <br>
        <span>Jest</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Celebrate logo" src="https://github.com/arb/celebrate/raw/master/images/logo.svg?sanitize=1" title="Celebrate" width="50" />
        <br>
        <span>Celebrate</span>
      </td>
    </tr>
  </tbody>
</table>

<h3>🐸 Mobile</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="JavaScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" width="50" />
        <br>
        <span>JavaScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="React Native logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" title="React Native" width="50" />
        <br>
        <span>React Native</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Expo logo" src="https://logos-download.com/wp-content/uploads/2021/01/Expo_Logo-420x372.png" title="Expo" width="50" />
        <br>
        <span>Expo</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Axios logo" src="https://avatars.githubusercontent.com/u/32372333?v=4&s=400" title="Axios" width="50" />
        <br>
        <span>Axios</span>
      </td>
    </tr>
  </tbody>
</table>

## 🦶🏾 Proximos passos
Este projeto está sendo aperfeiçoado. Ou como o pessoal da [Rocketseat](https://www.rocketseat.com.br/) gosta de dizer, esta sendo levado para o PRÓXIMO NIVEL (next level)!
Para isso estou utilizando de conceitos importantes da vida real de um programador. Como por exemplo:
- [Gitflow](https://danielkummer.github.io/git-flow-cheatsheet/). Estou trabalhando com esse conceito para organizar os commits, branchs e criar releases versionadas com tags especificas para cada momento do projeto.
- [Trello](https://trello.com/b/hUAMVfMH/bethehero). Está publico o fluxo de trabalho que estou organizando para levar o projeto para o próximo nivel. Para isso escolhi utilziar o Trello pois consigo organizar de forma clara as tarefas e, alem de outras tantas funcionalidades, linkar as tarefas com as branchs que crio para cada tarefa.
- [Notion](https://notion.so/). Eu não vivo mais em o Notion, HAUHAUAHu. Faço todas anotações prévias nele. Possuo workspace separados e neles anoto tudo o que for pertinente ao projeto. Isso me ajuda muito a não me perder nas idéias que tenho de melhorias, ou bugs vou encontrando, links úteis e muito mais.

Logo atualizarei o README com novas funcionalidades! 

## ☝🏻 Quer participar?
Achou legal a idéia? Entra em contato comigo pelas minhas redes sociais e bora pro Next Level juntos.  

<p align="left">
<a href="https://www.linkedin.com/in/mauricioab-dev/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/mauricioab-dev/" height="30" width="40" /></a>
<a href="https://medium.com/@dev-mauricioalexandre" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="https://medium.com/@dev-mauricioalexandre" height="30" width="40" /></a>
<a href="https://discord.gg/Maurício AB#2079" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="Maurício AB#2079" height="30" width="40" /></a>
</p>