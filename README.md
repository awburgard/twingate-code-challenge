### Twingate Code Challenge

To run:

1. run npm install
2. then run npm run dev

### items for improvement

1. Create compound components for the Card
   - right now its sort of messy and the API for it is contrived. We could easily create a Card.Title, Card.Media, etc to enable better DX
2. Better data fetching and refetching
   - goes without saying but limited by local dev
   - add abort controller
   - cacheing, etc
3. Better error handling validation
   - we could easily build out a mechanism that follows the error trace from the validator and wrap each component in an error boundary so that only that particular error is shown
     rather than the entirety of the landing page being blanked out
