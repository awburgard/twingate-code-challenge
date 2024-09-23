export const HeroImage = ({ imageURI }: { imageURI: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageURI})`,
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
