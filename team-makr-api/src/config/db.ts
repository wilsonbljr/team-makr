import { createConnection } from 'typeorm';

export const connectDB = async () => {
    const conexao = await createConnection()
    .then(async connection => {
        console.log(`DB ${connection.options.database} connected successfully`)
    })
    .catch((error) => {
        console.log("database error, " + error);
        process.exit(1);
    });
}