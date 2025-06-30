import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.reactnativeapp.aora",
  projectId: "6862ebd8002fc65d80d3",
  databaseId: "6862eeef0029d96a190e",
  userCollectionId: "6862ef8e0026159adcf7",
  videoCollectionId: "6862efc9003a01f4663f",
  storageId: "6862f230000da9fa940c",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
