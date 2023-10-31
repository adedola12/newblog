import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';



const inter = Inter ({subsets: ['latin']});

export const metadata = {
  title: 'Next-Blog',
  description: 'Created by ADLM',
};

export default function RootLayout({
  children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <ThemeContextProvider>
      <ThemeProvider>
        <div className='min-h-[100vh]'>
        <div className='ml-auto mr-auto xl:max-w-[1500px] pl-[80px] pr-[80px] lg:max-w-[1100px] md:max-w-[800px] sm:max-w-[600px] sm:pl-[40px] sm:pr-[40px] '>
        <Navbar />
          {children}
          <Footer />
        </div>
        </div>
      </ThemeProvider>
      </ThemeContextProvider>
      </AuthProvider>
      </body>
    </html>
   
  );
}
