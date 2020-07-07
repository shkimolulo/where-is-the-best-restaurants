// tsx: 리액트가 적용된 타입스크립트 파일이다
/*
클래스: 무거운 거?, 클래스로 해야 프로토타입 기반 테스트 가능
import React from 'react'

class MainComponent extends React.Component
*/

/*
{} 여부는 뭐가 다른가?
export default => import React;
export {View} => import {View};
*/
import React from 'react';
import {View} from 'react-native';

class MainComponent extends React.Component {
    render() {
        return (
            <View
                style={{
                    "flex":1, // 전체가 화이트가 됐다
                    "backgroundColor": 'red',
                }}
            >
                {/* <SearchBar /> */}
            </View>
        ) // html 의 div 와 같은 역할
    }
}

export default MainComponent;

/*
export default MainComponent;
export {a}

import 
*/

/*
<SearchBar></SearchBar>, <Searchbar />
객체 지향에서 new 로 인스턴스화 하는 것과 같음
*/

