import { openBrowser, goto, write, closeBrowser, waitFor, click, $ } from 'taiko'


const BUBBLE_DOT_COM = "dream.bbbbbbubble.com"
const GOOGLE = "translate.google.com"

const running = async () => {
  try {
    await openBrowser({ headless: false, args: ["--start-fullscreen"] })
    await goto(BUBBLE_DOT_COM)

    while (true) {
      await waitFor(500)
      await goto(GOOGLE)
      await write('should I buy it ?')
      /* listen button */
      await click($('.r375lc'))
      await goto(BUBBLE_DOT_COM)
      for (let i = 0; i < 10; i++) {
        await scrollDown(200)
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    await closeBrowser();
  }
}

running()
