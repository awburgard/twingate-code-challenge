import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import { CardComponent } from './Card'
import { HeroImage } from './HeroImage'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

const StyledContainer = styled(Box)<{ leftToRight?: boolean }>(
  ({ leftToRight }) => ({
    display: 'flex',
    flexDirection: leftToRight ? 'row' : 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  })
)

export const ImageText = ({
  imageURI,
  text,
  title,
  leftToRight,
}: {
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean
}) => {
  return (
    <Grid size={12}>
      <CardComponent title={title}>
        <StyledContainer leftToRight={leftToRight}>
          <Typography>{text}</Typography>
          <HeroImage imageURI={imageURI} />
        </StyledContainer>
      </CardComponent>
    </Grid>
  )
}
