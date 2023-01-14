import React, {useEffect, useReducer} from 'react'

import './App.css';

import ColorScheme from './colorView/ColorScheme';
import { createContext } from 'react';
import Background from './backgroundView/Background';
import NavSections from './common/NavSections';
import Designs from './designView/Designs';
import Contact from './contactView/Contact';
// import MainColors from './main/MainColors';

export const DesignContext = React.createContext()

const initialState = {
  inputValue: '',
  mainColor: {inputValue:'', rgb:'255, 170, 40', hex:'', hsl:'', message:''},
  colors: {},
  design: {},
  darks:  [ 'monochromeDark', 'monochromeDark2', 'analogousDark1', 'analogousDark2', 'complementary3', 'complementary4', 'triadicDark1', 'triadicDark2', 
            'splitDark1', 'splitDark2', 'quadraDark1', 'quadraDark2', 'quadraDark3', 'quadraDark4' ],
  lights: [ 'monochrome1', 'monochrome2', 'analogous1', 'analogous2', 'complementary1', 'complementary2', 'triadic1', 'triadic2',
            'split1', 'split2', 'quadra1', 'quadra2', 'quadra3', 'quadra4' ],
  grays:  [ 'grayDark1', 'grayDark2', 'grayLight1', 'grayLight2' ],
  colorScheme: '',
  colorSchemes: {},
  colorSchemeNames: [],
  colorThemes: {},
  colorThemeNames: [],
  color1: 'triadicDark2',
  color2: 'grayDark2',
  gradColor: { start:[], end:[] },
  section: [["color-Schemes", "color-Themes"], "Backgrounds", "Background-Designs", "Contact"],
  sectionCount: 0,
  
  conical: {backgroundImage:'conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg)'},
  homeBackground:{background:'rgb(245, 245, 245)'},
  backgroundMenu: ["darks", "lights", "grays", "gradients"],
  backgroundOption: '',
  background: {},
  popUp: false,
  popContent: null,

}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'COLORS':
      return {...state, colors : action.value }
    case 'DESIGN':
      return {...state, design : action.value }
    case 'GOTOSECTION':
      return { ...state, sectionCount : state.sectionCount + action.value }
    case 'BACkOPTION':
      return { ...state, backgroundOption : action.value }
    case 'BACKGROUND': 
      return { ...state, background: action.value}  
    case 'POPCONTENT': 
      return { ...state, popContent: action.value }
    case 'POPUP' : 
      return { ...state, popUp: action.value }  
    case 'STATECHANGE' :
      return { ...state, inputValue : action.value }  
    case 'COLORARR' :
      return { ...state, [action.key] : action.value }
    default:
      return state
  }
}

function App() {
  
  const [ newState, dispatch] = useReducer(reducer, initialState)

    
  // console.log(newState.backgroundOption)
  return (
    <div className="App" style={{background:`rgba(${newState.mainColor?.rgb})`}}>
      {/* <p>Welcome to Test in react</p> */}
      <DesignContext.Provider value={{ newState, dispatch}}>
        <ColorScheme />
        <Background />
        <Designs />
        <Contact />

        <NavSections />
      </DesignContext.Provider >
    </div>
  );
}

//  charset https://www.codetable.net/unicodecharacters?page=12
export default App;
