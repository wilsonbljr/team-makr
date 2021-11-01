import { createConnection } from 'typeorm';

export const connectDB = async () => {
    const conexao = await createConnection()
    .then(async connection => {
        await connection.runMigrations();
        console.log(`DB ${connection.options.database} connected successfully`)
    });
}