<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "../../stores/board";

const router = useRouter();
const route = useRoute();

const boardId = route.query.id;

const board = useBoardStore();
board.getItem(boardId);

const goBoardList = () => {
  router.push({name: 'boardlist'});
}
</script>

<template>
<div class="container p-2">

  <div>{{ board.item.title }}</div>
  <hr />
  <div>{{ board.item.contents }}</div>
  <hr />

  <button type="button" class="btn btn-primary mx-1" @click="goBoardList">목록</button>

</div>
</template>