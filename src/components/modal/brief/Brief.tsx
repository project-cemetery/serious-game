import * as React from 'react'

import Container from './BriefContainer'

export interface Props {
    content: string
}

export class Brief extends React.PureComponent<Props> {

    public render() {
        const { content } = this.props

        return (
            <React.Fragment>
                <p>{content}</p>
            </React.Fragment>
        )
    }
}

export default Container(Brief)
