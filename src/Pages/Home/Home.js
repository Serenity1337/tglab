import React, { useState } from 'react'
import classes from './Home.module.scss'
import NavbarComponent from '../../Components/Nav'
import { CarouselComponent } from '../../Components/CarouselComponent/CarouselComponent'
import {
  inputStatus,
  choiceText,
  choicesHandler,
} from './HomeRenderFunctions/Functions'

export const Home = (props) => {
  const [choice, setChoice] = useState('terms')
  const [blueLineActiveLeft, setBlueLineActiveLeft] = useState(0)
  const [profile, setProfile] = useState({})
  const [errors, setErrors] = useState({})
  const [submited, setSubmited] = useState(false)

  const profileHandler = (event) => {
    console.log(event.target)
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target)
    let errorsCopy = { ...errors }
    inputs.map((input) => {
      if (!profile[input.name]) {
        errorsCopy[input.name] = 'This field is required'
      } else {
        if (profile.email) {
          const isEmailOkay = profile.email.includes('@')
          const isEmailOkay2 = profile.email.includes('.')
          console.log(isEmailOkay2)
          console.log(isEmailOkay)
          if (!isEmailOkay) {
            errorsCopy[input.name] = 'Please include @ in your email'
          } else {
            if (!isEmailOkay2) {
              errorsCopy[input.name] = 'Please include . in your email'
            } else {
              console.log(profile.email[profile.email.length - 1])
              if (profile.email[profile.email.length - 1] === '.') {
                errorsCopy[input.name] = 'Your email format is incorrect'
              } else {
                delete errorsCopy[input.name]
              }
            }
          }
        }

        if (input.name !== 'email') {
          delete errorsCopy[input.name]
        }
      }
    })
    setErrors(errorsCopy)
    setSubmited(true)
  }

  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <div className={classes.container}>
        <h1 className={classes.formTitle}> Registration </h1>
        <form
          action=''
          className={classes.registerForm}
          onSubmit={(event) => formSubmitHandler(event)}
        >
          <div className={classes.inputContainer}>
            <div className={classes.inputWrapper}>
              <input
                type='text'
                placeholder='First name'
                name='firstName'
                onChange={profileHandler}
                className={`${
                  errors.firstName && submited ? classes.errorBorder : null
                } ${
                  !errors.firstName && submited ? classes.successBorder : null
                }`}
              />
              {inputStatus('firstName', errors, submited)}
            </div>
            {errors.firstName && submited ? (
              <span className={classes.inputErrorMessage}>
                {errors.firstName}
              </span>
            ) : null}

            <div className={classes.inputWrapper}>
              <input
                type='text'
                placeholder='Last name'
                name='lastName'
                onChange={profileHandler}
                className={`${
                  errors.lastName && submited ? classes.errorBorder : null
                } ${
                  !errors.lastName && submited ? classes.successBorder : null
                }`}
              />
              {inputStatus('lastName', errors, submited)}
            </div>
            {errors.lastName && submited ? (
              <span className={classes.inputErrorMessage}>
                {errors.lastName}
              </span>
            ) : null}

            <div className={classes.inputWrapper}>
              <input
                type='phone'
                placeholder='Phone'
                name='phone'
                onChange={profileHandler}
                className={`${
                  errors.phone && submited ? classes.errorBorder : null
                } ${!errors.phone && submited ? classes.successBorder : null}`}
              />
              {inputStatus('phone', errors, submited)}
            </div>
            {errors.phone && submited ? (
              <span className={classes.inputErrorMessage}>{errors.phone}</span>
            ) : null}

            <div className={classes.inputWrapper}>
              <input
                type='text'
                placeholder='Address'
                name='address'
                onChange={profileHandler}
                className={`${
                  errors.address && submited ? classes.errorBorder : null
                } ${
                  !errors.address && submited ? classes.successBorder : null
                }`}
              />
              {inputStatus('address', errors, submited)}
            </div>
            {errors.address && submited ? (
              <span className={classes.inputErrorMessage}>
                {errors.address}
              </span>
            ) : null}
            <div className={classes.inputWrapper}>
              <input
                type='text'
                placeholder='Email'
                onChange={profileHandler}
                name='email'
                className={`${
                  errors.email && submited ? classes.errorBorder : null
                } ${!errors.email && submited ? classes.successBorder : null}`}
              />
              {inputStatus('email', errors, submited)}
            </div>
            {errors.email && submited ? (
              <span className={classes.inputErrorMessage}>{errors.email}</span>
            ) : null}
            <div className={classes.inputWrapper}>
              <input
                type='text'
                placeholder='City'
                name='city'
                onChange={profileHandler}
                className={`${
                  errors.city && submited ? classes.errorBorder : null
                } ${!errors.city && submited ? classes.successBorder : null}`}
              />
              {inputStatus('city', errors, submited)}
            </div>
            {errors.city && submited ? (
              <span className={classes.inputErrorMessage}>{errors.city}</span>
            ) : null}
          </div>

          <div className={classes.termsFaqRules}>
            <div className={classes.choices}>
              <div
                className={`${classes.terms} ${
                  choice === 'terms' ? classes.active : null
                }`}
                onClick={(event) =>
                  choicesHandler(event, setChoice, setBlueLineActiveLeft)
                }
              >
                {' '}
                Terms and Conditions
              </div>
              <div
                className={`${classes.rules} ${
                  choice === 'rules' ? classes.active : null
                }`}
                onClick={(event) =>
                  choicesHandler(event, setChoice, setBlueLineActiveLeft)
                }
              >
                Rules
              </div>
              <div
                className={`${classes.faq} ${
                  choice === 'faq' ? classes.active : null
                }`}
                onClick={(event) =>
                  choicesHandler(event, setChoice, setBlueLineActiveLeft)
                }
              >
                FAQ
              </div>
            </div>
            <div className={classes.greyLine}>
              <div
                className={classes.blueLine}
                style={{ position: 'relative', left: `${blueLineActiveLeft}%` }}
              ></div>
            </div>
            {choiceText(choice)}
          </div>

          <div className={classes.termsFaqRulesMobile}>
            <div
              className={`${classes.terms} ${
                choice === 'terms' ? classes.active : null
              }`}
              onClick={(event) =>
                choicesHandler(event, setChoice, setBlueLineActiveLeft)
              }
            >
              {' '}
              Terms and Conditions
            </div>
            <div
              className={`${classes.rules} ${
                choice === 'rules' ? classes.active : null
              }`}
              onClick={(event) =>
                choicesHandler(event, setChoice, setBlueLineActiveLeft)
              }
            >
              Rules
            </div>
            <div
              className={`${classes.faq} ${
                choice === 'faq' ? classes.active : null
              }`}
              onClick={(event) =>
                choicesHandler(event, setChoice, setBlueLineActiveLeft)
              }
            >
              FAQ
            </div>
            {choiceText(choice)}
          </div>

          <div className={classes.agreeTerms}>
            <input type='checkbox' name='' id='' />I AGREE with the terms and
            conditions. I have read them thoroughly and agree to abide by them.
            <a href='#'>Terms of service</a>
          </div>
          <button type='submit' className={classes.registerBtn}>
            register
          </button>
        </form>
      </div>
    </div>
  )
}
