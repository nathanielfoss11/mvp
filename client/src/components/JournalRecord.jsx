import React from 'react';
import ReactDOM from 'react-dom'
import ViewJournalEntry from './ViewJournalEntry.jsx'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

class JournalRecord extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.entry)
    this.state = {
      entryId: props.entry.entry_id,
      userId: props.entry.user_id,
      username: props.entry.username,
      hasMedication: props.entry.hasMedication,
      mood: props.entry.mood,
      hoursOfSleep: props.entry.hours_of_sleep,
      activity1: props.entry.activity1,
      activity2: props.entry.activity2,
      activity2: props.entry.activity3,
      symptom1: props.entry.symptom1,
      symptom2: props.entry.symptom2,
      symptom3: props.entry.symptom3,
      tookMedication: props.entry.took_medication,
      notes: props.entry.notes,
      entryDate: props.entry.entry_date,
      viewEntry: false,
      readMore: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleViewEntry = this.handleViewEntry.bind(this)
    this.handleReadMore = this.handleReadMore.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({viewEntry: true})
    this.handleViewEntry()
  }

  handleViewEntry() {
    ReactDOM.render(<ViewJournalEntry user={this.state} />, document.getElementById('modal'))
  }

  handleReadMore() {
    if(this.state.readMore === false) {
      this.setState({readMore: true})
    } else {
      this.setState({readMore: false})
    }
  }

  render() {
    let viewMore;
    if(this.state.viewEntry === true) {
      <Row>
        <Button></Button>
      </Row>
    }

    let date = '';
    let shortDate = this.state.entryDate.slice(0, 10)
    let splitDate = shortDate.split('-');
    console.log(splitDate)
    if(splitDate[1] === '01') {
      date = `January ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '02') {
      date = `February ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '03') {
      date = `March ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '04') {
      date = `April ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '05') {
      date = `May ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '06') {
      date = `June ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '07') {
      date = `July ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '08') {
      date = `August ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '09') {
      date = `September ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '10') {
      date = `October ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '11') {
      date = `November ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '12') {
      date = `December ${splitDate[2]}, ${splitDate[0]}`
    }

    console.log(date)



    let mood;
    if(this.state.mood === 1) {
      mood = <img src='https://i.ibb.co/F0rqT9T/one.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 2) {
      mood = <img src='https://i.ibb.co/hWjCmDD/two.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 3) {
      mood = <img src='https://i.ibb.co/wcmnkL3/three.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 4) {
      mood = <img src='https://i.ibb.co/5krKP82/four.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 5) {
      mood = <img src='https://i.ibb.co/pW74MGg/five.png' width='45px' id='moodOnRecord'/>
    } else {
      mood = <p>-</p>
    }

    let notes;
    if(this.state.notes.length > 50 && this.state.readMore === false) {
      notes = this.state.notes.slice(0, 50);
      notes += '...'
    } else {
      notes = this.state.notes
    }

    return(
      <Row id='journalRecord'>
        <Col xl={2}>
          <p id='dateRecord'>{date}</p>
        </Col>
        <Col xl={1}>
          {mood}
        </Col>
        <Col xl={1}>
          <p id='dateRecord'>{this.state.hoursOfSleep} hours</p>
        </Col>
        <Col>
          <p id='dateRecord' >{notes}<a onClick={this.handleReadMore}>Read More</a></p>
        </Col>
        <Col xl={2}>
        <Button onClick={this.handleClick} id='viewEntry'>View Entry</Button>
        </Col>
     </Row>
    )
  } 
}

export default JournalRecord