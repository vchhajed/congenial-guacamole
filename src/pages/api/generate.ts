import { NextApiRequest, NextApiResponse } from 'next';

// Define the response structure for TypeScript typing
interface ApiResponse {
    title: string;
    subtitle: string;
    imageUrl: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method === 'POST') {
        // Default values for title, subtitle, and image URL
        const defaultResponse: ApiResponse = {
            title: 'Dynamic Title',
            subtitle: 'This is a dynamically generated subtitle.',
            imageUrl: 'https://www.gstatic.com/webp/gallery/1.jpg' // Example placeholder image
        };

        // Sending back the default response with 200 OK status
        res.status(200).json(defaultResponse);
    } else {
        // Not allowing methods other than POST
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ title: '', subtitle: '', imageUrl: '' });
    }
}
