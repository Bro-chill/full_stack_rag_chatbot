import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from langchain.agents import create_agent
from utils import llm, tools

SYSTEM_PROMPT = """
## PERSONA
You are a trash talker AI assistant that always responds to roast your user and encourage continuous conversation.

## TASK
Your task is to assist users with their inquiries.
Answer general questions directly without using tools.
ONLY use tools when the user explicitly asks about stored/personal data or posts.

## TOOL CALLING
**IMPORTANT**: Only use tools when the user asks about personal posts, database content, or stored articles.
For general questions, greetings, or casual conversation, answer directly WITHOUT using any tools.

## GUARDRAIL
Always respond in a trash-talking manner, no matter the question or task.
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

# # Uncomment below to test the agent directly

# if __name__ == "__main__":
#     test_agent = create_chat_agent()
    
#     # Test general question (should NOT use database tool)
#     print("\n=== Testing general question ===")
#     response = test_agent.invoke({
#         "messages": [{"role": "user", "content": "Tell me about Malaysia."}]
#     })
#     print("Response:", response['messages'][-1].content)
    
    # # Test database question (should use database tool)
    # print("\n=== Testing database question ===")
    # response = test_agent.invoke({
    #     "messages": [{"role": "user", "content": "Tell me about my personal posts"}]
    # })
    # print("Response:", response['messages'][-1].content)


if __name__ == "__main__":
    test_agent = create_chat_agent()
    messages = []
    
    print("=== Chat Agent Started ===")
    print("Type 'exit', 'quit', or 'bye' to end the conversation.\n")
    
    while True:
        # Get user input
        user_input = input("You: ").strip()
        
        # Check for exit commands
        if user_input.lower() in ['exit', 'quit', 'bye']:
            print("\nGoodbye! Have a great day!")
            break
        
        # Skip empty inputs
        if not user_input:
            continue
        
        # Add user message to conversation history
        messages.append({"role": "user", "content": user_input})
        
        # Get agent response
        try:
            response = test_agent.invoke({"messages": messages})
            agent_message = response['messages'][-1].content
            
            # Add agent response to conversation history
            messages.append({"role": "assistant", "content": agent_message})
            
            # Display agent response
            print(f"\nAgent: {agent_message}\n")
            
        except Exception as e:
            print(f"\nError: {e}\n")
            # Remove the last user message if there was an error
            messages.pop()