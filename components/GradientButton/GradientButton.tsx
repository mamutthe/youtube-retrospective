export function GradientButton() {
  return (
    <div>
      <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group blue-gradient group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
        <span className="px-20 py-3 transition-all ease-in duration-100 bg-white rounded-md group-hover:bg-opacity-0">
          Get Started
        </span>
      </button>
    </div>
  );
}
