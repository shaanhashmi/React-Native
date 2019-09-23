import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View } from 'react-native'
import FlatListItem from './common/FlatListItem';
import CustomModal from './common/CustomModal'

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userDetails: null,
			visible: false
		}
	}

	handlePress = (data) => {
		this.setState({ userDetails: data, visible: true })
		Alert.alert("Working...", data)

	}

	closeModal = (data) => {
		this.setState({ visible: !this.state.visible })
	}


	render() {
		return (
			<>
				<FlatListItem onPressItem={this.handlePress} />
			</>
		)
	}
}





export default Home
