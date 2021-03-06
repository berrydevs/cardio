import styles from '../Button/button.module.scss'

function Button({ children, className, ...rest }) {
  let buttonClassName = styles.button

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`
  }
  return (<button className={buttonClassName} {...rest}>{children}</button>)
}

export default Button
