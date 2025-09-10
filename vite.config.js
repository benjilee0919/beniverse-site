import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // 커스텀 도메인(루트)일 땐 '/' 사용
})