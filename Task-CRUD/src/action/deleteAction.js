import { DELETE_FORMDATA } from './types/index';

export function DeleteAction(del){
	return{
		type:DELETE_FORMDATA,
		del
	}
}
export function handleDelete(res){
	console.log(res);
	return dispatch => dispatch(DeleteAction(res));
}