import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick} type='button'>
            {label}
        </ButtonContainer>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
