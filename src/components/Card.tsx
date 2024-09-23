import { CardContent, CardHeader, CardMedia } from '@mui/material'
import Card from '@mui/material/Card'

export const CardComponent = ({
  children,
  actions,
  title,
  media,
}: {
  children?: React.ReactNode
  actions?: React.ReactNode[]
  title?: React.ReactNode
  media?: string
}) => {
  return (
    <Card>
      {title ? <CardHeader title={title} /> : null}
      {media ? (
        <CardMedia
          component='img'
          height='194'
          image={media}
          alt='some image'
        />
      ) : null}
      {children ? <CardContent>{children}</CardContent> : null}
      {actions?.length ? actions.map((action) => action) : null}
    </Card>
  )
}

export default Card
