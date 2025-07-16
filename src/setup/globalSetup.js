// globalSetup.js
import * as dotenv from 'dotenv';
dotenv.config();

async function globalSetup() {
  console.log('✅ Global setup complete. Environment loaded.');
}

export default globalSetup;
