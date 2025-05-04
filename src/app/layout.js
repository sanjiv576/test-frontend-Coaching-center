import { AuthProvider } from '../context/AuthContext';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
    title: 'Coaching Center',
    description: 'A platform for online learning',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-100">
                <AuthProvider>
                    <Navbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}