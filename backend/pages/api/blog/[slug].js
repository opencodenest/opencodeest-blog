import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const db = await open({
        filename: './mydb.sqlite', // Path to your SQLite database
        driver: sqlite3.Database,
      });

      const blog = await db.get('SELECT * FROM blogs WHERE slug = ?', slug);

      await db.close();
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.setHeader('Access-Control-Allow-Origin', '*');
      if (blog) {
        res.status(200).json(blog);
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
