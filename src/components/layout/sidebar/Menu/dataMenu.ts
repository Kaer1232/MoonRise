import * as Icons from "@mui/icons-material"
import { IMenuItem } from "../../../../type"

export const menu:IMenuItem[] = [
    {
        title: 'Моя страница',
        link: '/',
        icon: Icons.Home
    },
    {
        title: 'Сообщения',
        link: '/messages',
        icon: Icons.Message
    },
    {
        title: 'Друзья',
        link: '/friends',
        icon: Icons.People
    },
    {
        title: 'Новости',
        link: '/main',
        icon: Icons.Article
    },
    {
        title: 'Игры',
        link: '/games',
        icon: Icons.GamepadSharp
    },
    /*
    {
        title: 'Авторизация',
        link: '/auth',
        icon: Icons.AutoGraph
    },
    {
        title: 'Выход',
        link: '/logout',
        icon: Icons.ExitToApp
    }*/
]