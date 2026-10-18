# Role
you have to act a professional web developer and help me giving the updated code as per my requirements.

# Context
I've to build my portfolio, for that i've got the code in my vs code from bootstrap and i'd tell u about changes along with the present code and u have to help me building

# Rules
You must have to follow the below rules:
- u have to give code as conplete file path then the code
- in this chat we've to complete only the thing mentioned in @current phase heading
- don't add or change anything from urself
- don't go any previous or nxt phase strict to the current phase only

# Total phases
In the following phases we'd complete the whole portfolio:

## Phase 1:
> Hero section
## Phase 2:
> About Me
## Phase 3:
> Technical Skills
## Phase 4:
> Experience

## Phase 5:
> Projects
all the ui's for eac projet's dashboard are in this folde (C:\Users\abc\Downloads\portfolio\assets\projects_ui) with these names
projects_ui/
├── Classical ML Model Evaluation Dashboard.png
├── cropmate dashboard.png
├── HandSigns AI Recognition Dashboard.png
├── LLM Explorer Structured Output Dashboard.png
├── Medical Knowledge Assistant Dashboard.png
├── Personal AI Assistant Dashboard.png
└── RAG Intelligence Dashboard.png


all the images for the display card are in C:\Users\abc\Downloads\portfolio\assets\project card display images

project card display images/
├── cropmate.PNG
├── hand sign language.PNG
├── llm app engineering.PNG
├── medical assistant.PNG
├── meeting assistant.PNG
├── personal ai agent.PNG
└── stock prediction.PNG




## Feature: Interactive 3D Orbital Project Showcase

I want to build an interactive project showcase section in React using a **3D orbital carousel layout with glassmorphism and an in-page project details modal**.
The main section should display all my projects as individual cards arranged in a circular, planet-like orbital formation. Each card should contain a relevant cover image representing the project domain (for example, an agriculture-related image for my smart agriculture project, rather than a screenshot of its dashboard) and the project name. The cards should move smoothly around a central point, creating a 3D rotating carousel effect. Users should be able to interact with the carousel using mouse dragging, scrolling, or navigation controls to explore the projects. The animation should feel smooth and natural, with appropriate depth, perspective, scaling, and positioning to create a sense of 3D space.
When a user clicks on a project card, the user should remain on the same page, and a larger **glassmorphism-style project details panel** should appear in the foreground. This panel should have a translucent, blurred-glass background, subtle borders, soft shadows, and a polished modern appearance. It should display the selected project's dashboard screenshot or application interface, project title, description, objectives, technologies used, and other relevant project information. The orbital carousel should remain visible behind the panel, continuing to move subtly or becoming slightly dimmed and blurred to create visual depth. Users should be able to close the panel and return to browsing the carousel without losing their position.
Please implement this as a reusable, data-driven React component so I can add new projects by updating project data rather than manually creating separate layouts. Use CSS 3D transforms or an appropriate animation library to achieve the orbital effect, ensure responsive behavior across desktop and mobile devices, and provide accessible keyboard navigation and clear interaction cues. The overall design should feel elegant, immersive, futuristic, and professional, suitable for an AI/ML engineer's portfolio. Avoid redirecting users to separate project pages when opening the details panel.


1. CropMate — AI-Powered Smart Agriculture

Short Description

An IoT-enabled smart agriculture system that combines real-time soil monitoring with machine learning to recommend suitable crops based on soil conditions.

Overview

CropMate integrates connected soil sensors, Firebase Realtime Database, and a Random Forest classifier into a Django web application. It collects soil measurements and uses machine learning to support data-driven crop selection.

Key Features

Soil monitoring using moisture, temperature, pH, electrical conductivity, and nutrient readings.

Random Forest-based crop recommendations.

Sensor data transmission through Firebase Realtime Database.

Django web dashboard with user authentication interfaces.

Technologies: Python, C++, Django, Scikit-learn, Random Forest, Firebase, SQLite, HTML, ESP microcontroller.

2. ASL Hand Gesture Recognition — Deep Learning with PyTorch

Short Description

A computer vision project that classifies American Sign Language hand gestures into 29 categories using transfer learning and four deep learning architectures.

Overview

The project explores how different pretrained neural networks perform on image-based hand gesture recognition. Approximately 87,000 labeled images were used to train and evaluate AlexNet, VGG16, GoogLeNet, and Vision Transformer (ViT-B/16) models.

Key Features

Classification of 29 categories, including letters A–Z and three additional gesture classes.

Transfer learning and fine-tuning of four pretrained architectures.

Image normalization and training-time augmentation.

Comparative evaluation using validation accuracy, loss curves, and confusion matrices.

Technologies: Python, PyTorch, Torchvision, AlexNet, VGG16, GoogLeNet, Vision Transformer, NumPy, Matplotlib.

3. Stock Price Prediction — Machine Learning Regression

Short Description

A machine learning pipeline that predicts Apple Inc. (AAPL)'s next-trading-day closing stock price using historical market data and comparative regression modeling.

Overview

The project processes historical trading data and compares four regression algorithms to estimate future closing prices. Chronological data splitting and time-series cross-validation are used to evaluate model performance while preserving temporal order.

Key Features

Historical stock data preprocessing and target engineering.

Comparison of Linear Regression, Decision Tree, Random Forest, and Gradient Boosting.

Time-aware validation using chronological splitting and TimeSeriesSplit.

Model evaluation using MAE, RMSE, and R².

Actual-versus-predicted plots and residual analysis.

Reported Result: Linear Regression achieved an R² of 0.9536 in the reported evaluation. This result should be verified against the final evaluation output before publication.

Technologies: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, TimeSeriesSplit.

4. LLM Application Engineering — Tool Calling, Structured Outputs & MCP

Short Description

A collection of Python-based LLM applications demonstrating structured outputs, tool calling, external API integration, and database-backed AI assistants.

Overview

This project explores how large language models can interact with software tools and structured data beyond generating text. Using Groq-hosted models, FastAPI, Pydantic, SQLite, and the Model Context Protocol (MCP), it covers foundational LLM experiments and practical assistant applications.

Key Features

Structured LLM responses with Pydantic validation.

Function calling and execution of supported Python tools.

Finance and business assistant applications.

SQLite-based data storage and retrieval.

External API integration for services such as currency conversion and weather.

MCP client-server experiments, streaming, and API usage tracking.

Technologies: Python, Groq API, FastAPI, Pydantic, SQLite, MCP, external APIs, automated testing.

5. Medical Knowledge Assistant — RAG with Hybrid Search

Short Description

A Retrieval-Augmented Generation (RAG) system that answers questions from medical reference documents using hybrid search, source citations, and evidence-based response handling.

Overview

The system processes 12 Markdown reference documents, retrieves relevant passages using semantic vector search and BM25 keyword retrieval, and passes the retrieved evidence to an LLM for answer generation. It also includes validation and evaluation mechanisms to help assess response reliability.

Key Features

Document cleaning, metadata validation, and overlapping chunking.

Semantic retrieval using Sentence Transformers and ChromaDB.

Hybrid search combining vector similarity and BM25 keyword scores.

Context-grounded answer generation with source citations.

Configurable insufficient-evidence handling and response validation.

FastAPI endpoints, streaming responses, automated tests, and evaluation datasets.

Technologies: Python, FastAPI, Groq API, openai/gpt-oss-20b, Sentence Transformers, ChromaDB, BM25, Pytest, YAML.

6. Meeting RAG — Meeting Intelligence & Question Answering

Short Description

An end-to-end meeting intelligence system that transforms audio recordings into speaker-attributed transcripts and enables citation-grounded question answering.

Overview

The system combines speech transcription, speaker diarization, hybrid retrieval, and ColBERT reranking to help users find decisions, discussions, and other relevant information in meeting recordings. Answers are grounded in retrieved transcript passages and support follow-up questions.

Key Features

Audio transcription with speaker labels and timestamps.

Meeting-specific document preparation and metadata preservation.

Hybrid semantic and keyword retrieval.

ColBERT v2 reranking for improved passage selection.

Citation validation and meeting-scoped retrieval.

Multi-turn conversations with persistent history.

LLM provider fallback and component-level evaluation.

Technologies: Python, FastAPI, Faster-Whisper, pyannote.audio, Sentence Transformers, BGE-small-en-v1.5, ChromaDB, BM25, ColBERT v2, Groq API, Ollama, JSON.

7. Personal AI Assistant — Agentic AI with LangGraph & Memory

Short Description

A tool-using personal AI assistant that combines local LLM inference, persistent memory, task automation, and human-in-the-loop approval through a stateful agent workflow.

Overview

Built with LangChain, LangGraph, and a locally hosted Qwen3 model, the assistant coordinates tool execution and conversation state to support practical tasks. Persistent storage and approval checkpoints help manage context and keep users involved in sensitive operations.

Key Features

Task and reminder management.

Calculator, web search, and date/time tools.

Persistent conversation state and semantic memory retrieval.

Human approval checkpoints for sensitive actions, including task deletion and email sending.

Local LLM inference using Ollama and Qwen3 8B.

FastAPI integration, automated tests, and Docker support.

Technologies: Python, LangChain, LangGraph, Ollama, Qwen3 8B, SQLite, FastAPI, Ollama embeddings, Docker, Docker Compose, Pytest.


## Phase 6:
> Research and Publications
## Phase 7:
> Achievements and Awards
## Phase 8:
> Let's Connect


# Current phase
You have to only do phase 5(i've did with all phases only the 5th is left)