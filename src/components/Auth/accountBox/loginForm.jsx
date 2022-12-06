import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Lines from "./Lines";

import options from "../../../data/options";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";
import LoginLinkedin from "./LoginLinkedin";

export const LoginForm = (props) => {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      window.location.replace('http://localhost:3002');
    }
  }, []);

  const tackleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const tacklePasswordChange = (e) => {
    setPassword(e.target.value)
  }

    const url = new URL(
      "https://bheti-connect.smirltech.com/api/login"
  );

  const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
  };

  let item = { email, password}

  const HandleLogin = async () => {
    let result = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(item),
    }).then(response => response.json());
    console.warn(email, password)
    if(result.success) {
      localStorage.setItem("user-info",JSON.stringify(result))
      window.location.replace(`http://localhost:3002?name=${result.data.name}&email=${result.data.email}`);
    }
  }

  return (
    <loginFormStyled>
      <BoxContainer>
        <a href='https://bheti-connect.smirltech.com/login/linkedin'>
          <LoginLinkedin 
            name= {'Connexion avec'}
          />
        </a>
        <Lines />
        <FormContainer>
          <Input 
            type="email" 
            placeholder="Email"
            onChange={tackleEmailChange}
          />
          <Input 
            type="password" 
            placeholder="Mot de passe" 
            onChange={tacklePasswordChange}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Vous avez oublié votre mot de passe?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={HandleLogin}>Connexion</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Vous n'avez pas de compte?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            S'inscrire
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </loginFormStyled>
  );
}

const loginFormStyled = styled.section`
`