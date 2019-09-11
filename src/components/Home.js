import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'
import FlatListItem from './common/FlatListItem';
import CustomModal from './common/CustomModal'

class Home extends Component {

    setModalVisible(visible) {
        this.setState({ modalVisible: false });
    }

    handlePress = (item) => {
        Alert.alert(item.name.first)
    }


    render() {
        return (
            <>
                <FlatListItem onPress={this.handlePress} />
                <CustomModal />
            </>
        )
    }
}





export default Home
