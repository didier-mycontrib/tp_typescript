Bien que possible la version src_version_require_common_js est très déconseillée (pas normalisée , éloignée du style typsescript)
Les require("...") ne devrait être utilisé que pour q'un fichier ".js" puisse importer des élements d'un fichier ".ts" transformé en ".js"
----
Entre deux fichiers ".ts" il faut utilser la syntaxe import { ... } from ....