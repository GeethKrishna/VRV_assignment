import { CosmosClient, Database, Container } from "@azure/cosmos";

// Initialize CosmosClient with types
const client: CosmosClient = new CosmosClient({
  endpoint: process.env.COSMOSDB_URI as string,
  key: process.env.COSMOSDB_PRIMARY_KEY as string,
});

// Define database and container with appropriate types
const database: Database = client.database(process.env.COSMOSDB_DATABASE_NAME as string);
const wizardsContainer: Container = database.container("wizards");
const spellsContainer: Container = database.container("spells2");
const rolesContainer: Container = database.container("roles");

// Export at the top level
export { client, database, wizardsContainer, spellsContainer, rolesContainer };
