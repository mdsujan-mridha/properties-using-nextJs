
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import '@/asstets/styles/global.css'
import Navbar from '@/components/Navbar';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Rental Property | Find the perfect rental",
  description: "Search your property | Stay safe",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
