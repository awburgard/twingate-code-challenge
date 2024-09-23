import { HeroImage } from './HeroImage'

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
    <div
      style={{
        display: 'flex',
        flexDirection: leftToRight ? 'row' : 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {title && <h1>{title}</h1>}
          <p
            style={{
              width: '80%',
              textAlign: 'center',
            }}
          >
            {text}
          </p>
        </div>
      </div>
      <div
        style={{
          width: '50%',
          height: '100%',
        }}
      >
        <HeroImage imageURI={imageURI} />
      </div>
    </div>
  )
}
