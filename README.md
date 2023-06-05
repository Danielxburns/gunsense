
# GunSense

A gun violence tracking app that connects users to government officials that can do something about it.

## Link
[GunSense](https://danielxburns.github.io/gunsense/)

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## APIs and source information

[Gun Violence Archive](https://www.gunviolencearchive.org)  
[Google Civic Information API](https://developers.google.com/civic-information)  
[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript)  

## About
Have you or anyone you’ve loved ever been affected by gun violence? Do
you want to do something about it? Well, you CAN with GunSense.

GunSense delivers up-to-date information about the gun violence
happening in our communities and provides a platform for you to connect
to the government officials who can affect the changes that you want to
see.

By providing quality information on an actionable platform GunSense
allows for an aware and informed citizenry to engage with and empower
leaders with their ideas and concerns. Which, in time, will lead to
better laws, better law enforcement, less gun violence, and a safer
healthier society for all.

*This application was started as an entry for DeveloperWeek 2023 Hackathon. Presentation video [here](https://www.youtube.com/watch?v=kO4aICMYYWs)

I have continued working on the application afterwards as follows:
  - created project on Firebase
  - set up authentication and created Firestore DB for users 
  - created utility functions to sign up, sign in, and sign out users and connected them to relevant components
  - created request to fetch user's gov't representatives from Google Civic Information API
  - reshaped response data and displayed in list of representative cards
  - set up hosting on Firebase with custom domain [https://gunsense.danielburns.info/](https://gunsense.danielburns.info/)

## Roadmap
  - finish connecting Represenative contact links to respective buttons
  - find a way to scrape data from GVA - last 72 hours
  - connect to google maps API
  - connect DraftJS to letters section
  - add letters DB to Firebase and connect API endpoints
  - consider mailto options
  - add info from resouces such as [https://www.senate.gov/general/contacting.htm](https://www.senate.gov/general/contacting.htm) and [https://www.house.gov/representatives/find-your-representative](https://www.house.gov/representatives/find-your-representative)


## License

[MIT licence](https://choosealicense.com/licenses/mit/)