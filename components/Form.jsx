import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Form = () => {
  return (
    <StyledForm
      autoComplete='off'
      action='https://formspree.io/f/xyybkbjo'
      method='POST'>
      <TextField
        margin='dense'
        id='name'
        label='Name'
        type='text'
        name='name'
        fullWidth
        required
      />
      <TextField
        margin='dense'
        id='email'
        label='Email Address'
        type='email'
        name='email'
        fullWidth
        required
      />
      <TextField
        margin='dense'
        id='message'
        label='How can I help You'
        type='text'
        name='message'
        fullWidth
        multiline
        rows={3}
      />
      <button type='submit'>Submit</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 55rem;
  margin-top: 5rem;
  label,
  input,
  textarea {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.8rem;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.colors.blue};
  }
  .MuiInput-underline:after {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.blue};
  }
  button {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
    transition: 0.3s ease-in-out all;
    font-size: 1.8rem;
    border: none;
    border-radius: 0;
    width: 100%;
    margin-top: 3rem;
    padding: 1.8rem 4rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.black};
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    margin-top: 3rem;
  }
`;

export default Form;
