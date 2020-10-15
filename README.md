# **fun-tree**

A folder tree project by vue 

**Document**  [English](./README.md)  / [中文](./README-TW.md) 
  
**DEMO** [Live Demo](https://littlebearcookie.github.io/fun-tree/)

## NPM
`npm install --save fun-tree`

## Import
>./main.js
```js
import FunTree from 'fun-tree/dist/fun-tree.js'
import 'fun-tree/dist/fun-tree.css' // Optional

Vue.use(FunTree)
```
>ES6

```js
import FunTree from 'fun-tree/dist/fun-tree.js'
import 'fun-tree/dist/fun-tree.css' // Optional

components: {
  FunTree: FunTree,
},
```
**If you want to customer css, you can not import _fun-tree.css_**
## Usage
Add a component inside your template  
**HTML**
```html
<FunTree :trees="yourTreeData"
         @clickEvent="myEvent()">
</FunTree>
```
**Javascript**
```js
export default {
  name: "App",
    data() {
      return {
        trees: [
          { text: "Level1", selected: true },
          {
            text: "Level2",
            opened: true,
            children: [
              { text: "Level2-1", disabled: true },
              { text: "Level2-2", icon: "node-icon-music", selected: true },
              { text: "Level2-3", icon: "node-icon-word" },
            ],
          },
          {
            text: "Level3",
            opened: false,
            children: [
              { text: "Level3-1" },
              { text: "Level3-2", icon: "node-icon-excel" },
              { text: "Level3-3", icon: "node-icon-ppt", selected: true },
            ],
          },
        ],
      };
    },
    methods: {
      myEvent(node, actions, values) {
        console.log(node); // current node vue component
        console.log(actions); // do actions with current node
        console.log(values); // current node values  
      },
    }
}
```
## Options

Name            | Type     | Default     | Required | Description
----------------|--------- |-------------|----------|--------------
trees           | Array    | [ ]         | yes      | trees data
clickEvent      | Function | undefined   | no       | tree's node click event
checkboxShow    | Boolean  | true        | no       | set it show checkbox
checkboxAction  | Boolean  | true        | no       | set it checkbox action

## Event
>**@clickEvent(node, actions, values)**  
>>**node** : current node vue component  
>>**actions** : do actions with current node  
>>**values** : current node values  

## Methods in actions

Method         | Params             | Description
---------------|------------------  |-----------------------
addChild       | (object) nodeData  | add child with this node
removeChildren |                    | remove this node's children
removeNode     |                    | remove this node
checked        |                    | set this node's selected true or false
open           |                    | set this node's opened = true
close          |                    | set this node's opened = false

## Node data

Name            | Type     | Default     | Required | Description
----------------|--------- |-------------|----------|--------------
text            | String   | New Node    | yes      | set node show text
icon            | String   |             | no       | icon class name
opened          | Boolean  | false       | no       | set node opened
selected        | Boolean  | false       | no       | set node selected
disabled        | Boolean  | false       | no       | set node disabled
children        | Array    | false       | no       | set node children

## Default icon class

Image                                                                 | Class Name     
:--------------------------------------------------------------------:|------------
<img src="./src/assets/folder-closed.svg" width="20" height="20">     | node-icon-closed
<img src="./src/assets/folder-opened.svg" width="20" height="20">     | node-icon-open
<img src="./src/assets/folder-disabled.svg" width="20" height="20">   | node-icon-disabled
<img src="./src/assets/not.svg" width="20" height="20">               | node-icon-not
<img src="./src/assets/danger.svg" width="20" height="20">            | node-icon-danger
<img src="./src/assets/image.svg" width="20" height="20">             | node-icon-image
<img src="./src/assets/music.svg" width="20" height="20">             | node-icon-music
<img src="./src/assets/word.svg" width="20" height="20">              | node-icon-word
<img src="./src/assets/excel.svg" width="20" height="20">             | node-icon-excel
<img src="./src/assets/ppt.svg" width="20" height="20">               | node-icon-ppt

## Customer CSS Class 

Class Name            | Description
----------------------|----------------------------------------
tree-node             | Node  
tree-content          | Node content (checkbox, icon, text).
tree-content:hover    | Node content hover
tree-button-unfold    | Node unfold button.
tree-button-fold      | Node fold button.
tree-button-none      | Node button none.
tree-checkbox         | Node checkbox default.
tree-checkbox:hover   | Node checkbox hover.
tree-checkbox-checked | Node checkbox checked.
tree-word             | Node word.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).