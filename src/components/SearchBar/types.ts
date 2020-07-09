import { TextInputProps } from "react-native"

// 타입 힌트 같은 역할
// props 는 parmeter 받는 값
interface SearchBarProps {
    onPressSearch: (text: string) => void
}

interface SearchBarStates {
    text: string;
}

interface ISearchBar extends TextInputProps {
    onPress: () => void, 
} // 자바의 메소드와 같은 기능

export {
    SearchBarProps,
    SearchBarStates,
    ISearchBar,
}
// state 가 있으면 똑똑한 거