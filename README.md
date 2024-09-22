# Pinewood

## Install 

After cloning the REPO please go to the ...\\Pinewood\\Client\\ folder and perform this command.

    NPM i

**USE CMD POWERSHELL throws a wobble**

This is the node modules required to run this application can be gathered

## How to run applications.

### API

From the terminal and in the API folder eg. ...\\Pinewood\\API\\

Enter this command.

    dotnet run

and can be accessed from https://localhost:5001

https://localhost:5001/api/users is available without authentication

### Client

From the terminal and in the client folder eg. ...\\Pinewood\\client\\

Enter this command.

    ng serve

and can be accessed from https://localhost:4200/ 

### Using the application

I've already set up a user but feel free to set up an account.
When you login you're authenticated against the Database via the API and assigned a JSON Web Token.

This allows access to my CV.

Username: Pinewood

Password: password