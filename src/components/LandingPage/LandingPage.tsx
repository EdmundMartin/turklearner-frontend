const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Learn Turkish Grammar with Ease
        </h1>

        {/* Introductory Text */}
        <p className="text-lg text-gray-700 mb-6">
          Our platform offers interactive exercises and quizzes to help you
          master Turkish grammar. Whether you're just starting out or looking to
          improve, our simple quizzes will guide you every step of the way.
        </p>

        {/* Button */}
        <a
          href="/topic-list"
          className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  )
}

export default LandingPage
