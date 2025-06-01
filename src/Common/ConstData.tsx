import { QuestionModel } from "../Model/QuestionModel";

export const ROUTES = [
  {ID:1 ,NAME: "CodeSandBox", URL:"/CodeSandBox" },
  {ID:2 ,NAME: "JavaScriptの変数【説明】", URL:"/LessonJSFieldExplore" },
  {ID:3 ,NAME: "JavaScriptの変数【実演】", URL:"/LessonJSFieldTest" },
] as Array<URLModel>

export class URLModel {
    ID?: number;
    NAME?: string;
    URL: string = "";
}

export const JSFieldQuestions = [
    { id: 1, questionMessage: ["let x = 5;","console.log(x);"], answer: "5" },
    { id: 2, questionMessage: ["const name = 'Akira';","console.log(name);"], answer: "Akira" },
    { id: 3, questionMessage: ["let y = 10;","y += 5;","console.log(y);"], answer: "15" }
  ] as QuestionModel[];