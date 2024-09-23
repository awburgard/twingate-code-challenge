import { CardComponent } from './Card'
import Grid from '@mui/material/Grid2'

export const HeroImage = ({ imageURI }: { imageURI: string }) => {
  return (
    <Grid size={12}>
      <CardComponent media={imageURI} />
    </Grid>
  )
}
