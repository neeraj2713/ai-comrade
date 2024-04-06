import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI, { ChatCompletionRequestMessage } from 'openai';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: "org-YlXKlh9pvojvygjnO9i1cOdW",
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explaination."

}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if(!userId) {
      return new NextResponse("Unauthorized", {status: 401})
    }

    if(!configuration.apiKey) {
      return new NextResponse("Internal Error", {status: 500})
    }

    if(!messages) {
      return new NextResponse("Messages are required", {status: 400})
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages]
    })
    
    return NextResponse.json(response.data.choices[0].message)
    
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", {status: 500})
  }
}