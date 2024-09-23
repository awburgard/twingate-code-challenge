export const HeroImage = ({ imageURI }: { imageURI: string }) => {
  return (
    <img
      src={imageURI}
      alt='some hero image'
      height={'100%'}
      width={'100%'}
      style={{ objectFit: 'cover' }}
    />
  )
}
