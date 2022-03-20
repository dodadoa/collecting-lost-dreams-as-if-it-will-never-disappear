import { openBrowser, goto, $, dragAndDrop, closeBrowser, click, press, waitFor, currentURL, focus, text } from 'taiko'


const BUBBLE_DOT_COM = "https://dream.bbbbbbubble.com"
const GOOGLE = "https://translate.google.com"

(async () => {
  try {
    await openBrowser({ headless: false, args: ["--start-fullscreen"] })
    await goto(BUBBLE_DOT_COM)

    while(true) {
      await waitFor(500)
      await goto(GOOGLE)
      await focus(textBox('Source text'))
    }
  } catch (error) {
    console.error(error);
  } finally {
    await closeBrowser();
  }
})();
