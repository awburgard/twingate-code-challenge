import Grid from '@mui/material/Grid2'
import { DataComponent } from '../components/Data'
import ErrorBoundary from '../components/ErrorBoundary'
import { HeroImage } from '../components/HeroImage'
import { ImageText } from '../components/ImageText'
import { useJsonContext } from '../context/JsonContext'

export const LandingPageContainer = () => {
  const { parsedJson, isValid } = useJsonContext()

  return (
    <ErrorBoundary fallback={<div>Error in your JSON</div>}>
      <LandingPagePresentation content={parsedJson} />
    </ErrorBoundary>
  )
}

const LandingPagePresentation = ({ content }: { content: any[] | null }) => {
  return (
    <Grid container spacing={2}>
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
    </Grid>
  )
}
