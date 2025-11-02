import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Card from './components/Card';
import ApiIntegration from './api/ApiIntergration';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
       <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            <div className="flex items-center gap-4 my-4">
              <Button
                variant="danger"
                size="md"
                onClick={() => {
                  console.log('Decrease clicked');
                  setCount(prevCount => {
                    console.log('Previous count:', prevCount);
                    return prevCount - 1;
                  });
                }}
              >
                -
              </Button>
              <span className="text-xl font-bold">{count}</span>
              <Button
                variant="success"
                size="md"
                onClick={() => {
                  console.log('Increase clicked');
                  setCount(prevCount => {
                    console.log('Previous count:', prevCount);
                    return prevCount + 1;
                  });
                }}
              >
                +
              </Button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Implement your TaskManager component here
            </p>
          </div>
        </div>
        
        {/* API data display will go here */}
        <Route path="/api" element={<ApiIntegration />} />

        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fetch and display data from an API here
          </p>
        </div>

        {/* Card Component Demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Basic Card */}
          <Card 
            padding="lg" 
            shadow="xl" 
            rounded="lg"
            border={true}
            className="h-full bg-white shadow-md border border-gray-200"
          >
            <Card.Title className="text-xl">Profile</Card.Title>
            <Card.Content>
              <p className="mb-2"><strong>Name:</strong> John Doe</p>
              <p className="mb-2"><strong>Email:</strong> john@example.com</p>
              <p><strong>Role:</strong> Developer</p>
            </Card.Content>
          </Card>

          {/* Hoverable Card */}
          <Card 
            hoverable 
            variant="success" 
            padding="lg"
            shadow="xl"
            rounded="lg"
            className="h-full transform transition-all duration-300 hover:scale-105"
          >
            <Card.Title className="text-xl">Success!</Card.Title>
            <Card.Content>
              <p>Your action was completed successfully.</p>
              <p className="mt-2">Everything is working as expected.</p>
            </Card.Content>
          </Card>

          {/* Feature Card */}
          <Card 
            padding="lg" 
            shadow="xl"
            rounded="lg"
            border={true}
            className="h-full bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
          >
            <Card.Title className="text-xl">Project Status</Card.Title>
            <Card.Content>
              <p className="mb-2">Project: Task Manager</p>
              <p className="mb-2">Status: In Progress</p>
              <p>Completion: 75%</p>
            </Card.Content>
          </Card>
        </div>
     </main>

      {/* Footer component will go here */}
      <Footer />
      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 