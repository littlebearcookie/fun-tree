# **fun-tree**

這是一個用Vue.js開發的資料樹專案。

**Document**  [English](./README.md)  / [中文](./README-TW.md) 
  
**DEMO** [線上展示](https://littlebearcookie.github.io/fun-tree/)

## NPM
`npm install --save fun-tree`

## 輸入
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
**如果想要用自己的CSS檔案, 就不用輸入 _fun-tree.css_**

## 開始使用
新增零件到模板  
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
        console.log(node); // 當前所選節點的零件資訊
        console.log(actions); // 針對選選節點進行動作
        console.log(values); // 當前所選節點得值 
      },
    }
}
```
## 設定

名稱            | 類型      | 預設值       | 必要      | 簡介
----------------|--------- |-------------|----------|--------------
trees           | Array    | [ ]         | yes      | 輸入的數據
clickEvent      | Function | undefined   | no       | 節點的點擊事件
checkboxShow    | Boolean  | true        | no       | 設定是否顯示勾選框
checkboxAction  | Boolean  | true        | no       | 設定勾選框是否有功能

## 事件
>**@clickEvent(node, actions, values)**  
>>**node** : 當前所選節點的零件資訊  
>>**actions** : 針對選選節點進行動作  
>>**values** : 當前所選節點得值  

## actions中提供的方法

方法           | 參數                | 簡介
---------------|--------------------|-----------------------
addChild       | (object) nodeData  | 在此節點新增一個子節點
removeChildren |                    | 刪除此節點下所有子節點
removeNode     |                    | 刪除此節點
checked        |                    | 將此節點設定為勾選
open           |                    | 展開此節點
close          |                    | 關閉此節點

## 節點數據

名稱            | 類型      | 預設值       | 必要      | 簡介
----------------|--------- |-------------|----------|--------------
text            | String   | New Node    | yes      | set node show text
icon            | String   |             | no       | icon class name
opened          | Boolean  | false       | no       | set node opened
selected        | Boolean  | false       | no       | set node selected
disabled        | Boolean  | false       | no       | set node disabled
children        | Array    | false       | no       | set node children

## 預設提供的Icon class

預覽圖片                                                                | Class Name     
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

## 可客製的 CSS Class 

Class Name            | 簡介
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

## 憑證
這是根據[MIT](http://opensource.org/licenses/MIT)許可的開源軟件