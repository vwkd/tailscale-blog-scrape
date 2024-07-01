/**
 * Sleep for a given number of milliseconds
 * @param ms number of milliseconds to sleep
 * @returns Promise that resolves after sleeping
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
