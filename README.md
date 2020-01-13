# bankus_project
Bankus -- Project for MIPT Fullstack Dev Course. Lecturer: Gavenko Irina. 2019 (C)


### Ру

Данный проект был создан для зачета по курсу основы Фуллстек Программирования в МФТИ ФИВТ 2019. 

Проект написан на связке React.js + Redux.js + Django + Django REST API Framework. 

При написании использованы различные технологии из вышеописанных библиотек, такие как: 
По фронт-части: 
 ⁃ Наличие 3 страниц
 ⁃ Сохранение данных между сессиями работы пользователя
 ⁃ Наличие частично адаптивного интерфейса (подходящего и корректно воспроизводящегося с мобильных устройств)
 ⁃ Использование redux для хранения состояния
 ⁃ Наличие функциональных и классовых компонентов
 ⁃ Наличие анимаций в интерфейсе
 ⁃ Наличие формы ввода данных (корректно работающей с клавиатурой)

по бэк-части:
- реализация полноценного MVC проекта (Model-View-Controller)
- использование сериализаторов и шаблонизаторов Django
- реализация процесса аутентификации, разделение прав
- создание и поддержка админ-панели, для удобной и быстрой интеграции с БД
- работа с БД, полноценные процессы CRUD


## Цель приложения: 

Данный сайт является агрегатором информации о текущих котировках банков РФ. Он в автоматическом режиме собирает данные с помощью API и обновляет информацию и котировках на главном сайте. (Делается через URL /api/leads с помощью POST-запроса).

Также доступна возможность регистрации пользователей и представителей банка через сайт, для участия в обсуждениях и получении административных прав.

В дальнейшем планируется оснастить сайт более полным функционалом и довести до состояния MVP.

## Некоторые скриншоты страниц сайта:

![Скрин формы регистрации пользователя](https://sun9-3.userapi.com/c206516/v206516427/382af/Msvw7qqE_Gs.jpg)
![Скрин главной страницы](https://sun9-48.userapi.com/c206516/v206516320/39612/NvMuelBUox0.jpg)
![Скрин админ-панели](https://sun9-71.userapi.com/c206516/v206516320/3961b/nHBGqozbze4.jpg)

