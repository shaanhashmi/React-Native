import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';


export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}

	onClickListener = (viewId) => {
		this.props.navigation.navigate('Home');
		// Alert.alert("Alert", "Button pressed ", viewId === 'login' ? this.state : viewId);
	}

	goToRegister = () => {
		this.props.navigation.navigate('Register')
	}

	goToForgotPassword = () => {
		this.props.navigation.navigate('ForgotPassword')
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/secured-letter--v1.png' }} />
					<TextInput style={styles.inputs}
						placeholder="Email"
						keyboardType="email-address"
						underlineColorAndroid='transparent'
						onChangeText={(email) => this.setState({ email })} />
				</View>

				<View style={styles.inputContainer}>
					<Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/key.png' }} />
					<TextInput style={styles.inputs}
						placeholder="Password"
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({ password })} />
				</View>

				<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
					<Text style={styles.loginText}>Login</Text>
				</TouchableHighlight>

				<TouchableHighlight style={styles.buttonContainer} onPress={() => this.goToForgotPassword('restore_password')}>
					<Text>Forgot your password?</Text>
				</TouchableHighlight>

				<TouchableHighlight style={styles.buttonContainer} onPress={() => this.goToRegister('register')}>
					<Text>Register</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DCDCDC',
	},
	inputContainer: {
		borderBottomColor: '#F5FCFF',
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		borderBottomWidth: 1,
		width: 300,
		height: 45,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputs: {
		height: 45,
		marginLeft: 16,
		borderBottomColor: '#FFFFFF',
		flex: 1,
	},
	inputIcon: {
		width: 30,
		height: 30,
		marginLeft: 15,
		justifyContent: 'center'
	},
	buttonContainer: {
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: 300,
		borderRadius: 30,
	},
	loginButton: {
		backgroundColor: "#00b5ec",
	},
	loginText: {
		color: 'white',
	}
});
