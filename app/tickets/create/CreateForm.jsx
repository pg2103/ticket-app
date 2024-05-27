"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function CreateForm() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [loading, setLoading] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const ticket = { title, body, priority,user_email: 'mario@gmail.com'
        }
        const response = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( ticket)
        })
       if(response.status === 201) {  
              router.refresh()  
              router.push('/tickets')
         }
    }
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
        <label>
            <span>Title</span>
            <input 
                required 
                type="text"
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                
            />
        </label>
        <label>
            <span>Body</span>
            <textarea 
                required 
                value={body} 
                onChange={e => setBody(e.target.value)} 
            />
        </label>
        <label>
            <span>Priority</span>
            <select 
                value={priority} 
                onChange={e => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>
        <button
           className="btn-primary"
            disabled={loading}
        >
        {loading ? 'Adding...' : 'Add ticket'}
        </button>
    </form>
  )
}
