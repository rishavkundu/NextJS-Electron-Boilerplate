import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Perceptron Desktop</h1>
        <h4 className="text-xl text-gray-600">
          Settings page
        </h4>
      </div>
      <footer className="mt-auto p-4 bg-gray-800 text-white text-center w-full">
        {'<'}3 with ♥
      </footer>
    </main>
  );
}

export default SettingsPage;