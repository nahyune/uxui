import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'

function copyDirSync(src, dest) {
  if (!existsSync(src)) return
  mkdirSync(dest, { recursive: true })
  for (const item of readdirSync(src)) {
    const s = join(src, item)
    const d = join(dest, item)
    try {
      if (statSync(s).isDirectory()) {
        copyDirSync(s, d)
      } else {
        copyFileSync(s, d)
      }
    } catch (_) { /* junction/symlink 오류 무시 */ }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-img',
      closeBundle() {
        // img/ 폴더를 dist/img/ 로 직접 복사 (Windows junction 우회)
        copyDirSync('img', 'dist/img')
      },
    },
  ],
  build: {
    copyPublicDir: false, // public/img 정크션 복사 시도 방지
  },
})
