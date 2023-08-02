## How to create your own store
1. Create a Gmail account
2. Clone the repo and delete ***.github*** folder.
3. Open it in any code editor
4. Run command ```npm i --force``` in sanity-ecom
5. move to sanity folder using cd sanity_backend and then run command ```npm i --force```
6. run command ```sanity login``` and log in using Gmail account
7. Login to [sanity](www.sanity.io/manage) and click on create new project Login to ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/4b95dd61-2a31-439b-b0d9-526be30e49a5)

8. Press continue and close the window when it asks to copy the link.
9. Again visit to  [sanity](www.sanity.io/manage) and click on the project that is created ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/ba01391d-39fc-4719-bdb2-5a69bf2d8158)

10. Copy the project id from the dashboard
11. ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/e5c65f04-1921-483d-93d5-cda554d10024)

12. Replace the current project id with the new project id from files client.js, sanity.cli.ts, sanity.confit.ts. You can search the file using *ctrl + p*.
13. Save the changes in all three files and run the command ```sanity deploy```  enter the shop name and press enter.
14. New URL will be generated with the shop name as its domain. [ It usually takes 4-5 mins]
15. 🥳Congrglations we are done with setting up the backend now. You can visit the URL and add products and other information.

16. Now move back to **sanity-ecom-main** using ```cd ../```
17. Go to priyam Github account and create a new repository. Or create a new one if necessary.
18. Write the shop name and click on Create a Repository. ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/d0e2760d-e68e-4b53-8964-ac655b82ac21)
19. Run all the commands that appear when you click create [Instead of ```git add Readme.md``` run ```git add .```] run commands which are [** highlighted in the red box **] one by one
20. Once done refresh the page. You will see all the code in that repo ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/1d8605e7-990b-4e59-a285-6a22460eab0c)

21. Now visit [Vercel](https://vercel.com/login?next=%2Fdashboard) and log in with the GitHub account where we pushed our code.
22. Vercel dashboard will open click on add ```new > project ``` ![image](https://github.com/Rutwik187/sanity-ecom/assets/86617402/86fd2cba-8a87-4632-af15-85931af7dbdd)
23. Find your GitHub repo and click on import
24. Then finally click on ```Deoloy``` to host our front end. The URL will be generated once the deployment is done.

    ## Hurrey Your site is finally deployed Now the changes on the sanity dashboard will be reflected on frontend ##


