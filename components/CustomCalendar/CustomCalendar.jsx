import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import styles from './CustomCalendar.module.css';

const CustomCalendar = () => {
  const [ value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default CustomCalendar
