import React from 'react';

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
           
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="w-full max-w-md rounded-lg bg-cyan-700 p-8 shadow-lg border-gray-700 border-opacity-15 border-4 relative z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-gray-100 text-3xl font-bold">Login</h2>
                    <button
                        className="text-white text-xl hover:text-gray-300"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <form>
                    <label htmlFor="email" className="block text-gray-200 text-lg font-semibold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="p-2 mb-4 w-full border border-gray-400 rounded-md text-lg focus:outline-none"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="password" className="block text-gray-200 text-lg font-semibold mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="p-2 mb-4 w-full border border-gray-400 rounded-md text-lg focus:outline-none"
                        placeholder="Enter your password"
                        required
                    />

                    <div className="flex items-center justify-between mt-4">
                        <button
                            type="submit"
                            className="bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-cyan-900"
                        >
                            Login
                        </button>
                        <a
                            href="#"
                            className="text-sm text-cyan-300 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
