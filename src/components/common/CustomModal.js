import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Image } from 'react-native';
import Profile from '../Profile'
class CustomModal extends Component {

    state = {
        modalVisible: true,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.container}>
                    <View style={styles.cancelIcon}>
                        <TouchableHighlight style={styles.closeBtn} onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                            {/* <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios/26/000000/back--v1.png' }} /> */}
                            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios/26/000000/delete-sign.png' }} />
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Profile />
                    </View>
                </View>
            </Modal>
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
    },
    cancelIcon: {
        position: 'absolute',
        top: 55,
        right: 15,
        zIndex: 1000
    },
    closeBtn: {
        backgroundColor: 'transparent'
    }
});

export default CustomModal;