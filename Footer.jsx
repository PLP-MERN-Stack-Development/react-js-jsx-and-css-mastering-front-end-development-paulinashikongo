// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Daily Health Tasks Tracker</p>
        <p className="text-gray-200">
          Built with 💙 using React + TailwindCSS
        </p>
      </div>
    </footer>
  );
}


