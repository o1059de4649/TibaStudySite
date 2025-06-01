import { QuestionModel } from "../Model/QuestionModel";

export const ROUTES = [
  {ID:1 ,NAME: "CodeSandBox", URL:"/CodeSandBox" },
  {ID:2 ,NAME: "JavaScriptの変数【説明】", URL:"/LessonJSFieldExplore" },
  {ID:3 ,NAME: "JavaScriptの変数【実演】", URL:"/LessonJSFieldTest" },
  {ID:4 ,NAME: "JavaScriptの関数【説明】", URL:"/LessonJSFunctionExplore" },
] as Array<URLModel>

export class URLModel {
    ID?: number;
    NAME?: string;
    URL: string = "";
}

export const JSFieldQuestions = [
    { id: 1, title: "", questionMessage: ["let x = 5;","console.log(x);"], answer: "5" },
    { id: 2, title: "", questionMessage: ["const name = 'Akira';","console.log(name);"], answer: "Akira" },
    { id: 3, title: "", questionMessage: ["let y = 10;","y += 5;","console.log(y);"], answer: "15" }
  ] as QuestionModel[];