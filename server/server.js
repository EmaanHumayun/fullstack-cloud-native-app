import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Healthcheck endpoint for K8s liveness & readiness probes
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage().rss
  });
});

// Telemetry metrics endpoint
app.get('/metrics', (req, res) => {
  res.type('text/plain').send(`
# HELP process_uptime_seconds The total uptime of the process in seconds
# TYPE process_uptime_seconds gauge
process_uptime_seconds ${process.uptime()}
# HELP process_resident_memory_bytes Resident memory size in bytes
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes ${process.memoryUsage().rss}
  `.trim());
});

// Sample API route
app.get('/api/v1/status', (req, res) => {
  res.json({
    service: 'cloud-native-backend',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[SERVER] Cloud-Native API listening on http://0.0.0.0:${PORT}`);
});
