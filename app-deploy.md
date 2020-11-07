

PUBLICAÇÃO DO PROJETO NO GITHUB PAGES
=====================================

Build do Projeto:
----------------
ng build --prod --base-href "https://work-dev-br.github.io/work-dev-br-web/"

Publicar o site no Github pages:
-------------------------------
ngh --branch=gh-pages

Site publicado no Github:
https://work-dev-br.github.io/work-dev-br-web/




Instalação do angular git hub pages:
-----------------------------------
npm install -g angular-cli-ghpages
ng add angular-cli-ghpages


Original output em angular.json
-------------------------------
"outputPath": "dist/work-dev-br-web",
deixar como:
"outputPath": "dist",


Deletando e recriando a branch gh-pages:
---------------------------------------
git push origin --delete gh-pages
git branch -D gh-pages
git init
git branch gh-pages
git push origin --delete gh-pages
