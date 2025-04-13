# BlogCustomizer - Кастомизатор блога

## Начало работы

Чтобы начать работу с проектом в GitLab, выполните следующие шаги.



## Добавление файлов

- [ ] [Создать](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) или [загрузить](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) файлы
- [ ] [Добавить файлы через командную строку](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) или запушить существующий Git-репозиторий:

```bash
cd existing_repo
git remote add origin https://practicum.gitlab.yandexcloud.net/web-faculty-content/project-drafts/sp10_blogcustomizer.git
git branch -M master
git push -uf origin master
```

## Интеграция с инструментами

- [ ] [Настройте интеграции проекта](https://practicum.gitlab.yandexcloud.net/web-faculty-content/project-drafts/sp10_blogcustomizer/-/settings/integrations)


# Описание проекта

**BlogCustomizer** - это инструмент для кастомизации внешнего вида статей блога с возможностью настройки:

- Семейства шрифтов
- Размера текста
- Цветовой схемы
- Ширины контента
## Установка

Клонируйте репозиторий:
```
git clone https://practicum.gitlab.yandexcloud.net/web-faculty-content/project-drafts/sp10_blogcustomizer.git
cd sp10_blogcustomizer
```
Установите зависимости:
```
npm install
```
Запустите проект:
```
npm start
```
Используемый стек

- React
- TypeScript
- SCSS модули
- StoryBook

## Скриншоты интерфейса
##### Начальная страница
![interface_1](interface_1.png)
##### Сайдбар с настройками
![interface_2](interface_2.png)