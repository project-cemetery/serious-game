import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../../../reducers'
import briefActions from '../../../store/brief/actions'

import { Props as ComponentProps } from './Brief'

interface Props {
    content?: string

    hide?: () => void
    determine?: () => void
}

export default function(Component: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props

    @(connect(mapStateToProps, { ...briefActions }) as any)
    class Wrapped extends React.Component<ConatinerProps> {

        public render() {
            const { content } = this.props

            return <Component content={content!} />
        }

        public componentDidMount() {
            this.props.determine!()
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
    content: state.brief.content,
})
