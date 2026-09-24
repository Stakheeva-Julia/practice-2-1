// src/tasks/task4-integration.ts
import { Book, Catalog, BookFilter } from './task1-types';;

export function createBookFromForm(formData: FormData): Book {
  // Взять данные из FormData, сгенерировать id, вернуть объект Book
}

export function addBookToCatalog(catalog: Record<string, Book>, book: Book): Record<string, Book> {
  // Добавить книгу в каталог, вернуть новый объект
}