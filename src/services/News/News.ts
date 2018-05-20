import { injectable } from 'inversify'

import NewsInterface from './index'

const news = [
    { title: 'РБК', text: 'Полный состав нового российского правительства' },
    { title: 'Meduza', text: 'В Москве прошел учредительный съезд партии Навального' },
    { title: 'RT на русском', text: 'Абэ выразил надежду на достижение прогресса в заключении мирного договора с РФ' },
]

@injectable()
export default class News implements NewsInterface {
    public getNews(limit?: number) {
        return news.slice(0, limit || news.length)
    }
}
