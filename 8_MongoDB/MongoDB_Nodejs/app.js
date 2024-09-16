const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.DB_URI;
console.log(uri);

const client = new MongoClient(uri);
const dbName = "sample_mflix";
const collectionName = "movies";
const moviesCollection = client.db(dbName).collection(collectionName);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

//CRUD operations on movies collection
//get a movie
const getMovie = async (id) => {
  const movie = await moviesCollection.findOne({
    title: "The Godfather",
  });
  console.log(movie);
};

//create a movie
const createMovie = async (movie) => {
  const result = await moviesCollection.insertOne(movie);
  console.log(result);
};
//run the function
createMovie({
  title: "The new movie",
  year: 1972,
  director: "Francis Ford Coppola",
});

//update a movie
const updateMovie = async (title, movie) => {
  const result = await moviesCollection.updateOne(
    { title: title },
    { $set: movie }
  );
  console.log(result);
};
//run the function
updateMovie("The new titanic", { title: "titanic" });

//update title of a movie
const updateMovieTitle = async (title, newTitle) => {
  const result = await moviesCollection.updateOne(
    { title: title },
    { $set: { title: newTitle } }
  );
  console.log(result);
};
const main = async () => {
  try {
    await connectToDatabase();
    const databaseList = await client.db().admin().listDatabases();
    databaseList.databases.forEach((db) => console.log(` - ${db.name}`));
    await getMovie();
  } catch (error) {
    console.error("Error conencting to the database", error);
  } finally {
    await client.close();
  }
};

//main();
