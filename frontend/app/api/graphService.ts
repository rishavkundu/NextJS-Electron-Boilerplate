import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeGraph, getUserAsync, getInboxAsync, sendMailAsync } from '../../graphService';

initializeGraph();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const user = await getUserAsync();
        res.status(200).json(user);
        break;
      case 'POST':
        const { subject, body, recipient } = req.body;
        await sendMailAsync(subject, body, recipient);
        res.status(200).json({ message: 'Mail sent successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}