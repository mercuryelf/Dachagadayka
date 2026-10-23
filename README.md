# 🏡 Дачагадайка

Интерактивный симулятор угадывания цен на дачи в Ленинградской области.

## Описание

Дачагадайка — это веб-приложение, которое позволяет проверить, насколько хорошо вы разбираетесь в ценах на дачную недвижимость в Ленобласти. 

### Механика
- 10 случайных объявлений из базы
- Бегунок для выбора цены
- Система подсчёта баллов (0-100 за раунд)
- Итоговый результат с категорией

### Категории результатов
- 🌱 **Опытный огородник** — близки к реальным ценам (70+ баллов)
- 💰 **Щедрый дачник** — переплачиваете за недвижимость (40-69 баллов)
- 🏚️ **Уходи с моей дачи** — экономный инвестор (менее 40 баллов)

## Технологии

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Без тяжёлых библиотек

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Проверка типов
npm run typecheck
```

## Деплой

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Загрузите папку dist/ в Netlify
```

### GitHub Pages
```bash
npm run build
# Загрузите содержимое dist/ в gh-pages branch
```

## Структура

```
src/
├── App.tsx              # Главный компонент с навигацией
├── main.tsx             # Точка входа
├── index.css            # Стили Tailwind
├── data/
│   └── dachas.ts        # Данные о дачах и утилиты
└── components/
    ├── HomePage.tsx     # Главная страница
    ├── GamePage.tsx     # Игровой экран
    ├── ResultPage.tsx   # Экран результатов
    └── Footer.tsx       # Подвал
```

## Безопасность

Проект включает security headers:
- CSP (Content Security Policy)
- Referrer-Policy: strict-origin-when-cross-origin
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## Лицензия

MIT
