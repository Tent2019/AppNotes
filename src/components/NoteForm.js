import React from 'react'
import {connect} from 'react-redux'
import {addNote} from '../redux/actions/actions'
import './NoteForm.css'
import 'antd/dist/antd.css';
import { Button, DatePicker } from 'antd';
import moment from 'moment';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

class NoteForm extends React.Component {  

  state = {
    title: '',
    content: '',
    catagory: '',
    duedate: null
  }

  isAllowToSubmit = () => (
    (this.state.title === '' || this.state.content === '' 
      || this.state.catagory === '' || this.state.duedate === '' ) ?
      true : false
  )

  handleDuedate = (moment) => {    
    this.setState({duedate: moment})        
  }

  handleSelect = (e) => {
    this.setState({catagory: e.target.value})        
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })    
  }

  handleChangeContent = (e) => {
    this.setState({ content: e.target.value })    
  }  

  // ** A.Job Extra => god
  // handleChange = (key, value) => {
  //   this.setState({ [key]: value })
  // }
  
  handleAddNote = (e) => {
    e.preventDefault()   
    this.props.addNote(
      this.state.title, this.state.content, 
      this.state.catagory, this.state.duedate.format('L')
    ) 
    this.setState({title: '', content: '', catagory:'', duedate:null})    
  }

  render() {
    return (
      <form onSubmit={this.handleAddNote}>
        <h3 className='addNote'>Add a Note</h3>
        <div className='fillInFrame' style={{marginBottom:'8px'}}>
          <span style={{paddingLeft:'25px', color:'#0000cc'}}>Title:</span>
          <input type="text" name="title" 
                onChange = {this.handleChangeTitle}
                // onChange={(e) => this.handleChange('title', e.target.value)}
                value={this.state.title}/>
        </div>
        <div className='fillInFrame' style={{marginBottom:'8px'}}>
          <span style={{paddingLeft:'25px', color:'#0000cc'}}>Content: </span>
          <textarea name="content" cols="30" rows="5" 
            onChange = {this.handleChangeContent}
            // onChange={(e) => this.handleChange('content', e.target.value)}
            value={this.state.content}>
          </textarea>
        </div>      
        <div className='fillInFrame' style={{marginBottom:'8px'}}>
          <span style={{paddingLeft:'25px', color:'#0000cc'}}>Catagories: </span>
          <select 
            style={{width:'200px'}} 
            onChange = {this.handleSelect}
            // onChange={(e) => this.handleChange('catagory', e.target.value)} 
            value={this.state.catagory}
          >            
            <option value=''></option>
            <option value='General'>General</option>
            <option value='Official'>Official</option>
            <option value='ETC'>ETC</option>
          </select>
        </div>      

        <div className='fillInFrame' style={{marginBottom:'15px'}}>
          <div style={{paddingLeft:'25px', color:'#0000cc'}}>Duedate:</div>
          <DatePicker defaultValue={null} format={dateFormatList} 
            style={{width:'200px', border:'0px solid', paddingLeft:'0px'}}
            onChange={this.handleDuedate} value={this.state.duedate}
          />
        </div>

        <div className='buttonFrame'>
          <Button type="primary" htmlType='submit' disabled={this.isAllowToSubmit()}
            style={{backgroundColor:'white', border:'3px solid', 
                    color:'#0000cc', borderRadius: '10px'}}>
            Submit
          </Button>
        </div>        
      </form>
    )
  }
}

const mapDispatchToProps = {
  addNote: addNote
}

export default connect(null,mapDispatchToProps)(NoteForm)