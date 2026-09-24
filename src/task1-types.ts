// Задание 1: Интерфейсы и типы
// Описание модели каталога книг

// TODO 1: Объявите интерфейс Book
// Поля:
//   - id (string, readonly)
//   - title (string)
//   - authors (массив строк)
//   - year (number, опционально)
//   - rating (number от 0 до 5, опционально)
interface Book {
  readonly id: string;
  title: string;
  authors: string[];
  year?: number;
  rating?: number; // от 0 до 5
}

// TODO 2: Объявите тип Catalog как словарь: ключ — id книги, значение — Book
// Используйте Record<string, Book>
type Catalog = Record<string, Book>;

// TODO 3: Объявите тип BookFilter как функцию, которая принимает Book и возвращает boolean
type BookFilter = (book: Book) => boolean;

// TODO 4: Реализуйте функцию formatBook(book: Book): string
// Формат: "Title (Year) — Authors"
// Если year не указан — пропустить скобки
// Пример: "TypeScript Guide (2023) — John Doe, Jane Smith"
function formatBook(book: Book): string {
  const yearPart = book.year !== undefined ? ` (${book.year})` : '';
  const authorsPart = book.authors.join(', ');
  return `${book.title}${yearPart} — ${authorsPart}`;
}

// TODO 5: Реализуйте функцию calculateAverageYear(books: Book[]): number
// Вернуть средний год издания. Если книг нет или у них нет года — вернуть 0.
function calculateAverageYear(books: Book[]): number {
  const years = books
    .map((b) => b.year)
    .filter((y): y is number => y !== undefined);

  if (years.length === 0) {
    return 0;
  }

  const sum = years.reduce((acc, y) => acc + y, 0);
  return sum / years.length;
}