import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'

export const CardComponent = ({
  children,
  actions,
}: {
  children: React.ReactNode
  actions?: React.ReactNode[]
}) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
      {actions?.length ? actions.map((action) => action) : null}
    </Card>
  )
}

export default Card
