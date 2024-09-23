// this is an awful name for a component
export const Data = ({ url }: { url: string }) => {
  // fetch the data from the url
  // refetch the data when the button is clicked
  const refetch = () => {
    console.log('refetching')
  }
  return (
    <>
      <button onClick={refetch}>Refresh</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </>
  )
}
