import { Application } from '../types';
import { parse } from 'tldts';
import appsDB from './apps-db.json';
import Fuse from 'fuse.js';

export async function getApplications(
  appQuery: string
): Promise<Application[]> {
  // TODO: Add implementation here
  // Read data 'apps-db.json'

  // Do not remove this line. This is used to simulate a delay in the API.
  await addRandomDelay();
  return filterApplications(appsDB, appQuery);
}

async function addRandomDelay() {
  const delay = Math.floor(Math.random() * 1000) + 350;
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function normalizeDomains(domains: string[]) {
  return domains.map((domain) => parse(domain).domain);
}

function filterApplications(applications: Application[], query: string) {
  const normalizedQuery = query.toLowerCase();

  const filteredApps = applications.filter((app) => {
    const normalizedAppName = app.name.toLowerCase();
    const normalizedDomains = normalizeDomains(app.domains);
    return (
      normalizedAppName.includes(normalizedQuery) ||
      normalizedDomains.some((domain) => domain?.includes(normalizedQuery))
    );
  });

  if (!filteredApps.length) {
    const fuse = new Fuse(applications, {
      keys: ['name', 'domains'],
    });

    const result = fuse.search(normalizedQuery);
    return result.map((res) => res.item);
  }

  return filteredApps;
}
