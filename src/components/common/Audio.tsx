import * as React from 'react'

interface Props {
    path: string
    loop?: boolean
}

export default class AudioComponent extends React.PureComponent<Props> {

    private audio: HTMLAudioElement

    constructor(props: Props) {
        super(props)

        this.audio = new Audio(props.path)
    }

    public render() {
        return <div />
    }

    public componentDidMount() {
        this.audio.play()

        this.audio.loop = !!this.props.loop
    }

    public componentWillUnmount() {
        this.audio.pause()
    }
}
