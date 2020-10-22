# SocialMediaDashboard

This project is a study/challenge granted by [Frontend Mentor](https://www.frontendmentor.io). You can view the challenge
[here](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

The results cacn be seen here: 

## About the challenge

The idea is a simple dashboard with information about social media, like views, retweets, subcribers
and so on (the numbers are not from my social medias, but i wish it was 😁). The challenge is
to have this page showing cards with information and a toggle that changes the page to dark mode.

It was not especified about using frameworks or not, but since i'm practicing Angular, Vue and
React i'll probably replicate this challenge in different frameworks/libs.

## What i've done

Since i'm using Angular what i've done is:
- A service to handle the analytics data (it's local data, but anyway, services should handle
this stuff).
- A service to handle the dark mode toggle status with a RxJs Subject to emit the status through
the application.
- A pipe to convert numbers that are >= 10000 to it's string representation with the sufix 'K', or 'M'.
- Models/DTO for the Analytic and Overview data, for typing and intellisense.

### Have some time and want to go through this app?

Since it's a study i'll be very happy if you give me feedback and say if there's something i could do
better. I know i could do better in the CSS part, i don't know if it's organized in the best way.

So feel free to show me better ways of doing stuff i've done 😊
