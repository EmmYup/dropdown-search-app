## Solution Summary

The application I developed contains two main components - DropdownInput and AppCard.

- DropdownInput is a comprehensive component that takes charge of rendering an input field and handling interactions with the user. It is responsible for rendering the dropdown options when a user types into the input field. Furthermore, it manages the context state for the searchTerm, isOpen, loading, and activeOptionIndex states. It also includes functionality for keyboard interactions for a more user-friendly and accessible experience. This component has been designed to work in conjunction with the AppCard component to display a list of applications based on the user's search term.

- AppCard is a versatile component used for displaying each individual application in the dropdown list. It takes several props, which help determine its appearance and behavior. It adjusts its display based on the active state, the loading state, or if no results are found, presenting different UIs for each case. Clicking on an AppCard can trigger an action, such as selecting an option from the dropdown list.

Initially, I utilized React's useState to manage the application state. However, as the complexity grew, I transitioned to useContext for better state management, ensuring the code remained organized and readable.

To visualize and test the states of the application, I implemented Storybook.

To prevent performance issues due to excessive rerendering when the user types into the input field, I implemented a debounce function. This function delays the processing of the input changes until a certain amount of time has passed since the last change. I've implemented this as a custom hook, useDebounce, which can be found at `hooks/useDebounce.tsx`.

In case that the user's search term did not yield any results, I introduced a fuzzy search feature using the Fuse.js library. This feature comes into play only when the initial search implementation fails to find any matches, providing an alternative search strategy to enhance the user experience.

For unit testing, I used Vitest in conjunction with React Testing Library. I'm aware there could be more scenarios that could be tested, but this was what I was able to accomplish within the given timeframe.

The following is a list of available npm scripts included with my implementation:

```bash
npm run storybook
npm run test
npm run lint
```

These scripts provide quick access to run the Storybook, initiate unit tests, and perform linting respectively.

# app-select-take-home

This exercise will give you a taste of the front-end challenges we handle at Cerby! With this challenge, we look to understand what it would be like to work with you. Besides learning about your technical skills, we are also interested in collaborating with you through this task, so we are open to answering any questions you may have or providing additional information/clarifications when needed. You will recreate a dropdown component with some nifty features we'll explain in the acceptance criteria.

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
