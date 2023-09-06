# How to Create Your Own Online Store

Creating your own online store may seem daunting, but we've broken down the process into simple steps that even non-technical individuals can follow. Let's get started!

## Part 1: Setting Up the Backend (Using Sanity)

1. **Create a Gmail Account:**

   If you don't already have a Gmail account, you can create one [here](https://accounts.google.com/signup).

2. **Clone the Repository and Cleanup:**

   - Clone the repository that you'll use for your online store.
   - Delete the `.github` folder in the cloned repository to keep things tidy.

3. **Open in Code Editor:**

   Open the cloned repository using your preferred code editor (like Visual Studio Code).

4. **Install Sanity Backend Dependencies:**

   Navigate to the `sanity_backend` folder using: `cd sanity_backend` and then run: ` npm install --force`

5. **Create a New Project in Sanity:**

- Visit [Sanity's project creation page](https://www.sanity.io/manage).
- Log in and click "Create first Project."

13. **Create temporary sanity folder:**

- run command `npm -y create sanity@latest` to create sanity backed. [we need this just to get the project id we can delete this folder now]

8. **Copy Project ID:**

   From the [Sanity dashboard](https://www.sanity.io/manage) click on the project you just created and copy the project ID.
   ![Alt text](image.png)

9. **Update Project ID:**

- Open the `client.js`, `sanity.cli.ts`, and `sanity.config.ts` files.
- Replace the existing project ID with the new one you copied.

10. **Deploy to Sanity:**

    In the terminal, run: `sanity deploy`
    Enter your shop name and wait for deployment (typically takes a few minutes).

11. **Access Backend URL:**

    A new URL with your shop name as the domain is your backend setup.

## Part 2: Setting Up the Frontend (Using Vercel)

12. **Navigate Back:**  
    Return to the main directory using: `cd ../`

13. **Create a GitHub Repository:**

- If you don't have a GitHub account, sign up [here](https://github.com/join).
- Create a new repository for your online store.
- Enter store name and hit create repository.

14. **Push Code to GitHub:**

    Push your code to GitHub using these commands:
    Enter the set of commands under _…or create a new repository on the command line_ that are displayed after hiting creating repository.

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

18. **Finalize Deployment:**  
    Congratulations! Your online store is now live. Any changes you make in the Sanity dashboard will be reflected on the frontend.

With these steps, you've successfully created your own online store. Whether you're selling products or showcasing your creations, this guide has made the process easy and accessible for everyone. Happy selling!

# Technologies Used

## Frontend Framework: Next.js

Next.js, a powerful React framework, was utilized for building the frontend of the application. It offers server-side rendering, routing, and other essential features that enhance both performance and user experience.

## Styling: Tailwind CSS

Tailwind CSS, a utility-first CSS framework, was chosen to handle the styling aspects of the project. Its modular approach allowed for rapid and consistent UI development by composing classes to create custom designs.

## Messaging Integration: WhatsApp API

The WhatsApp API was employed to seamlessly integrate messaging capabilities into the application. This enabled the system to send messages via WhatsApp, facilitating real-time communication with users.

## Content Management: Sanity

For efficient content management, the headless content management system Sanity was adopted. By decoupling content from the presentation layer, Sanity provided a structured and flexible approach to managing and organizing content.

Each of these technologies played a pivotal role in the development and functionality of the application, contributing to a robust and user-friendly final product.

# Free Sanity Account Limitations

Free accounts on Sanity offer a range of features and capabilities for content management and collaboration. However, there are certain limitations that users should be aware of when utilizing the free tier of Sanity.

## Data Storage Limit

The data storage capacity for a free Sanity account is limited to approximately 5,000 documents. These documents encompass various forms of content, including articles, images, and structured data entries. It's important to manage your content within this limit to ensure optimal performance and usage of the free tier.

## API Request Limit

Free accounts come with a monthly limit on the number of API requests that can be made. This limit is typically set at around 50,000 API requests per month. It's essential to keep track of your API usage to prevent exceeding this limit, which could impact the functionality of your application.

## Asset Storage Restrictions

The free tier of Sanity includes restrictions on asset storage. Asset storage pertains to images, videos, and other media files that are uploaded to the Sanity platform. Users of the free tier are allocated approximately 5 GB of asset storage. Monitoring and managing your asset uploads within this limit is crucial for maintaining a seamless experience.

## Collaborator Limit

Collaboration within a free Sanity account is limited in terms of the number of users who can access and contribute to a project. Typically, free accounts allow around 2 to 3 collaborators. Collaborators include team members who require access to the Sanity project for content creation, management, and editing.

It's recommended to plan your team's access carefully to ensure that the designated collaborators have the necessary permissions to effectively work within the constraints of the free tier.
