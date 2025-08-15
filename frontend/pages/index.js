// pages/index.js

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl">SurveyHub</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Register</button>
          <button className="text-white hover:text-gray-200 transition duration-300">Login</button>
        </div>
      </header>

      {/* Main Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Earn Money by Answering Surveys</h2>
        <p className="text-lg mb-6">Sign up and start earning money with surveys!</p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300">Start Survey</button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-16">
        <div className="flex flex-col items-center">
          <span className="text-green-500 text-4xl mb-4">✔</span>
          <h3 className="font-bold text-xl">Get paid in under 10 minutes</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-green-500 text-4xl mb-4">✔</span>
          <h3 className="font-bold text-xl">Highest survey completion rates</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-green-500 text-4xl mb-4">✔</span>
          <h3 className="font-bold text-xl">Works for everyone</h3>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 SurveyHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
