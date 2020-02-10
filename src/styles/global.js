import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        outline: 0;
    }
    html{
        font-size: 62.5%;

        @media ${props => props.theme.mediaQueries.largest} {
            font-size: 60%;
        }
        @media ${props => props.theme.mediaQueries.large} {
            font-size: 57.5%;
        }
        @media ${props => props.theme.mediaQueries.small} {
            font-size: 55%;
        }
    }
    
    body{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        background: #fff;
        --primary: ${props => props.theme.colors.primary};
        --primary-light: ${props => props.theme.colors.primary_light};
        --primary-highlight: ${props => props.theme.colors.primary_highlight};
        --text: ${props => props.theme.colors.text};
        --text-highlight: ${props => props.theme.colors.text_highlight};
        --text-input: ${props => props.theme.colors.text_input};
        --background: ${props => props.theme.colors.background};
        --white: #fff;
        --radius: 1.5rem;
        background-color: var(--background);
        color: var(--text)
    }
    h1, h2, h3, h4{
        line-height: 1.1;
    }
`
