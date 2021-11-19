import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AnimatedLottieView, {} from 'lottie-react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
    }

    clearText = () => {
        this.setState({ userName: "" })
        this.setState({ password: "" })
    }


    render() {
        const { navigate } = this.props.navigation;

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container1}>
                    <Image
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 35,
                            marginTop: 10,
                            position: 'absolute',
                            top: 60,
                            left: 65
                        }}
                        source={require('../asserts/images/logo.png')} />
                    <Image
                        resizeMode='contain'
                        style={{
                            width:35,
                            height:35,
                            marginTop:10,
                            position:'absolute',
                            top:60,
                            right:65
                        }}
                        source={require('../asserts/images/logo.png')}
                    />
                    <Text style={{
                        color: '#000',
                        fontSize: 50,
                        letterSpacing: 3,
                        position: 'absolute',
                        top: 50,
                        textAlign: 'center',
                        alignItems: 'center',

                    }}>
                        Login
                        </Text>
                    <Image
                        resizeMode='contain'
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 10,
                            position: 'absolute',
                            top: 120
                        }}
                        source={require('../asserts/images/man.png')} />
                    <TextInput
                        placeholder='UserName...'
                        placeholderTextColor="#C2B8A3"
                        style={{
                            color: 'black',
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            letterSpacing: 3,
                            marginTop: 10,
                            backgroundColor: 'gray',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ userName: value })}
                        value={this.state.userName}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='Password...'
                        placeholderTextColor="#C2B8A3"
                        style={{
                            color: 'black',
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            letterSpacing: 3,
                            marginTop: 12,
                            backgroundColor: 'gray',
                            borderRadius: 25,
                            shadowOpacity:10,
                            shadowColor:'red'
                        }}
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            if(this.state.userName.length != 0 || this.state.password.length != 0){
                            
                            fetch("http://192.168.43.113:3500/api/v1/fiber/login/" + this.state.userName + "/" + this.state.password, {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                            })
                                // (json.name == this.state.userName) && (json.password == this.state.password)
                                .then((response) => response.json())
                                .then((json) => {
                                    if ((json.name == this.state.userName) && (json.password == this.state.password)) {
                                        AsyncStorage.setItem('isLogedIn', "true")
                                        AsyncStorage.setItem('id', json.id)
                                        console.log(json.id);
                                        Alert.alert("Login Success...")
                                        navigate('Customers', { name: 'Customers' })
                                        this.clearText();
                                    } else {
                                        Alert.alert(
                                            "UserName Or Password is invalid..., SignUp First..."
                                        );
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert(
                                        "Fields Empty..."
                                    );
                                    console.log(error);
                                })
                            }else{
                                Alert.alert(
                                    "Fields Empty..."
                                );
                            }

                        }
                        }
                        style={{
                            marginTop: 35,
                            width: '40%',
                            height: 50,
                            marginLeft: 10,
                            backgroundColor: 'lightblue',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontWeight: '100',
                            fontSize: 18,
                            letterSpacing: 3,
                            textAlign: 'center',
                            fontSize: 20,
                            fontFamily: 'serif',
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{
                        flexDirection: 'row', marginTop:20,
                        justifyContent: 'center'
                    }}
                    >
                        <Text style={{
                            color: 'black',
                            paddingRight: 15,
                            fontSize: 16
                        }}>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigate('New', { name: 'New' })}
                        >
                            <Text style={{
                                color: 'green',
                                fontWeight: '700',
                                textAlign: 'center',
                                fontSize: 16
                            }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>

        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#A19882'

    }, container1: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    container2: {
        flex: 1,
    }
})