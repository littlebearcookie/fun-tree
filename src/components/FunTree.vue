<template>
  <div>
    <div v-for="(mytree, index) in mytrees" :key="index">
      <!-- <div class="tree-line">|</div> -->
      <div class="tree-node">
        <template v-if="mytree.node && mytree.node.length > 0">
          <div
            class="tree-button-open"
            v-show="!mytree.opened"
            @click="
              mytree.opened
                ? (mytree.opened = true)
                : $set(mytree, 'opened', true)
            "
          ></div>
          <div
            class="tree-button-close"
            v-show="mytree.opened == true"
            @click="mytree.opened = false"
          ></div>
        </template>
        <template v-else>
          <div class="tree-button-none"></div>
        </template>
        <div class="tree-content">
          <div
            :class="{
              'tree-checkBox': !mytree.selected,
              'tree-checkBox-checked': mytree.selected,
            }"
            @click="
              mytree.selected && mytree.selected == true
                ? (mytree.selected = false)
                : $set(mytree, 'selected', true)
            "
          ></div>
          <div v-if="mytree.icon" :class="[mytree.icon]"></div>
          <div v-else class="tree-icon"></div>
          <span class="tree-word" @click="click(index, 'addChild')">{{
            mytree.name
          }}</span>
        </div>
        <div v-show="mytree.opened">
          <FunTree
            v-if="mytree.node && mytree.node.length > 0"
            :trees="mytree.node"
            @childEvent="childEvent"
          ></FunTree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FunTree from "@/components/FunTree";
export default {
  name: "FunTree",
  components: { FunTree },
  props: {
    trees: {
      type: Array,
      require: true,
    },
  },
  created() {},
  computed: {
    mytrees() {
      return this.trees;
    },
  },
  data() {
    return {};
  },
  methods: {
    click(index) {
      const actions = {
        addChild: (data) => {
          if (this.mytrees[index].node) {
            this.mytrees[index].node.push(data);
          } else {
            this.$set(this.mytrees[index], "node", [data]);
          }
          actions.open();
        },
        removeChild: () => {
          this.mytrees[index].node = [];
        },
        removeNode: () => {
          this.mytrees.splice(index, 1);
        },
        checked: () => {
          if (
            this.mytrees[index].selected &&
            this.mytrees[index].selected == true
          )
            this.mytrees[index].selected = false;
          else this.$set(this.mytrees[index], "selected", true);
        },
        open: () => {
          if (this.mytrees[index].opened) this.mytrees[index].opened = true;
          else this.$set(this.mytrees[index], "opened", true);
        },
        close: () => {
          this.mytrees[index].opened = false;
        },
      };
      this.$emit("childEvent", this, actions, this.mytrees[index]);
    },
    childEvent(component, methods, values) {
      this.$emit("childEvent", component, methods, values);
    },
    // click(index, action) {
    // const actions = this.actions(index);
    // switch (action) {
    //   case "addChild":
    //     actions.addChild();
    //     break;
    //   case "removeChild":
    //     actions.removeChild();
    //     break;
    //   case "removeNode":
    //     actions.removeNode();
    //     break;
    //   case "checked":
    //     actions.checked();
    //     break;
    //   case "open":
    //     actions.open();
    //     break;
    //   case "close":
    //     actions.close();
    //     break;
    //   default:
    //     break;
    // }
    // },
    // actions(index) {
    //   const actions = {
    //     addChild: () => {
    //       if (this.mytrees[index].node) {
    //         this.mytrees[index].node.push({ name: "node" });
    //       } else {
    //         this.$set(this.mytrees[index], "node", [{ name: "node" }]);
    //       }
    //       actions.open();
    //     },
    //     removeChild: () => {
    //       this.mytrees[index].node = [];
    //     },
    //     removeNode: () => {
    //       this.mytrees.splice(index, 1);
    //     },
    //     checked: () => {
    //       if (
    //         this.mytrees[index].selected &&
    //         this.mytrees[index].selected == true
    //       )
    //         this.mytrees[index].selected = false;
    //       else this.$set(this.mytrees[index], "selected", true);
    //     },
    //     open: () => {
    //       if (this.mytrees[index].opened) this.mytrees[index].opened = true;
    //       else this.$set(this.mytrees[index], "opened", true);
    //     },
    //     close: () => {
    //       this.mytrees[index].opened = false;
    //     },
    //   };
    //   return actions;
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-line {
  width: 15px;
  height: 15px;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}
.tree-node {
  margin-left: 23px;
  display: inline-block;
}
.tree-content {
  display: inline-block;
}
.tree-content:hover {
  background: #f0f0f0;
  cursor: pointer;
}
.tree-checkBox {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
}
.tree-checkBox:hover {
  background: #d0d0d0;
}
.tree-checkBox-checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
  background-image: url("../assets/checked.svg");
  background-size: 100% 100%;
}
.tree-icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("../assets/folder.svg");
  background-size: 100% 100%;
}
.tree-word {
  font-size: 16px;
}
.tree-button-open {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 2px;
  background-image: url("../assets/add.svg");
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.tree-button-close {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 2px;
  background-image: url("../assets/less.svg");
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.tree-button-none {
  display: inline-block;
  width: 17px;
  height: 17px;
}
</style>
