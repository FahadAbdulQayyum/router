# Physical AI & Humanoid Robotics Textbook - AI Integration Data

**Last Updated**: December 11, 2025  
**Project**: Physical AI & Humanoid Robotics Textbook  
**Repository**: FahadAbdulQayyum/Physical-AI-Humanoid-Robotics-Textbook  
**Framework**: Docusaurus 3 with Custom React Components  
**Target Audience**: Industry Practitioners (13-week course)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Course Structure](#course-structure)
3. [Module Breakdown](#module-breakdown)
4. [Setup Paths](#setup-paths)
5. [Project Architecture](#project-architecture)
6. [Key Concepts & Glossary](#key-concepts--glossary)
7. [Technical Stack](#technical-stack)
8. [File Structure](#file-structure)
9. [Learning Objectives](#learning-objectives)
10. [Assessment Rubrics](#assessment-rubrics)

---

## Project Overview

### Purpose
A comprehensive 13-week textbook for industry practitioners transitioning into robotics and embodied AI. The course integrates:
- **ROS 2** - Robot Operating System fundamentals
- **Digital Twins** - Gazebo and Unity simulation
- **NVIDIA Isaac Sim** - GPU-accelerated robotics and synthetic data
- **Vision-Language-Action Models** - Multimodal AI for humanoid control

### Key Features
- **Dashboard-style homepage** with interactive module cards
- **Nested sidebar** with collapsible categories
- **Hybrid search** (Algolia + Flexsearch for glossary)
- **Custom metadata** for prerequisites and learning objectives
- **GitHub Actions CI/CD** with quality gates
- **Bilingual support** (English + Urdu)

### Success Metrics
- Zero build errors/warnings
- All metadata validated against JSON Schema
- Lighthouse performance scores > 90
- All broken links detected and fixed

---

## Course Structure

### Timeline: 13 Weeks

| Week(s) | Module | Focus | Key Topics |
|---------|--------|-------|-----------|
| 1-2 | Intro | Physical AI Foundations | Physical AI concepts, Hardware paths, Dev environment |
| 3-5 | Module 1 | ROS 2 (Robotic Nervous System) | Architecture, Nodes, Topics, Services, Actions, URDF, Packages |
| 6-7 | Module 2 | Digital Twin (Simulation & Sensors) | Gazebo, Unity, Physics, Sensor simulation, Sim2Real |
| 8-10 | Module 3 | NVIDIA Isaac (Perception & Navigation) | Isaac Sim, VSLAM, Nav2, Synthetic data, Imitation learning |
| 11-13 | Module 4 | VLA & Humanoids (Embodied AI) | Vision-Language-Action models, Kinematics, Manipulation, Conversational AI |
| 13 | Capstone | Autonomous Humanoid System | End-to-end pipeline: Voice → Plan → Navigate → Perceive → Manipulate |

### Hardware Paths (Choose One)

1. **Digital Twin Workstation**
   - GPU: RTX 3060 or higher
   - OS: Ubuntu 22.04 or Windows 11 WSL2
   - RAM: 16GB minimum
   - Storage: 100GB SSD
   - Purpose: Full simulation, development, Isaac Sim

2. **Physical AI Edge Kit**
   - Hardware: NVIDIA Jetson Orin Nano
   - OS: JetPack 6.0
   - RAM: 8GB
   - Storage: 64GB NVMe
   - Purpose: On-device inference, edge deployment

3. **Cloud-Native**
   - Providers: AWS/Azure with GPU instances
   - Instance Type: NVIDIA A100/H100 GPUs
   - OS: Ubuntu 22.04
   - Purpose: Training, Isaac Sim scaling, reinforcement learning

---

## Module Breakdown

### Module 1: The Robotic Nervous System (ROS 2) - Weeks 3-5

**Module ID**: `module-1-ros2`  
**Duration**: 3 weeks  
**Estimated Effort**: 30-36 hours

#### Learning Outcomes
- Explain the ROS 2 computation graph and its components
- Create publishers, subscribers, and service clients using rclpy
- Define robot structure using URDF and visualize in RViz2
- Launch multi-node systems and debug distributed applications
- Implement custom ROS 2 packages with proper structure

#### Chapters
1. **Chapter 1: Introduction to ROS 2**
   - ROS 1 vs ROS 2 evolution
   - Middleware concepts (DDS)
   - Computation graph overview
   - Tools: rqt, rosgraph, rclpy

2. **Chapter 2: Nodes, Topics & Communication**
   - Pub/Sub communication pattern
   - Message types and custom messages
   - Best practices for distributed systems
   - Practical: Build multi-node system

3. **Chapter 3: Services, Actions & Parameters**
   - Synchronous communication (Services)
   - Asynchronous patterns (Actions)
   - Feedback and cancellation
   - Parameter server basics

4. **Chapter 4: URDF & Robot Modeling**
   - URDF syntax and structure
   - Kinematic chains and coordinate frames
   - Collision and visual geometry
   - RViz2 visualization

5. **Chapter 5: Launch Files & Packages**
   - Launch file XML/Python syntax
   - Package structure and dependencies
   - roslaunch vs ros2 launch
   - Multi-machine deployment

#### Key Concepts
- **Computation Graph**: Network of ROS 2 nodes, topics, services, and actions
- **DDS (Data Distribution Service)**: Middleware standard for real-time communication
- **Node**: Executable unit in ROS 2 that publishes/subscribes to topics
- **Topic**: Named bus for data streaming between nodes
- **Service**: Request/response pattern for synchronous communication
- **Action**: Long-running tasks with feedback and preemption
- **URDF**: XML format for robot description
- **Base Link**: Reference coordinate frame for robot structure
- **TF (Transform Framework)**: Manages coordinate frame transformations

#### Assessment
**Week 5 Project**: Build a multi-node robotic system
- Implement 3+ ROS 2 nodes
- Use topics, services, and parameters
- Create valid URDF model
- Launch complete system
- Debug using rqt tools

**Rubric Levels**: Needs Improvement | Proficient | Excellent

---

### Module 2: Digital Twins - Simulation & Sensors - Weeks 6-7

**Module ID**: `module-2-digital-twin`  
**Duration**: 2 weeks  
**Estimated Effort**: 16-20 hours

#### Learning Outcomes
- Create Gazebo simulation environments with physics and sensors
- Integrate Unity for photorealistic sensor simulation
- Test navigation and perception algorithms in simulation
- Bridge simulated and real robot workflows
- Implement Sim2Real transfer techniques

#### Topics Covered
- Gazebo physics engines and sensor simulation
- Unity robot simulation with high fidelity
- Sensor types: Camera, LiDAR, IMU, Force/Torque
- Environment modeling and spawning
- Debugging simulation issues
- Recording and playback of simulation data (bag files)

#### Key Concepts
- **Digital Twin**: Virtual replica of physical system for simulation and testing
- **Gazebo**: Robot simulation environment with physics
- **Unity**: High-fidelity photorealistic simulation
- **Physics Engine**: Determines collision, friction, gravity behavior
- **Sensor Simulation**: Virtual perception in simulation
- **Bag Files**: ROS 2 data recording format (.db3)
- **Sim2Real Transfer**: Techniques for deploying sim-trained models to real robots

#### Assessment
**Week 7 Project**: Create realistic simulation environment
- Build Gazebo world with obstacles
- Simulate 3+ sensor types
- Test navigation algorithm
- Compare sim vs real behavior
- Document Sim2Real findings

---

### Module 3: NVIDIA Isaac - Perception & Navigation - Weeks 8-10

**Module ID**: `module-3-isaac`  
**Duration**: 3 weeks  
**Estimated Effort**: 30-36 hours

#### Learning Outcomes
- Set up and configure NVIDIA Isaac Sim environments
- Implement visual SLAM (VSLAM) pipelines
- Deploy Nav2 navigation stack
- Generate synthetic training data at scale
- Apply reinforcement learning for robot behavior
- Optimize performance for edge deployment

#### Topics Covered
- Isaac Sim environment setup and configuration
- GPU-accelerated physics simulation
- Synthetic data generation workflows
- VSLAM algorithms and implementation
- Nav2 navigation framework
- Reinforcement learning (PPO, SAC algorithms)
- Performance profiling and optimization
- Domain randomization techniques

#### Key Concepts
- **Isaac Sim**: NVIDIA's GPU-accelerated robot simulator
- **VSLAM (Visual SLAM)**: Simultaneous localization and mapping using visual data
- **Nav2**: ROS 2 navigation framework with planners and costmaps
- **Synthetic Data**: AI-generated training data at scale
- **Domain Randomization**: Variation in sim parameters for Sim2Real transfer
- **Reinforcement Learning**: Learning robot behavior through interaction
- **Imitation Learning**: Learning from demonstrations

#### Assessment
**Week 10 Project**: Implement complete perception pipeline
- Build Isaac Sim environment
- Implement VSLAM system
- Deploy Nav2 navigation
- Generate 1000+ synthetic training images
- Train perception model on synthetic data
- Measure accuracy on test set

---

### Module 4: VLA & Humanoids - Embodied AI - Weeks 11-13

**Module ID**: `module-4-vla-humanoids`  
**Duration**: 3 weeks  
**Estimated Effort**: 30-36 hours

#### Learning Outcomes
- Understand Vision-Language-Action (VLA) model architecture
- Integrate VLA models with humanoid robots
- Implement inverse kinematics (IK) solutions
- Design and execute manipulation tasks
- Integrate conversational AI with robot control
- Deploy multi-modal models efficiently

#### Topics Covered
- Vision-Language-Action model fundamentals
- Transformer-based policy learning
- Humanoid robot kinematics and dynamics
- Manipulation planning and execution
- Grasping and object interaction
- Speech recognition and natural language processing
- Multi-modal fusion (vision + language)
- Efficient inference on edge devices

#### Key Concepts
- **VLA (Vision-Language-Action)**: Models combining vision, language, and action
- **Embodied AI**: AI systems interacting with physical world
- **Humanoid Robot**: Multi-DOF robot mimicking human structure
- **End Effector**: Terminal device (gripper, hand, suction cup)
- **Degrees of Freedom (DOF)**: Independent parameters of robot configuration
- **Inverse Kinematics (IK)**: Calculating joint angles for desired end-effector pose
- **Manipulation**: Grasping and moving objects
- **Policy Learning**: Training neural networks for robot control

#### Capstone Project: Autonomous Humanoid System

**Pipeline**: Voice Input → NLU → Plan → Navigate → Perceive → Manipulate

**Requirements**:
- Speech input with speaker verification
- NLU for task understanding
- Task planning and decomposition
- Navigation to task location
- Visual perception and grasping
- Conversational feedback
- Safety constraints and collision avoidance
- Error recovery and human intervention

**Evaluation Criteria**:
- Task success rate
- Response time
- Safety violations
- Natural language understanding accuracy
- Execution efficiency

---

## Setup Paths

### Path 1: Digital Twin Workstation

**Hardware Requirements**:
- GPU: NVIDIA RTX 3060 or higher (RTX 4090 recommended)
- CPU: Intel i7-12700K or AMD Ryzen 9 5900X
- RAM: 32GB DDR4 (16GB minimum)
- Storage: 500GB NVMe SSD
- Display: 1920x1080 minimum (4K recommended)

**Software Stack**:
```
Ubuntu 22.04 LTS
├── ROS 2 Humble
├── Gazebo Classic or Gazebo Garden
├── Isaac Sim 4.0+
├── CUDA 11.8+
├── cuDNN 8.6+
├── TensorRT 8.6+
└── Python 3.10+
```

**Installation Time**: 4-6 hours  
**Space Required**: ~100GB

### Path 2: Physical AI Edge Kit

**Hardware**:
- NVIDIA Jetson Orin Nano (8GB)
- NVMe SSD 64GB
- Power Supply (25W DC jack)
- Cooling system
- USB peripherals

**Software Stack**:
```
JetPack 6.0 (Ubuntu 22.04 + CUDA 12)
├── ROS 2 Humble
├── NVIDIA TensorRT
├── NVIDIA cuONN
├── GStreamer (for video)
└── TensorFlow Lite / PyTorch
```

**Installation Time**: 2-3 hours  
**Deployment Focus**: Edge inference, real-time perception

### Path 3: Cloud-Native

**Cloud Providers**:
- AWS: g4dn.2xlarge (T4 GPU) or p3.8xlarge (V100)
- Azure: Standard_NC24s_v3 (V100)
- Google Cloud: n1-standard-8 + NVIDIA T4

**Environment**:
- Ubuntu 22.04 base image
- Same software stack as Workstation
- Docker containers for reproducibility
- Jupyter notebooks for interactive development

**Advantages**:
- Scalable GPU access
- No hardware investment
- Collaboration-friendly
- Pay-as-you-go pricing

---

## Project Architecture

### Directory Structure

```
Physical-AI-Humanoid-Robotics-Textbook/
│
├── docs/                              # Main content (MDX files)
│   ├── intro.mdx                      # Course introduction
│   ├── setup/                         # Hardware setup guides
│   │   ├── workstation.mdx
│   │   ├── edge-kit.mdx
│   │   └── cloud.mdx
│   │
│   ├── module-1-ros2/                 # ROS 2 content (Weeks 3-5)
│   │   ├── index.mdx
│   │   ├── chapter-1-intro-ros2.mdx
│   │   ├── chapter-2-nodes-topics.mdx
│   │   ├── chapter-3-services-actions-parameters.mdx
│   │   ├── chapter-4-urdf-robot-modeling.mdx
│   │   └── chapter-5-launch-files-packages.mdx
│   │
│   ├── module-2-digital-twin/         # Digital Twin content (Weeks 6-7)
│   │   └── index.mdx
│   │
│   ├── module-3-isaac/                # Isaac content (Weeks 8-10)
│   │   └── index.mdx
│   │
│   ├── module-4-vla-humanoids/        # VLA & Humanoids (Weeks 11-13)
│   │   └── index.mdx
│   │
│   ├── references/                    # Reference materials
│   │   └── glossary.md                # Robotics terminology (384 terms)
│   │
│   └── _templates/                    # Reusable chapter templates
│       ├── concept.mdx
│       ├── hands-on-lab.mdx
│       ├── reference.mdx
│       └── tutorial.mdx
│
├── src/                               # React components & custom code
│   ├── components/
│   │   ├── GlossarySearch.tsx          # Interactive glossary search
│   │   ├── LanguageToggle.tsx          # EN/Urdu language switcher
│   │   ├── LearningObjectives.tsx      # Chapter objectives display
│   │   ├── ModuleCard.tsx              # Dashboard module cards
│   │   ├── Prerequisites.tsx           # Prerequisite checker
│   │   ├── QuickLinks.tsx              # Navigation helper
│   │   ├── RecentUpdates.tsx           # Update timeline
│   │   └── learning/                   # Specialized learning components
│   │
│   ├── context/
│   │   └── LanguageContext.tsx         # i18n context (EN/Urdu)
│   │
│   ├── data/
│   │   └── modules.json                # Module metadata with bilingual support
│   │
│   ├── pages/
│   │   └── index.tsx                   # Dashboard homepage
│   │
│   ├── theme/
│   │   ├── MDXComponents.js            # Custom Markdown components
│   │   └── Root.tsx                    # Theme root wrapper
│   │
│   └── css/
│       └── custom.css                  # Custom styling
│
├── build/                             # Generated static site (from 'npm build')
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   └── js/
│   ├── docs/
│   └── search/
│
├── contracts/                         # JSON Schema contracts
│   └── chapter-metadata-schema.json    # Validates chapter frontmatter
│
├── specs/                             # Project specifications
│   └── AI-Spec-Driven-Book-Urdu-Button/
│       └── plan.md
│
├── history/                           # Prompt history records (PHRs)
│   └── prompts/
│       ├── constitution/
│       ├── AI-Spec-Driven-Book-Urdu-Button/
│       └── general/
│
├── static/                            # Static assets
│   ├── glossary-index.json            # Glossary index for search
│   └── img/
│
├── Configuration Files
│   ├── docusaurus.config.js           # Docusaurus configuration
│   ├── sidebars.js                    # Navigation structure
│   ├── package.json                   # Dependencies & scripts
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── lighthouserc.js                # Performance testing config
│   └── .github/workflows/             # CI/CD pipelines
│       ├── deploy.yml                 # Deploy to GitHub Pages
│       └── build-validation.yml       # Quality checks
│
├── README.md                          # Project overview
├── CLAUDE.md                          # AI agent code rules
└── .clauderc                          # Claude configuration

```

### Component Hierarchy

```
Root (Docusaurus 3)
├── Homepage (Dashboard)
│   ├── ModuleCard[] (Interactive cards)
│   ├── RecentUpdates (Timeline)
│   └── QuickLinks (Navigation)
│
├── Layout
│   ├── Sidebar (Navigation)
│   │   └── Nested Categories
│   ├── Content Area
│   │   ├── LearningObjectives
│   │   ├── MDX Content
│   │   ├── Prerequisites
│   │   └── References
│   └── Footer
│
└── Search Interface
    ├── Algolia (Full-text)
    └── Glossary Search (Flexsearch)
```

---

## Key Concepts & Glossary

### Robotics Terminology

#### Core ROS 2 Concepts

| Term | Definition | Related Module |
|------|-----------|-----------------|
| **Computation Graph** | Network of ROS 2 nodes communicating via topics, services, and actions. Visualized with `rqt_graph`. | Module 1 |
| **Node** | Executable ROS 2 program that performs specific function (publish/subscribe). | Module 1 |
| **Topic** | Named bus for asynchronous data streaming. Implements pub/sub pattern. | Module 1 |
| **Message** | Data structure sent over topics (e.g., geometry_msgs/Twist). | Module 1 |
| **Service** | Synchronous request/response communication pattern. Client waits for response. | Module 1 |
| **Action** | Asynchronous long-running task with feedback and preemption capability. | Module 1 |
| **DDS** | Data Distribution Service - middleware standard for ROS 2 real-time communication. | Module 1 |
| **URDF** | Unified Robot Description Format - XML format defining robot structure, joints, links. | Module 1 |
| **Base Link** | Reference coordinate frame attached to robot base. All other frames relative to this. | Module 1 |
| **TF (Transform)** | ROS 2 framework managing coordinate frame transformations between robot parts. | Module 1 |
| **Package** | ROS 2 organizational unit containing code, config, launch files. | Module 1 |
| **Bag File** | ROS 2 data recording format (.db3) for recording and playback of topics. | Module 1 & 2 |

#### Simulation & Digital Twin

| Term | Definition | Related Module |
|------|-----------|-----------------|
| **Digital Twin** | Virtual replica of physical system for simulation, testing, optimization. | Module 2 |
| **Gazebo** | Robot simulation environment with physics engine, sensors, actuators. | Module 2 |
| **Unity** | Game engine for photorealistic robot simulation. | Module 2 |
| **Physics Engine** | Software calculating collisions, friction, gravity behavior in simulation. | Module 2 |
| **Sensor Simulation** | Virtual perception in simulation (camera, LiDAR, IMU, force sensors). | Module 2 |
| **Sim2Real Transfer** | Techniques deploying sim-trained models to real robots. | Module 2 & 3 |

#### Isaac Sim & Perception

| Term | Definition | Related Module |
|------|-----------|-----------------|
| **Isaac Sim** | NVIDIA GPU-accelerated robot simulator for perception and navigation. | Module 3 |
| **CUDA** | NVIDIA parallel computing platform for GPU acceleration. | Module 3 |
| **Synthetic Data** | AI-generated training data at scale for deep learning. | Module 3 |
| **VSLAM** | Visual Simultaneous Localization and Mapping using camera for navigation. | Module 3 |
| **Nav2** | ROS 2 navigation framework with planners, costmaps, behaviors. | Module 3 |
| **Domain Randomization** | Variation in sim parameters to improve Sim2Real transfer. | Module 3 |
| **Imitation Learning** | Training robot behavior from expert demonstrations. | Module 3 |
| **RL (Reinforcement Learning)** | Learning robot behavior through interaction with environment. | Module 3 |

#### Vision-Language-Action & Humanoids

| Term | Definition | Related Module |
|------|-----------|-----------------|
| **VLA (Vision-Language-Action)** | Models combining vision perception, language understanding, action execution. | Module 4 |
| **Embodied AI** | AI systems interacting with physical world through sensors and actuators. | Module 4 |
| **Humanoid Robot** | Multi-DOF robot with human-like structure (torso, arms, head, legs). | Module 4 |
| **Transformer Policy** | Neural network policy using transformer architecture for robot control. | Module 4 |
| **End Effector** | Terminal device on robot (gripper, suction cup, hand) performing tasks. | Module 4 |
| **Degrees of Freedom (DOF)** | Independent parameters defining robot configuration. Humanoid arm: 7 DOF. | Module 4 |
| **Inverse Kinematics (IK)** | Calculating joint angles to achieve desired end-effector pose. | Module 4 |
| **Forward Kinematics** | Computing end-effector position given joint angles. | Module 4 |
| **Manipulation** | Tasks involving grasping, moving, and interacting with objects. | Module 4 |
| **Grasping** | Controlling gripper to safely pick and hold objects. | Module 4 |

---

## Technical Stack

### Frontend Framework

- **Docusaurus 3.5.2**: Static site generator with React support
- **React 18.3.1**: UI component library
- **MDX 3.0.1**: Markdown + JSX hybrid content format
- **TypeScript 5.6.3**: Type-safe JavaScript

### Search & Discovery

- **Algolia DocSearch**: Full-text search for documentation
- **Flexsearch 0.7.43**: Lightweight client-side search (glossary)
- **GlossarySearch Component**: Custom interactive glossary search

### Styling & Theming

- **Prism React Renderer 2.4.0**: Code syntax highlighting
- **Custom CSS**: Custom theme in `src/css/custom.css`
- **Responsive Design**: Mobile-friendly, accessible

### Build & Deployment

- **Node.js 18+**: JavaScript runtime
- **npm/yarn**: Package management
- **GitHub Pages**: Hosting deployment
- **GitHub Actions**: CI/CD automation

**Build Commands**:
```bash
npm install          # Install dependencies
npm start            # Start dev server (http://localhost:3000)
npm run build        # Build static site
npm run serve        # Serve built site locally
npm run typecheck    # TypeScript validation
npm run validate-metadata   # Schema validation
npm run generate-glossary-index  # Regenerate glossary index
npm run check-links  # Link validation
npm run lighthouse   # Performance testing
```

### Quality Assurance

- **AJV 8.17.1**: JSON Schema validation
- **Linkinator 6.1.2**: Link checking
- **LHCI 0.13.0**: Lighthouse CI for performance testing
- **Glob 13.0.0**: File pattern matching
- **Gray-matter 4.0.3**: Frontmatter parsing

### Development Tools

- **Docusaurus Swizzle**: Component customization
- **RQT Graph**: ROS 2 visualization
- **RViz2**: Robot visualization
- **VS Code**: Recommended IDE

---

## File Structure Details

### Module Index Files (index.mdx)

Each module has an `index.mdx` that:
- Provides module overview
- Lists chapter prerequisites
- Shows estimated time
- Displays learning outcomes
- Contains module-specific glossary links
- Provides navigation to chapters

**Structure**:
```yaml
---
title: Module Title
description: Brief description
sidebar_position: X
estimated_time: Y hours
learning_objectives:
  - Objective 1
  - Objective 2
prerequisites:
  - Required knowledge
---

# Module Title

[Content with bilingual support]
```

### Chapter Files (chapter-X-*.mdx)

Each chapter includes:
- Learning objectives
- Prerequisites
- Main content sections
- Code examples
- Hands-on exercises
- Summary
- References
- Next steps

**Metadata Fields**:
```yaml
sidebar_position: X              # Order in sidebar
estimated_time: Y                # Hours to complete
learning_objectives:             # What you'll learn
  - Objective 1
prerequisites:                   # What you need to know
  - Prerequisite 1
keywords:                        # SEO keywords
  - keyword1
---
```

### Data Files (modules.json)

Contains structured module metadata:
- Module ID, title, week range
- Learning outcomes (EN + Urdu)
- Bilingual descriptions
- Links to chapters
- Assessment details

**Structure**:
```json
{
  "id": "module-1-ros2",
  "title": "Module 1: Title (EN)",
  "titleUrdu": "ماڈیول 1: عنوان (اردو)",
  "weekRange": "Weeks 3-5",
  "description": "...",
  "descriptionUrdu": "...",
  "learningOutcomes": [...],
  "learningOutcomesUrdu": [...]
}
```

---

## Learning Objectives

### Learning Objectives by Module

#### Module 1: ROS 2 (Weeks 3-5)

**After completing this module, you will be able to**:

1. Explain the ROS 2 computation graph architecture and how components communicate
2. Create publishers, subscribers, and service clients using Python (rclpy)
3. Design and implement custom ROS 2 message types
4. Write launch files for managing multi-node systems
5. Define robot structure using URDF XML syntax
6. Visualize robot models and TF frames in RViz2
7. Debug distributed ROS 2 systems using rqt and rosgraph
8. Build and package reusable ROS 2 software components
9. Understand DDS middleware and communication quality settings
10. Implement both synchronous (services) and asynchronous (actions) patterns

#### Module 2: Digital Twin (Weeks 6-7)

**After completing this module, you will be able to**:

1. Create physics simulation environments using Gazebo with realistic models
2. Integrate custom sensors (camera, LiDAR, IMU) into simulations
3. Implement Sim2Real transfer techniques for algorithm validation
4. Build digital twins for testing navigation and manipulation
5. Record, playback, and analyze simulation data using ROS 2 bag files
6. Identify and resolve simulation physics issues
7. Compare simulated vs. real robot behavior systematically
8. Design sensor configurations for specific robotics applications

#### Module 3: Isaac Sim (Weeks 8-10)

**After completing this module, you will be able to**:

1. Set up and configure NVIDIA Isaac Sim environments
2. Generate synthetic training data at scale (1000s of labeled images)
3. Implement Visual SLAM (VSLAM) perception pipelines
4. Deploy ROS 2 Nav2 navigation framework in simulation
5. Train reinforcement learning policies using PPO/SAC algorithms
6. Apply domain randomization for improved Sim2Real transfer
7. Profile and optimize robot perception algorithms for edge devices
8. Validate algorithms in high-fidelity simulation before hardware deployment

#### Module 4: VLA & Humanoids (Weeks 11-13)

**After completing this module, you will be able to**:

1. Understand Vision-Language-Action (VLA) model architectures
2. Integrate multimodal models (vision + language) with robot control
3. Solve inverse kinematics for humanoid manipulation
4. Design and execute multi-step manipulation tasks
5. Implement safety constraints for physical interaction
6. Deploy efficient inference on edge devices
7. Build voice-controlled robot interfaces with NLU
8. Debug and improve VLA model performance on robotic tasks
9. Handle error recovery and human intervention in autonomous systems

#### Capstone: Autonomous Humanoid System

**System Requirements**:
- Voice input processing with speaker verification
- Natural language understanding for task comprehension
- Autonomous planning and task decomposition
- Navigation to task location with obstacle avoidance
- Visual perception and object detection
- Dexterous manipulation with grasping
- Real-time conversational feedback
- Safety constraints and failure detection
- Human intervention and override capabilities

---

## Assessment Rubrics

### Assessment Structure

Each module includes practical assessments with **three evaluation levels**:

| Level | Score | Criteria |
|-------|-------|----------|
| **Needs Improvement** | 60-75% | Code works but with issues; incomplete features; limited testing |
| **Proficient** | 76-90% | All features working; code is clean; thorough testing; good documentation |
| **Excellent** | 91-100% | Exceeds requirements; optimized; innovative approach; exceptional documentation |

### Module 1 Assessment: ROS 2 Package Project (Week 5)

**Objective**: Build a multi-node robotic system demonstrating ROS 2 concepts

**Requirements**:
- [ ] Minimum 3 ROS 2 nodes with distinct responsibilities
- [ ] At least 2 different communication patterns (pub/sub, service, action)
- [ ] Custom message type definition
- [ ] Valid URDF robot model with 3+ joints
- [ ] Launch file that starts all nodes and loads parameters
- [ ] rqt graph visualization showing computation graph
- [ ] Functional nodes with clean code and docstrings
- [ ] Unit tests for key functions

**Evaluation Criteria**:
- Code architecture and design patterns
- ROS 2 communication correctness
- URDF validity and visualization
- Documentation and code clarity
- Testing coverage (unit + integration)
- Performance (latency, CPU usage)

### Module 2 Assessment: Digital Twin Simulation (Week 7)

**Objective**: Create realistic simulation environment for testing perception and navigation

**Requirements**:
- [ ] Gazebo environment with 5+ obstacles and features
- [ ] 3+ sensor types integrated (camera, LiDAR, IMU minimum)
- [ ] Robot model with correct physics properties
- [ ] Navigation algorithm tested in simulation
- [ ] Bag file recording of sensor data (minimum 5 minutes)
- [ ] Comparison analysis: simulated vs. real robot behavior
- [ ] Sim2Real transfer strategy documented
- [ ] Performance metrics (simulation vs. hardware)

**Evaluation Criteria**:
- Environment complexity and realism
- Sensor accuracy and calibration
- Algorithm performance in simulation
- Data quality and analysis depth
- Sim2Real transfer effectiveness
- Documentation completeness

### Module 3 Assessment: Perception Pipeline (Week 10)

**Objective**: Implement complete perception system with synthetic data training

**Requirements**:
- [ ] Isaac Sim environment setup with domain randomization
- [ ] Generate 1000+ labeled synthetic training images
- [ ] VSLAM system implementation and calibration
- [ ] Nav2 navigation stack configured and tested
- [ ] Perception model trained on synthetic data
- [ ] Accuracy metrics on test set (75%+ minimum)
- [ ] Real-time inference performance measured
- [ ] Edge deployment optimization for Jetson

**Evaluation Criteria**:
- Synthetic data quality and diversity
- VSLAM accuracy and robustness
- Navigation path quality and safety
- Model accuracy and generalization
- Inference speed and resource usage
- Edge deployment success

### Module 4 Capstone Assessment: Autonomous Humanoid System (Week 13)

**Objective**: Build end-to-end autonomous system with voice interface

**System Pipeline**:
```
Voice Input → Speech Recognition → NLU → Task Planning → 
Navigation → Perception → Grasping → Manipulation → 
Conversational Feedback → Error Recovery
```

**Requirements**:
- [ ] Voice interface with wake word detection
- [ ] NLU for task parsing (minimum 10 task types)
- [ ] Task planning with decomposition
- [ ] Navigation with obstacle avoidance
- [ ] Visual perception and object detection
- [ ] Grasping with success rate 80%+
- [ ] Safety constraints (force limits, collision detection)
- [ ] Error recovery mechanisms
- [ ] System documentation with architecture diagrams
- [ ] Video demonstration of 3 complete tasks

**Evaluation Criteria**:
- Task success rate (target: 80%+)
- Response time and latency
- Safety violations (target: 0)
- NLU accuracy and robustness
- Graceful error handling
- Code quality and documentation
- Innovation and creativity
- System robustness and reliability

---

## Development Workflow

### Contributing Guidelines

1. **Choose a task** from the specification
2. **Create a branch**: `git checkout -b feature/task-name`
3. **Make changes** following code standards
4. **Validate metadata**: `npm run validate-metadata`
5. **Test build**: `npm run build`
6. **Check links**: `npm run check-links`
7. **Type check**: `npm run typecheck`
8. **Create PR** with description
9. **Request review** and respond to feedback
10. **Merge** once approved

### Quality Gates (All PRs)

- ✅ Build with 0 errors/warnings
- ✅ TypeScript type checking passes
- ✅ All metadata validates against schema
- ✅ No broken links
- ✅ Lighthouse scores > 90
- ✅ All chapters have proper metadata
- ✅ Glossary index updated
- ✅ Code reviewed and approved

### Metadata Validation

All chapter files must include:
```yaml
---
title: Chapter Title
description: Brief description
keywords: [keyword1, keyword2, ...]
sidebar_position: X
estimated_time: Y
learning_objectives:
  - Objective 1
prerequisites:
  - Prerequisite 1
---
```

Validated against `contracts/chapter-metadata-schema.json`

---

## AI Integration Notes

### For Chat Agents & AI Systems

This data structure is designed for AI integration with the following capabilities:

1. **Content Comprehension**: Full course structure, learning objectives, and module descriptions
2. **Student Context**: Current module, progress tracking, prerequisites
3. **Code Reference**: ROS 2 concepts, URDF syntax, navigation frameworks
4. **Assessment Guidance**: Rubrics for evaluating student work
5. **Troubleshooting**: Glossary of robotics terms and common issues
6. **Resource Recommendations**: Hardware paths, setup guides, learning materials

### Recommended AI Use Cases

- **Learning Assistant**: Answer questions about robotics concepts
- **Code Review**: Evaluate student ROS 2 implementations
- **Project Guidance**: Help students plan capstone projects
- **Debugging Support**: Diagnose ROS 2 communication issues
- **Content Generator**: Create practice exercises and quiz questions
- **Chatbot**: Answer student questions about course material
- **Assessment Automation**: Evaluate chapter submissions
- **Progress Tracking**: Monitor student learning outcomes

### Key Integration Points

- **Module Structure**: Use module IDs and week ranges for temporal context
- **Learning Objectives**: Reference specific learning goals for student guidance
- **Assessment Rubrics**: Use evaluation criteria for feedback generation
- **Glossary**: Reference definitions for technical terminology
- **Prerequisites**: Check student readiness before advancing
- **Bilingual Content**: Support EN and Urdu responses

---

## AI Chat Agent Question Bank

### General Course Questions

#### Getting Started
1. **Which hardware path is best for me?**
   - Based on: budget, available GPU, physical space, learning goals
   - Guidance: Workstation for development, Edge Kit for deployment, Cloud for flexibility

2. **Do I have the prerequisites to start this course?**
   - Check: Python programming proficiency, Linux command line comfort, linear algebra basics
   - Recommendation: Review prerequisite resources before starting

3. **How much time should I dedicate each week?**
   - Standard: 10-12 hours per week (lectures, exercises, projects)
   - Breakdown: 3-4 hours concepts, 4-6 hours hands-on labs, 2-3 hours projects

4. **What's the best way to navigate the course?**
   - Start with: Introduction (Weeks 1-2)
   - Follow sequence: Module 1 → Module 2 → Module 3 → Module 4
   - Complete: Capstone project in Week 13

5. **Is there a completion certificate or credential?**
   - Guidance: Complete all 4 modules and capstone project with "Proficient" or "Excellent" rating
   - Assessment: Based on practical work, not exams

### Module 1: ROS 2 Questions (Weeks 3-5)

#### Conceptual Questions

1. **What's the difference between ROS 1 and ROS 2?**
   - Key differences: Middleware (TCPROS → DDS), communication quality, real-time support
   - Why upgrade: Better performance, security, production-ready

2. **How do topics, services, and actions differ?**
   - **Topics**: Asynchronous streaming (e.g., camera data)
   - **Services**: Synchronous request/response (e.g., capture image)
   - **Actions**: Long-running tasks with feedback (e.g., move to goal)
   - Example use cases for each

3. **What is the computation graph?**
   - Definition: Network of nodes communicating via topics/services/actions
   - Visualization: Use `rqt_graph` command
   - Debugging: Identify communication bottlenecks

4. **What does URDF do and why do I need it?**
   - Purpose: Defines robot structure (links, joints, sensors)
   - Applications: Simulation, visualization (RViz2), kinematics
   - Structure: Links (rigid bodies) + Joints (connections)

5. **How does the ROS parameter server work?**
   - Usage: Store configuration values accessible by all nodes
   - Example: Robot dimensions, sensor calibration, safety thresholds
   - Access: Via `rclpy.Parameter` API

#### Practical/Coding Questions

6. **How do I create a simple publisher in ROS 2?**
   - Code example: rclpy basic pub/sub
   - Common issues: Incorrect topic name, message type mismatch
   - Debugging: Use `ros2 topic echo` to monitor

7. **How do I debug ROS 2 communication?**
   - Tools: `ros2 topic list`, `ros2 topic echo`, `rqt`, `rosgraph`
   - Common issues: Node not started, wrong topic names, firewall
   - Solution strategy: Check computation graph first

8. **What's the correct way to write a launch file?**
   - XML vs Python syntax comparison
   - When to use each: XML for simple, Python for complex logic
   - Example: Multi-node system with parameters

9. **How do I define custom message types?**
   - Location: `msg/` folder in package
   - Syntax: Field definitions with types
   - Build: CMakeLists.txt integration

10. **How do I test my ROS 2 node implementation?**
    - Unit testing framework: pytest with rclpy
    - Mock testing: Using test nodes
    - Integration testing: Launch files with multiple nodes

11. **Why isn't my node receiving messages?**
    - Check: Node is subscribed to correct topic
    - Verify: Publisher sending on same topic
    - Debug: Use `ros2 topic list` and `ros2 topic echo`

12. **How do I make my ROS 2 code production-ready?**
    - Best practices: Error handling, logging, timeouts
    - Code standards: PEP 8, type hints, documentation
    - Testing: Unit tests, integration tests, load testing

### Module 2: Digital Twin Questions (Weeks 6-7)

#### Conceptual Questions

1. **What is a digital twin and why use one?**
   - Definition: Virtual replica for testing, optimization, validation
   - Benefits: Safe testing, faster iteration, cost reduction
   - Use cases: Algorithm validation, sensor calibration, Sim2Real transfer

2. **What's the difference between Gazebo and Unity for robotics?**
   - **Gazebo**: Physics accuracy, ROS 2 integration, lightweight
   - **Unity**: Photorealistic graphics, physics approximation, visual fidelity
   - Choice: Gazebo for algorithm testing, Unity for photorealism

3. **How accurate does simulation need to be?**
   - Depends on: Application, transfer learning strategy, sensor fidelity
   - Trade-off: Accuracy vs. computational cost
   - Validation: Compare simulation vs. real robot behavior

4. **What is Sim2Real transfer?**
   - Problem: Simulation-to-reality gap
   - Solutions: Domain randomization, sensor simulation, real-world validation
   - Best practices: Start simple, gradually increase complexity

5. **How do I record and analyze robot behavior?**
   - Tool: ROS 2 bag files (.db3 format)
   - Usage: Record sensor data, playback for debugging
   - Analysis: Compare simulation vs. real execution

#### Practical Questions

6. **How do I set up physics in Gazebo?**
   - Physics engine: ODE, Bullet, DART
   - Parameters: Gravity, friction, time step
   - Validation: Simulate and compare with real world

7. **How do I simulate sensors accurately?**
   - Camera: Simulate noise, distortion, focal length
   - LiDAR: Simulate range, angular resolution, noise
   - IMU: Simulate bias, noise, gravity effects

8. **Why is my simulation unrealistic?**
   - Common issues: Wrong physics engine, poor calibration, missing friction
   - Debug approach: Simplify environment, adjust parameters iteratively
   - Validation: Compare metrics (pose error, force feedback, timing)

9. **How do I transfer skills from simulation to real robot?**
   - Pre-requisite: Algorithm tested in simulation
   - Steps: Run on physical robot, measure performance, iterate
   - Gap: Expect 10-30% performance drop initially

10. **Can I run Isaac Sim instead of Gazebo?**
    - Yes, but: Isaac Sim is GPU-accelerated, more powerful
    - Trade-off: Complexity vs. features
    - Sequential: Use Gazebo first to learn, Isaac Sim later

### Module 3: Isaac Sim Questions (Weeks 8-10)

#### Conceptual Questions

1. **Why use Isaac Sim instead of Gazebo?**
   - Advantages: GPU acceleration, synthetic data generation, domain randomization
   - Best for: Perception, deep learning, large-scale training
   - Trade-off: More resource-intensive, steeper learning curve

2. **What is synthetic data and why generate it?**
   - Definition: AI-generated training data (images, labels) at scale
   - Benefits: No manual labeling, unlimited variety, safety
   - Use case: Train perception models without real robot

3. **What is VSLAM and how does it work?**
   - VSLAM: Visual Simultaneous Localization and Mapping
   - Input: Camera stream
   - Output: Robot pose + 3D map
   - Applications: Indoor navigation, mapping unknown spaces

4. **What is the Nav2 stack and what does it do?**
   - Nav2: ROS 2 navigation framework
   - Components: Global planner, local planner, costmaps, behavior trees
   - Output: Path planning and obstacle avoidance
   - Integration: Works with VSLAM for autonomous navigation

5. **What is domain randomization?**
   - Problem: Model trained in simulation fails in real world
   - Solution: Vary simulation parameters (lighting, textures, physics)
   - Result: More robust models that generalize to real world

6. **What is reinforcement learning and when to use it?**
   - RL: Train robot behavior through interaction
   - Benefits: Can discover novel solutions
   - Limitations: Slow training, safety concerns
   - Applications: Manipulation, locomotion, control

#### Practical Questions

7. **How do I set up Isaac Sim for the first time?**
   - Prerequisites: NVIDIA GPU (RTX 3060+), CUDA, 100GB storage
   - Installation: Download from NVIDIA Omniverse
   - Verification: Run example environments to confirm setup

8. **How do I generate synthetic training data?**
   - Steps: Setup scene, configure randomization, run simulation, save outputs
   - Output: Images + annotations (bounding boxes, segmentation masks)
   - Scale: Generate 1000s of images quickly
   - Quality: Tune randomization for realism

9. **Why is my VSLAM system drifting?**
   - Causes: Poor feature tracking, fast motion, low light
   - Solutions: Reduce speed, improve lighting, use motion priors
   - Validation: Compare estimated vs. ground truth poses

10. **How do I integrate Nav2 with my robot?**
    - Steps: Setup costmaps, configure planners, create launch files
    - Testing: Use simulation first, validate in real world
    - Debugging: Monitor /tf and /costmap topics

11. **How do I train an RL policy for my robot?**
    - Framework: Ray RLlib, Stable-Baselines3, or custom
    - Process: Define reward function, train in simulation, evaluate
    - Validation: Test on real robot with safety constraints

12. **Is my model ready to deploy on edge devices?**
    - Criteria: Inference time < 100ms, memory footprint < 2GB, accuracy > 80%
    - Optimization: Quantization, pruning, model distillation
    - Testing: Profile on target hardware (e.g., Jetson)

### Module 4: VLA & Humanoids Questions (Weeks 11-13)

#### Conceptual Questions

1. **What are Vision-Language-Action (VLA) models?**
   - Definition: Neural networks that understand vision, language, and action
   - Components: Vision encoder, language encoder, action decoder
   - Applications: Robot manipulation, instruction following

2. **How do VLA models differ from traditional robot control?**
   - Traditional: Hand-crafted features, rule-based planning
   - VLA: End-to-end learning from data
   - Advantage: More flexible, generalizes to new tasks

3. **What is inverse kinematics and why is it important?**
   - Problem: Given desired end-effector position, find joint angles
   - Challenge: Multiple solutions, singularities, constraints
   - Applications: Manipulation, grasping, movement planning
   - Tools: IKPy library, analytical solutions, numerical solvers

4. **What is a humanoid robot and how is it different?**
   - Structure: Human-like form (torso, arms, head, legs)
   - Challenges: Many DOF (30-50+), complex kinematics, unstable locomotion
   - Advantage: Can use human tools and environments
   - Examples: Boston Dynamics Atlas, Tesla Optimus, NVIDIA GR00T

5. **How do I implement safe manipulation?**
   - Safety: Force limits, collision detection, emergency stop
   - Compliance: Soft gripper, force feedback, impedance control
   - Validation: Test with fragile objects

6. **What's the best way to approach the capstone project?**
   - Strategy: Start simple (single task), expand gradually
   - Modules: Integrate voice → NLU → planning → execution
   - Testing: Validate each component independently first
   - Safety: Implement fail-safes before full integration

#### Practical Questions

7. **How do I solve inverse kinematics?**
   - Options: Analytical (fast, limited), numerical (flexible, slower)
   - Tools: IKPy, PyBullet, MoveIt, custom implementation
   - Testing: Verify joint limits, check for singularities

8. **How do I implement grasping?**
   - Approach: Object detection → grasp point estimation → gripper control
   - Detection: Use VLA model or specialized network
   - Execution: Move to grasp pose, apply force, lift
   - Validation: Success rate on multiple object types

9. **How do I integrate speech recognition?**
   - Options: Google Cloud Speech, Azure Speech, local models (Whisper)
   - Latency: Cloud ~500ms, local <100ms
   - Accuracy: Trade-off between accuracy and speed

10. **How do I train a custom VLA model?**
    - Data collection: Teleoperation, demonstrations, sim-to-real
    - Architecture: Vision encoder + language encoder + action decoder
    - Training: Supervised learning with demonstration data
    - Evaluation: Task success rate on test tasks

11. **How do I make my VLA model work in real-time?**
    - Optimization: Quantization, pruning, knowledge distillation
    - Hardware: GPU acceleration, edge TPUs
    - Profiling: Measure latency on target hardware
    - Trade-off: Accuracy vs. speed

12. **What do I do if my model fails on a task?**
    - Analysis: Collect failure data, analyze error patterns
    - Strategies: Retrain with failure examples, add safety constraints
    - Fallback: Implement human intervention mechanism

13. **How do I design error recovery?**
    - Detection: Pose estimation error, force feedback anomalies
    - Strategies: Retry task, ask for help, safe shutdown
    - Implementation: State machine, timeout handling

### Capstone Project Questions

1. **How should I structure the capstone project?**
   - Architecture: Modular components (voice → NLU → planning → execution)
   - Integration: Use ROS 2 for communication between components
   - Testing: Validate each module independently before integration
   - Documentation: Code comments, system architecture diagrams, video demo

2. **What are realistic task targets for the capstone?**
   - Starting tasks: Pick and place, open drawer, press button
   - Intermediate: Multi-step tasks (get object from room A, put in room B)
   - Advanced: Tasks requiring planning, adaptation, human interaction

3. **How do I validate task success?**
   - Metrics: Success rate, time to completion, safety violations
   - Testing: 10 trials per task minimum
   - Edge cases: Different object sizes, lighting conditions, positions

4. **What safety precautions should I implement?**
   - Must-have: E-stop button, force limits, collision detection
   - Monitoring: Joint temperature, motor current, sensor health
   - Fallback: Safe shutdown on error, human override always available

5. **How much time should capstone take?**
   - Typical: 40-50 hours development + testing
   - Breakdown: 10h architecture, 15h component dev, 15h integration, 10h testing

6. **Can I use a real robot or only simulation?**
   - Acceptable: Start in simulation, validate on real robot if available
   - Alternative: Detailed sim validation is sufficient
   - Bonus: Real robot deployment increases grade

7. **Should I focus on a specific domain (e.g., pick-and-place)?**
   - Recommendation: Choose domain matching your interests
   - Example domains: Manipulation, navigation, assembly, home assistance
   - Evaluation: Based on complexity and completeness, not domain choice

### Troubleshooting Questions

#### ROS 2 Debugging

1. **My node won't start. What should I check?**
   - Checklist: Python imports, package dependencies, syntax errors
   - Debug: Run `python3 -m py_compile filename.py`
   - Log: Check terminal output for error messages

2. **Topic communication is not working. What's wrong?**
   - Verify: Publisher and subscriber on same topic name
   - Check: Message types match exactly
   - Diagnose: `ros2 topic list`, `ros2 topic echo`, `rqt_graph`

3. **My URDF doesn't load correctly. How do I fix it?**
   - Validate: Use URDF checker tools
   - Test: Load in RViz2, check for missing files
   - Common issues: Wrong paths, syntax errors, missing packages

4. **How do I fix ROS 2 dependency issues?**
   - Step 1: Check package.xml has all dependencies
   - Step 2: Run `rosdep install --from-paths src --ignore-src -r -y`
   - Step 3: Rebuild with `colcon build`

#### Simulation Debugging

5. **My simulation is running very slowly. How can I speed it up?**
   - Reduce: Physics engine frequency, graphics quality, sensor resolution
   - Optimize: Use simpler geometry, reduce collision detection
   - Monitor: Check CPU/GPU usage, identify bottleneck

6. **Why is my robot falling through the floor in simulation?**
   - Check: Gravity parameter, physics engine settings
   - Verify: Robot and floor have collision geometry
   - Solution: Increase physics time step, increase friction

#### Perception Debugging

7. **My perception model has low accuracy. What can I improve?**
   - Data: Collect more diverse training data
   - Model: Try different architecture, hyperparameter tuning
   - Validation: Analyze failure cases, retrain on hard examples

8. **My VSLAM system loses tracking. How do I stabilize it?**
   - Check: Adequate lighting, sufficient texture
   - Reduce: Movement speed, camera motion blur
   - Add: Loop closure detection, motion priors

### Study & Preparation Questions

1. **What should I review before starting Module 1?**
   - Prerequisites: Python fundamentals, Ubuntu basics, linear algebra basics
   - Setup: Complete hardware path installation
   - Resources: Skim ROS 2 official documentation

2. **How should I approach hands-on exercises?**
   - Read: Understand exercise requirements first
   - Code: Write from scratch when possible (avoid copy-paste)
   - Test: Validate functionality before moving on
   - Extend: Try variations and edge cases

3. **How should I prepare for assessments?**
   - Review: Learning objectives for the chapter
   - Practice: Complete all hands-on exercises
   - Test: Run your code multiple times
   - Document: Add comments and docstrings

4. **What resources are available if I get stuck?**
   - Glossary: Search for term definitions
   - References: Links to official documentation
   - Forum: Textbook GitHub discussions
   - Office hours: (If instructor provides)

5. **How do I compare my work with examples?**
   - Approach: Implement independently first
   - Then: Compare architecture and approach
   - Learn: Identify alternative solutions
   - Adopt: Best practices from examples

---

## Quick Reference

### Command Reference

```bash
# Development
npm start              # Start dev server
npm run build          # Build static site
npm run serve          # Serve locally
npm run typecheck      # Type check

# Validation
npm run validate-metadata     # Check metadata
npm run generate-glossary-index  # Update glossary
npm run check-links          # Check for broken links
npm run lighthouse           # Performance testing

# Utilities
npm run swizzle             # Customize components
npm run write-translations  # i18n management
npm run write-heading-ids   # Auto-generate heading anchors
```

### File Naming Conventions

- **Chapters**: `chapter-X-descriptive-name.mdx`
- **Modules**: `module-X-name/`
- **Setup**: `setup/hardware-type.mdx`
- **References**: `references/topic.md`
- **Components**: `ComponentName.tsx`
- **Styles**: `kebab-case.css`

### Directory Naming

- **Content**: `lowercase-with-dashes`
- **Components**: `PascalCase`
- **Utilities**: `lowercase_with_underscores`

---

## Version Information

- **Docusaurus**: 3.5.2
- **React**: 18.3.1
- **Node**: 18.0+
- **TypeScript**: 5.6.3
- **MDX**: 3.0.1

---

## Important Links

- **Repository**: https://github.com/FahadAbdulQayyum/Physical-AI-Humanoid-Robotics-Textbook
- **Deployed Site**: https://FahadAbdulQayyum.github.io/Physical-AI-Humanoid-Robotics-Textbook/
- **ROS 2 Documentation**: https://docs.ros.org/en/humble/
- **Isaac Sim Documentation**: https://docs.omniverse.nvidia.com/isaacsim/latest/
- **Gazebo Documentation**: https://gazebosim.org/
- **Docusaurus Documentation**: https://docusaurus.io/

---

**Document Version**: 1.0  
**Last Updated**: December 11, 2025  
**Maintained By**: FahadAbdulQayyum  
**License**: Educational Material
