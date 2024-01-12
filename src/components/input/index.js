import { InputContainer } from './styles'

const Input = ({value}) => {
    return (
        <InputContainer>
            <input disable value={value}/>  
        </InputContainer>
    );
}

export default Input;