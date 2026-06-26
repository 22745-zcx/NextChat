 /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',                                                                                          images: {
      unoptimized: true,
    },
    experimental: {
      forceSwcTransforms: true,
    },
  }

  export default nextConfig
