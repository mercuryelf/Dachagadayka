export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-3 px-4 mt-auto">
      <div className="max-w-lg mx-auto flex justify-center gap-4 text-xs text-gray-400">
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          О проекте
        </a>
        <span className="text-gray-200">•</span>
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          GitHub
        </a>
        <span className="text-gray-200">•</span>
        <a href="#" className="hover:text-[#26CD94] transition-colors">
          Обратная связь
        </a>
      </div>
      <div className="text-center mt-1.5 text-[10px] text-gray-300">
        © 2024 Дачагадайка • Симулятор цен на дачи в Ленобласти
      </div>
    </footer>
  );
}
