import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
        	{
				source: '/:path*',
				has: [{ type: 'host', value: 'www.clubcore.dk' }],
				destination: 'https://clubcore.dk/:path*',
				permanent: true,
        	},
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'clubcore.azurewebsites.net' }],
				destination: 'https://clubcore.dk/:path*',
				permanent: true,
			},
		];
	}
};

export default nextConfig;
