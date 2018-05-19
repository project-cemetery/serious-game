import * as React from 'react'

import Button from '@material-ui/core/Button'

export default class Reports extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <React.Fragment>
                <Button variant="raised" color="primary">
                    Архив отчетов
                </Button>
            </React.Fragment>
        )
    }

}
