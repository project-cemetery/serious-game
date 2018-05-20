import Action from '../../models/Action'
import ActionsInterface from './index'

import { injectable } from 'inversify'

import WorldState from '../WorldState'

const actions = [
    {
        title: 'Общее благо',
        description: 'Повысить налоги',
        body: 'Я сидел дома и, по обыкновению, не знал, что с собой делать. ' +
              'Чего-то хотелось: не то конституции, не то севрюжины с хреном, не то кого-нибудь ободрать. ' +
              'Ободрать бы сначала, мелькнуло у меня в голове, ободрать, да и в сторону... ' +
              'А потом, зарекомендовав себя благонамеренным, можно и о конституциях на досуге помечтать. ' +
              'Да так и сделаем, дам указание Зайчикову проработать ' +
              'повышение налогообложения по всем фронтам ради общего блага.',

        consequences: (state: WorldState, slider: number) => {
            state.applyChanges({
                autocracy: `+${slider}`,
                money: `+${slider}`,
                internalOpinion: '-10',
            })
        },
        slider: { min: 0, max: 20 },
    },
    {
        title: 'А ты танцуй, девочка, танцуй',
        description: 'Отменить принудительное лечение',
        body: 'Как далеко может зайти гипнотическое овладение личностью? Реально ли преступное использование ' +
              'гипноза? Вопрос этот пенился и кипел в моей голове уже второй месяц, ' +
              'после нашумевших процессов об изнасилованиях под гипнозом. Выяснялось тогда, как правило, ' +
              'что одна из двух составляющих преступления прискорбно отсутствовала: либо гипноза не было, ' +
              'либо изнасилования. "Надо с этим завязывать" - подумал я. Я снял трубку и набрал Волкова: ' +
              '"Давай завязывать с этим," - сказал я ему. "Понял," - донеслось в ответ. - ' +
              '"Завтра же отменим принудительное лечение для всего населения".',

        consequences: (state: WorldState, slider: number) => {
            state.applyChanges({
                democracy: '+10',
                money: '+10',
                internalOpinion: '+10',
                externalOpinion: '+10',
            })
        },
    },
    {
        title: 'Кураж-бомбей',
        description: 'Запретить импортные лекарства',
        body: 'Во время обсуждения сферы здравоохранения министр Тупых заявил, что продолжающиеся ' +
              'контрсанкции создадут проблемы не для бизнеса Пендосии, а для местного населения. ' +
              'Он добавил, что сейчас сам пьет лекарства, произведенные в стране "возможного противника". ' +
              '"Выплевывайте. Кору дуба заваривайте", — с иронией посоветовал ему Худой. Да, точно! ' +
              'Эврика! Худой - нам нужно больше Худых. "Зайчиков, объявите федеральный ' +
              'конкурс - нам нужно больше Худых!"',

        consequences: (state: WorldState) => {
            state.applyChanges({
                autocracy: '+10',
                people: '-20',
                money: '+10',
                internalOpinion: '+10',
                externalOpinion: '-10',
            })
        },
    },
]

@injectable()
export default class Actions implements ActionsInterface {

    private callback: () => void

    public setCallback(callback: () => void) {
        this.callback = callback
    }

    public getActions() {
        return actions.map((action: Action) => {
            return {
                ...action,
                consequences: (state: WorldState, slider?: number) => {
                    action.consequences(state, slider)
                    this.callback()
                },
            }
        })
    }
}
