import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-username',
  host: 'your-cloud-sql-instance-ip',
  database: 'your-database-name',
  password: 'your-password',
  port: 5432,
});

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM blogs WHERE slug = $1', [slug]);
      client.release();

      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.setHeader('Access-Control-Allow-Origin', '*');

      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
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
