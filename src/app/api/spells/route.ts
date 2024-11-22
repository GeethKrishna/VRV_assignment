import { NextRequest, NextResponse } from 'next/server';
import { spellsContainer } from '@/lib/cosmosClient';
import { v4 as uuidv4 } from "uuid";

// GET request to fetch user details by ID
export async function GET(request: NextRequest) {
    // Retrieve userId from the query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");
  
    if (!userId) {
      return new NextResponse("Spell ID is required", { status: 400 });
    }
  
    try {
      // Query the container to fetch user details
      const { resource: user } = await spellsContainer.item(userId, userId).read();
  
      if (!user) {
        return new NextResponse("Spell not found", { status: 404 });
      }
  
      return NextResponse.json(user);
    } catch (error) {
      console.error(error);
      return new NextResponse("Failed to fetch Spell", { status: 500 });
    }
  }
  
  // POST request to store new user details
  export async function POST(request: NextRequest) {
    try {
      // Parse the incoming request body
      const spell = await request.json();
  
      if (!spell.name) {
        return new NextResponse("Spell 'id' and 'name' are required fields", { status: 400 });
      }

      const newSpell = {
        id: uuidv4(), // Auto-generated ID
        ...spell
      };
  
      // Add new user to the Cosmos DB container
      const { resource: createdSpell } = await spellsContainer.items.create(newSpell);
  
      return NextResponse.json(createdSpell, { status: 201 });
    } catch (error) {
      console.error(error);
      return new NextResponse("Failed to create user", { status: 500 });
    }
  }
  