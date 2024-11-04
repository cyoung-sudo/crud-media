import { defineConfig } from "cypress";
// APIs
import UserAPI from "./src/apis/UserAPI";
// Types
import { User } from "./src/types/index.ds";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", {
        async removeTestUser() {
          console.log("------------------")
          // Retrieve all users
          let res1 = await UserAPI.getAll();
          let allUsers = res1.data.users;

          // Find testUser
          let testUser: User | null = null;
          for(let user of allUsers) {
            if(user.username === "testUser") {
              testUser = user;
            }
          }

          if(!testUser) return null;

          console.log(testUser);

          // Delete testUser if exists
          let res2 = await UserAPI.deleteUser(testUser._id);
          return null;
        }
      })
    },
  },
});