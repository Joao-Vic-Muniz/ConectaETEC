# ConectaETEC - Assistente Virtual com IA

Este projeto utiliza o **Ollama** como API de IA gratuita e local para o assistente virtual "ConectaETEC".

## Pré-requisitos

### 1. Instalar o Ollama

**Linux/macOS:**
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows:**
Baixe o instalador em: https://ollama.com/download/windows

### 2. Baixar o modelo de IA

Após instalar o Ollama, baixe o modelo Llama 3.2:
```bash
ollama pull llama3.2
```

### 3. Iniciar o Ollama

Execute o servidor Ollama:
```bash
ollama serve
```

Em outro terminal (ou deixe o servidor rodando), você pode testar com:
```bash
ollama list
```

## Rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

4. Na página "Comunidade", clique em "Quer conversar?" para abrir o chat com a IA.

## Modelos disponíveis

Você pode usar outros modelos Ollama. Alguns recomendados:
- `llama3.2` (padrão, leve e rápido)
- `mistral` (bom equilíbrio)
- `phi3` (muito leve)

Para mudar o modelo, edite o arquivo `src/components/ChatAI.tsx` e altere:
```typescript
model: 'llama3.2'  // para outro modelo
```

## Solução de problemas

### "Erro ao conectar com a IA"
- Verifique se o Ollama está rodando: `ollama serve`
- Verifique se o modelo está instalado: `ollama list`
- O Ollama deve estar rodando na porta 11434

### Performance lenta
- Use um modelo mais leve como `phi3` ou `llama3.2:1b`
- Feche outros aplicativos que usem muita memória