let snakeCase = "Hola_Que_tal";
snakeCase = snakeCase.split("_");
console.log(toCamelCase(snakeCase));

function toCamelCase(arrayString) {
    let camelCase = "";
    for (const i in arrayString) {
        if (i > 0) {
            camelCase += arrayString[i].charAt(0).toUpperCase();
            camelCase += arrayString[i].slice(1);
        } else {
            camelCase += arrayString[i].toLowerCase();
        }
    }
    return camelCase;
}