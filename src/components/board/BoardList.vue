<script setup>
import { useRouter } from "vue-router";
import { useBoardStore } from "../../stores/board";
import { getDateTime } from "../../util/dateTimeFormat"

const router = useRouter();

const board = useBoardStore();

board.resetItem();
board.getItems();

const goBoardWrite = () => {
	router.push({name: 'boardwrite'});
}

const goBoardRead = () => {
	router.push({name: 'boardread'});
}
</script>

<template>
<div class="container p-2">

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">제목</th>
      <th scope="col">등록일시</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in board.items.content" :key="index">
      <th scope="row">{{ item.id }}</th>
      <td><router-link :to="{name: 'boardread', query: {id: item.id}}">{{ item.title }}</router-link></td>
      <td>{{ getDateTime(item.regDate) }}</td>
    </tr>
  </tbody>
</table>

<nav aria-label="...">
  <ul class="pagination">

    <li class="page-item" :class="{'disabled': board.items.pageNo==0}">
      <button class="page-link"  @click="board.getItems(board.items.pageNo-1)">Prev</button>
    </li>

    <li class="page-item" v-for="(page, index) in board.arrPage" :key="index">
      <button class="page-link" :class="{'active': page==board.items.pageNo+1}"  @click="board.getItems(page-1)">{{ page }}</button>
    </li>
    
    <li class="page-item" :class="{'disabled': board.items.pageNo==board.items.endPage-1}">
      <button class="page-link"  @click="board.getItems(board.items.pageNo+1)">Prev</button>
    </li>
    
  </ul>
</nav>

<button type="button" class="btn btn-primary" @click="goBoardWrite">글쓰기</button>

</div>
</template>