REM ajuster le fichier webpack.config.js
REM avant de lancer webpack

REM lancer webpack directement depuis une ligne de commande nécessite l'installation de webpack-cli
REM npm install -g webpack-cli

webpack > statut-webpack.txt 2> webpack-error.txt

REM NB: webpack --config ./webpack-xyz.config.js si autre config que webpack.config.js