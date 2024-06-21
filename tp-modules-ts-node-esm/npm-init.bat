REM npm init
REM @std/esm permet de lancer des modules "es2015" (.mjs) depuis node 
REM et d'importer des modules ".mjs" dans des vieux modules ".js / cjs" 
npm install esm


REM ceci est utile que pour lancer des modules ".ts" ==> ".js" (en mode module=es2015)
REM via node -r esm main.js

REM pas besoin de tout cela pour modules ".ts" ==> ".js" (en mode module=commonjs)
REM via node main.js