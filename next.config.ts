import type { NextConfig } from "next";
import TerserPlugin from 'terser-webpack-plugin'

const nextConfig: NextConfig = {

  // 自定义 webpack 配置
  webpack: (config, { isServer, dev }) => {
    // 只在生产环境且不是服务端渲染时配置
    if (!dev && !isServer) {
      // 确保 optimization.minimizer 存在
      config.optimization.minimizer = config.optimization.minimizer || []
      
      // 添加 terser 插件
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 删除所有 console.*
              // 或者指定要删除的 console 方法
              // pure_funcs: ['console.log', 'console.warn'],
            },
            format: {
              comments: false, // 删除所有注释
            },
          },
          extractComments: false, // 不提取注释到单独文件
        })
      )
    }
    
    return config
  },
};

export default nextConfig;
