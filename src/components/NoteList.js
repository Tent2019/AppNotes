import React from 'react'
import {connect} from 'react-redux'
import {removeNote, showActive, showInactive} from '../redux/actions/actions'
import './NoteList.css'
import 'antd/dist/antd.css';
import { Icon, Button } from 'antd';

class NotesList extends React.Component {

  state = {
    searchCatagory: '',
    searchTitile: '',
    searchContent: ''
  }

  handleSearchCatagory = (e) => {
    this.setState({ searchCatagory: e.target.value })
  }

  handleSearchTitle = (e) => {
    this.setState({ searchTitile: e.target.value })
  }

  handleSearchContent = (e) => {
    this.setState({ searchContent: e.target.value })
  }

  handleRemove = (noteId) => () => {
    this.props.removeNote(noteId)
  }
  
  render() {    

    let visibility = this.props.visibility    
    let searchCatagory = this.state.searchCatagory       
    let searchTitle = this.state.searchTitile
    let searchContent = this.state.searchContent
    
    let notes = this.props.notes.filter(note => note.status === visibility)   
    notes = searchCatagory !== '' ? 
              notes.filter(note => note.catagory === searchCatagory) : 
              notes    
    notes = searchTitle !== '' ?
              notes.filter(note => note.title.includes(searchTitle)) :
              notes
    notes = searchContent !== '' ?
              notes.filter(note => note.content.includes(searchContent)) :
              notes
    
    return (
      <div>                

        <div style={{display:'grid', gridTemplateColumns: '170px auto', 
            backgroundColor:'#333333', padding:'5px 0px'}}> 
            <span style={{padding:' 0px 20px', color:'white'}}>Search by catagory:</span>
            <select style={{width:'150px'}} onChange={this.handleSearchCatagory}>
              <option value=''></option>
              <option value='General'>General</option>
              <option value='Official'>Official</option>
              <option value='ETC'>ETC</option>
            </select>
        </div>

        <div style={{display:'grid', gridTemplateColumns: '170px auto', 
            backgroundColor:'#666666', paddingBottom:'4px'}}> 
            <span style={{padding:'0px 20px', color:'white'}}>Search by title:</span>
            <input style={{height: '25px', width: '150px'}} onChange={this.handleSearchTitle}/>
        </div>

        <div style={{display:'grid', gridTemplateColumns: '170px auto', 
            backgroundColor:'#999999', paddingBottom:'4px'}}> 
            <span style={{padding:'0px 20px', color:'white'}}>Search by content:</span>
            <input style={{height: '25px', width: '150px'}} onChange={this.handleSearchContent}/>
        </div>

        {/* {this.props.notes.map(note =>  */}
        {notes.map(note =>  
          <div key={note.id} className='note'>
            <div style={{border:'0px solid', width: '90%'}}>
              <div style={{borderBottom:'1px solid', borderColor:'silver'}}>
                <b>{note.title}</b>
                <span style={{float:'right'}}>{note.catagory}</span>                
              </div>
              <div>
                <span>{note.content}</span>
                <div style={{height:'20px', paddingTop:'5px', fontSize:'10px',
                            display:'flex', justifyContent:'space-between'}}>
                  <span>{note.date}</span>                
                  <span style={{color:'red'}}>due date: {note.duedate}</span>
                </div>                
              </div>
            </div>
            <Icon type="delete" style={{fontSize:'20px', paddingTop:'20px'}}
              onClick={this.handleRemove(note.id)}/>
          </div>
        )}     

        <div style={{border:'0px solid', borderTop:'1px solid'}}>
          <Button style={{width:'50%', borderRadius: '0px 0px 0px 15px'}}
                  onClick={()=>this.props.showActive()}
            >Show Active Notes</Button>
          <Button style={{width:'50%', borderRadius: '0px 0px 15px 0px'}}
                  onClick={()=>this.props.showInactive()}
            >Show Deleted Notes</Button>
        </div>        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    notes: state.notes,
    visibility: state.visibility
  }
}

const mapDispatchToProps = {
  removeNote: removeNote,
  showActive: showActive,
  showInactive: showInactive
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
