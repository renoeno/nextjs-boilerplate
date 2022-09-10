import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

        &:focus-within {
         scroll-behavior: smooth;
        }
    }

   
    body {
       font-size: 1.6rem;
       font-family: ${({ theme }) => theme.font.family.default};

    }

    h1, h2, h3, h4, h5, h6  {
      font-family: ${({ theme }) => theme.font.family.secondary};
      margin: ${({ theme }) => theme.spacings.md} 0;

    }

    p {
      margin: ${({ theme }) => theme.spacings.md} 0;
    }

    ul, ol {
      margin: ${({ theme }) => theme.spacings.md};
      padding: ${({ theme }) => theme.spacings.md};
    }

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
      text-decoration: none;
    }

    .table {
      width: 100%;
      overflow-y: auto;
    }
`;
