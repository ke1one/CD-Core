
# Что это?
CD Core ❎ - Example для создания чат-ботов ВКонтакте от Ke1one<br>
🌈🧼 Здесь находится всё, что нужно для быстрого создания ботов
# Установка
🆔 Используйте Heroku, создайте там add-ons с PostgreSQL и измените все данные в 📊 .env, в tools/config.mjs находится всё, необходимое для настройки Вашего бота:
- 🚀 GROUP_TOKEN = Токен Вашего сообщества
- 🔎 GROUP_ID = Айди Вашего сообщества
- 📚 DATABASE_LINK = Ссылка для подключения

⭐ В tools/config.mjs необходимо изменить setting.createDatabase на true, а затем, когда таблица будет создана, поставить вновь на false

```js
const keys = {
	groupToken: GROUP_TOKEN,
	groupID: GROUP_ID,
	databaseLink: DATABASE_LINK,
	setting: { createDatabase: true }
}
```
## Как получить токен и ID?
1. 🍔 Перейдите в https://vk.com/group_screen_name_or_id?act=tokens и во вкладке "Long Poll API" зайдите в "Типы событий", настройке всё под себя и создайте ключ во вкладке "Ключи доступа"
2. 💬 Получите ID сообщества по ссылке https://vk.com/group_screen_name_or_id?act=edit чуть ниже "Адрес:"

В корневой папке должен находится файл ".env":
```
GROUP_TOKEN = GROUPTOKEN
GROUP_ID = GROUPID
DATABASE_LINK = postgres://LINK
```

🎯 Всё ещё находится в разработке
