/*

Module Mountain:
-- JS didn't have a module system so we have a lot of legacy ways to import 
   modules (JS files)


- > link to ES Modules:
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/


-- > What the webpack config looks life:

// webpack
module.exports = {
  entry: './app/main.js',
  output: {
    path: '/.dist',
    filename: 'bundle.js'
  }
}









------------------------/  ES6 + Webpack ( a moodule bundler)
                Introduce Import and Export - used by the module bundler
//js1  - > exporting multiple functions:
export const add = (a,b) =>a +b
//or  - > export only one fucntion:
export default function add() {
  return a+b;
}

//js2  - if you want to use the add function:  uses detructuring
import { add } from './add';
// or
import add from './add';

------------------/ Browserify 
                 - > a "Module bundler", it runs before you put the website online.
                - > it reads through all the .JS files and syntax and bundles 
                everything into a single file
                -> outdated technology
                //js1
                module.exports = function add(a,b){
                  return a +b;
                }

                // js2
                var add = require("./add");
        

-------------/ IIFE - immediately invoked function execution
                - > doesnt pollute the global namespace
                - > but doesn't solve the order of the files. (lack of 
                  dependency resolution)
var myApp = {}
        
(function (){
  myApp.add a function(a,b) { 
    return a+b;
  }
})();
-----/ Script Tags:  
<body>
<script type="text/javascript" ser="./1.js"></script>
</body>
                - >Loading script files in the body 
                - > still have to copy and paste script file links
                - > lack of dependency resolution (if you load scripts in wrong)
                  Order then they will be asking for something in a script
                  that isn't loaded yet



---/ INLINE SCRIPT: 
<script src="bundle.js"></script>
                -> Lack of code reusability  
                -> Pollution of global namespace (all variables are global)
                -> name conflicts and memory leak