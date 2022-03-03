import vue from '@vitejs/plugin-vue';
import { defineConfig } from "vite";  // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import { resolve } from "path"; // 主要用于alias文件路径别名
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // 自动按需引入elementplus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      "@": pathResolve("src"),
    }
  },

  css: {
    // 添加全局scss文件
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/style/index.scss';"
      }
    },

    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  optimizeDeps: {
    // 预构建插件包
    include: ['axios'],
  },

  // 解决打包后路径报错
  base:'./',

  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },

  // 本地运行配置，及反向代理配置
  server: {
    cors: true, // 默认启用并允许任何源
    open: false,
    // force: true,  // 强制依赖重新预构建
    //反向代理
    proxy: {
      '/api': {
        target: 'http://xxx:3000',   //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
