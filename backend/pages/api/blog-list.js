import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-username',
  host: 'your-cloud-sql-instance-ip',
  database: 'your-database-name',
  password: 'your-password',
  port: 5432, // Default PostgreSQL port
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT title, author, readTime, date, summary, imageUrl, slug FROM blogs');
      client.release();

      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
