import { Data } from '../components/Data'
import ErrorBoundary from '../components/ErrorBoundary'
import { HeroImage } from '../components/HeroImage'
import { ImageText } from '../components/ImageText'
import { useJsonContext } from '../context/JsonContext'

export const LandingPageContainer = () => {
  const { parsedJson, isValid } = useJsonContext()

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <LandingPagePresentation content={parsedJson} />
    </ErrorBoundary>
  )
}

const LandingPagePresentation = ({ content }: { content: any[] | null }) => {
  return (
    <div>
      {content ? (
        content.map((item, index) => {
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
              return <Data key={index} url={item.url} />
            default:
              return null
          }
        })
      ) : (
        <p>start typing up your landing page!</p>
      )}
    </div>
  )
}
