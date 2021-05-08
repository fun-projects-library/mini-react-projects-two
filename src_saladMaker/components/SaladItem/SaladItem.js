import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import UserContext from "../../context/UserContext";
import {SaladContext} from "../SaladMaker/SaladMaker"

const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: 'lightgrey solid 1px',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
  }
});

export default function SaladItem({ image, name }) {
  const {setSalad, salad} = useContext(SaladContext)
  const {user, emojiChange} = useContext(UserContext);
  const classes = useStyles();
  const favorite = user.favorites.includes(name);
  // console.log(user.favorites)
  return(
    <div className={classes.wrapper}>
        <h3>
          {name}
        </h3>
        <span className={classes.favorite} aria-label={favorite ? 'Favorite' : 'Not Favorite'} onClick={()=>emojiChange(name)}>
          {favorite ? '😋' : '🥺'}
        </span>
        <button className={classes.add} onClick={()=>setSalad(name)}>
          <span className={classes.image} role="img" aria-label={name}>{image}</span>
        </button>
    </div>
  )
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}