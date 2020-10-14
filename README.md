# **fun-tree**

> A folder tree project by vue

## NPM
`npm install --save fun-tree`

## Import
Import fun-tree package.  
```js
import FunTree from 'fun-tree/dist/fun-tree.js'
import 'fun-tree/dist/fun-tree.css' // Optional

Vue.use(FunTree)
```
**If you want to customer css, you can not import fun-tree.css.**
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
          { text: "Level1" },
          { text: "Level2", 
            children: [
              { text: "Level2-1" },
              { text: "Level2-2" }
            ] 
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
Property        | Type     | Default     | Required | Description
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

Image                                                  | Class Name     
-------------------------------------------------------|------------
<img src="./src/assets/folder.svg" style="width:20px"> | node-icon

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).