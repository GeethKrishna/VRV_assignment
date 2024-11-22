import { NextRequest, NextResponse } from 'next/server';
import { wizardsContainer } from '@/lib/cosmosClient';
import { v4 as uuidv4 } from "uuid";

// GET request to fetch user details by ID
export async function GET(request: NextRequest) {
    try {
      // Query the container to fetch user details
      const query = 'SELECT * FROM c'; // Query to get all spells
      const { resources: wizards } = await wizardsContainer.items.query(query).fetchAll();
      return NextResponse.json(wizards);
    } catch (error) {
      console.error(error);
      return new NextResponse("Failed to fetch Wizards", { status: 500 });
    }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const wizards = await request.json();
    for(const wizard of wizards){
      const newWizard = {
        id: uuidv4(), // Auto-generated ID
        ...wizard
      };
      // Add new user to the Cosmos DB container
      await wizardsContainer.items.create(newWizard);
    }

    return NextResponse.json({message: "Wizards added successfully"}, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to create Wizards", { status: 500 });
  }
}