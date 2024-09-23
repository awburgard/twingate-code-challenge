import Grid from '@mui/material/Grid2'
import { DataComponent } from '../components/Data'
import { HeroImage } from '../components/HeroImage'
import { ImageText } from '../components/ImageText'
import { useJsonContext } from '../context/JsonContext'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

const StyledContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(3),
}))

export const LandingPageContainer = () => {
  const { parsedJson, isValid } = useJsonContext()

  if (!isValid || !parsedJson || parsedJson.length === 0) {
    return <Typography color='error'>Invalid JSON</Typography>
  }

  return <LandingPagePresentation content={parsedJson} />
}

const LandingPagePresentation = ({ content }: { content: any[] | null }) => {
  return (
    <StyledContainer container spacing={2}>
      {content
        ? content.map((item, index) => {
            switch (item.type) {
              case 'hero':
                return <HeroImage key={index} imageURI={item.imageURI} />
              case 'image-text':
                return (
                  <ImageText
                    key={index}
                    imageURI={item.imageURI}
                    text={item.text}
                    title={item.title}
                    leftToRight={item.leftToRight}
                  />
                )
              case 'data':
                return <DataComponent key={index} url={item.url} />
              default:
                return null
            }
          })
        : null}
    </StyledContainer>
  )
}
