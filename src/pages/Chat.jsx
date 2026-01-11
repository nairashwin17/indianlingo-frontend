import { useEffect, useRef, useState } from 'react'
import Card from '@/components/Card'

const formatTime = (ts = Date.now()) => {
  const d = new Date(ts)
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
const INITIAL_WELCOME_TIME = Date.now() - 1000 * 60 * 5

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Welcome to IndianLingo Chat — ask me anything!', time: INITIAL_WELCOME_TIME },
  ])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const listRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    // scroll to bottom when messages change
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    // auto-resize textarea
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = ta.scrollHeight + 'px'
  }, [input])

  const sendMessage = async (text) => {
    if (!text.trim()) return
    const msg = { id: Date.now(), sender: 'me', text: text.trim(), time: Date.now() }
    setMessages((m) => [...m, msg])
    setInput('')
    setSending(true)

    // fake assistant reply (replace with real API call)
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `You said: "${text.trim()}". Here's a helpful response.`,
        time: Date.now(),
      }
      setMessages((m) => [...m, reply])
      setSending(false)
    }, 700)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-50">Chat</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Engage in conversations and get assistance
        </p>
      </div>

      <Card>
        <div className="w-full flex flex-col h-[60vh]">
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-700"
            role="log"
            aria-live="polite"
          >
            {messages.length === 0 && (
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                No messages yet — start the conversation.
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-end gap-3 ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender !== 'me' && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm">
                      🤖
                    </div>
                  </div>
                )}

                <div className={`max-w-[80%] px-4 py-2 rounded-lg text-sm leading-relaxed ${m.sender === 'me' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 text-slate-900 dark:text-slate-50 rounded-bl-none'}`}>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                  <div className="text-xs opacity-70 mt-1 text-right">{formatTime(m.time)}</div>
                </div>

                {m.sender === 'me' && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-50 flex items-center justify-center text-sm">
                      You
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="chat" className="sr-only">Your message</label>
            <div className="flex items-end gap-2">
              <button type="file" className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700" title="Attach" >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8.667 7.333V14a3.333 3.333 0 006.666 0V6a2 2 0 10-4 0v8a.667.667 0 001.333 0V6a.667.667 0 111.334 0v8a2 2 0 11-4 0V7.333h-.333z"/></svg>
              </button>

              <textarea
                id="chat"
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={1}
                className="flex-1 resize-none block p-3 text-sm bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder={sending ? 'Sending...' : 'Write a message...'}
                disabled={sending}
                aria-label="Write a message"
              />

              <button
                type="submit"
                disabled={sending || !input.trim()}
                className={`inline-flex items-center justify-center p-3 rounded-lg text-white ${sending ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
                aria-label="Send message"
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Chat;