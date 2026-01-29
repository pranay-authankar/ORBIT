import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { Loader2, AlertCircle } from 'lucide-react';

const AuthGate: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                navigate('/login');
                return;
            }

            try {
                // Fetch user role from Firestore
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (!userDoc.exists()) {
                    setError('User profile not found. Please contact administration.');
                    await signOut(auth);
                    return;
                }

                const userData = userDoc.data();
                const role = userData?.role;

                if (!role) {
                    setError('Assigned role not found. Please contact administration.');
                    await signOut(auth);
                    return;
                }

                // Redirect based on role
                switch (role) {
                    case 'student':
                        navigate('/student');
                        break;
                    case 'teacher':
                        navigate('/teacher');
                        break;
                    case 'parent':
                        navigate('/parent');
                        break;
                    case 'admin':
                        navigate('/admin');
                        break;
                    default:
                        // Fallback or explicit unknown role handling
                        // Assuming 'dashboard' or 'app' for others if needed, 
                        // but per requirements: "If role is missing or invalid -> show error and logout"
                        setError(`Invalid role detected: ${role}`);
                        await signOut(auth);
                }

            } catch (err) {
                console.error("AuthGate Error:", err);
                setError('Failed to verify account permissions.');
                await signOut(auth);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-red-100">
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Access Error</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                        Return to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium animate-pulse">Verifying access...</p>
            </div>
        </div>
    );
};

export default AuthGate;
