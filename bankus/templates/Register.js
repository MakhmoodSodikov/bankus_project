import React, {Component} from 'react';

/* Import Components */
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        message: ''
      },

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of the user */}
        <Input /> {/* Input for Age */}
        <Select /> {/* Gender Selection */}
        <CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
        <TextArea /> {/* About you */}
        <Button /> { /*Submit */ }
        <Button /> {/* Clear the form */}
      </form>
    );
  }
}

export default FormContainer;
}