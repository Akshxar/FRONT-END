import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT-BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT-BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const collegeReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 1 };
  }
  if (action.type === 'INPUT-BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 1 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
  const [collegeState, dispatchCollege] = useReducer(collegeReducer, { value: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(false);

  // Change Handlers:
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const collegeNameChangeHandler = (event) => {
    dispatchCollege({ type: 'USER_INPUT', val: event.target.value });
  };

  // Validate Handlers:
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT-BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT-BLUR' });
  };

  const validateCollegeNameHandler = () => {
    dispatchCollege({ type: 'INPUT-BLUR' });
  };


  //UseEffect
  useEffect(() => {
    console.log("checking")
    const delayDebouncing =()=> {
      setFormIsValid(emailState.isValid && passwordState.isValid && collegeState.isValid);
    }
    return ()=> { console.log("cleaning") 
                    clearTimeout(delayDebouncing)
                }

  }, [emailState.isValid, passwordState.isValid, collegeState.isValid]);



  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, collegeState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            collegeState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeid"
            value={collegeState.value}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
