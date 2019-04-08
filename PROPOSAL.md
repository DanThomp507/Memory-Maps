## Project Proposal

## Description/User Story

The world has become increasingly globalized, which means people have the
capacity to travel at a far greater frequency than at any point in history.
When we travel, we want to preserve the memories from our journeys, whether
it be organizing our photos or jotting down a few thoughts/reflections from
our experience in a particular country or city. There has long been a tradition
of travel writing in humanity, dating back to the Ancient Greek writer Herodotus;
yet, the digital age needs to combine this long-standing tradition of travel
writing with a quick, easy, on-hand platform.


Memory Maps is a simple app that allows all travellers to record the countries
and cities they've visited. It also allows users to store photos associated with
the country of interest on a country profile page. This country profile page
will also contain short blurbs about a particular site or city the user has
experienced. Ultimately, it allows travellers to preserve the memories from
the places they've been and access them at a later date.

## Technologies Used

- React and React Router
- CSS
- Ruby/Ruby on Rails
- PostgreSQL
- Google Maps React

## MVP
  - Creating a user profile
  - The ability to edit user profile information
  - Marking which countries the user has visited
  - Adding mini-blog posts/blurbs to a country's profile page
  - Updating/Deleting blurbs on a country's page
  - Adding comments to a country's page pertaining to favorite foods, cities,
  sites, etc
  - Styled front-end components with CSS

## Post-MVP
- Adding user photos to a particular country's profile page  

## Wireframes


## ERD


## Timeline
- Monday, April 8th: Rails database completed by end of the day
- Tuesday, April 9th: Create React app, organize components, finish user profile
form/page, organize country page, ensure that users can make a profile/login
- Wednesday, April 10th: Work on adding Google Map to country page, ensuring
that it is able to render with all of the countries marked, finish up country page
with photos and blog posts
- Thursday, April 11th: work on styling the app so that it looks nice

## Database and Relations

- Users (hasManyCountries, hasManyBlogs, hasManyComments)
- Countries (belongsToUser, hasManyBlogs, hasManyComments)
- Blogs(belongsToUser, belongsToCountry)
- Comments (belongsToCountry, belongsToUser)

## Component Hierarchy/Library

- Login
- Register
- Home
- User Profile
- Contact
- Footer
- Country Page
- Blog Form
- Comment Form
- Country List
- Map
