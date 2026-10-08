# 🚀 Landing Page Institucional - Empresa Júnior Turing (EJ Turing)

![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind%20CSS%20v4-38B2AC.svg)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E.svg)
![Flowbite](https://img.shields.io/badge/UI-Flowbite-blue.svg)
![EmailJS](https://img.shields.io/badge/Integration-EmailJS-orange.svg)
![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o-brightgreen.svg)

## 📌 Visão Geral
Landing Page oficial desenvolvida para a **EJ Turing (Empresa Júnior de Engenharia de Computação do IFSULDEMINAS - Campus Poços de Caldas)**.

O projeto foi construído com foco em design moderno, alta taxa de conversão institucional, performance otimizada e total responsividade (mobile-first). Ele apresenta a proposta de valor da empresa júnior, portfólio de serviços em tecnologia, equipe de membros e formulário de contato integrado diretamente com serviços de disparo de e-mail sem necessidade de backend próprio.

---

## 🚀 Funcionalidades Principais
- 🎨 **Design Moderno e Dark Theme**: Estilização profissional e refinada com a nova versão do **Tailwind CSS v4** e componentes **Flowbite**.
- 📱 **Totalmente Responsivo**: Layout fluido e adaptativo com menu mobile dinâmico em hambúrguer.
- 💼 **Apresentação de Serviços**: Seções modulares destacando desenvolvimento web, soluções de software, IoT e consultoria tecnológica.
- ✉️ **Formulário de Contato Direto com EmailJS**: Envio assíncrono de orçamentos e mensagens diretamente para a caixa de e-mail da empresa júnior sem intermediários.
- ⚡ **Alta Performance de Carregamento**: Otimização de assets visuais, tipografia SVG e classes utilitárias compiladas sob demanda.

---

## 🛠️ Tecnologias e Ferramentas
- **Frontend**: HTML5 Semântico, CSS3 Moderno
- **Framework CSS**: Tailwind CSS v4 (`@tailwindcss/cli`) & Flowbite UI
- **Ícones**: Font Awesome 5
- **Integração Externa**: EmailJS Browser SDK (`@emailjs/browser`)
- **Gerenciador de Pacotes**: npm

---

## 📂 Estrutura do Repositório
```plaintext
LandingPage_EJTuring/
├── assets/                              # Logotipos, ilustrações institucionais e favicons
├── package.json                         # Dependências de compilação (Tailwind v4)
└── src/
    ├── index.html                       # Documento principal da landing page
    ├── input.css                        # Arquivo de entrada das diretivas Tailwind
    ├── main.css                         # CSS compilado e minificado para produção
    └── JS/
        └── script.js                    # Comportamento do menu mobile e envio via EmailJS
```

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js e npm instalados.

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/LucaS4nt0s/LandingPage_EJTuring.git
   cd LandingPage_EJTuring
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Para compilar alterações no Tailwind CSS em tempo real:
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/main.css --watch
   ```
4. Abra o arquivo `src/index.html` em seu navegador ou utilize a extensão Live Server do VS Code.

---

## 👨‍💻 Autor
Desenvolvido por **Luca Samuel dos Santos** ([@LucaS4nt0s](https://github.com/LucaS4nt0s)) para a **EJ Turing**.
