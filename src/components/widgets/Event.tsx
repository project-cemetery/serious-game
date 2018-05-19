import * as React from 'react'

import Button from '@material-ui/core/Button'

export default class Event extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <React.Fragment>
                <Button variant="raised" color="secondary">
                    Завершить неделю
                </Button>
            </React.Fragment>
        )
    }

}
