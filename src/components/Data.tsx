import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import useFetch from '../hooks/useFetch'
import { CardComponent } from './Card'

interface DataComponentProps {
  url: string
}

export const DataComponent = ({ url }: DataComponentProps) => {
  const { data, refetch } = useFetch(url)

  if (!data) {
    return <p>Loading...</p>
  }

  return <Data data={data} refetch={refetch} />
}

interface DataProps {
  data: any
  refetch: () => void
}

const Data = ({ data, refetch }: DataProps) => {
  return (
    <Grid size={12}>
      <CardComponent
        actions={[
          <Button onClick={refetch} variant='outlined'>
            Refresh
          </Button>,
        ]}
      >
        {JSON.stringify(data, null, 2)}
      </CardComponent>
    </Grid>
  )
}
