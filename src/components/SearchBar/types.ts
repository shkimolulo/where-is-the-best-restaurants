import { TextInputProps } from "react-native"

interface SearchBarProps {
    onPressSearch: (text: string) => void
}

interface SearchBarStates {
    text: string;
}

interface ISearchBar extends TextInputProps {}

export {
    SearchBarProps,
    SearchBarStates,
    ISearchBar,
}