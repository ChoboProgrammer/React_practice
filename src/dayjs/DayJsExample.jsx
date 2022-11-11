import React,{useState,useRef} from 'react'
import moment from 'moment-timezone';
import dayjs from "dayjs";

export default function DayJsExample() {
    const birthDayRef = useRef(null);
    const [day,setDay] = useState("");
    const handleBirthDayChange = (event) =>{
      setDay(dayjs(event.target.value,"YYYY-MM-DD").format("dddd"))
    }
    const dayjsDate = dayjs();
    const newDayjstDate = dayjsDate.add(1,"week");
    const clonenewDayjsDate = newDayjstDate.clone().add(1,'week');
  return (
    <div>
      <div>DayJS Example</div>
      <div>Immutable Check</div>
        <div>
          {dayjsDate.format()}
          <br></br>
          {newDayjstDate.format()}
          <br/>
          {clonenewDayjsDate.format()}
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
            {dayjs("2017-01-01 13:00:00").subtract(365,"day").format("YYYY년 M월 D일")}
          </div>
          2017년 1월 1일에서 1년 빼기 
          <div>
            {dayjs("2017-01-01 13:00:00").subtract(1,"year").format("YYYY년 M월 D일")}
          </div>
          <div> 내 생일 
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}></input>
            <div>무슨 요일이었을까?</div>
            <div>{day}</div>
          </div>
    </div>
  )
}
