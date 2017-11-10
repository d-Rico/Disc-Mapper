import React from 'react';
import AttendeeTile from './AttendeeTile';

const PairUpTile = props => {

  let time = new Date(props.time);

  let day = time.getDay();
  if (day == 0) {
    day = "Sunday";
  } else if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thursday";
  } else if (day == 5) {
    day = "Friday";
  } else if (day == 6) {
    day = "Saturday";
  }

  let month = time.getMonth();
  if (month == 0) {
    month = "Jan";
  } else if (month == 1) {
    month = "Feb";
  } else if (month == 2) {
    month = "Mar";
  } else if (month == 3) {
    month = "Apr";
  } else if (month == 4) {
    month = "May";
  } else if (month == 5) {
    month = "Jun";
  } else if (month == 6) {
    month = "Jul";
  } else if (month == 7) {
    month = "Aug";
  } else if (month == 8) {
    month = "Sep";
  } else if (month == 9) {
    month = "Oct";
  } else if (month == 10) {
    month = "Nov";
  } else if (month == 11) {
    month = "Dec";
  }

  let monthDay = time.getDate();
  let year = time.getFullYear();
  let hour = time.getHours();
  let meriDiem = "AM"
  if (hour > 12) {
    hour = hour % 12
    meriDiem = "PM"
  } else if (hour == 0) {
    hour = 12
    meriDiem = "AM"
  }

  let minutes = time.getMinutes().toString()
    if (minutes.length == 1) {
      minutes = minutes + "0"
    }


  let users = props.attendees.map( user => {
    return(
      <AttendeeTile
        key={`${props.id}-${user.id}`}
        id={user.id}
        name={user.first_name}
        playLevel={user.play_level}
      />
    )
  })

  return(
    <div className="small-12 medium-12 large-12 columns pairup-tile">
      <p className="time-head">{day}, {month} {monthDay}, {year}</p>
      <h4 className="time">{hour}:{minutes} {meriDiem}</h4>
      <p>Teeing up:
        {users}
      </p>
    </div>
  )
}

export default PairUpTile
