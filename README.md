This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install docker run `docker-compose up` This will start the UI and mongo containers

UI availible at `localhost:3000`

To view mongo: download Robo3T (free edition) connect to mongo at `localhost:27017`

To test run `npm run test`

## Database Schema

The Database is broken into 3 collections, one for each of the main pages, to optimize queries.

- Users
- Templates
- Instructors

User is queried on auth0 signup/login if no user is found a new one is created

### Schema Objects

```javascript
Lesson : {
  _id: string //(mongo generated Id, will need to be user supplied name in future),
  title: string,
  image: string,
  price: string,
  description: string,
  templateId: string //(id of parent template)
  attendees: array //(list of users),
  maxSeats: number //(maximum number of attendees)
}
```

```javascript
LessonRef : {
  _id: string //(mongo generated Id, will need to be user supplied name in future),
  title: string,
  image: string,
  price: string,
  description: string,
  templateId: string //(id of parent template)
}
```

### Collections

```javascript
User: {
  _id: string; //(auth0 profile.sub),
  isHost: bool; //(is this user linked to an instructor),
  InstructorId: string; //(instructor this user is linked to),
  lessons: LessonRef array; //(lessons that user is signed up for)
}
```

```javascript
Template : {
  _id: string //(mongo generated Id, will need to be user supplied name in future),
  title: string,
  image: string,
  price: string,
  description: string,
  lessons: Lesson array
}
```

```javascript
Instructor: {
  _id: string; //(user generated instuctorId),
  templates: array; //(does not contain child lessons, for child lessons query Template collection)
  lessons: Lesson array; //(array of ALL lessons instructor, this is for schedule population)
}
```
