Bien que possible la version src_version_require_common_js est tr�s d�conseill�e (pas normalis�e , �loign�e du style typsescript)
Les require("...") ne devrait �tre utilis� que pour q'un fichier ".js" puisse importer des �lements d'un fichier ".ts" transform� en ".js"
----
Entre deux fichiers ".ts" il faut utilser la syntaxe import { ... } from ....