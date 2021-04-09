import * as readlineSync from "readline-sync";
import { BinarySearchTree } from "./binary-search-tree.js";
import { BinaryTreeNode } from "./binary-tree-node.js";

function main(): void {
     const bst: BinarySearchTree<number> = new BinarySearchTree();
     console.log("Взял на себя смелость и добавил в дерево значения: 7, 13, 5, -1, 2");
     bst.add(7);
     bst.add(13);
     bst.add(5);
     bst.add(-1);
     bst.add(2);
     let i: number = 0;

     while (i === 0) {
         console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
             "Выберете действие с бинарным деревом поиска:\n" +
             "1) Добавить элемент в дерево;\n2) Найти элемент в дереве;\n" +
             "3) Удалить элемент по значению;\n4) Вывести все дерево;\n5) Выход.\n" +
             "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
         const userChoice = readlineSync.question("");
         switch (userChoice) {
             case "1":
                 const insert = readlineSync.question("Key to insert = ");
                 const bol: boolean = bst.add(+insert);
                 if (!bol) {
                    console.log("Такой ключ уже есть, вставка невозможна!");
                 }
                 break;
             case "2":
                 const f = readlineSync.question("Key to find = ");
                 const temp: BinaryTreeNode<number> | undefined = bst.find(+f);
                 if (temp === undefined) {
                     console.log("Такого элемента в дереве нет");
                 } else {
                     console.log("Найдено значение " + temp.key);
                 }
                 break;
             case "3":
                 const del = readlineSync.question("Key to delete = ");
                 bst.delete(+del);
                 break;
             case "4":
                 console.log("");
                 bst.print();
                 break;
             case "5":
                  i++;
                 break;
             default:
                 console.log("Введено некорректное значение");
         }
     }
}

main();
