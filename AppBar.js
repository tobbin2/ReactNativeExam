import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AppBar extends Component {


    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            navigation: this.props.navigationRef
        }
    }
    render() {
        return (
            <View style={{flex: 1, alignItems:'flex-start', marginTop:30}}>
                <Button style={{flex:1}} title="ald" onPress={ () => {this.state.navigation}}/>
                <Text>{this.state.name}</Text>
            </View>
        );
    }
}
export default AppBar;
