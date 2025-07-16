// globalTeardown.js
import { childLogger } from '../utils/logger.js';

async function globalTeardown() {
  // Create a contextual logger for teardown
  const logger = childLogger('globalTeardown');

  try {
    const daysToKeep = parseInt(process.env.LOG_KEEP_DAYS || '7', 10);
    // If you have a cleanup method on logger, invoke it; otherwise skip
    if (typeof logger.cleanup === 'function') {
      await logger.cleanup(daysToKeep);
      logger.info(`🧹 Old log folders older than ${daysToKeep} days cleaned up.`);
    } else {
      logger.warn('No cleanup method available on logger. Skipping log cleanup.');
    }
  } catch (e) {
    logger.error('Error during global teardown log cleanup', { message: e.message, stack: e.stack });
  }

  console.log('✅ Global teardown complete.');
}

export default globalTeardown;
