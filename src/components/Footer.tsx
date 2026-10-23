export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-3 px-4">
      <div className="max-w-lg mx-auto flex justify-center gap-4 text-xs text-gray-400">
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          О проекте
        </a>
        <span>•</span>
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          GitHub
        </a>
        <span>•</span>
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          Обратная связь
        </a>
      </div>
      <div className="text-center mt-1 text-xs text-gray-300">
        © 2024 Дачагадайка
      </div>
    </footer>
  );
}
