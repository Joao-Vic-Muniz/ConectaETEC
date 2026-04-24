import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatAIProps {
  isOpen: boolean;
  onClose: () => void;
}

const OLLAMA_API_URL = 'http://localhost:11434/api/chat';

const systemPrompt = `Você é um assistente de apoio emocional e escolar da ETEC. 
Seu nome é "ConectaETEC". 
Você deve:
- Ser acolhedor, empático e não julgador
- Ajudar alunos com dúvidas sobre a escola, cursos, evasão escolar
- Oferecer apoio emocional e encorajamento
- Quando perceber que a pessoa precisa de ajuda profissional, sugerir que procure um psicólogo
- Manter conversas em português brasileiro
- Ser breve e objetivo nas respostas
- Nunca dar diagnósticos médicos ou psicológicos
- Se a pessoa estiver em crise, orientar a buscar ajuda profissional`;

export default function ChatAI({ isOpen, onClose }: ChatAIProps) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'assistant',
      content: 'Olá! Sou o ConectaETEC, seu assistente virtual. 😊\n\nEstou aqui para conversar com você sobre qualquer assunto: dúvidas sobre a escola, dificuldades nos estudos, ou se você só quiser bater um papo.\n\nComo posso ajudar hoje?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLoginRedirect = () => {
    onClose();
    navigate('/auth');
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(OLLAMA_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            userMessage
          ],
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao conectar com a IA');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.message?.content || 'Desculpe, não consegui processar sua mensagem. Tente novamente.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Ops! Parece que o servidor de IA está offline no momento. 😔\n\nVocê pode tentar novamente mais tarde, ou se precisar de ajuda urgente, procure um professor ou o psicólogo da escola.\n\nLembre-se: você não está sozinho!'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  // Show login required message if user is not logged in
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
          onClick={onClose}
        />
        
        <div className="relative w-full max-w-lg bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-white/10 overflow-hidden pointer-events-auto animate-slide-up p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
              <Lock size={32} className="text-cyan-400" />
            </div>
            <h3 className="font-fredoka font-bold text-2xl text-white">Login necessário</h3>
            <p className="text-white/70">
              Você precisa estar logado para conversar com o assistente de IA.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-full font-fredoka font-bold transition-all"
            >
              Fazer Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />
      
      {/* Chat Container */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-white/10 overflow-hidden pointer-events-auto animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-fredoka font-bold text-white">ConectaETEC</h3>
              <p className="text-xs text-white/70">Assistente Virtual</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-primary' : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {message.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                </div>
                <div className={`rounded-2xl p-3 ${
                  message.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-white'
                }`}>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[85%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <Loader2 size={20} className="text-purple-400 animate-spin" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:from-purple-400 hover:to-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}