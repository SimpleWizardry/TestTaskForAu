import citiesInitArray from './data/cities.json';
import Greetings from './js/components/greetings/Greetings.js'
import CityPicker from './js/components/cityPicker/CityPicker.js'
import CustomInput from './js/components/customInput/CustomInput.js'
import GreatHRComponent from './js/components/greatHRComponent/GreatHRComponent.js'
import CustomCheckbox from './js/components/customCheckbox/CustomCheckbox.js'
import SubmitButton from './js/components/submitButton/SubmitButton.js'
import React, { useState, useEffect } from 'react';
import {
    Container,
} 
from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  const [show, setShow] = useState(false);
  const [userName] = useState('Человек №3596941');
  const [target, setTarget] = useState(null);
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  const [statusCopy, setStatusCopy] = useState(status);
  const [citiesArray, setCitiesArray] = useState(false);
  const [city, setCity] = useState('');

  const [lastChanges, setLastChanges] = useState('15 мая 2012 в 14:55:17');

  const [isFormValid, setIsFormValid] = useState(false);

  const [password, setPassword] = useState(''); 
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [checkingPassword, setCheckingPassword] = useState('');
  const [checkingPasswordHasError, setCheckingPasswordHasError] = useState(false);  
  const [checkingPasswordError, setCheckingPasswordError] = useState('');
  const [isCheckingPasswordChanged,setIsCheckingPasswordChanged] = useState(false);

  const [email, setEmail] = useState('');
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isEmailChanged,setIsEmailChanged] = useState(false);

  const [approveMailing, setApproveMailing] = useState(false);

  const textInputHandler =(e) => {
    if (e.target.name === 'status-input') {
      setStatusCopy(e.target.value);
    } 
    else if (e.target.name === 'password')
    {
      setPassword(e.target.value);
    }
    else if (e.target.name === 'checking-password')
    {
      setCheckingPassword(e.target.value);
      setIsCheckingPasswordChanged(true)
    }
    else if (e.target.name === 'email')
    {
      setEmail(e.target.value);
      setIsEmailChanged(true)
    }
  }

  const toggleMailing = () => {
    setApproveMailing(!approveMailing);
  }

/*  PASSWORD VALIDATION */
  useEffect(() => {
      if (password.length < 5) {
        setPasswordError('Используйте не менее 5 символов')
        if (!password) {
          setPasswordError('Укажите пароль')
        }
      } 
      else
      {
        setPasswordHasError(false)
      }
  }, [password]);

/*  CHECKING PASSWORD VALIDATION */
  useEffect(() => {
    if(!checkingPassword && password && isCheckingPasswordChanged) {
      setCheckingPasswordHasError(true)
      setCheckingPasswordError('Повторите пароль')
    }
    else if((checkingPassword !== password) && isCheckingPasswordChanged)
    {
      setCheckingPasswordHasError(true)
      setCheckingPasswordError('Пароли не совпадают')
    } 
    else 
    {
      setCheckingPasswordHasError(false)
    }

  }, [checkingPassword, password]);

  /*  EMAIL VALIDATION */
  useEffect(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) && isEmailChanged) {
      setEmailHasError(true)
      setEmailError('Неверный E-mail')
    } else {
      setEmailHasError(false)
    }
  }, [email,isEmailChanged]);

  /*  FINAL VALIDATION */
    useEffect(() => {
      if (isCheckingPasswordChanged && password && email && !passwordHasError && !checkingPasswordHasError && !emailHasError) {
        setIsFormValid(true)
      } else {
        setIsFormValid(false)
      }
    }, [passwordHasError, checkingPasswordHasError, emailHasError, isCheckingPasswordChanged, password, email]);

  const statusClickHandler = (e) => {
    setShow(!show);
    setTarget(e.target);
    setStatusCopy(status);
  };

  const confirmNewStatus = () => {
    setStatus(statusCopy);
    setShow(false);
  }

  const closePopover = () => {
    setShow(false);
  }

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  }

  const saveChangesHandler = () => {
    let data = {
      status: status,
      city: city,
      password: password,
      email: email,
      approveMailing: approveMailing
    }
    data = JSON.stringify(data)

    var firstOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      ignorePunctuation: true
    };

    var secondOptions = {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    
    let date = new Date();
    date =  date.toLocaleString("ru", firstOptions) + ' в ' + date.toLocaleString("ru", secondOptions)
    setLastChanges(date);

    console.log(data)
  }

  const focusHandler = (e) => {
    if (e.target.name === 'password') {
      if(!password) {
        setPasswordHasError(true)
        setPasswordError('Укажите пароль')
      }
      else if (password.length < 5) {
        setPasswordHasError(true)
        setPasswordError('Используйте не менее 5 символов')
      }
    }
    else if (e.target.name === 'checking-password') {
      if(!checkingPassword && password) {
        setCheckingPasswordHasError(true)
        setCheckingPasswordError('Повторите пароль')
      }      
    }
    else if (e.target.name === 'email') {
      if(!email) {
        setEmailHasError(true)
        setEmailError('Укажите E-mail')
      } else if(emailHasError){
        return;
      } 
    }
  }


  useEffect(() => {
    let cities = citiesInitArray.filter(cityEl => cityEl.population > 50000).sort();
    let theBiggestCity = cities[0];
    let indexOfTBC = 0;
    cities.forEach((cityEl,i,cities) => {
      if (+cityEl.population >=  +theBiggestCity.population) {
        theBiggestCity = cities[i];
        indexOfTBC = i;
      }
    })
    cities.unshift(cities.splice(indexOfTBC, 1)[0]);
    setCitiesArray(cities);    
  },[citiesInitArray]);

  if (!citiesArray) {
      return <div>LOADING SCREEN</div>
  }

  return (

    <Container className='main-block' fluid>
      <Container className='form-block'>

        <Greetings 
          userName={userName} 
          show={show}
          target={target}
          status={status}
          statusCopy={statusCopy}
          clickHandler={statusClickHandler}
          inputHandler={textInputHandler}
          confirmHandler={confirmNewStatus}
          closePopover={closePopover}   
        />

        <CityPicker 
          city={city}
          citiesArray={citiesArray}
          selectHandler={cityChangeHandler}
        />

        <GreatHRComponent />

        <CustomInput
          title='Пароль'
          description='Ваш новый пароль должен содержать не менее 5 символов.'
          type='password'
          name='password'
          value={password}
          valueError={passwordError}
          valueHasError={passwordHasError}
          focusHandler={focusHandler}
          inputHandler={textInputHandler}
        />

        <CustomInput
          title='Пароль еще раз'
          description='Повторите пароль, пожалуйста, это обезопасит нас с вами на случай ошибки.'
          type='password'
          name='checking-password'
          value={checkingPassword}
          valueError={checkingPasswordError}
          valueHasError={checkingPasswordHasError}
          focusHandler={focusHandler}
          inputHandler={textInputHandler}
        />

        <GreatHRComponent />

        <CustomInput
          title='Электронная почта'
          description='Можно изменить адрес, указанный при регстрации.'
          type='email'
          name='email'
          value={email}
          valueError={emailError}
          valueHasError={emailHasError}
          focusHandler={focusHandler}
          inputHandler={textInputHandler}
        />

        <CustomCheckbox
          title='Я согласен'
          description='принимать актуальную информацию на емейл'
          value={approveMailing}
          changeHandler={toggleMailing}
        />

        <SubmitButton
          isDisabled={isFormValid}
          handleSubmit={saveChangesHandler}
          lastChanges={lastChanges}
        />

      </Container>
    </Container>
  );

}

export default App;
