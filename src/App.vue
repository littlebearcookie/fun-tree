<template>
  <div id="app">
    <FunTree :trees="trees" @childEvent="parentEvent"></FunTree>
  </div>
</template>

<script>
import FunTree from "@/components/FunTree";

export default {
  name: "App",
  components: {
    FunTree,
  },
  data() {
    return {
      trees: [
        {
          id: "0",
          name: "Level1",
          icon: "my-icon",
        },
        { id: "1", name: "Level2", node: [{ id: "10", name: "Level3" }] },
      ],
    };
  },
  methods: {
    parentEvent(component, methods, values) {},
  },
};
</script>

<style>
.my-icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("./assets/folder.svg");
  background-size: 100% 100%;
}
</style>
