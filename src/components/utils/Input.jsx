import '@/styles/utils/Input.css';

import { useEffect, useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Input(props) {
  const isInitialTypePassword = props.type === 'password';
  const [isTypePassword, setIsTypePassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(faEyeSlash);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.type === 'password') {
      setIsTypePassword(true);
    }
  }, [])
  
  function handlePasswordIconClick(event) {
    event.preventDefault();
    if (isTypePassword) {
      setPasswordIcon(faEye);
      inputRef.current.type = 'text';
    } else {
      setPasswordIcon(faEyeSlash);
      inputRef.current.type = 'password';
    }
    setIsTypePassword(prev => !prev);
  }

  return (
    <div className="input_box" tabIndex={0}>
      <input className="input" tabIndex={1} ref={inputRef} {...props}/>
      {isInitialTypePassword ? <FontAwesomeIcon className='icon' icon={passwordIcon} onClick={handlePasswordIconClick}/> : null}
    </div>
  )
}
