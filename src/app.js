import "dotenv/config.js";
import connectDB from "./config/database.js";
import app from "./interfaces/server.js";


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
    });
});
