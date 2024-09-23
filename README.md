# twingate-code-challenge

# React coding exercise

The goal of this exercise is to create a React app that allows a user to dynamically generate a marketing landing page that consists of various reusable sections.

A user would define the landing page through a blob of JSON data that describes a list of sections. The app should then generate and display the landing page.

**Good luck and feel free to ask for any clarifications before you begin!**

## App mockup

This is a mockup of the application.

![https://user-images.githubusercontent.com/1637627/100313859-4c6a3600-2f6a-11eb-9bd1-1a1fda0e3ffa.png](https://user-images.githubusercontent.com/1637627/100313859-4c6a3600-2f6a-11eb-9bd1-1a1fda0e3ffa.png)

- The user can edit the JSON in the left textarea.
  - If the JSON data is valid, the section components are displayed in the right pane.
  - Otherwise, display an error message.

## App specification

The React application should contain the following UI elements:

- A textarea where the user can enter the JSON data.
- A side pane displaying the generated section components.

We need to support 3 section types:

- **Hero image**

  - JSON fields:
    - `type` (required): `"hero"`
    - `imageURI` (required): a string specifying the image URI

  ```json
  {
    "type": "hero",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
  }
  ```

  - Visual: display the image content

- **Image text**

  - JSON fields:
    - `type` (required): `"image-text"`
    - `imageURI` (required): a string specifying the image URI
    - `text` (required): a string specifying the description text
    - `title` (optional): a string specifying the image title
    - `leftToRight` (optional) (default=`true`): a boolean specifying if the image should be placed to the left of the text

  ```json
  {
    "type": "image-text",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
    "text": "Sunset from the sky......",
    "title": "Airplane",
    "leftToRight": false
  }
  ```

  - Visual:
    - If `leftToRight` is `true`:
      - Display the `image` content to the left of the `title` and `text` .
    - If `leftToRight` is `false`:
      - Display the `image` content to the right of the `title` and `text` .

- **Data**

  - JSON fields:
    - `type` (required): `"data"`
    - `url` (required): an endpoint to fetch the data. We suggest using any endpoint from [this list](https://github.com/public-apis/public-apis) that doesn't require
      authentication.

  ```json
  {
    "type": "data",
    "url": "https://cat-fact.herokuapp.com/facts"
  }
  ```

  - Visual:
    - Display the data fetched from the API endpoint as a string of JSON. Truncate the string to keep the text length reasonable.
    - A `Refresh` button that is clickable to refresh the data.

## Technical requirements

- You must implement the exercise using TypeScript.
- Only functional components are allowed and any data related hooks should be implemented without using third-party modules.
- You can use [any tools](https://react.dev/learn/start-a-new-react-project) to bootstrap the React app. However, please remove unnecessary files.
- You can use any CSS solution to style your components.
- Please document how to run your app.

## What we’re looking for

- Working code on the latest Chrome (you don't need to worry about cross-browser compatibility.)
- Good application design and structure.
- Clean code.
- You're not evaluated on the UI, e.g. you can just use native `<input>` and `<button>` elements. However, if you have prior experience with a UI library, feel free to use it.
