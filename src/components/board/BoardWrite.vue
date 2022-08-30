<script setup>
import { useRouter } from 'vue-router';
import { useBoardStore } from '../../stores/board';

const board = useBoardStore();

const router = useRouter();

const saveBoard = () => {
  board.saveBoard();
}

const goBoardList = () => {
  router.push({name: 'boardlist'});    
}

board.resetItem();

</script>

<template>
<div class="container p-2">

<div class="mb-3">
  <label for="title" class="form-label">제목</label>
  <input type="text" class="form-control is-valid" id="title" v-model="board.item.title">
  <div class="invalid-feedback"></div>
</div>
<div class="mb-3">
  <label for="contents" class="form-label">내용</label>
  <textarea class="form-control is-valid" id="contents" rows="3" v-model="board.item.contents"></textarea>
  <div class="invalid-feedback"></div>
</div>

<button type="button" class="btn btn-primary mx-1" @click="saveBoard()">저장</button>
<button type="button" class="btn btn-primary mx-1" @click="goBoardList">목록</button>
</div>
</template>