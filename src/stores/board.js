import router from '../router';
import { defineStore } from 'pinia'
import { getBoardList, getBoard, saveBoard } from '../api/board';
import { getErrors, resetErrors } from '../util/httpErrors';

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    item: {
      category: '',
      title: '',
      contents: '',
    },
    items: [],
    required: [
      {fieldId: 'title', required: true},
      {fieldId: 'contents', required: true},
    ],
    arrPage: [],
  }),
  getters: {},
  actions: {
    async getItems(page) {
      
      try {
        this.arrPage = [];

        const res = await getBoardList(page);
        console.log(res);

        this.items = res.data;

        console.log('startPage : ', this.items.startPage);
        console.log('endPage : ', this.items.endPage);

        
        for (let i = this.items.startPage; i<this.items.endPage+1; i++) {
          this.arrPage.push(i);
        }

        console.log('arrPage : ' +  this.arrPage);

      } catch (error) {
        console.log(error);
      }

    },

    async getItem(id) {
      try {
        const res = await getBoard(id);
        this.item.title = res.data.title;
        this.item.contents = res.data.contents;
      } catch (error) {
        console.log(error);
				getErrors(error, this.required);		
      }
    },

    async saveBoard() {

      // resetErrors(this.requiredBoard);
      try {

        this.item.category = 'free';

        const res = await saveBoard(this.item);
        console.log(res);

        this.item = res.data;
        router.push({name: 'boardlist'});

      } catch (error) {
        console.log(error);
				getErrors(error, this.required);		
      }

    },

    resetItem() {
      this.item.category = '';
      this.item.title = '';
      this.item.contents = '';
    }
  }
})
