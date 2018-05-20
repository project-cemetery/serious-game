import * as React from 'react'

import Action from '../../models/Action'
import ActionsInterface from './index'

import { injectable } from 'inversify'

import WorldState from '../WorldState'

// tslint:disable:max-line-length
const actions = [
    {
        title: 'Повысить налоги',
        description: 'Деньги',
        body:
            <React.Fragment>
                <p>Я сидел дома и, по обыкновению, не знал, что с собой делать. Чего-то хотелось: не то конституции, не то севрюжины с хреном, не то кого-нибудь ободрать. Ободрать бы сначала, мелькнуло у меня в голове, ободрать, да и в сторону... А потом, зарекомендовав себя благонамеренным, можно и о конституциях на досуге помечтать. Да так и сделаем, дам указание Волкову проработать повышение налогообложения по всем фронтам ради общего блага.</p>
                <p>Сейчас в стране достаточно высокие налоги.</p>
                <ul>
                    <li>Денег станет больше</li>
                    <li>Вполне возможно, что народ не будет доволен такими изменениями</li>
                </ul>
            </React.Fragment>,
        consequences: (state: WorldState, slider: number) => {
            state.applyChanges({
                autocracy: `+${slider}`,
                money: `+${slider}`,
                internalOpinion: '-10',
            })

            return 'Никаких изменений в социуме практически не произошло - Ваше население привыкло выживать, что собственно и продолжило делать.'
        },
        slider: { min: 0, max: 20 },
        used: false,
    },
    {
        title: 'Ограничить принудительное лечение',
        description: 'Законодательство',
        body:
            <React.Fragment>
                <p>Как далеко может зайти гипнотическое овладение личностью? Реально ли преступное использование гипноза? Вопрос этот пенился и кипел в моей голове уже второй месяц, после нашумевших процессов об изнасилованиях под гипнозом. Выяснялось тогда, как правило, что одна из двух составляющих преступления прискорбно отсутствовала: либо гипноза не было, либо изнасилования. "Надо с этим завязывать" - подумал я. Я снял трубку и набрал Волкова: "Давай завязывать с этим," - сказал я ему. "Понял," - донеслось в ответ. - "Завтра же отменим принудительное лечение для всего населения".</p>
                <p>Добрая треть страны заперта по психбольницам, остальные в постоянном страхе.</p>
                <ul>
                    <li>Вы освободите немного денег</li>
                    <li>Настроение насление несколько улучшится</li>
                </ul>
            </React.Fragment>,
        consequences: (state: WorldState, slider: number) => {
            state.applyChanges({
                democracy: '+10',
                money: '+10',
                internalOpinion: '+10',
                externalOpinion: '+10',
            })

            return 'Вы стали богоподобным - отказ от насилия Ваш народ принял более чем оптимистично. Появилась вера в светлое будущее и стабильность.'
        },
        used: false,
    },
    {
        title: 'Ввести контр-санкции',
        description: 'Правительство',
        body:
            <React.Fragment>
                <p>Во время обсуждения сферы здравоохранения министр Тупых заявил, что продолжающиеся контсанкции создадут проблемы не для бизнеса Пендосии, а для местного населения. Он добавил, что сейчас сам пьет лекарства, произведенные в стране "возможного противника". "Выплевывайте. Кору дуба заваривайте", — с иронией посоветовал ему Худой. Да, точно! Эврика! Худой - нам нужно больше Худых. "Волков, объявите федеральный конкурс - нам нужно больше Худых!"</p>
                <p>Многие лекарства незаменимы.</p>
                <ul>
                    <li>Вполне вероятно, что народ начнет умирать</li>
                    <li>Отечественные лекарства — отечественные налоги, заработаем</li>
                </ul>
            </React.Fragment>,
        consequences: (state: WorldState) => {
            state.applyChanges({
                autocracy: '+10',
                people: '-20',
                money: '+10',
                internalOpinion: '+10',
                externalOpinion: '-10',
            })

            return 'Скрепы ликовали! Правда не долго... Перестали ликовать сразу, после того как население сократилось в 2 раза.'
        },
        used: false,
    },
]

@injectable()
export default class Actions implements ActionsInterface {

    private callback: () => void

    public setCallback(callback: () => void) {
        this.callback = callback
    }

    public getActions() {
        return actions
            .filter((action: Action) => !action.used)
            .map((action: Action) => ({
                ...action,
                consequences: (state: WorldState, slider?: number) => {
                    action.used = true
                    if (this.callback) {
                        this.callback()
                    }

                    return action.consequences(state, slider)
                },
            }))
    }
}
