import classes from '../Home.module.scss'

export const choicesHandler = (event, setChoice, setBlueLineActiveLeft) => {
  const obj = {
    'Terms and Conditions': 'terms',

    Rules: 'rules',

    FAQ: 'faq',
  }
  setChoice(obj[event.currentTarget.innerText])
  if (event.currentTarget.innerText === 'Rules') {
    setBlueLineActiveLeft(33)
  }
  if (event.currentTarget.innerText === 'FAQ') {
    setBlueLineActiveLeft(66)
  }
  if (event.currentTarget.innerText === 'Terms and Conditions') {
    setBlueLineActiveLeft(0)
  }
}
export const choiceText = (choice) => {
  if (choice === 'faq') {
    return (
      <div className={classes.choiceText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        accusamus aperiam odio voluptas nesciunt fugiat natus! Accusamus nemo
        itaque ipsam?
      </div>
    )
  }
  if (choice === 'terms') {
    return (
      <div className={classes.choiceText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
        officia nisi similique excepturi velit eveniet? Soluta suscipit ipsum
        at?
      </div>
    )
  }
  if (choice === 'rules') {
    return (
      <div className={classes.choiceText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        nesciunt itaque animi voluptates ab placeat autem facilis libero. Maxime
        aliquid at nemo ea molestias eos. Porro, praesentium. Iusto, laboriosam
        deserunt.
      </div>
    )
  }
}
export const inputStatus = (inputType, errors, submited) => {
  if (!errors[inputType] && submited) {
    return <div className={classes.inputStatusSuccess}>L</div>
  }
  if (errors[inputType] && submited) {
    return (
      <div className={classes.inputStatusContainer}>
        <div className={classes.inputStatusFail}>x</div>
      </div>
    )
  }
}
