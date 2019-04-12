# Memory-Maps

## Link to Deployed Project

## Description/User Story

The world has become increasingly globalized, which means people have the
capacity to travel at a far greater frequency than at any point in history.
When we travel, we want to preserve the memories from our journeys, whether
it be organizing our photos or jotting down a few thoughts/reflections from
our experience in a particular country or city. There has long been a tradition
of travel writing in humanity, dating back to the Ancient Greek writer Herodotus;
yet, the digital age needs to combine this long-standing tradition of travel
writing with a quick, easy, on-hand platform.


Memory Maps is a simple app that allows all travellers to track the countries
they've visited. This country profile page contains comments
pertaining to the foods, cities, and sites they visited while traveling. It also
contains short blog entries that the user may wish to write while reflecting
upon their travels. Ultimately, it allows travellers to preserve the memories from
the places they've been and access them at a later date.

## Technologies Used

- React and React Router
- CSS
- Ruby/Ruby on Rails
- PostgreSQL
- JsonWebToken(JWT)
- Bcrypt
- Knock
- Axios
- Cors
- Google Maps React
- Gem Bundle Insert

## MVP
  - Creating a user account/profile
  - Logging in a user
  - The ability to edit user profile information
  - Adding mini-blog posts/blurbs to a country's profile page
  - Updating/Deleting blogs and comments on a country's page
  - Adding comments to a country's page pertaining to favorite foods, cities,
  sites, etc
  - Styled front-end components with CSS

## Post-MVP
- Adding user photos to a particular country's profile page  

## Wireframes


## ERD

## Database and Relations

- Users (hasManyCountries, hasManyBlogs, hasManyComments)
- Countries (belongsToUser, hasManyBlogs, hasManyComments)
- Blogs (belongsToUser, belongsToCountry)
- Comments (belongsToCountry, belongsToUser)

## Component Hierarchy/Library

- Login
- Register Form
- Home
- User Profile
- Footer
- Country Page
- Country comments
- Country Blogs
- Blog Form
- Comment Form
- Map
- Logout Form

## Code Snippet
```
handleRadio(e) {
     const would_revisit = e.target.value === 'true'
       ? true
       : false;
     this.setState(prevState => ({
       commentData: {
         ...prevState.commentData,
         would_revisit,
       }
     }));
   }
```
This is a handleRadio function that converts a string into a boolean.
