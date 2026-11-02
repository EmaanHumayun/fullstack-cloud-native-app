# Full-Stack Cloud-Native Production Application

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Container-Docker%20Multi--Stage-2496ED?logo=docker&logoColor=white)](https://docker.com/)
[![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes%20v1.30-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)

A full-stack, cloud-native application engineered from first principles to demonstrate modern fullstack development alongside end-to-end DevOps practices: automated testing, containerization, observability endpoints, and Kubernetes deployment.

---

## 🏗️ Architecture & Features

```text
fullstack-cloud-native-app/
├── client/                     # React 18 + Vite + Tailwind CSS Frontend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── server/                     # Node.js + Express + MongoDB Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── metrics.js          # Prometheus Prometheus metrics exporter
│   ├── Dockerfile
│   └── package.json
├── k8s/                        # Production Kubernetes Manifests
│   ├── deployment.yaml         # Multi-replica rolling update deployment
│   ├── service.yaml            # ClusterIP internal service
│   ├── ingress.yaml            # TLS-terminated ingress routing
│   └── configmap.yaml          # Environment runtime configuration
├── .github/workflows/
│   └── ci-cd.yml               # Automated test, build, and container push
└── docker-compose.yml          # Local development stack
```

---

## ⚡ Quick Start (Docker Compose)

Run the complete fullstack system with a single command:

```bash
docker-compose up --build
```

- **Frontend App:** `http://localhost:5173`
- **Backend API:** `http://localhost:5000`
- **Health Check Probe:** `http://localhost:5000/healthz`
- **Prometheus Metrics:** `http://localhost:5000/metrics`

---

## 👤 Author

**Emaan Humayun**
- GitHub: [@EmaanHumayun](https://github.com/EmaanHumayun)
- LinkedIn: [Emaan Humayun](https://linkedin.com/in/www.linkedin.com/in/emaanmuhammadhumayun)
