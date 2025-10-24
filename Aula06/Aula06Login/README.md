# 📱 Aula06Login - Sistema de Login e Cadastro

Projeto desenvolvido para a disciplina **Desenvolvimento de Software para Dispositivos Móveis II**.

## 📋 Sobre o Projeto

Aplicação React Native (Expo) que implementa um sistema completo de login e cadastro com validações de formulário e navegação entre telas.

## ✨ Funcionalidades

### 🔐 Tela de Login
- Validação de e-mail (deve conter @)
- Validação de senha (mínimo 6 caracteres)
- Feedback de erros abaixo dos campos
- Navegação para tela de boas-vindas após sucesso
- Link para tela de cadastro

**Credenciais de teste:**
- E-mail: `teste@email.com`
- Senha: `123456`

### 📝 Tela de Cadastro Completo
- **5 campos:** Nome, E-mail, Senha, Confirmar Senha e Telefone
- **Validações específicas:**
  - Nome: mínimo 3 caracteres
  - E-mail: formato válido (@ e .)
  - Senha: mínimo 6 caracteres
  - Confirmar Senha: deve ser igual à senha
  - Telefone: apenas números, formatação automática
- Exibição de erros específicos abaixo de cada campo
- Navegação para tela de confirmação com dados formatados

## 🛠️ Tecnologias Utilizadas

- **React Native** com Expo
- **React Navigation** (Native Stack)
- **React Hooks** (useState)
- **StyleSheet** para estilização

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone [seu-repositorio-url]

# Entre na pasta do projeto
cd Aula06Login

# Instale as dependências
npm install

# Execute o projeto
npx expo start --tunnel
```

## 📱 Como Testar

1. Escaneie o QR Code com o app **Expo Go**
2. Ou pressione `w` para abrir no navegador

## 📂 Estrutura do Projeto

```
Aula06Login/
├── App.js
├── src/
│   ├── Navigation.js
│   └── screens/
│       ├── LoginScreen.js
│       ├── WelcomeScreen.js
│       ├── CadastroScreen.js
│       └── DadosCadastroScreen.js
```

## 🎯 Conceitos Aplicados

- ✅ TextInput com diferentes tipos de teclado
- ✅ Validação de formulários
- ✅ Gerenciamento de estado com useState
- ✅ Navegação entre telas com parâmetros
- ✅ Feedback visual de erros
- ✅ UX mobile (secureTextEntry, autoCapitalize)
- ✅ Formatação de dados em tempo real

## 👨‍💻 Autor

[Seu Nome] - [Seu GitHub]

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.