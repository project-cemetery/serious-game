import * as React from 'react'

import Audio from '../../common/Audio'

const secretaryAudio = require('../../../assets/secretary.ogg')
// const secretaryAudio = 'http://streaming.tdiradio.com:8000/house.mp3'

export default () => <Audio audio={secretaryAudio} />
