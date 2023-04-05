// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      backgroundLight :string;
      background: stirng;
      black:string;
      purpleDark:string;
      purpleLight:string;
      white:string;
      gray: string;
      textColor: string;
    };
  }
}