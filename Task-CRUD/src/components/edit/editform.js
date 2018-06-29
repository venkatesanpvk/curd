import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { handleNewdata } from '../../action/editaction';
import './editForm.css';

class Edit extends Component{
	constructor(props){
			super(props);
			this.state={
				newname:"",
				newphone:"",
				newemail:"",
				newpurpose:"",
				time:""
			}
			this.handleEdit=this.handleEdit.bind(this);
			this.sendData=this.sendData.bind(this);
		}
		handleEdit(e){
			this.setState({
				[e.target.name]:e.target.value
			})
		}
		sendData(e){
			e.preventDefault();
			const{newname,newphone,time,newemail,newpurpose}=this.state;
			const Newdata={newname,newphone,time,newemail,newpurpose};
			console.log(time)
			this.props.handleNewdata(Newdata);			
			this.props.stateChange();
		}
		componentWillMount(){
			const {name, email, phone, purpose, time } = this.props.data;
			console.log(time)
			this.setState({
				newname:name,
				newphone:phone,
				newemail:email,
				newpurpose:purpose,
				time: time
			})
		}
	render(){
		return(
			<div className="Edit-wrapper">
				<form onSubmit={this.sendData.bind(this)} className="Edit-Form">
					<label><input type="text" name="newname" placeholder="Name" value={this.state.newname} onChange={this.handleEdit}></input></label><br/>
					<label><input type="text" name="newphone"  placeholder="Phone" value={this.state.newphone} onChange={this.handleEdit}></input></label><br/>
					<label><input type="text" name="newemail" placeholder="Email" value={this.state.newemail} onChange={this.handleEdit}></input></label><br/>
					<label><textarea rows="3" col="25" name="newpurpose" placeholder="Purpose" value={this.state.newpurpose} onChange={this.handleEdit}></textarea></label>
					<button>UPDATE</button>
				</form>
			</div>
			)
	}
}
export default connect(null,{handleNewdata})(Edit);