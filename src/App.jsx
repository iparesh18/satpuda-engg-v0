import RootLayout from '../app/layout.jsx';
import Home from '../app/page.jsx';
import { ThemeProvider } from '../components/theme-provider.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <Home />
      </RootLayout>
    </ThemeProvider>
  );
}
