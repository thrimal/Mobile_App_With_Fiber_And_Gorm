// import axios from 'axios'
import React, { Component } from 'react'
import { FlatList, Image, SafeAreaView, Text, View, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native'

StatusBar.setBarStyle('light-content')
var img = require('../asserts/images/login5.jpg')
export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            datasourse: [],
        }
    }

    componentDidMount() {
        return fetch('http://192.168.43.113:3500/api/v1/fiber', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson != null){
                    this.setState({
                        isLoading: false,
                        datasourse: responseJson,
                    })
                }else{
                    Alert.alert(
                        "Customers Are Not Available..."
                    )
                }
                
                // console.log(responseJson);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Text style={{ fontSize: 12 }}>Id : {item.id}     Name : {item.name}     Address : {item.address}    Contact : {item.contact}</Text>
            </View>
        )
    }

    render() {
        let { datasourse, isLoading } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <Image source={img} style={{ width:450, height: '100%', position: 'absolute' }} />
                {/* <Text style={styles.text}>Customer List</Text> */}
                <FlatList
                    style={{ backgroundColor:'lightyellow', borderRadius:30,}}
                    data={datasourse}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Image
                        resizeMode='contain'
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 10,
                            position: 'absolute',
                            top: 450
                        }}
                        source={require('../asserts/images/man.png')} />
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        fetch('http://192.168.43.113:3500/api/v1/fiber', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'content-type': 'application/json'
                            }
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                this.setState({
                                    isLoading: false,
                                    datasourse: responseJson,
                                })
                                // console.log(responseJson);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }}
                >
                    <Text style={styles.text}>Load</Text>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        // color: '#CAD3C8',
        color: 'black',
        fontSize: 20,
        fontFamily: 'serif',
        letterSpacing:3
    },

    item: {
        backgroundColor: '#f8c7ff',
        padding: 15,
        marginVertical: 2,
        marginHorizontal: 16,
        borderRadius: 30,
    },
    button: {
        color: 'black',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        marginHorizontal: 50,
        marginVertical: 30,
        width: 150,
        height: 50,
    }
});

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//     },
//     fetch({ url: 'http://192.168.43.113:8000/api/customers', method: 'GET', headers: { Accept: "application/json", "Content-Type": "application/json" } })
//         .then((response) => response.json())
//         .then((responseJson) => {
//            renderItem(responseJson)
//         })
// ];

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );
// const S = () => {

//     const renderItem = ({ item }) => (
//         <Item title={item.title} />
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     },
// });

// export default S;
