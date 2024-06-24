import SplineLoading from './components/SplineLoading';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Perceptron Desktop</h1>
          <h4 className="text-xl text-gray-600">
            Currently under development.
          </h4>
        </div>
        <SplineLoading />
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center w-full">
        {'<'}3 with ♥
      </footer>
    </div>
  );
}