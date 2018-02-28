 app.factory("factory_object", () => {
     var object = {
         initCap(name) {
             var result = name.charAt(0).toUpperCase() + name.substr(1).toLocaleLowerCase();
             return result;
         }
     }
     return object;
 })
