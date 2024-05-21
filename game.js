"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
#;
const inquirer_1 = __importDefault(require("inquirer"));
const Computer_number = Math.floor(Math.random() * 10 + 1);
const result = await inquirer_1.default.prompt([
    {
        name: "guessing_game",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
// Condition
if (result.guessing_game === Computer_number) {
    console.log("congratulation! you guess a right number");
}
else {
    console.log("wrong number,try Again");
}
