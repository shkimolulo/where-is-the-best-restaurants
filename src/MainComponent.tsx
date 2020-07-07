import React from 'react';
import {View} from 'react-native';

class MainComponent extends React.Component {
    render() {
        return (
            <View
                style={{
                    "flex":1,
                    "backgroundColor": 'red',
                }}
            >
                {/* <SearchBar /> */}
            </View>
        )
    }
}

export default MainComponent;