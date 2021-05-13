
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangedHandler: nameInputChangedHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput( value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput( value => value.includes('@'))
  
  



  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true
  }

  if (enteredEmailIsValid) {
    formIsValid = true
  }
 

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid){
      return;
    }

    

    console.log(enteredName)
    
    resetNameInput(true);

    resetEmailInput(true);
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangedHandler} 
          value={enteredName} 
          onBlur={nameInputBlurHandler}
           />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-mail</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangedHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler} />
      </div>
      
      {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
