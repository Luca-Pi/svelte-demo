function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function sleep(time) {
  await timeout(time);
}