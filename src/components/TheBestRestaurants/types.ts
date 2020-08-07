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
}

export {
    SearchBarProps,
    SearchBarStates,
    ISearchBar,
}
