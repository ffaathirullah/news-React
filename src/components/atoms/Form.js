import React from "react";

function Form(props) {
  return (
    <div>
      <form className="mt-2">
        <div className="form-group">
          <label>{props.text}</label>
          <input
            type={props.email ? "email" : props.password ? "password" : "text"}
            className="form-control"
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
          {props.email && (
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
