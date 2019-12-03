import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE } from '../actions/actions'

export function notesReducer(notes=[], action) {  
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...notes, {
          id: action.id,
          title: action.title,
          content: action.content,
          status: action.status,
          date: action.date,
          catagory: action.catagory,
          duedate: action.duedate
        }
      ]        
      
    case REMOVE_NOTE:
      return notes.map(note => 
        note.id === action.id ?
          {...note, status: STATUS_INACTIVE} :
          note
      )

    default:
      return notes
  }  
}

