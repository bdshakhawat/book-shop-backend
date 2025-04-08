/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './app/Config';
async function main() {
  // Validate required configurations
  if (!config.db_url || !config.port) {
    console.error('Database URL or Port is missing in the configuration.');
    process.exit(1);
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(config.db_url as string);
    console.log('Connected to MongoDB successfully');

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process if database connection fails
  }
}

// Handle shutdown gracefully
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await mongoose.disconnect();
  console.log('MongoDB disconnected');
  process.exit(0);
});

// Initialize the application
main();
