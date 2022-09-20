import { SECRET, getPass } from "./utils";
console.log("SECRET", SECRET);

const password = getPass("djom", 30);
console.log("password", password);



