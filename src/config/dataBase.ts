import mongoose from 'mongoose';

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/filmdb';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI);

    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:');  
    process.exit(1);
  }
};

export default connectDB;
