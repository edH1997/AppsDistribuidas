import express from 'express';
import cors from "cors";

const app = express();

app.set('port',process.env.PORT || 5000);
app.use(cors())
import pagoCabeceraRoutes from  './routes/cabecera.routes.js';
import detalleRoutes from "./routes/detalles.routes.js";
import cuentaBRoutes from "./routes/cuentaB.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import clientelaRoutes from "./routes/clientela.routes.js";
import facturasRoutes from "./routes/facturas.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import auditoriaRoutes from "./routes/auditoria.routes.js";


//middlewares
app.use(express.json());

app.use("/api/cabeceras",pagoCabeceraRoutes);
app.use("/api/detalles", detalleRoutes);
app.use("/api/cuentab", cuentaBRoutes);
app.use("/api/cliente", clienteRoutes);
app.use("/api/clientela", clientelaRoutes);
app.use("/api/facturas", facturasRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/auditoria", auditoriaRoutes)

export default app;