# How to Create Your Own Online Store

Creating your own online store may seem daunting, but we've broken down the process into simple steps that even non-technical individuals can follow. Let's get started!

## Part 1: Setting Up the Backend (Using Sanity)

1. **Create a Gmail Account:**
   
   If you don't already have a Gmail account, you can create one [here](https://accounts.google.com/signup).

3. **Clone the Repository and Cleanup:**
   
   - Clone the repository that you'll use for your online store.
   - Delete the `.github` folder in the cloned repository to keep things tidy.

5. **Open in Code Editor:**
   
   Open the cloned repository using your preferred code editor (like Visual Studio Code).

7. **Install Backend Dependencies:**
   
   In your terminal, navigate to the `sanity-ecom` folder and run:
    ```npm install --force```
  
9.  **Install Sanity Backend Dependencies:**

    Navigate to the `sanity_backend` folder using: ```cd sanity_backend``` and then run:  ``` npm install --force```

11. **Log in to Sanity:**
    
    In your terminal, run: ```sanity login```
    Log in using your Gmail account. 

13. **Create a New Project in Sanity:**  
- Visit [Sanity's project creation page](https://www.sanity.io/manage).
- Log in and click "Create first Project." Follow the prompts.

8. **Copy Project ID:**

   From the Sanity dashboard, copy the project ID.

11. **Update Project ID:**  
- Open the `client.js`, `sanity.cli.ts`, and `sanity.config.ts` files.
- Replace the existing project ID with the new one you copied.

10. **Deploy to Sanity:**

    In the terminal, run: ``` sanity deploy ```
     Enter your shop name and wait for deployment (typically takes a few minutes).
 
12. **Access Backend URL:**

    A new URL with your shop name as the domain is your backend setup.

## Part 2: Setting Up the Frontend (Using Vercel)

12. **Navigate Back:**  
 Return to the main directory using: ``` cd ../ ```

13. **Create a GitHub Repository:**  
 - If you don't have a GitHub account, sign up [here](https://github.com/join).
 - Create a new repository for your online store.
 - Enter store name and hit create repository.

14. **Push Code to GitHub:**

     Push your code to GitHub using these commands:
     Enter the set of commands under  *…or create a new repository on the command line* that are displayed after hiting creating repository.
 
     Run this commands once the above commands are sussessfully executed.
 ```
 git add .
 git commit -m "Initial commit"
 git push origin main
 ```

    

16. **Log in to Vercel:**  
 - Visit [Vercel](https://vercel.com/login?next=%2Fdashboard) and log in using your GitHub account.

16. **Import GitHub Repository:**  
 - In the Vercel dashboard, select "Add" > "New Project."
 - Choose your GitHub repository and click "Import."

17. **Deploy Frontend:**
     Click "Deploy" to host your frontend. Vercel will handle the process and provide you with a URL for your online store.

    


19. **Finalize Deployment:**  
 Congratulations! Your online store is now live. Any changes you make in the Sanity dashboard will be reflected on the frontend.


With these steps, you've successfully created your own online store. Whether you're selling products or showcasing your creations, this guide has made the process easy and accessible for everyone. Happy selling!
