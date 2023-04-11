import { Application } from "../types";

export async function getApplications(
  appQuery: string,
): Promise<Application[]> {
  // TODO: Add implementation here
  // Read data 'apps-db.json'

  // Do not remove this line. This is used to simulate a delay in the API.
  await addRandomDelay();
  return [];
}

async function addRandomDelay() {
  const delay = Math.floor(Math.random() * 1000) + 350;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
