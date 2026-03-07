"use client";
import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Demand Forecaster",
    description: "Time-series forecasting model using deep learning to predict inventory demand.",
    fullDescription: "A comprehensive deep learning pipeline that processes historical sales data, weather information, and marketing events to predict future product demand. Built specifically to mitigate stockouts while preventing over-ordering.",
    features: [
      "LSTM and Transformer-based architecture comparison",
      "Automated automated data ingestion pipelines",
      "Interactive dashboard for business users",
      "API endpoints for real-time inference"
    ],
    tech: ["PyTorch", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 2,
    title: "Graph Neural Net Classifier",
    description: "Node classification system using GNNs to detect fraudulent transactions.",
    fullDescription: "Utilizes advanced Graph Convolutional Networks (GCN) to traverse complex transaction networks. Identifies anomalous patterns indicating potential fraud rings that traditional tabular models miss.",
    features: [
      "Graph creation from tabular transaction logs",
      "Custom GNN implementation via PyTorch Geometric",
      "High accuracy on highly imbalanced datasets",
      "Explainability module outlining risk sub-graphs"
    ],
    tech: ["Python", "PyTorch Geometric", "NetworkX", "Scikit-Learn"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Knowledge Base Agent",
    description: "RAG-powered conversational agent for internal documentation.",
    fullDescription: "An end-to-end Retrieval-Augmented Generation system. Answers complex domain-specific questions securely by grounding LLM responses purely on proprietary enterprise data.",
    features: [
      "Vector embeddings with multi-modal support",
      "Hybrid search (semantic + keyword)",
      "Strict citation and hallucination checks",
      "Conversation memory management"
    ],
    tech: ["LangChain", "Qdrant", "OpenAI API", "React", "Tailwind CSS"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 4,
    title: "Autonomous Drone Navigation",
    description: "Reinforcement learning agent for obstacle avoidance in drone flights.",
    fullDescription: "Developed a deep Q-learning system in simulated environments to train drones for navigating through complex urban obstacles autonomously using depth-camera inputs. Deployed on edge devices using TensorRT.",
    features: [
      "Custom 3D simulation environment in Unity",
      "PPO and SAC algorithm implementations",
      "Hardware-in-the-loop (HIL) testing",
      "Edge-optimized inference"
    ],
    tech: ["Python", "PyTorch", "ROS2", "TensorRT", "C++"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 5,
    title: "Healthcare Document Parser",
    description: "NLP pipeline to extract key medical entities from clinical notes.",
    fullDescription: "A specialized NLP model fine-tuned on medical corpora to extract diagnoses, medications, and procedures from unstructured clinical text. Employs a custom Named Entity Recognition (NER) architecture.",
    features: [
      "Clinical BERT fine-tuning",
      "De-identification of patient records (HIPAA compliant)",
      "Confidence scoring for human-in-the-loop review",
      "High-throughput batch processing"
    ],
    tech: ["Python", "Transformers", "spaCy", "FastAPI"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 6,
    title: "Real-time Anomaly Detection",
    description: "Streaming analytics platform for detecting server infrastructure anomalies.",
    fullDescription: "A high-performance pipeline ingesting system logs and metrics in real-time. Uses isolation forests and autoencoders to flag unusual CPU, memory, or network patterns before system outages occur.",
    features: [
      "Kafka streaming integration",
      "Unsupervised anomaly detection ensemble",
      "Low-latency alerting mechanism",
      "Time-series visualizations"
    ],
    tech: ["Kafka", "PySpark", "Scikit-Learn", "Grafana", "Prometheus"],
    githubLink: "#",
    demoLink: "#",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative z-10 w-full max-w-7xl px-6 py-24">
      <SectionWrapper>
        <div className="mb-14 flex items-center w-full cursor-pointer">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white px-6 whitespace-nowrap">
            Featured Projects<span className="text-cyan-400">.</span>
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(91,192,190,0.2)]"
            >
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="mb-6 flex-1 text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-white/5 px-2 py-1 text-xs font-medium text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="rounded bg-white/5 px-2 py-1 text-xs font-medium text-gray-400">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <button 
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                  Code
                </button>
                <button 
                  className="flex items-center gap-2 text-sm font-medium text-cyan-500 transition-colors hover:text-cyan-400"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center w-full">
          <a
            href="https://github.com/Utsab" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-cyan-500/30 backdrop-blur-sm"
          >
            <span>More Projects on GitHub</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </SectionWrapper>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
