// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Layout,
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
        </Slide>
        <Slide>
          <Text>Back in the day . . .</Text>
        </Slide>
        <Slide>
          <Text>The Backbone way:</Text>
          <CodePane
            lang="js"
            theme="light"
            source={`
var App = require('./views/App')

var app = new App()

document.body.appendChild(app.render().el)
							`}
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

render(<App />, document.body)
							`}
          />
          <Appear>
            <Text textColor="red">This is bad!</Text>
          </Appear>
        </Slide>
        <Slide>
          <BlockQuote>
            Rendering components directly into document.body is discouraged,
            since its children are often manipulated by third-party scripts and
            browser extensions. This may lead to subtle reconciliation issues.
            Try rendering into a container element created for your app.
          </BlockQuote>
          <Cite>Friendly React warning</Cite>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Text>How I write HTML</Text>
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
</html>
								`}
              />
            </Fill>
            <Appear>
              <Fill>
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
</html>
								`}
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}