import React, { Component } from 'react'
import { View, Image, ImageBackground } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
// import { withRouter } from 'react-router';
import LottieView from 'lottie-react-native';

// var img = require('../asserts/images/splash.jpg');
export default class Splash extends Component {
    // constructor(props) {
    //     super(props);
    //     setTimeout(() => {
    //         this.props.navigation.navigate("New");
    //     }, 1000)
    // }
    // render() {
    //     return (
    //         <View>
    //             <ImageBackground
    //                 source={img}
    //                 style={{ height: '100%', width: '100%' }}
    //             >

    //             </ImageBackground>
    //         </View>
    //     )
    // }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}>
                <LottieView source={require('../asserts/animations/tree animation.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={()=>{
                        this.props.navigation.replace('Login');
                    }}
                    />
            </View>
        )
    }
}
