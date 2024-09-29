# Автоматическая загрузка прайс-листов

## Настройка прайс-листов из почтового ящика

1\. Переходим во вкладку "Настройки" -> "Настройка прайсов"

2\. Добавляем новую строку
![Добавление новой строки](../../../_assets/price-handler/auto/Screenshot_2024_09_29-9.png)

3\. Заполнение адреса ссылки

**Формула:**  
`mail://info@gmail.com:12345/price@mail.ru/ACC Distribution/АСС`

**Пояснение:**

- **info@gmail.com** - адрес вашей почты
- **12345** - пароль от почты
- **price@mail.ru** - адрес отправителя (можно не заполнять)
- **ACC Distribution** - тема письма (можно указать только часть названия, если оно постоянно меняется)
- **АСС** - название вложенного прайса (указывать без даты)

#### Пример формулы без заполнения адреса отправителя:
`mail://info@gmail.com:12345/ /ACC Distribution/АСС`

Если прайс указывается с датой, то пишем только первую часть названия, без цифр:  
Пример: `price_10_08_16.xls` -> `price`

**Формула:**  
`mail://info@gmail.com:12345/price@mail.ru/ACC Distribution/price`

4\. Заполнение необходимых столбцов
Заполняем полученную ссылку и указываем необходимые столбцы. Для одного прайса можно задать сразу несколько "целей" загрузки в разные вкладки в системе.

![Пример заполнения столбцов](../../../_assets/price-handler/auto/Screenshot_2024_09_29-2.png)

### Пример письма в почтовом ящике
![Пример письма](../../../_assets/price-handler/auto/Screenshot_2024_09_29-3.png)

### Варианты итоговой ссылки

- `mail://info@gmail.com:12345/noreply@nereida.by/Прайс-лист (Нереида)/Nereida price-list`
- `mail://info@gmail.com:12345/@nereida.by/прайс/price`

5\. Завершение настройки
Когда все нужные столбцы заполнены, просто закрываем окно.

6\. Проверка правильности настройки прайса
Нажимаем **"Запустить"** напротив нашей ссылки:

![Кнопка запуска](../../../_assets/price-handler/auto/Screenshot_2024_09_29-4.png)

7\. Проверка загруженного прайса
Прайс загрузится в указанную вкладку, где его можно проверить.

### Настройки почты
Необходимо убедиться, что в настройках почты разрешен доступ по протоколу IMAP:

## IMAP

{% list tabs %}

- Yandex

  text 1

- Gmail

  text 2

{% endlist %}


<!-- ![Настройки IMAP](export/services/2022-01-12_14-17-53.png) -->

**Включение двухэтапной аутентификации:**

<!-- ![Двухэтапная аутентификация](export/services/двух_этапная_аутентификация.png) -->

**Добавление пароля приложения:**

<!-- ![Пароль приложения 1](export/services/2022-06-08_11-51-15.png) ![Пароль приложения 2](export/services/2022-06-08_11-51-31.png) -->

**Использование пароля при настройке загрузки прайса.**

Также необходимо разрешить доступ к почте небезопасным приложениям:

<!-- ![Настройка доступа](export/services/2022-01-12_14-03-10.png) -->

### Дополнительные настройки для почты tut.by, Яндекс
Для почты tut.by и Яндекс необходимо дополнительно указать IMAP сервер: `imap.yandex.ru`

<!-- ![Пример настройки IMAP](export/services/imap.jpg) -->

{% cut "***Видео инструкция***" %}

<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="youtubeplayer" type="text/html" width="640" height="390"
  src="https://www.loom.com/embed/9d448e5cec0c4f01916bb90f0f49f9dc"
  frameborder="0"/></div></p>

{% endcut %}


## Настройка прайсов из Dropbox

### 1. Переходим во вкладку "Настройки" -> "Настройка прайсов"

### 2. Добавляем новую строку и прописываем нужную ссылку/отмечаем столбцы
<!-- ![Пример заполнения столбцов](export/services/price_settings2.png) -->

### Форматирование ссылки для Dropbox
- Переходим на прайс по ссылке Dropbox (например, прайс Gardena)

**Пример ссылки:**

`https://www.dropbox.com/sh/thtu4k8k0gbyulh/AAC8AVfBHEdlB3yL8TrJiUmMa/Gardena.xls?dl=0`

**Преобразуем в:**

`https://www.dropbox.com/sh/thtu4k8k0gbyulh/AAC8AVfBHEdlB3yL8TrJiUmMa/Gardena.xls?dl=1&pv=1`

**Замена:**  
`dl=0` на `dl=1&pv=1` (в конце ссылки)

### 3. Применение полученной ссылки
Готово, полученную ссылку можно использовать.

---

## Настройка прайсов из Google Docs

### Пример ссылки
https://docs.google.com/spreadsheets/d/1MV6qMbxkV5Gw-S7nV13HrOSvJq41xkMgSCITXQshnKQ/pub?output=html

### Формула для скачивания в формате Excel
Необходимо заменить последнюю часть после `/` на `/export?exportFormat=xlsx`.

**Пример:**

`https://docs.google.com/spreadsheets/d/1MV6qMbxkV5Gw-S7nV13HrOSvJq41xkMgSCITXQshnKQ/pub?output=html`

**Преобразуем в:**

`https://docs.google.com/spreadsheets/d/1MV6qMbxkV5Gw-S7nV13HrOSvJq41xkMgSCITXQshnKQ/export?exportFormat=xlsx`

### Формула для загрузки вкладки в формате CSV
Заменяем `/edit#gid=1615075392` на `/export?exportFormat=csv&gid=1053932382`:

**Пример:**

`https://docs.google.com/spreadsheets/d/1knVFWPz3a6_aH7nvtsaeSka2nH0yAriGvZAEsJ6o-gE/edit#gid=1615075392`

**Преобразуем в:**

`https://docs.google.com/spreadsheets/d/1knVFWPz3a6_aH7nvtsaeSka2nH0yAriGvZAEsJ6o-gE/export?exportFormat=csv&gid=1053932382`

**Примечание:**  
Вкладка всегда указывается под номером 1.

*Прайс по ссылке Google Docs можно настроить только если он **"опубликован"**:*

<!-- ![Пример опубликованного документа](export/services/public.png) -->

### Автоматическая загрузка по расписанию
Автоматическую загрузку прайс-листов можно настроить по расписанию, в удобное для вас время.

---

## Настройка прайсов с FTP

### 1. Переходим во вкладку "Настройки" -> "Настройка прайсов"

### 2. Добавляем новую строку
<!-- ![Добавление новой строки](export/services/add_link.png) -->

### 3. Заполнение адреса ссылки
**Формула:**  
`ftp://zoomos:12345@ftp.site.by/Zoomos.csv`

**Пояснение:**

- **ftp.site.by** - адрес FTP
- **12345** - пароль
- **zoomos** - логин
- **Zoomos.csv** - название файла
