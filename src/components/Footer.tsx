export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 text-center">
      <p className="text-gray-600 text-sm">
        Designed &amp; Built by{" "}
        <span className="text-violet-400 font-medium">Samyam Jung Thapa Chhetri</span>
        {" · "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
