# Deployment

Installantion
``
npm install
``

build your application
``
npm run build:staging
``

Inside deploy.js/pm2 file


    module.exports = {
    apps : [
	    {
	    name: "staging",
	    script: "npm",
	    args: "run start:staging"
	    },
	    {
		name: "production",
		script: "npm",
		args: "run start:production"
	    }
	   ] 
     }

  

run your application with pm2
``
pm2 start deploy.js --only staging
``

Finish

You can use below commands for creating environment specific builds.
```
// command to start local sever with .env file. This is used while actual development  
npm start

// command to start local sever with .env.staging file  
npm run start:staging

// command to start local sever with .env.production file  
npm run start:prod

// command to build app with .env.staging file  
npm run build:staging

// command to build app with .env.production file  
npm run build:prod
```


