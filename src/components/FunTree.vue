<template>
  <div>
    <div v-for="(mytree, index) in mytrees" :key="index">
      <div class="tree-node">
        <template v-if="mytree.children && mytree.children.length > 0">
          <div
            class="tree-button-unfold"
            v-show="!mytree.opened"
            @click="
              mytree.opened
                ? (mytree.opened = true)
                : $set(mytree, 'opened', true)
            "
          ></div>
          <div
            class="tree-button-fold"
            v-show="mytree.opened == true"
            @click="mytree.opened = false"
          ></div>
        </template>
        <template v-else>
          <div class="tree-button-none"></div>
        </template>
        <div class="tree-content" @click="click(index)">
          <!-- Checkbox -->
          <template v-if="checkboxShow && checkboxAction && !mytree.disabled">
            <div
              :class="{
                'tree-checkbox': true,
                'tree-checkbox-checked': mytree.selected,
              }"
              @click="
                mytree.selected && mytree.selected == true
                  ? (mytree.selected = false)
                  : $set(mytree, 'selected', true)
              "
            ></div>
          </template>
          <template v-else-if="checkboxShow">
            <div
              :class="{
                'tree-checkbox': true,
                'tree-checkbox-checked': mytree.selected,
              }"
            ></div>
          </template>
          <!-- Icon -->
          <div v-if="mytree.icon" :class="[mytree.icon]"></div>
          <div v-else-if="mytree.disabled" class="node-icon-disabled"></div>
          <div v-else-if="mytree.opened" class="node-icon-opened"></div>
          <div v-else class="node-icon-closed"></div>
          <span class="tree-word">{{ mytree.text }}</span>
        </div>
        <div v-show="mytree.opened">
          <FunTree
            v-if="mytree.children && mytree.children.length > 0"
            :trees="mytree.children"
            :checkboxShow="checkboxShow"
            :checkboxAction="checkboxAction"
            @clickEvent="clickEvent"
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
      required: true,
    },
    checkboxShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    checkboxAction: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
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
          if (this.mytrees[index].children) {
            this.mytrees[index].children.push(data);
          } else {
            this.$set(this.mytrees[index], "children", [data]);
          }
        },
        removeChildren: () => {
          this.mytrees[index].children = [];
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
      this.$emit("clickEvent", this, actions, this.mytrees[index]);
    },
    clickEvent(component, methods, values) {
      this.$emit("clickEvent", component, methods, values);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-node {
  margin-left: 23px;
}
.tree-content {
  display: inline-block;
}
.tree-content:hover {
  background: #f0f0f0;
  cursor: pointer;
}
.tree-button-unfold {
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
.tree-button-fold {
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
/******** Checkbox ********/
.tree-checkbox {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
}
.tree-checkbox:hover {
  background: #d0d0d0;
}
.tree-checkbox-checked {
  background-image: url("../assets/checked.svg");
  background-size: 100% 100%;
}
/**** Word *****/
.tree-word {
  font-size: 16px;
}
/******** Icon ********/
.node-icon-closed {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/folder-closed.svg");
}
.node-icon-opened {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/folder-opened.svg");
}
.node-icon-disabled {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/folder-disabled.svg");
}
.node-icon-not {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/not.svg");
}
.node-icon-danger {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/danger.svg");
}
.node-icon-image {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/image.svg");
}
.node-icon-music {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/music.svg");
}
.node-icon-word {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/word.svg");
}
.node-icon-excel {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/excel.svg");
}
.node-icon-ppt {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-image: url("../assets/ppt.svg");
}
</style>
