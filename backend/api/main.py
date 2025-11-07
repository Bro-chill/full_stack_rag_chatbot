from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
import sys
import os

# Add parent directory to path to import agents
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from agents import create_chat_agent

app = FastAPI(title="Chat API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React Router dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    message: str = Field(..., description="User's message to the chatbot")

class ChatResponse(BaseModel):
    response: str = Field(..., description="Bot's response")
    error: Optional[str] = None

@app.post("/api/chat", response_model=ChatResponse)
async def chat(chat_message: ChatMessage):
    """
    Chat endpoint that processes user messages through the AI agent.
    """
    try:
        agent = create_chat_agent()
        # Use messages format as expected by create_agent
        result = agent.invoke({
            "messages": [{"role": "user", "content": chat_message.message}]
        })
        
        # Extract the last message content from the response
        last_message = result.get("messages", [])[-1] if result.get("messages") else None
        response_text = last_message.content if last_message else "I couldn't generate a response."
        
        return ChatResponse(
            response=response_text,
            error=None
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing message: {str(e)}"
        )

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)