import React from 'react'

import { Router } from '../Routes/routes'
import { GlobalStyle } from '../GlobalStyle'
import GlobalState from '../Global/GlobalState'
import { StyledEngineProvider } from '@mui/material/styles'

const App = () => {
  return (
    <GlobalState>
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <Router />
      </StyledEngineProvider>
    </GlobalState>
  )
}

export default App