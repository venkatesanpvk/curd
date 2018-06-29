import React,{ Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import{ passAction } from '../action/basicAction';
import List from './list';

class Home extends Component{

		constructor(){
			super();
			this.state={
				name:"",
				phone:"",
				email:"",
				purpose:""
			}
			this.setValue=this.setValue.bind(this);
			this.checkInput=this.checkInput.bind(this);
		}
		checkInput(e){
			e.preventDefault();
			const time = new Date().toLocaleString()
			const{name,phone,email,purpose}=this.state;
			const val_email=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email);
			if(val_email===true && name.length>4 && phone.length>4 && purpose.length>0){
				const data={name,phone,email,time,purpose};
				this.props.passAction(data);
			}
			else{
				alert("Please enter valid info");
			}
		}
		setValue(e){
			this.setState({
				[e.target.name]:e.target.value
			})
		}
	render(){
			const { view }=this.props;
		return(
			<div className="homepage">
				<div className="form">
					<form onSubmit={this.checkInput}>
						<h2>VISITORS ENTRY FORM</h2>
						<label><input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.setValue}></input></label><br/>
						<label><input type="text"name="phone"  placeholder="Phone" value={this.state.phone} onChange={this.setValue}></input></label><br/>
						<label><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.setValue}></input></label><br/>
						<label><textarea rows="3" col="25" name="purpose" placeholder="Purpose" value={this.state.purpose} onChange={this.setValue}></textarea></label>
						<button>SUBMIT </button>
					</form>
				</div>				
				<List members={view} />				
			</div>
			)	
	}
}
const mapStateToProps = state => {
  return {
     view:state.source
     }
  }
export default connect(mapStateToProps,{ passAction })(Home);