<template>
  <div id="app">
    <div class="previewBox">
      <div class="title">PREVIEW TREE</div>
      <FunTree
        :trees="trees"
        :checkboxShow="options.checkboxShow"
        :checkboxAction="options.checkboxAction"
        @clickEvent="parentEvent"
      ></FunTree>
    </div>
    <div class="actionBox">
      <div class="title">Trees Data:</div>
      <textarea v-model="strTrees"></textarea>
      <div class="btnBox">
        <button type="button" @click="preview()">Preview</button>
      </div>
      <div class="title">Trees Options:</div>
      <div class="radioBox">
        <label>checkboxShow: </label>
        <input
          type="radio"
          id="checkboxShow1"
          :value="true"
          v-model="options.checkboxShow"
        />
        <label for="checkboxShow1">True</label>
        <input
          type="radio"
          id="checkboxShow0"
          :value="false"
          v-model="options.checkboxShow"
        />
        <label for="checkboxShow0">False</label>
      </div>
      <div class="radioBox">
        <label>checkboxAction: </label>
        <input
          type="radio"
          id="checkboxAction1"
          :value="true"
          v-model="options.checkboxAction"
        />
        <label for="checkboxAction1">True</label>
        <input
          type="radio"
          id="checkboxAction0"
          :value="false"
          v-model="options.checkboxAction"
        />
        <label for="checkboxAction0">False</label>
      </div>
      <div class="title">Trees Action:</div>
      <div style="color: #f00">P.S.Choose action and click preview node</div>
      <div v-for="action in actions" :key="action" class="radioBox">
        <input type="radio" :id="action" :value="action" v-model="nowAction" />
        <label :for="action">{{ action }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      trees: [
        {
          text: "Level1",
          selected: true,
        },
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
      options: {
        checkboxShow: true,
        checkboxAction: true,
      },
      actions: [
        "None",
        "addChild",
        "removeChildren",
        "removeNode",
        "checked",
        "open",
        "close",
      ],
      nowAction: "None",
    };
  },
  computed: {
    strTrees() {
      return JSON.stringify(this.trees);
    },
  },
  methods: {
    preview() {
      this.trees = JSON.parse(this.strTrees);
    },
    parentEvent(node, actions, values) {
      if (values.disabled) {
        alert("This node is disabled!");
      } else {
        switch (this.nowAction) {
          case "addChild":
            actions.addChild({ text: "New Node" });
            break;
          case "removeChildren":
            actions.removeChildren();
            break;
          case "removeNode":
            actions.removeNode();
            break;
          case "checked":
            actions.checked();
            break;
          case "open":
            actions.open();
            break;
          case "close":
            actions.close();
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>
<style>
#app {
  text-align: center;
}
.previewBox {
  display: inline-block;
  padding: 10px;
  width: 45vw;
  height: 90vh;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
}
.previewBox > .title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
}
.actionBox {
  display: inline-block;
  padding: 10px;
  width: 45vw;
  height: 90vh;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
}
.actionBox > .title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
}
.actionBox > textarea {
  width: 98%;
  height: 20%;
  resize: none;
}
.actionBox > .btnBox {
  text-align: right;
}
.btnBox > button {
  width: 80px;
  height: 30px;
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 8px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}
.radioBox {
  padding: 3px 0px;
}
</style>
