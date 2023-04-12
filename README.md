# app-select-take-home


This exercise will give you a taste of the front-end challenges we handle at Cerby! You will recreate a dropdown component with some nifty features we'll explain in the acceptance criteria.

The design file can be found here: [Figma File](https://www.figma.com/file/keAdBYpQ5nou30hWsBiTvh/Take-Home-Challenge-%F0%9F%9A%80?node-id=12%3A1318&t=aHB3BbDFyVH4ngBk-1)

## Instructions

Clone this repository and start developing. Place the resulting component inside the `App.tsx`. Once finished, zip the file and send it to the provided email address before the established deadline. Please, do not open PRs to this repository.

## Acceptance Criteria

- All states in the design file should be considered.
- The application should match the design in the Figma file. 
   - Tip: TailwindCSS is preconfigured with the color theme. However, feel free to use plain CSS or any other library
- You may not implement out-of-the-box libraries for the dropdown. However, data fetching or utility libraries are allowed.
- When the user types a string, it should look for the best-matching applications given the query. The matching criteria are explained in the "Application Matching Criteria" section.
- Clicking on a selection should remove the options container and display the application name in the search input. It should show the dropdown again in case the value of the input changes.
- The query to search the apps should not incur any performance penalty. Consider finding a way to limit the number of queries and caching the result of previously made calls.
- Implement the logic to filter the results from the mock database inside the `getApplications` function.
- The application icon should be rendered when showing the list of matching options. The icons are available under the `public/icons` folder. The naming convention for the icons is `ic_{APP_ID}.svg`, where `{APP_ID}` is the application id value.




## Application Matching Criteria

The `apps-db.json` file contains a list of all the available applications. It consists of a list of objects with the following shape:

```type
type Application = {
  id: string;
  name: string;
  domains: string[];
};
```

The `domains` array contains the list of the domains of each application. This list is not normalized so that you can find strings containing complete URLs (e.g., https://www.google.com.mx) or just domains (google.com.mx). Consider normalizing all domain fields as a list of valid domains before querying the data. (Tip: https://www.npmjs.com/package/tldts is available as a dependency).


The user can write the Application Name, a partial URL, or a domain. The query should be case-insensitive, and the algorithm should return a list of applications that, given the query string, matches:

- The application name
- One of the allowed domains

If given a full URL, it should extract the domain part of it and use it as the query.


## Extra credit

- If the dropdown is focused and shows multiple options, the user can cycle through the options using the keyboard arrows.
- If an option is focused, the user can select the option by pressing the Enter key.
- Sort the options by name alphabetically.
- Implement some sort of fuzzy search.


## Development

### Requirements

- NodeJS > 16


Clone the repository and run the following commands:
```
npm install
npm run dev
```


