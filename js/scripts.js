
/*!
 * Start Bootstrap - Grayscale v7.0.6
 * Projects Section: Interactive 3D Orbital Carousel
 */

window.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       EXISTING BOOTSTRAP NAVIGATION
       ===================================================== */

    const navbarShrink = () => {
        const navbar = document.querySelector("#mainNav");
        if (!navbar) return;

        navbar.classList.toggle("navbar-shrink", window.scrollY !== 0);
    };

    navbarShrink();
    document.addEventListener("scroll", navbarShrink);

    const mainNav = document.querySelector("#mainNav");

    if (mainNav && typeof bootstrap !== "undefined") {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    const navbarToggler = document.querySelector(".navbar-toggler");

    document.querySelectorAll("#navbarResponsive .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (
                navbarToggler &&
                window.getComputedStyle(navbarToggler).display !== "none"
            ) {
                navbarToggler.click();
            }
        });
    });

    /* =====================================================
       PROJECT DATA
       ===================================================== */

    const projects = [
        {
            id: "cropmate",
            title: "CropMate — AI-Powered Smart Agriculture",
            category: "AI + IoT",
            cover: "assets/project%20card%20display%20images/cropmate.PNG",
            dashboard: "assets/projects_ui/cropmate%20dashboard.png",
            shortDescription:
                "An IoT-enabled agriculture system combining soil monitoring with machine learning to recommend suitable crops.",
            overview:
                "CropMate integrates soil sensors, Firebase Realtime Database, a Random Forest classifier, and a Django web application. Soil measurements are used to support data-driven crop selection.",
            features: [
                "Soil monitoring for moisture, temperature, pH, electrical conductivity, and nutrient readings.",
                "Random Forest-based crop recommendations.",
                "Sensor data transmission through Firebase Realtime Database.",
                "Django dashboard with user authentication interfaces.",
            ],
            technologies: [
                "Python", "C++", "Django", "Scikit-learn", "Random Forest",
                "Firebase", "SQLite", "HTML", "ESP microcontroller",
            ],
        },
        {
            id: "asl-recognition",
            title: "ASL Hand Gesture Recognition",
            category: "Computer Vision",
            cover: "assets/project%20card%20display%20images/hand%20sign%20language.PNG",
            dashboard: "assets/projects_ui/HandSigns%20AI%20Recognition%20Dashboard.png",
            shortDescription:
                "A computer vision project classifying American Sign Language hand gestures into 29 categories using deep learning.",
            overview:
                "The project compares pretrained architectures on approximately 87,000 labeled images. AlexNet, VGG16, GoogLeNet, and Vision Transformer (ViT-B/16) are explored for image-based hand gesture recognition.",
            features: [
                "Classification across 29 categories.",
                "Transfer learning and fine-tuning of four pretrained architectures.",
                "Image normalization and training-time augmentation.",
                "Evaluation using validation accuracy, loss curves, and confusion matrices.",
            ],
            technologies: [
                "Python", "PyTorch", "Torchvision", "AlexNet", "VGG16",
                "GoogLeNet", "Vision Transformer", "NumPy", "Matplotlib",
            ],
        },
        {
            id: "stock-prediction",
            title: "Stock Price Prediction",
            category: "Machine Learning",
            cover: "assets/project%20card%20display%20images/stock%20prediction.PNG",
            dashboard: "assets/projects_ui/Classical%20ML%20Model%20Evaluation%20Dashboard.png",
            shortDescription:
                "A machine learning pipeline estimating Apple Inc. (AAPL)'s next-trading-day closing price using historical market data.",
            overview:
                "The project compares four regression algorithms using chronological data splitting and time-series cross-validation to preserve temporal order during evaluation.",
            features: [
                "Historical stock data preprocessing and target engineering.",
                "Comparison of Linear Regression, Decision Tree, Random Forest, and Gradient Boosting.",
                "Time-aware validation using chronological splitting and TimeSeriesSplit.",
                "Evaluation using MAE, RMSE, and R².",
                "Actual-versus-predicted plots and residual analysis.",
            ],
            result:
                "The reported evaluation lists an R² of 0.9536 for Linear Regression. Verify this value against the final evaluation output before publishing it as a confirmed result.",
            technologies: [
                "Python", "Pandas", "NumPy", "Scikit-learn",
                "Matplotlib", "Seaborn", "TimeSeriesSplit",
            ],
        },
        {
            id: "llm-engineering",
            title: "LLM Application Engineering",
            category: "LLM Engineering",
            cover: "assets/project%20card%20display%20images/llm%20app%20engineering.PNG",
            dashboard: "assets/projects_ui/LLM%20Explorer%20Structured%20Output%20Dashboard.png",
            shortDescription:
                "A collection of Python LLM applications demonstrating structured outputs, tool calling, external APIs, and AI assistants.",
            overview:
                "This project explores practical LLM application patterns using Groq-hosted models, FastAPI, Pydantic, SQLite, and Model Context Protocol (MCP), including finance and business assistant workflows.",
            features: [
                "Structured LLM responses with Pydantic validation.",
                "Function calling and supported Python tool execution.",
                "Finance and business assistant applications.",
                "SQLite-backed data storage and retrieval.",
                "External API integration and usage tracking.",
                "MCP client-server experiments and streaming.",
            ],
            technologies: [
                "Python", "Groq API", "FastAPI", "Pydantic", "SQLite",
                "MCP", "External APIs", "Automated testing",
            ],
        },
        {
            id: "medical-rag",
            title: "Medical Knowledge Assistant",
            category: "RAG + NLP",
            cover: "assets/project%20card%20display%20images/medical%20assistant.PNG",
            dashboard: "assets/projects_ui/Medical%20Knowledge%20Assistant%20Dashboard.png",
            shortDescription:
                "A Retrieval-Augmented Generation system answering questions from medical reference documents with hybrid retrieval and citations.",
            overview:
                "The system processes 12 Markdown reference documents and retrieves relevant passages using semantic vector search and BM25 keyword retrieval before generating evidence-grounded responses.",
            features: [
                "Document cleaning, metadata validation, and overlapping chunking.",
                "Semantic retrieval using Sentence Transformers and ChromaDB.",
                "Hybrid retrieval combining vector search and BM25.",
                "Context-grounded answers with source citations.",
                "Insufficient-evidence handling and response validation.",
                "FastAPI endpoints, streaming responses, tests, and evaluation datasets.",
            ],
            technologies: [
                "Python", "FastAPI", "Groq API", "openai/gpt-oss-20b",
                "Sentence Transformers", "ChromaDB", "BM25", "Pytest", "YAML",
            ],
        },
        {
            id: "meeting-rag",
            title: "Meeting RAG — Meeting Intelligence",
            category: "Speech AI + RAG",
            cover: "assets/project%20card%20display%20images/meeting%20assistant.PNG",
            dashboard: "assets/projects_ui/RAG%20Intelligence%20Dashboard.png",
            shortDescription:
                "A meeting intelligence system combining speaker-attributed transcription with retrieval and citation-grounded question answering.",
            overview:
                "The system combines speech transcription, speaker diarization, hybrid retrieval, and ColBERT reranking to find relevant discussions and information in meeting recordings.",
            features: [
                "Audio transcription with speaker labels and timestamps.",
                "Meeting-specific document preparation and metadata preservation.",
                "Hybrid semantic and keyword retrieval.",
                "ColBERT v2 reranking.",
                "Citation validation and meeting-scoped retrieval.",
                "Multi-turn conversations with persistent history.",
            ],
            technologies: [
                "Python", "FastAPI", "Faster-Whisper", "pyannote.audio",
                "Sentence Transformers", "BGE-small-en-v1.5", "ChromaDB",
                "BM25", "ColBERT v2", "Groq API", "Ollama", "JSON",
            ],
        },
        {
            id: "personal-ai-assistant",
            title: "Personal AI Assistant",
            category: "Agentic AI",
            cover: "assets/project%20card%20display%20images/personal%20ai%20agent.PNG",
            dashboard: "assets/projects_ui/Personal%20AI%20Assistant%20Dashboard.png",
            shortDescription:
                "A tool-using personal AI assistant combining local LLM inference, persistent memory, task automation, and approval checkpoints.",
            overview:
                "Built with LangChain, LangGraph, and a locally hosted Qwen3 model, the assistant coordinates tool execution and conversation state. Persistent storage and human approval checkpoints help keep users involved in sensitive operations.",
            features: [
                "Task and reminder management.",
                "Calculator, web search, and date/time tools.",
                "Persistent conversation state and semantic memory retrieval.",
                "Human approval for sensitive actions, including task deletion and email sending.",
                "Local LLM inference using Ollama and Qwen3 8B.",
                "FastAPI integration, automated tests, and Docker support.",
            ],
            technologies: [
                "Python", "LangChain", "LangGraph", "Ollama", "Qwen3 8B",
                "SQLite", "FastAPI", "Ollama embeddings", "Docker",
                "Docker Compose", "Pytest",
            ],
        },
    ];

    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const scene = document.getElementById("orbitalScene");
    const track = document.getElementById("orbitalTrack");
    const previousButton = document.getElementById("projectPrevious");
    const nextButton = document.getElementById("projectNext");
    const positionLabel = document.getElementById("orbitalPosition");

    const projectModal = document.getElementById("projectModal");
    const modalCloseButton = document.getElementById("projectModalClose");
    const modalImage = document.getElementById("modalProjectImage");
    const modalCategory = document.getElementById("modalProjectCategory");
    const modalTitle = document.getElementById("modalProjectTitle");
    const modalShort = document.getElementById("modalProjectShort");
    const modalOverview = document.getElementById("modalProjectOverview");
    const modalFeatures = document.getElementById("modalProjectFeatures");
    const modalTech = document.getElementById("modalProjectTech");
    const modalResultWrap = document.getElementById("modalProjectResultWrap");
    const modalResult = document.getElementById("modalProjectResult");

    if (!scene || !track) {
        console.error(
            "Projects carousel was not initialized. Check #orbitalScene and #orbitalTrack in index.html."
        );
        return;
    }

    if (
        !projectModal ||
        !modalCloseButton ||
        !modalImage ||
        !modalCategory ||
        !modalTitle ||
        !modalShort ||
        !modalOverview ||
        !modalFeatures ||
        !modalTech ||
        !modalResultWrap ||
        !modalResult
    ) {
        console.error(
            "Project modal was not initialized. Check the project modal IDs in index.html."
        );
        return;
    }

    /* =====================================================
       CAROUSEL STATE
       ===================================================== */

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cardElements = [];
    const anglePerCard = 360 / projects.length;

    let rotation = 0;
    let targetRotation = 0;
    let activeIndex = 0;
    let orbitRadius = 300;

    let isDragging = false;
    let pointerStartX = 0;
    let pointerLastX = 0;
    let dragDistance = 0;
    let suppressCardClick = false;

    let previousFrameTime = 0;
    let lastInteractionTime = performance.now();
    let lastAutoRotationTime = performance.now();

    let wheelTimeout = null;
    let previousFocusedElement = null;

    // Automatically move one card at a time after the user is idle.
    const AUTO_ROTATION_DELAY = 5000;
    const AUTO_ROTATION_INTERVAL = 6500;
    const AUTO_ROTATION_SPEED = 0.075;
    const SNAP_SPEED = 0.12;

    const normaliseAngle = (angle) => ((angle % 360) + 360) % 360;

    const shortestAngleDifference = (from, to) =>
        ((to - from + 540) % 360) - 180;

    const getOrbitRadius = () => {
        const width = scene.clientWidth;

        if (width <= 575) return Math.min(205, width * 0.56);
        if (width <= 991) return Math.min(290, width * 0.42);

        return Math.min(360, width * 0.34);
    };

    /* =====================================================
       MODAL FUNCTIONS
       ===================================================== */

    const openProjectModal = (index) => {
        const project = projects[index];
        if (!project) return;

        activeIndex = index;
        previousFocusedElement = document.activeElement;

        modalImage.onerror = () => {
            console.error(
                "Could not load project dashboard image:",
                project.dashboard
            );

            modalImage.alt =
                `${project.title} dashboard screenshot could not be loaded. ` +
                "Check the image path and filename.";
        };

        modalImage.src = project.dashboard;
        modalImage.alt = `${project.title} dashboard screenshot`;

        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalShort.textContent = project.shortDescription;
        modalOverview.textContent = project.overview;

        modalFeatures.replaceChildren();

        project.features.forEach((feature) => {
            const item = document.createElement("li");
            item.textContent = feature;
            modalFeatures.appendChild(item);
        });

        modalTech.replaceChildren();

        project.technologies.forEach((technology) => {
            const tag = document.createElement("span");
            tag.className = "project-tech-tag";
            tag.textContent = technology;
            modalTech.appendChild(tag);
        });

        if (project.result) {
            modalResultWrap.hidden = false;
            modalResult.textContent = project.result;
        } else {
            modalResultWrap.hidden = true;
            modalResult.textContent = "";
        }

        projectModal.inert = false;
        projectModal.setAttribute("aria-hidden", "false");
        projectModal.classList.add("is-open");

        document.body.style.overflow = "hidden";

        // Pause automatic movement while the project details are open.
        lastInteractionTime = performance.now();

        renderOrbit();

        window.requestAnimationFrame(() => modalCloseButton.focus());
    };

    const closeProjectModal = () => {
        if (!projectModal.classList.contains("is-open")) return;

        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
        projectModal.inert = true;

        document.body.style.overflow = "";

        // Give the user time to read the page before auto-rotation resumes.
        lastInteractionTime = performance.now();
        lastAutoRotationTime = performance.now();

        if (
            previousFocusedElement &&
            typeof previousFocusedElement.focus === "function"
        ) {
            previousFocusedElement.focus();
        }
    };

    modalCloseButton.addEventListener("click", closeProjectModal);

    projectModal.querySelectorAll("[data-close-modal]").forEach((element) => {
        element.addEventListener("click", closeProjectModal);
    });

    projectModal.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeProjectModal();
            return;
        }

        if (event.key !== "Tab") return;

        const focusable = [
            ...projectModal.querySelectorAll(
                'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
            ),
        ].filter((element) => !element.closest("[inert]"));

        if (!focusable.length) {
            event.preventDefault();
            modalCloseButton.focus();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    /* =====================================================
       CREATE PROJECT CARDS
       ===================================================== */

    const createProjectCard = (project, index) => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "orbital-card";
        card.dataset.index = String(index);
        card.setAttribute("aria-label", `View project: ${project.title}`);
        card.setAttribute("aria-haspopup", "dialog");

        const media = document.createElement("span");
        media.className = "orbital-card-media";

        const image = document.createElement("img");
        image.className = "orbital-card-image";
        image.src = project.cover;
        image.alt = "";
        image.loading = "eager";
        image.draggable = false;

        image.addEventListener(
            "error",
            () => {
                console.error("Could not load project cover image:", project.cover);
                card.classList.add("image-unavailable");
            },
            { once: true }
        );

        media.appendChild(image);

        const content = document.createElement("span");
        content.className = "orbital-card-content";

        const number = document.createElement("span");
        number.className = "orbital-card-number";
        number.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;

        const title = document.createElement("span");
        title.className = "orbital-card-title";
        title.textContent = project.title;

        const category = document.createElement("span");
        category.className = "orbital-card-category";
        category.textContent = project.category;

        content.append(number, title, category);
        card.append(media, content);

        card.addEventListener("click", () => {
            if (suppressCardClick) return;

            lastInteractionTime = performance.now();
            openProjectModal(index);
        });

        track.appendChild(card);
        cardElements.push(card);
    };

    /* =====================================================
       ACTIVE PROJECT AND ORBIT POSITIONING
       ===================================================== */

    const findNearestProjectIndex = () => {
        let nearestIndex = 0;
        let smallestDifference = Infinity;

        projects.forEach((project, index) => {
            const cardAngle = index * anglePerCard;
            const frontAngle = normaliseAngle(-(rotation + cardAngle));
            const difference = Math.min(frontAngle, 360 - frontAngle);

            if (difference < smallestDifference) {
                smallestDifference = difference;
                nearestIndex = index;
            }
        });

        return nearestIndex;
    };

    function renderOrbit() {
        cardElements.forEach((card, index) => {
            const cardAngle = index * anglePerCard;
            const totalAngle = cardAngle + rotation;
            const totalRadians = (totalAngle * Math.PI) / 180;

            const depth = Math.cos(totalRadians);
            const scale = 0.76 + ((depth + 1) / 2) * 0.24;
            const opacity = 0.56 + ((depth + 1) / 2) * 0.44;
            const brightness = 0.72 + ((depth + 1) / 2) * 0.28;

            /*
             * Place the card around the ring, then counter-rotate it.
             * This keeps its front facing the viewer even at the back
             * of the orbit, rather than showing a narrow card edge.
             */
            card.style.transform = `
                translate(-50%, -50%)
                rotateY(${totalAngle}deg)
                translateZ(${orbitRadius}px)
                rotateY(${-totalAngle}deg)
                scale(${scale})
            `;

            card.style.opacity = String(opacity);
            card.style.zIndex = String(Math.round((depth + 1) * 100));
            card.style.filter = `brightness(${brightness})`;
            card.style.visibility = "visible";
            card.style.pointerEvents = "auto";

            const selected = index === activeIndex;

            card.classList.toggle("is-active", selected);
            card.setAttribute("aria-current", selected ? "true" : "false");
        });

        // Cards now position themselves individually; the track does not rotate.
        track.style.transform = "none";

        if (positionLabel) {
            positionLabel.textContent =
                `${String(activeIndex + 1).padStart(2, "0")} / ` +
                `${String(projects.length).padStart(2, "0")}`;
        }
    }

    const goToProject = (index, userInitiated = true) => {
        activeIndex = (index + projects.length) % projects.length;

        const desiredAngle = -(activeIndex * anglePerCard);
        const currentNormalisedAngle = normaliseAngle(rotation);
        const desiredNormalisedAngle = normaliseAngle(desiredAngle);

        targetRotation =
            rotation +
            shortestAngleDifference(
                currentNormalisedAngle,
                desiredNormalisedAngle
            );

        if (userInitiated) {
            lastInteractionTime = performance.now();
        }

        renderOrbit();
    };

    const stepProject = (direction) => {
        goToProject(activeIndex + direction);
    };

    const updateOrbitRadius = () => {
        orbitRadius = getOrbitRadius();
        renderOrbit();
    };

    /* =====================================================
       INITIALIZE CARDS AND BUTTONS
       ===================================================== */

    projects.forEach(createProjectCard);

    updateOrbitRadius();

    previousButton?.addEventListener("click", () => {
        stepProject(-1);
    });

    nextButton?.addEventListener("click", () => {
        stepProject(1);
    });

    /* =====================================================
       KEYBOARD NAVIGATION
       ===================================================== */

    scene.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            stepProject(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            stepProject(1);
        } else if (event.key === "Home") {
            event.preventDefault();
            goToProject(0);
        } else if (event.key === "End") {
            event.preventDefault();
            goToProject(projects.length - 1);
        }
    });

    /* =====================================================
       POINTER DRAG
       ===================================================== */

    scene.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        if (event.target.closest(".orbital-control")) return;
        if (projectModal.classList.contains("is-open")) return;

        isDragging = true;
        pointerStartX = event.clientX;
        pointerLastX = event.clientX;
        dragDistance = 0;
        suppressCardClick = false;

        lastInteractionTime = performance.now();
    });

    window.addEventListener("pointermove", (event) => {
        if (!isDragging) return;

        const deltaX = event.clientX - pointerLastX;

        pointerLastX = event.clientX;
        dragDistance = event.clientX - pointerStartX;

        if (Math.abs(dragDistance) > 6) {
            suppressCardClick = true;
        }

        rotation += deltaX * 0.42;
        targetRotation = rotation;

        activeIndex = findNearestProjectIndex();

        renderOrbit();

        lastInteractionTime = performance.now();
    });

    const finishDragging = () => {
        if (!isDragging) return;

        isDragging = false;

        if (Math.abs(dragDistance) > 6) {
            suppressCardClick = true;

            activeIndex = findNearestProjectIndex();
            goToProject(activeIndex);
        }

        window.setTimeout(() => {
            suppressCardClick = false;
        }, 100);
    };

    window.addEventListener("pointerup", finishDragging);
    window.addEventListener("pointercancel", finishDragging);
    window.addEventListener("blur", finishDragging);

    /* =====================================================
       SCROLL / TRACKPAD NAVIGATION
       ===================================================== */

    scene.addEventListener(
        "wheel",
        (event) => {
            if (projectModal.classList.contains("is-open")) return;

            if (
                Math.abs(event.deltaY) < 2 &&
                Math.abs(event.deltaX) < 2
            ) {
                return;
            }

            event.preventDefault();

            const delta =
                Math.abs(event.deltaY) > Math.abs(event.deltaX)
                    ? event.deltaY
                    : event.deltaX;

            stepProject(delta > 0 ? 1 : -1);

            window.clearTimeout(wheelTimeout);

            wheelTimeout = window.setTimeout(() => {
                activeIndex = findNearestProjectIndex();
                renderOrbit();
            }, 220);
        },
        { passive: false }
    );

    /* =====================================================
       SMOOTH ANIMATION AND CALM AUTO-ROTATION
       ===================================================== */

    const animateOrbit = (time) => {
        const deltaTime = previousFrameTime
            ? Math.min((time - previousFrameTime) / 16.67, 3)
            : 1;

        previousFrameTime = time;

        const modalIsOpen = projectModal.classList.contains("is-open");

        if (!isDragging && !modalIsOpen) {
            const userHasBeenIdle =
                time - lastInteractionTime > AUTO_ROTATION_DELAY;

            const autoRotationIntervalPassed =
                time - lastAutoRotationTime > AUTO_ROTATION_INTERVAL;

            /*
             * Advance exactly one project after an idle interval.
             * Do not continuously subtract a tiny angle each frame.
             */
            if (
                !reduceMotion.matches &&
                userHasBeenIdle &&
                autoRotationIntervalPassed
            ) {
                goToProject(activeIndex + 1, false);
                lastAutoRotationTime = time;
            }

            const difference = targetRotation - rotation;

            if (Math.abs(difference) > 0.015) {
                rotation += difference * Math.min(SNAP_SPEED * deltaTime, 1);
            } else {
                rotation = targetRotation;
            }

            /*
             * Keep the chosen index while transitioning. Recalculate
             * only once the rotation reaches its destination.
             */
            if (Math.abs(targetRotation - rotation) <= 0.015) {
                rotation = targetRotation;
                activeIndex = findNearestProjectIndex();
            }

            renderOrbit();
        }

        window.requestAnimationFrame(animateOrbit);
    };

    window.addEventListener("resize", updateOrbitRadius);

    if (reduceMotion.matches) {
        targetRotation = rotation;
    }

    window.requestAnimationFrame(animateOrbit);
});
