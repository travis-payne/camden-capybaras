<p align="center">
  <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/p960x960/36867593_406766949833688_7835883466062299136_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=eZLRx0Acq6sAX_72l3f&_nc_ht=scontent-lhr8-1.xx&_nc_tp=6&oh=50af4ae90a2aeb31ae4e6ec47a67ab3e&oe=5F2D23E9"
       alt="Camden Logo"
       width="250" 
       height="250"/>
</p>

<h1 align="center">Camden Capybaras</h1>

### Tech Stack

- React
- React Bootstrap
- AWS Static Website Hosting (S3)
- AWS Route 53
- AWS CloudFront

### Trello Board (For Devs)

- https://trello.com/b/FUy7ZL7S/camden-capybara-site

## Deployment Steps

Real simple:

- Set up AWS Credentials
- Unblock S3 bucket permissions
- npm run build
- yarn deploy
- Done!

## Available Scripts

In the project directory, you can run:

### `yarn deploy`

This will upload the build to AWS S3, but you'll need permissions and such so DM me if you need to.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
