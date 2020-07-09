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
import {View, Alert} from 'react-native';
import SearchBar from './components/SearchBar'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.requestTheBestRestaurants = this.requestTheBestRestaurants.bind(this)
    }

    async requestTheBestRestaurants(sigunNm: string) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const response = await fetch('https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?SIGUN_NM=' + encodeURIComponent(sigunNm));
        const json  = await response.json();

        console.log(json)
    }

    render() {
        return (
            <View
                style={{
                    "flex":1, // 전체가 화이트가 됐다
                    alignItems: 'center' // 자식 컴포넌트들을 중간으로
                }}
            >
                <SearchBar onPressSearch={this.requestTheBestRestaurants.bind(this)}/>
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

