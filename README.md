# AI Chatbot Full Stack Application 🤖✨

A modern full-stack AI chatbot application featuring a **dark glassmorphism UI** with a FastAPI backend powered by LangChain agents and Google Gemini AI, paired with a sleek React Router frontend.

## ✨ Features

- 🤖 **AI-Powered Chatbot** - Poetic responses powered by Google Gemini 2.0 Flash
- 🎨 **Futuristic Dark Glassmorphism UI** - Modern, sleek design with animated backgrounds
- 🧠 **Intelligent Tool Usage** - RAG-enabled agent that only queries database when relevant
- 💬 **Real-Time Chat Interface** - Smooth, responsive chat experience
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile devices
- 🔧 **MongoDB Integration** - Fetch personal posts from database on demand
- 🚀 **Type-Safe** - Full TypeScript support on frontend
- 🎯 **Smart Navigation** - Fixed navbar with active route highlighting

## 🏗️ Project Structure

```
.
├── backend/
│   ├── agents/
│   │   ├── chat_agent.py          # LangChain ReAct agent with tool calling
│   │   └── __init__.py
│   ├── api/
│   │   └── main.py                # FastAPI server with CORS
│   ├── utils/
│   │   ├── llm.py                 # Google Gemini LLM configuration
│   │   ├── tools.py               # Database tool (MongoDB)
│   │   └── __init__.py
│   ├── requirements.txt
│   ├── .env.example
│   └── .env
├── frontend/
│   ├── app/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar.tsx         # Fixed navigation bar
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── LoadingIndicator.tsx
│   │   │   └── FeatureCard.tsx
│   │   ├── routes/
│   │   │   ├── home.tsx           # Landing page
│   │   │   └── chat.tsx           # Chat interface
│   │   ├── app.css                # Custom styles & animations
│   │   ├── root.tsx               # Root layout with navbar
│   │   └── routes.ts              # Route configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── react-router.config.ts
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites

- **Python 3.11+** (for backend)
- **Node.js 20+** (for frontend)
- **MongoDB Atlas** account (or local MongoDB)
- **Google AI API Key** (for Gemini)

### Backend Setup

1. **Navigate to backend directory:**
```powershell
cd backend
```

2. **Create virtual environment (recommended):**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows
# source venv/bin/activate    # Linux/Mac
```

3. **Install dependencies:**
```powershell
pip install -r requirements.txt
```

4. **Set up environment variables:**

Copy `.env.example` to `.env` and fill in your credentials:
```env
# Google AI Configuration
GOOGLE_API_KEY=your_google_api_key_here
GEMINI_MODEL=gemini-2.0-flash

# MongoDB Configuration
MONGODB_ATLAS_CLUSTER_URI=your_mongodb_atlas_uri_here
```

5. **Start the backend server:**
```powershell
uvicorn api.main:app --reload
```

The backend will run on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
```powershell
cd frontend
```

2. **Install dependencies:**
```powershell
npm install
```

3. **Start development server:**
```powershell
npm run dev
```

4. **Manual installation:**
```powershell
1. npm create vite@latest
2. Project name: . //current directory
3. Select a framework: React
4. Select a variant: React Router v7
5. Install packages: (Y)
6. Initialize a new git repository: No
7. Install dependencies with npm: Yes
8. npm install lucide-react
9. npm run dev
```

The frontend will run on `http://localhost:5173`

## 📖 Usage

1. **Start both servers** (backend and frontend)
2. **Open browser** and navigate to `http://localhost:5173`
3. **Explore the home page** with feature cards
4. **Click "Start Chatting"** or use the navbar to navigate to chat
5. **Chat with the AI assistant:**
   - Ask general questions → AI answers directly without database access
   - Ask about "my posts" or "personal posts" → AI queries MongoDB database

### Example Queries

**General Questions (No database access):**
- "What is Python?"
- "Tell me a joke"
- "How are you today?"

**Database Queries (RAG-enabled):**
- "Show me my posts"
- "Tell me about my personal blog articles"
- "What posts do I have in my database?"

## 🔌 API Endpoints

### `POST /api/chat`
Send a message to the AI chatbot.

**Request:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "response": "AI assistant's poetic response",
  "error": null
}
```

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

### API Documentation
- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

## 🛠️ Technologies Used

### Backend
| Technology | Purpose |
|------------|---------|
| **FastAPI** | Modern Python web framework |
| **LangChain** | LLM orchestration framework |
| **Google Gemini 2.0 Flash** | Large language model |
| **MongoDB** | NoSQL database for posts |
| **Pydantic** | Data validation |
| **Uvicorn** | ASGI server |
| **python-dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React Router v7** | React framework with file-based routing |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Lucide React** | Modern icon library |

## 📝 Component Architecture

### Reusable Components

- **`<Navbar />`** - Fixed navigation with mobile menu
- **`<AnimatedBackground />`** - Pulsing gradient orbs
- **`<ChatMessage />`** - Individual chat message with avatar
- **`<ChatInput />`** - Input form with send button
- **`<LoadingIndicator />`** - Loading state with spinner
- **`<FeatureCard />`** - Feature showcase card

### Pages

- **`/`** - Home page with features and CTA
- **`/chat`** - Chat interface with conversation history

## 🔐 Environment Variables

### Backend `.env`
```env
GOOGLE_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-2.0-flash
MONGODB_ATLAS_CLUSTER_URI=your_mongodb_uri
```

### Getting API Keys

1. **Google AI API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create new API key
   
2. **MongoDB Atlas:**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create cluster
   - Get connection string

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- **Google Gemini** for the powerful language model
- **LangChain** for the agent framework
- **React Router** team for the modern React framework
- **Tailwind CSS** for the utility-first styling

---

**Built with ❤️ using React Router, FastAPI & Google Gemini**

*For questions or issues, please open an issue on GitHub.*