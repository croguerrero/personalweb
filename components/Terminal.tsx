import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Terminal as TerminalIcon, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

const commands = [
  { cmd: "gcloud config set project portfolio-prod", output: "Updated property [core/project]." },
  { cmd: "terraform init", output: "Initializing provider plugins... Terraform has been successfully initialized!" },
  { cmd: "terraform plan", output: "Plan: 5 to add, 0 to change, 0 to destroy." },
  { cmd: "terraform apply -auto-approve", output: "aws_s3_bucket.portfolio: Creating... \naws_s3_bucket.portfolio: Creation complete after 3s [id=christian-guerrero-portfolio]" },
  { cmd: "kubectl apply -f k8s/deployment.yaml", output: "deployment.apps/portfolio-app created" },
  { cmd: "kubectl get pods", output: "NAME                             READY   STATUS    RESTARTS   AGE\nportfolio-app-6d4b56c-x82z9      1/1     Running   0          5s" },
];

const Typewriter = ({ text, onUpdate }: { text: string; onUpdate: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        onUpdate();
      } else {
        clearInterval(interval);
      }
    }, 8); // Fast typing speed (8ms per char)

    return () => clearInterval(interval);
  }, [text, onUpdate]);

  return <>{displayedText}</>;
};

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<{ cmd: string; output: string }[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (currentStep < commands.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, commands[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, 1500); // Slightly increased delay to allow typing to finish
      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg mx-auto bg-[#0d1117] rounded-lg overflow-hidden border border-slate-700 shadow-2xl font-mono text-xs sm:text-sm"
    >
      <div className="bg-[#161b22] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-1.5">
          <Circle className="w-3 h-3 text-red-500 fill-red-500" />
          <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <Circle className="w-3 h-3 text-green-500 fill-green-500" />
        </div>
        <div className="flex items-center gap-2 ml-4 text-slate-400">
            <TerminalIcon size={14} />
            <span>bash — 80x24</span>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="p-4 h-80 overflow-y-auto space-y-4 text-slate-300 scroll-smooth"
      >
        <div className="text-slate-500">Last login: {new Date().toDateString()} on ttys000</div>
        {lines.map((line, idx) => (
          <div key={idx}>
            <div className="flex gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~/infrastructure</span>
              <span className="text-slate-100">$ {line.cmd}</span>
            </div>
            <div className="text-slate-400 whitespace-pre-wrap leading-relaxed mt-1 opacity-80">
                <Typewriter text={line.output} onUpdate={scrollToBottom} />
            </div>
          </div>
        ))}
        {currentStep < commands.length && (
            <div className="flex gap-2">
                 <span className="text-green-500">➜</span>
                 <span className="text-blue-400">~/infrastructure</span>
                 <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2.5 h-5 bg-slate-400 inline-block align-middle"
                />
            </div>
        )}
        {currentStep >= commands.length && (
             <div className="flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/infrastructure</span>
                <span className="text-green-400">$ echo "System Ready"</span>
           </div>
        )}
      </div>
    </motion.div>
  );
};