import React from 'react'
import moment from 'moment-timezone';

export default function MomentExample() {
    const momentDate = moment();
    const newMomentDate = momentDate.add(1,"week");
    const clonenewMomentDate = newMomentDate.clone().add(1,'week');
  return (
    <div>
      <div>Moment Example</div>
      <div>Immutable Check</div>
        <div>
          {momentDate.format()}
          <br></br>
          {newMomentDate.format()}
          <br/>
          {clonenewMomentDate.format()}
          <br/>
        </div>
        <div>Summer Time</div>
          <div>
            2018 3월 10일 13시에 하루 더하기 
            <br/>
            {moment.tz("2018-03-10 13:00:00","America/New_York").add(1,"day").format()}
          </div>
          <div>
          2018 3월 10일 13시에 24시간 더하기
          <br></br>
          {moment.tz("2018-03-10 13:00:00","America/New_York").add(24,"hour").format()}
          </div>
          <div>Leap Year</div>
          2017년 1월 1일에 365일 빼기 
          <div>
            {moment("2017-01-01 13:00:00").subtract(365,"day").format("YYYY년 M월 D일")}
          </div>
          2017년 1월 1일에서 1년 빼기 
          <div>
            {moment("2017-01-01 13:00:00").subtract(1,"year").format("")}
          </div>
    </div>
  )
}
