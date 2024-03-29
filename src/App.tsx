import { useSelector, RootStateOrAny } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import NavigationScroll from './Components/NavigationScroll'
import Theme from './Assets/Theme'
import Routers from './Routers'
import Accept from './Components/Accept';


export default function App() {
  const customizationReducer = useSelector((state: RootStateOrAny) => state.customizationReducer);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme(customizationReducer)}>
        <CssBaseline/>
        <NavigationScroll>
          <Routers/>
          <Accept/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}