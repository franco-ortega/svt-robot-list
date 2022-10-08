### Dependencies

1. [NextJS](https://nextjs.org/docs/getting-started)
   1. `npx create-next-app@latest`
1. [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
   1. `npm i bootstrap@5.2.2`

### How to Run the App

1. Close the app with the following commmand: <br> `git clone https://github.com/franco-ortega/svt-robot-list.git`
1. Install dependencies: <br>
   `npm i`
1. Create an `.env.local` file at the root with the following environment variables: <br>
   1. `NEXT_PUBLIC_URL=http://localhost:3000`
   1. `API_URL=https://60c8ed887dafc90017ffbd56.mockapi.io/robots`
1. Run the app at http://localhost:3000/ with this command:<br>
   `npm run dev`

### Next Steps

This was a fun project, and it was my first time using Bootstrap. If I had more time, there are the additional steps I would take:

1. Add aria for accessibility.
1. Make the Table component narrower at larger screen sizes.
1. Make the Filter component narrower at larger screen sizes.
1. Change the button layout at larger screen sizes so that the two buttons of each type are on top of each other, and adjust these pairs of buttons so that they form a row with a pair of buttons in each column.
1. Or with even more time, I would refactor the sorting buttons into a dropdown menu where each item in the menu would be one of the properties. There would also be a toggle or radio buttons to select "ascending order" or "descending order". The user would select the order, and when they clicked on a property in the dropdown menu, it would sort the data based on the property and order that they selected.
1. Refactor the Sort component to reduce the repetitive amount of code. This could include creating a button component.
1. Add the ability for robots to be listed together in customized groupings. This include a button at the end of each row that allows the user to add that robot to their customized list(s), and the customized list(s) could be viewed on another page. This would allow the user to keep track of all and only the robots that interest them.
1. Highlight the robots who have low battery life. This would allow the user to easily spot the robots with low battery levels regardless of how they are sorting the data.
1. Replace the favicon with a robot icon.

Thank you very much for this opportunity and your consideration.
