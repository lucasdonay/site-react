import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validação de nome (apenas letras e espaços)
  const isValidName = (name: string): boolean => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
    return nameRegex.test(name.trim());
  };

  // Validação de email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validação de telefone
  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  // Validação de mensagem
  const isValidMessage = (message: string): boolean => {
    return message.trim().length >= 10;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // impede reset automático do form

    // Reset dos estados de erro
    let hasError = false;
    const newErrorMessages = {
      name: "",
      email: "",
      message: "",
    };

    // Validação do nome
    if (!name.trim()) {
      setNameError(true);
      newErrorMessages.name = "Por favor, insira seu nome";
      hasError = true;
    } else if (!isValidName(name)) {
      setNameError(true);
      newErrorMessages.name = "Por favor, insira um nome válido";
      hasError = true;
    } else {
      setNameError(false);
    }

    // Validação do email/telefone
    if (!email.trim()) {
      setEmailError(true);
      newErrorMessages.email = "Por favor, insira seu email ou telefone";
      hasError = true;
    } else if (!isValidEmail(email) && !isValidPhone(email)) {
      setEmailError(true);
      newErrorMessages.email = "Por favor, insira um email ou telefone válido";
      hasError = true;
    } else {
      setEmailError(false);
    }

    // Validação da mensagem
    if (!message.trim()) {
      setMessageError(true);
      newErrorMessages.message = "Por favor, insira sua mensagem";
      hasError = true;
    } else if (!isValidMessage(message)) {
      setMessageError(true);
      newErrorMessages.message = "A mensagem deve ter pelo menos 10 caracteres";
      hasError = true;
    } else {
      setMessageError(false);
    }

    setErrorMessages(newErrorMessages);

    if (!hasError) {
      const templateParams = { name, email, message };

      emailjs
        .send(
          "service_f3yeniw",
          "template_0rmvhwp",
          templateParams,
          "Mk2mj9T3-YYSif-xs"
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log("SUCCESS!", response.status, response.text);
            alert(
              "Mensagem enviada com sucesso! Entrarei em contato em breve."
            );
          },
          (error: EmailJSResponseStatus) => {
            console.log("FAILED...", error.text);
          }
        );

      // Limpar campos após envio
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Entrar em contato</h1>
          <p>
            Tem um projeto esperando para ser realizado? Vamos colaborar e fazer
            isso acontecer!
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                name="name"
                label="Seu nome"
                placeholder="Qual é o seu nome?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) {
                    setNameError(false);
                    setErrorMessages((prev) => ({ ...prev, name: "" }));
                  }
                }}
                error={nameError}
                helperText={errorMessages.name}
              />
              <TextField
                required
                name="email"
                label="Email / Telefone"
                placeholder="Como posso te contatar?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) {
                    setEmailError(false);
                    setErrorMessages((prev) => ({ ...prev, email: "" }));
                  }
                }}
                error={emailError}
                helperText={errorMessages.email}
              />
            </div>
            <TextField
              required
              name="message"
              label="Mensagem"
              placeholder="Escreva sua mensagem aqui..."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) {
                  setMessageError(false);
                  setErrorMessages((prev) => ({ ...prev, message: "" }));
                }
              }}
              error={messageError}
              helperText={errorMessages.message}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
