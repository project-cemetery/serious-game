import * as React from 'react'

interface Props {
    audio: string
    loop?: boolean
}

export default class Music extends React.PureComponent<Props> {

    private audio: HTMLAudioElement

    constructor(props: Props) {
        super(props)

        this.audio = new Audio(props.audio)
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
