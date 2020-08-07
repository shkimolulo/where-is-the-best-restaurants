import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

describe('TheBestRestaurants', () => {
    let TheBestRestaurants;

    beforeEach(() => {
        TheBestRestaurants = require('../../../../src/components/TheBestRestaurants').default;  // mocking 하기 편하게 나온다
    });

    it('렌더링 시킬 수 있다.', () => {
        // Given

        // When
        const json = renderer.create(<TheBestRestaurants />).toJSON()
        // string 으로 만들어서

        // Then
        expect(json).toMatchSnapshot();
        // assert 와 같음

    }); // 하나의 테스트 단위
})
