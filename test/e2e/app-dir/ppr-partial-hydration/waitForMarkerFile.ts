import { setTimeout } from 'node:timers/promises'
import { access } from 'node:fs/promises'
import path from 'node:path'

export default async function waitForMarkerFile() {
  let start = Date.now()
  while (true) {
    if (Date.now() - start > 5_000) {
      throw new Error('slowComponentReady marker file was never written')
    }
    try {
      await access(path.join(process.cwd(), 'slowComponentReady'))
      return
    } catch (e) {
      await setTimeout(100)
      continue
    }
  }
}
