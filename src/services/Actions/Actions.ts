import { injectable } from 'inversify'

import ActionsInterface from './index'

const actions = [
    {
        title: 'Решение',
        description: 'Описание',
        body: `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        `,
        // tslint:disable-next-line:no-console
        consequences: (v: number) => console.log(`РЕШЕНО! ${v}`),
        slider: { min: 0, max: 10 },
    },
]

@injectable()
export default class Actions implements ActionsInterface {
    public getActions() {
        return actions
    }
}
