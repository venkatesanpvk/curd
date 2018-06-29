import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import { handleDelete } from '../action/deleteAction';
import Edit  from './edit/editform';
import './listStyle.css';

class List extends Component{
	constructor(props){
		super(props);
		this.state={
			condition:false
		}
		this.renderedList = this.renderedList.bind(this)
		this.Update=this.Update.bind(this)
		this.stateChange=this.stateChange.bind(this)
	}
	callDelete(id){
		console.log(id);
		this.props.handleDelete(id);
	}
	Update(t){
		this.setState({
			condition:true,
			data:t
		})
	}
	stateChange(){
		this.setState({
			condition:false,
		})
	}
	renderedList(){
		return map(this.props.members, (el, i) =>{
			return <tr key={i}>
				<td>{el.name}</td>
				<td>{el.phone}</td>
				<td>{el.email}</td>
				<td>{el.time}</td>
				<td>{el.purpose}</td>
				<td width="25%" colSpan="2"><button className="icons" onClick={this.callDelete.bind(this, el.time)}><i class="fa fa-trash" aria-hidden="true"></i></button>
					<button className="icons" id="edit-color" onClick={this.Update.bind(this,el)}><i class="fa fa-edit"></i></button></td>
			</tr>
		})
	}
	render(){
		return(
			<div className="list">
				<table>
					<thead>
						<tr>
							<th>NAME</th>
							<th>PHONE</th>
							<th>EMAIL</th>
							<th>TIME</th>
							<th>PURPOSE</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{this.renderedList()}
					</tbody>
				</table>
				 { this.state.condition && <Edit data={this.state.data} stateChange={this.stateChange}/>}
			</div>	
		);
	}
}

List.propTypes={
	members:PropTypes.array
}
export default connect(null,{ handleDelete })(List);
