import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Header = () => {
    return (
        <View>
            <Text style={{margin:10, borderWidth:1, borderStyle:'dashed', padding:10, borderRadius:10}}>Efe Özgür </Text>
        </View>
    );
}

export default Header; 