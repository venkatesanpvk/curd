import { FETCH_FORMDATA } from './types/index';

export function basicAction(source){
	return{
		type:FETCH_FORMDATA,
		source
	}
}
export function passAction(data){
	return dispatch=> dispatch(basicAction(data));
}
