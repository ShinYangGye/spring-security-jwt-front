import axiosBase from "./axiosBase"
import axiosInterceptor from './axiosInterceptor';

const getBoardList = async (page) => await axiosBase.get(`/board/freeboards?page=${page}`);

const saveBoard = async (board) => await axiosInterceptor.post('/board/freeboard', board);

const getBoard = async (id) => await axiosInterceptor.get(`/board/freeboards/${id}`);

export {
	getBoardList,
	saveBoard,
	getBoard,
}