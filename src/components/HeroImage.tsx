import { CardComponent } from './Card'
import Grid from '@mui/material/Grid2'

export const HeroImage = ({ imageURI }: { imageURI: string }) => {
  return (
    <Grid size={12}>
      <CardComponent>
        <img
          src={imageURI}
          alt='some hero image'
          height={'100%'}
          width={'100%'}
          style={{ objectFit: 'cover' }}
        />
      </CardComponent>
    </Grid>
  )
}
