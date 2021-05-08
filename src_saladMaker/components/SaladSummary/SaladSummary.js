import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import {SaladContext} from "../SaladMaker/SaladMaker"

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25,
  }
});

export default function SaladSummary() {
  const {salad} = useContext(SaladContext)
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {salad.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}