export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} office339. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
