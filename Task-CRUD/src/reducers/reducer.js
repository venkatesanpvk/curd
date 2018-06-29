export default(state=[], action={})=>{
	switch(action.type){
		case "FETCH_FORMDATA":
			return state.concat([action.source]);
		case "DELETE_FORMDATA":
			return state.filter((source)=>source.time !== action.del);
		case "EDIT_FORMDATA":
			return state.map((source)=>{
				if(source.time === action.Newdata.time){
					return{
						name:action.Newdata.newname,
						phone:action.Newdata.newphone,
						email:action.Newdata.newemail,
						purpose:action.Newdata.newpurpose,
						time:action.Newdata.time
					}
				}
				else return source;
			})
		default: 
			return state;
	}
}
