import * as React from 'react'

interface Props {
    audio: string
}

export default class Music extends React.Component<Props, {}> {

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

        this.audio.loop = true
    }
}
