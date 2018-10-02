import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../../actions'
import { Card, CardSection, Button, Input, Spinner } from '../../helpers'
import firebase from 'firebase'

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  formContainer: {
    margin: 16
  },
  inputContainer: {
    borderWidth: 0,
    marginBottom: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

class LoginForm extends Component {
  // state = { email: '', password: '', error: '', loading: false };

  // onButtonPress() {
  //  const { email, password } = this.state;
  //  this.setState({ error: '', loading: true });

  //  firebase.auth().signInWithEmailAndPassword(email, password)
  //    .then(this.onLoginSuccess.bind(this))
  //    .catch(() => {
  //      firebase.auth().createUserWithEmailAndPassword(email, password)
  //        .then(this.onLoginSuccess.bind(this))
  //        .catch(this.onLoginFailed.bind(this));
  //    });
  // }

  // onLoginSuccess() {
  //  this.setState({
  //    email: '',
  //    password: '',
  //    loading: false,
  //    error: ''
  //  })
  // }

  // onLoginFailed() {
  //  this.setState({error: 'Authentication Failed.', loading: false})
  // }

  // renderButton() {
  //  if(this.state.loading) {
  //    return <Spinner size="small" />;
  //  }

  //  return (
  //    <Button onPress={this.onButtonPress.bind(this)}>
  //      Log in
  //    </Button>
  //  );
  // }

  // render() {
  //  const { formContainer, inputContainer } = styles;

  //  return(
  //    <View style={formContainer}>

  //      <View style={ inputContainer }>
  //        <Input
  //          placeholder="user@gmail.com"
  //          value={this.state.email}
  //          onChangeText={email => this.setState({ email })}
  //        />
  //      </View>
  //      <View style={ inputContainer }>
  //        <Input
  //          secureTextEntry
  //          label="Password"
  //          placeholder="password"
  //          value={this.state.password}
  //          onChangeText={password => this.setState({ password })}
  //        />
  //      </View>
  //      <View>
  //        {this.renderButton()}
  //      </View>

  //      <Text style={styles.errorTextStyle}>
  //        {this.state.error}
  //      </Text>
  //    </View>
  //  );
  // }

  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  onButtonPress () {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError () {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input placeholder='email@gmail.com' onChangeText={this.onEmailChange.bind(this)} value={this.props.email} />
        </CardSection>

        <CardSection>
          <Input label='Password' placeholder='password' onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} secureTextEntry />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        {this.renderError()}
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
