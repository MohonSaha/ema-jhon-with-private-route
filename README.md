## Hosting in firebase:-


### One time for each project: 

1. npm install -g firebase-tools
2. firebase login

### One time for each project: 

1. firebase init
2. Proced
3. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.  (Use up and down arrow to change the option and use space bar to secect the option)
4. Use an existing project
5. Select the project according to the firebase name
6. which project as public directory: Vite => dist, CRA => build
7. Configure as a single-page app => yes
8. Set up automatic builds and deploys with GitHub? => yes or no
9 Finish: Firebase initialization complete!

### For everytime deploy

1. npm run build
2. firebase deploy