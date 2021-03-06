// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

theme.screen.components.codePane.fontSize = '2rem'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Semantic Document Structure
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            with React portals
          </Text>
          <Text margin="1em 0 0" textSize="1em">
            Utah React Meetup, 28 Feb 2018
          </Text>
          <Text textSize="1em">
            <a href="https://garrettn.github.io/react-portals-structure-slides/">
              https://garrettn.github.io/react-portals-structure-slides
            </a>
          </Text>
        </Slide>
        <Slide>
          <div
            style={{
              height: '100%',
              display: 'grid',
              gridTemplateRows: '1fr 5fr 1fr'
            }}
          >
            <header
              style={{
                padding: '0.5em',
                border: '5px solid black',
                borderRadius: '5px'
              }}
            >
              <Code>header</Code>
            </header>
            <div
              style={{
                margin: '0.1em 0',
                padding: '4em 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '5px solid black',
                borderRadius: '5px'
              }}
            >
              <Code>main</Code>
            </div>
            <footer
              style={{
                padding: '0.5em',
                border: '5px solid black',
                borderRadius: '5px'
              }}
            >
              <Code>footer</Code>
            </footer>
          </div>
        </Slide>
        <Slide>
          <Text>How I like to write HTML</Text>
          <CodePane
            lang="html"
            theme="light"
            source={`
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your basic website</title>
</head>
<body>
  <header></header>
  <main role="main"></main>
  <footer></footer>
</body>
</html>`}
          />
        </Slide>
        <Slide>
          <Text>So I tried this:</Text>
          <CodePane
            lang="jsx"
            theme="light"
            source={`
import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

render(<App />, document.body)`}
          />
          <Appear>
            <Text textColor="red" bold>
              This is bad!
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text>What React wants</Text>
          <CodePane
            lang="html"
            theme="light"
            source={`
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React all the things!</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`}
          />
        </Slide>
        <Slide>
          <div
            style={{
              padding: '0.1em',
              border: '5px solid red',
              borderRadius: '5px'
            }}
          >
            <Code>div#root</Code>
            <div
              style={{
                marginTop: '0.1em',
                height: '100%',
                display: 'grid',
                gridTemplateRows: '1fr 5fr 1fr'
              }}
            >
              <header
                style={{
                  padding: '0.5em',
                  border: '5px solid black',
                  borderRadius: '5px'
                }}
              >
                <Code>header</Code>
              </header>
              <div
                style={{
                  margin: '0.1em 0',
                  padding: '4em 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '5px solid black',
                  borderRadius: '5px'
                }}
              >
                <Code>main</Code>
              </div>
              <footer
                style={{
                  padding: '0.5em',
                  border: '5px solid black',
                  borderRadius: '5px'
                }}
              >
                <Code>footer</Code>
              </footer>
            </div>
          </div>
        </Slide>
        <Slide>
          <Image
            src={require('./pensive-face.svg')}
            alt="pensive face"
            width="75%"
          />
        </Slide>
        <Slide>
          <Heading size={3}>React portals can help!</Heading>
          <Image src={require('./portal-cake.jpg')} alt="cake" />
        </Slide>
        <Slide>
          <Heading size={3}>An example</Heading>
          <Text fit>
            <a href="https://stackblitz.com/edit/react-portals-structure">
              https://stackblitz.com/edit/react-portals-structure
            </a>
          </Text>
        </Slide>
        <Slide>
          <Heading size={3}>Caveats</Heading>
          <List>
            <ListItem>Just an idea (for now)</ListItem>
            <ListItem>Added complexity</ListItem>
            <ListItem>No React control over container elements</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image
            src={require('./thinking-with-portals.jpg')}
            alt="Now you're thinking with portals"
          />
        </Slide>
        <Slide>
          <Heading>Thank you!</Heading>
          <Text>
            <a href="https://twitter.com/grrttn">@grrttn</a>
          </Text>
        </Slide>
      </Deck>
    )
  }
}
