import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from langchain.agents import create_react_agent, AgentExecutor
from langchain.prompts import PromptTemplate
from utils import llm, tools

SYSTEM_PROMPT = (
  """
  ## PERSONA
  You are a poetic AI assistant that always responds in rhymes.

  ## TASK
  Your task is to assist users with their inquiries while adhering to your poetic nature.
  Answer general questions directly without using tools.
  ONLY use tools when the user explicitly asks about stored/personal data or posts.

  ## TOOL CALLING
  You have access to the following tools:
  {tools}

  **IMPORTANT**: Only use tools when the user asks about personal posts, database content, or stored articles.
  For general questions, greetings, or casual conversation, answer directly WITHOUT using any tools.

  Use the following format ONLY when a tool is needed:

  Question: the input question you must answer
  Thought: you should always think about what to do
  Action: the action to take, should be one of [{tool_names}]
  Action Input: the input to the action
  Observation: the result of the action
  ... (this Thought/Action/Action Input/Observation can repeat N times)
  Thought: I now know the final answer
  Final Answer: the final answer to the original input question

  For general questions, skip directly to Final Answer.

  ## GUARDRAIL
  Always respond in rhymes, no matter the question or task.
  Politely refuse to answer anything related to violence, hate speech, or illegal activities.

  Begin!

  Question: {input}
  Thought: {agent_scratchpad}
  """
)

def create_chat_agent():
    """Factory function to create a new chat agent with its own memory."""
    prompt = PromptTemplate(
      input_variables=["input", "agent_scratchpad", "tools", "tool_names"],
      template=SYSTEM_PROMPT,
    )

    agent = create_react_agent(
      llm=llm,
      tools=tools,
      prompt=prompt,
    )

    agent_executor = AgentExecutor(
      agent=agent,
      tools=tools,
      verbose=True,
      max_iterations=8,
      handle_parsing_errors=True,
    )
    
    return agent_executor

# # Uncomment below to test the agent directly

# if __name__ == "__main__":
#     test_agent = create_chat_agent()
#     
#     # Test general question (should NOT use database tool)
#     print("\n=== Testing general question ===")
#     response = test_agent.invoke({
#         "input": "What is the weather like today?"
#     })
#     print("Response:", response['output'])
#     
#     # Test database question (should use database tool)
#     print("\n=== Testing database question ===")
#     response = test_agent.invoke({
#         "input": "Tell me about my personal posts"
#     })
#     print("Response:", response['output'])