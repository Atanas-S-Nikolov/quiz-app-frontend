import '@/styles/utils/Form.css';

import { Fragment } from "react";
import Input from './Input';

export default function Form(props) {
  const { fields = [], btnLabel, ...formProps } = props; 
  return (
    <form className="form" {...formProps}>
      {fields.map((field, index) => {
        const { id, label, type = 'text', placeholder } = field;
        return (
          <Fragment key={index}>
            <label htmlFor={id}>{label}</label>
            <Input type={type} id={id} name={id} placeholder={placeholder}/>
          </Fragment>
        );
      })}
      <button>{btnLabel}</button>
    </form>
  )
}
