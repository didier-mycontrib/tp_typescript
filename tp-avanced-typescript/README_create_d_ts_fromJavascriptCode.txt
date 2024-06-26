https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc
=========
in javascript project,
a special tsconfig.json file like that:
{
  // Change this to match your project
  "include": ["src/**/*"],
  "compilerOptions": {
    // Tells TypeScript to read JS files, as
    // normally they are ignored as source files
    "allowJs": true,
    // Generate d.ts files
    "declaration": true,
    // This compiler run should
    // only output d.ts files
    "emitDeclarationOnly": true,
    // Types should go into this directory.
    // Removing this would place the .d.ts files
    // next to the .js files
    "outDir": "dist",
    // go to js file when using IDE functions like
    // "Go to Definition" in VSCode
    "declarationMap": true
  }
}

or a special command line with options/Args like that:
npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types
================

in a javascript class , some special comments like that:

class C {
  constructor() {
    /** @type {number | undefined} */
    this.prop = undefined;
    /** @type {number | undefined} */
    this.count;
  }
}
 
let c = new C();
c.prop = 0; // OK
c.count = "string";
Type 'string' is not assignable to type 'number'.

==============
