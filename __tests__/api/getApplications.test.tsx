import { getApplications } from '../../src/api/getApplications';
import appsDB from '../../src/api/apps-db.json';

describe('getApplications', () => {
  it('returns applications matching the query string', async () => {
    const apps = await getApplications('atlassian');

    expect(apps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.stringContaining('Atlassian'),
        }),
      ])
    );
  });

  it('returns applications matching the domain in the query string', async () => {
    const apps = await getApplications('Atlassian.com');

    expect(apps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          domains: expect.arrayContaining([
            expect.stringContaining('atlassian.com'),
          ]),
        }),
      ])
    );
  });

  it('returns applications using fuzzy search if no exact matches are found', async () => {
    const apps = await getApplications('noexactmatches');
    const hasExactMatch = appsDB.some(
      (app) =>
        app.name.includes('noexactmatches') ||
        app.domains.some((domain) => domain.includes('noexactmatches'))
    );

    expect(hasExactMatch).toBe(false);
    expect(apps.length).toBeGreaterThan(0);
  });

  it('returns an empty array if no matches are found', async () => {
    const apps = await getApplications('nonexistentqueryyyy');

    expect(apps).toEqual([]);
  });
});
