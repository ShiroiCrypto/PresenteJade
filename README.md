# 💜 PresenteJade: Mundinho Crepúsculo & Rock 🎸

Este projeto é um presente digital personalizado, construído com **React e Vite**, que celebra e une os gostos únicos da presenteada. Ele serve como um "mundinho particular" interativo, combinando a estética sombria e romântica da saga Crepúsculo com a energia do Rock (Queen & Arctic Monkeys) e a celebração de sua identidade LGBTQIA+.

---

## 🌟 O Criador

* **Desenvolvedor:** Matheus Gustavo
* **Github:** [github.com/ShiroiCrypto](https://github.com/ShiroiCrypto)
* **Pseudônimo no Projeto:** Shiroi
* **Licença:** MIT

---

## ✨ Funcionalidades Principais

* **Bobina de Tesla Musical (Home):** Simulação de uma bobina que aciona o tema visual de eletricidade e toca a canção tema de Crepúsculo.
* **Diário de Reflexões:** Uma seção privada onde o usuário pode responder a *prompts* de escrita temáticos (Leitura, Identidade, Rock), salvos localmente (via `localStorage` para garantir a privacidade).
* **Biblioteca Pessoal:** Destaque para autoras favoritas (Alice Oseman e Cassandra Clare) e reflexões sobre personagens queridos (como Simon Lewis).
* **Playlist Temática:** Seção dedicada ao Rock, com foco nas bandas favoritas (Queen e Arctic Monkeys).
* **Detalhes Pessoais:** Integração de gostos íntimos (cor Roxo/Marrom e Strogonoff) para reforçar o tema "mundinho".
* **Design Responsivo:** Otimizado para visualização perfeita em dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função no Projeto |
| :--- | :--- |
| **Frontend** | React 19.2.0 (Vite 7.2.2 + SWC) |
| **Roteamento** | React Router DOM 7.1.3 |
| **Estilização** | CSS3 / Media Queries (Mobile-Friendly) |
| **Armazenamento** | `localStorage` (Privacidade dos dados) |
| **Build Tool** | Vite (Fast Refresh, Code Splitting) |
| **Audio** | HTML5 Audio Element (mp3 bundled via Vite) |

## 📁 Estrutura do Projeto

```
PresenteJade/
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── Home.jsx         # Bobina de Tesla Musical (tema principal)
│   │   ├── Books.jsx        # Biblioteca de Autoras Favoritas
│   │   ├── Music.jsx        # Playlist de Rock (Queen, Arctic Monkeys, Taylor Swift)
│   │   ├── Reflections.jsx  # Diário de Reflexões com prompts temáticos
│   │   ├── PersonalDetails.jsx # Gostos Pessoais (cores, alimentos, etc)
│   │   ├── Header.jsx       # Navegação principal
│   │   └── NotFound.jsx     # Página 404
│   ├── assets/              # Imagens, ícones e áudio
│   │   └── clair_de_lune.mp3 # Tema musical de Crepúsculo
│   ├── App.jsx              # Componente raiz
│   ├── main.jsx             # Ponto de entrada
│   └── *.css                # Estilos específicos por componente
├── public/                  # Arquivos estáticos
├── vite.config.js           # Configuração de build
├── vercel.json              # Deploy no Vercel
├── package.json             # Dependências e scripts
└── README.md                # Este arquivo
```

## 🎵 Recursos de Áudio

O projeto inclui suporte a áudio com a música tema "Clair de Lune", que:
- ✅ Funciona em desenvolvimento (`npm run dev`)
- ✅ Funciona em produção/preview (`npm run preview`)
- ✅ É automaticamente bundled pelo Vite no build
- ✅ Suporta loop contínuo quando a Bobina de Tesla é ligada

**Nota Técnica:** Os arquivos de áudio são importados como módulos ES6, permitindo que o Vite gerencie corretamente os caminhos em ambientes de desenvolvimento e produção.

## 🚀 Como Executar o Projeto

Certifique-se de ter o Node.js e o npm instalados.

1.  Clone o repositório ou navegue até a pasta do projeto:
    ```bash
    cd presente-jade
    ```
2.  Instale todas as dependências necessárias:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    O projeto estará acessível em `http://localhost:5173/` (ou porta similar).

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento com Hot Reload
npm run build    # Gera build otimizado para produção (dist/)
npm run preview  # Visualiza o build de produção localmente
npm run lint     # Executa ESLint para verificar qualidade do código
```

## 🌐 Deploy

O projeto está configurado para deploy contínuo no **Vercel** através do arquivo `vercel.json`. Configurações incluem:
- Rewrite de todas as rotas para `index.html` (SPA)
- Cache control otimizado para assets estáticos
- Suporte completo a React Router

## 🎨 Design e Experiência

### Tema Visual
- **Paleta de Cores:** Roxo/Marrom (preferências da presenteada)
- **Estética:** Sombria e romântica, inspirada em Crepúsculo
- **Efeitos:** Animações suaves, brilhos (glow effects), transições visuais

### Responsividade
- ✅ Mobile-first approach
- ✅ Totalmente responsivo para tablets e desktops
- ✅ Media queries para otimização de layout

## 💾 Dados e Privacidade

- Todas as reflexões e entradas do diário são salvas **localmente** no navegador usando `localStorage`
- **Nenhum dado é enviado para servidores externos**
- A privacidade da usuária é garantida em 100%

## 🔧 Troubleshooting

### Música não toca no preview
- Certifique-se de que `src/assets/clair_de_lune.mp3` existe
- Execute `npm run build` para gerar novo build
- Verifique o console do navegador (F12) para erros

### Estilos não carregam
- Limpe o cache: `Ctrl+Shift+Delete` (Chrome)
- Tente hard refresh: `Ctrl+F5`

### Problema de rotas
- Certifique-se que `vercel.json` está configurado para SPA
- Em desenvolvimento local, o Vite trata isso automaticamente

---

## 📜 Licença (MIT)

Este projeto está licenciado sob a Licença MIT. Você é livre para usar, copiar, modificar e distribuir o código, desde que mantenha a atribuição ao criador original.

---

## 👥 Contribuindo

Este é um projeto pessoal de presente, mas sugestões e melhorias são bem-vindas! Se você gostaria de:
- Reportar bugs: Abra uma issue no GitHub
- Sugerir features: Deixe uma pull request com suas ideias
- Melhorar o design: Contribuições visuais são sempre bem-vindas

## 💬 Contato

- **Discord:** Shiroi#1234 (ou confira o repositório GitHub)
- **Email:** Entre em contato através do GitHub
- **GitHub:** [ShiroiCrypto](https://github.com/ShiroiCrypto)

---

## 🎁 Sobre Este Presente

Este projeto foi criado com ❤️ como um presente digital especial. Representa a celebração de quem você é, seus gostos únicos e a beleza de existir de forma autêntica. Cada componente foi pensado para refletir os aspectos que tornam você especial.

**"Seja sempre você mesma, pois quem não aprecia sua verdadeira essência não merece seu tempo."** 💜