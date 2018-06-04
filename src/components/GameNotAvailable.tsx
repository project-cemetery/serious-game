import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default () =>
    <Card style={{ margin: '2rem' }}>
        <CardContent>
            <Typography variant="title" component="h1" gutterBottom>
                Севернее Кореи
            </Typography>

            <Typography component="p" gutterBottom>
                К сожалению, дисплей вашего устройства слишком мал.
            </Typography>

            <Typography component="p" gutterBottom>
                Пожалуйста, попробуйте поиграть с другого устройства.
            </Typography>
        </CardContent>
    </Card>
