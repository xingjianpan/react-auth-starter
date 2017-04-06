import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { clearAuthError,signinUser } from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js
class Signin extends Component {
  componentWillMount() {
    this.props.clearAuthError();
    const { isAuthenticated, replace, redirect } = this.props;
    if (isAuthenticated) {
      replace(redirect);
    }
  }

  componentWillReceiveProps(nextProps) {

    const { isAuthenticated, replace, redirect } = nextProps;
    const { isAuthenticated: wasAuthenticated } = this.props;
    if (!wasAuthenticated && isAuthenticated) {
      replace(redirect);
    }
  }


  renderAlert() {
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Opps!</strong>
          {this.props.errorMessage}
        </div>
        )
    }
  }

  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password})
    // need to do something to log user in
  }
  render() {
    const {handleSubmit } = this.props

    return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <h4>User Login</h4>
      <fieldset className="form-group">
        <Field label="email" name="email" component={renderField} type="email" className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <Field label="password" name="password" component={renderField}  type="password"  className="form-control" />
      </fieldset>
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
    )
  }
}


// export default reduxForm({
//   form: 'signin',
// })(Signin)

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
    redirect: ownProps.location.query.redirect || '/',
  };
};

Signin = reduxForm({form:'signin'})(Signin)
// connect Signinform with actions using 'connect'
Signin = connect(mapStateToProps, { clearAuthError, signinUser, replace: routerActions.replace })(Signin)

// do not forget to export default
export default Signin
