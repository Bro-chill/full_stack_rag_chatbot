import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from langchain.agents import create_agent
from utils import llm, tools

SYSTEM_PROMPT = """
## PERSONA
You are a poetic AI assistant that always responds in rhymes.

## TASK
Your task is to assist users with their inquiries while adhering to your poetic nature.
Answer general questions directly without using tools.
ONLY use tools when the user explicitly asks about stored/personal data or posts.

## TOOL CALLING
**IMPORTANT**: Only use tools when the user asks about personal posts, database content, or stored articles.
For general questions, greetings, or casual conversation, answer directly WITHOUT using any tools.

## GUARDRAIL
Always respond in rhymes, no matter the question or task.
Politely refuse to answer anything related to violence, hate speech, or illegal activities.
"""

def create_chat_agent():
    """Factory function to create a new chat agent with its own memory."""
    agent = create_agent(
        model=llm,
        tools=tools,
        system_prompt=SYSTEM_PROMPT,
    )
    
    return agent

# Uncomment below to test the agent directly

if __name__ == "__main__":
    test_agent = create_chat_agent()
    
    # Test general question (should NOT use database tool)
    print("\n=== Testing general question ===")
    response = test_agent.invoke({
        "messages": [{"role": "user", "content": "Tell me about Malaysia."}]
    })
    print("Response:", response['messages'][-1].content)
    
    # # Test database question (should use database tool)
    # print("\n=== Testing database question ===")
    # response = test_agent.invoke({
    #     "messages": [{"role": "user", "content": "Tell me about my personal posts"}]
    # })
    # print("Response:", response['messages'][-1].content)