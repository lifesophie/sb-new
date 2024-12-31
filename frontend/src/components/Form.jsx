import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  width: 600px;
  height: 47px;
  background-color: rgba(217, 217, 217, 1);
`;

const TextareaField = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  width: 600px;
  height: 100px;
  background-color: rgba(217, 217, 217, 1);
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: rgba(222, 38, 56, 0.87);
  width: 600px;
  height: 47px;
  color: white;

  font-size: 16px;
font-weight: 500;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(61, 58, 93, 1);
    transition: 1s;
    color:#F2F2F2;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 10px;
`;

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError('Неверный формат email');
            setSuccessMessage('');
            return;
        }
        setEmailError('');

        // Здесь отправка формы на сервер
        console.log('Форма отправлена:', { email, message });
        setSuccessMessage('Форма успешно отправлена!');
        setEmail('');
        setMessage('');
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

            <InputField
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <TextareaField
                placeholder="Ваши пожелания или предложения"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />

            <SubmitButton type="submit">Отправить</SubmitButton>

        </FormContainer>
    );
}

export default Form;