import { EDIT_FORMDATA } from './types/index';
export function Changeaction(Newdata){
	return{
		type:EDIT_FORMDATA,
		Newdata
	}
}
export function handleNewdata(Newdata){
	console.log(Newdata)
	return dispatch => dispatch(Changeaction(Newdata)) 
}