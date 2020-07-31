describe('SearchBar : onPressStart', () => {
    let SearchBar;
  
    beforeEach(() => {
      SearchBar = require('../../../../src/components/SearchBar').default;
    });
  
    it('onPressSearch 함수를 실행할 수 있다.', () => {
      // Given
      const mockOnPressSearch = jest.fn();
      SearchBar.prototype.props = {};
      SearchBar.prototype.props.onPressSearch = mockOnPressSearch
      
      SearchBar.prototype.state = { text: '서울시'};

      // When
      SearchBar.prototype.onPress();
  
      // Then
      expect(mockOnPressSearch).toBeCalledWith('서울시');
      // 어떤 값이 넘어갔는지 알기 위해서는 toBeCallednWith('아무 글자')
      // 
    });
  });