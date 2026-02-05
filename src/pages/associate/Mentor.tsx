import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, User, Sparkles, BookOpen, Code, Lightbulb, Loader2 } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { icon: Code, text: "Explain React hooks" },
  { icon: BookOpen, text: "Help me study for my DevOps assessment" },
  { icon: Lightbulb, text: "Give me a coding challenge" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! I'm your AI Mentor. I can help you with learning concepts, preparing for assessments, coding challenges, and career guidance. What would you like to work on today?",
    timestamp: new Date(),
  },
];

// Enhanced AI response generator
const generateAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("react hooks") || lowerMessage.includes("hooks")) {
    return `Great question about React Hooks! Here's a quick overview:

**useState** - Manages component state
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

**useEffect** - Handles side effects (API calls, subscriptions)
\`\`\`javascript
useEffect(() => {
  fetchData();
}, [dependency]);
\`\`\`

**useContext** - Accesses context values without prop drilling

**useCallback & useMemo** - Optimization hooks for memoization

Would you like me to dive deeper into any specific hook?`;
  }

  if (lowerMessage.includes("devops") || lowerMessage.includes("assessment")) {
    return `Let's prepare for your DevOps assessment! Here are key areas to focus on:

**1. CI/CD Pipelines**
- GitHub Actions, Jenkins, GitLab CI
- Build, test, deploy stages

**2. Containerization**
- Docker fundamentals
- Container orchestration with Kubernetes

**3. Infrastructure as Code**
- Terraform basics
- CloudFormation (AWS)

**4. Monitoring & Logging**
- Prometheus, Grafana
- ELK Stack

Would you like practice questions on any of these topics?`;
  }

  if (lowerMessage.includes("coding challenge") || lowerMessage.includes("challenge")) {
    return `Here's a coding challenge for you:

**Challenge: Two Sum**

Given an array of integers \`nums\` and a target \`target\`, return indices of the two numbers that add up to target.

Example:
\`\`\`
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9
\`\`\`

**Constraints:**
- You may not use the same element twice
- Only one valid answer exists

Try solving it, and I'll review your approach! 🚀`;
  }

  if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("interview")) {
    return `Great that you're thinking about your career! Here are some tips:

**Technical Preparation:**
- Practice LeetCode/HackerRank regularly
- Build portfolio projects
- Contribute to open source

**Soft Skills:**
- Clear communication
- Problem-solving approach
- Team collaboration examples

**Interview Tips:**
- Think out loud during coding
- Ask clarifying questions
- Discuss trade-offs in your solutions

What specific role are you targeting?`;
  }

  if (lowerMessage.includes("help") || lowerMessage.includes("what can you do")) {
    return `I'm here to accelerate your learning journey! I can help with:

📚 **Learning Concepts** - Explain programming topics, frameworks, and best practices

🎯 **Assessment Prep** - Practice questions and study guides for your certifications

💻 **Code Reviews** - Review your code and suggest improvements

🧩 **Coding Challenges** - Algorithmic problems to sharpen your skills

🚀 **Career Guidance** - Interview prep, resume tips, and career path advice

What would you like to explore?`;
  }

  // Default response
  return `That's an interesting question! Based on your query about "${userMessage.slice(0, 50)}${userMessage.length > 50 ? "..." : ""}", here are some thoughts:

1. **Understanding the fundamentals** is key to mastering any topic
2. **Practice regularly** - consistency beats intensity
3. **Build real projects** to solidify your learning

Would you like me to:
- Provide more specific resources?
- Give you practice exercises?
- Explain a related concept?

Just let me know how I can help you learn better!`;
};

const Mentor = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: generateAIResponse(userInput),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Bot className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground uppercase tracking-tight">
                AI Mentor
              </h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Powered by AI • Always here to help
              </p>
            </div>
          </div>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 glass-card flex flex-col overflow-hidden"
        >
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-muted/50 text-foreground"
                    }`}
                  >
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-muted text-foreground">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-muted/50 rounded-2xl px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Suggested Prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Suggested Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePromptClick(prompt.text)}
                    className="gap-2 text-xs"
                  >
                    <prompt.icon className="w-3 h-3" />
                    {prompt.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Ask your AI Mentor anything..."
                className="flex-1 bg-muted/30 border-border"
                disabled={isTyping}
              />
              <Button onClick={handleSend} className="gap-2" disabled={isTyping || !input.trim()}>
                <Send className="w-4 h-4" />
                Send
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 grid grid-cols-3 gap-3"
        >
          <Card className="glass-card p-3 text-center">
            <BookOpen className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Study Help</p>
          </Card>
          <Card className="glass-card p-3 text-center">
            <Code className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Code Review</p>
          </Card>
          <Card className="glass-card p-3 text-center">
            <Lightbulb className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Career Advice</p>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Mentor;
