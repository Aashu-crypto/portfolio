/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/Aashutosh_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Aashutosh_Gandotra_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
