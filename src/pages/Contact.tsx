import { Button, IconButton, TextField } from 'actify'
import { useState } from 'react'

export function Contact() {
  const [rejectionMessage, setRejectionMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Use CORS proxy to avoid CORS issues in development
      const response = await fetch('https://api.allorigins.win/raw?url=https://naas.isalman.dev/no')
      const data = await response.json()
      setRejectionMessage(data.reason || data.no || 'No.')
    } catch (error) {
      console.error('Error fetching rejection:', error)
      setRejectionMessage('No. (Failed to fetch creative rejection)')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">Get in Touch</h1>
        <p className="text-lg mb-8 text-on-surface-variant">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="bg-surface-container p-8 rounded-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <TextField
                label="Name"
                variant="outlined"
                className="w-full"
                isRequired
              />
            </div>

            <div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                className="w-full"
                isRequired
              />
            </div>

            <div>
              <TextField
                label="Subject"
                variant="outlined"
                className="w-full"
                isRequired
              />
            </div>

            <div>
              <label className="block text-on-surface mb-2">Message *</label>
              <textarea
                className="w-full p-3 rounded bg-surface-container text-on-surface border border-outline focus:border-primary outline-none"
                rows={6}
                required
              />
            </div>

            <Button variant="filled" type="submit" isDisabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {rejectionMessage && (
          <div className="bg-error-container border border-error p-6 rounded-lg mb-8 relative">
            <IconButton
              onClick={() => setRejectionMessage('')}
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </IconButton>
            <h3 className="text-xl font-semibold mb-2 text-on-error-container">
              Sorry, I can't send a message. Please send an email instead.
            </h3>
            <p className="text-on-error-container text-lg">
              {rejectionMessage}
            </p>
            <Button variant='outlined'>
              Send email
            </Button>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-on-surface">Email</h2>
            <p className="text-on-surface-variant">your.email@example.com</p>
          </div>

          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-on-surface">Social</h2>
            <div className="space-y-2 text-on-surface-variant">
              <p>GitHub: @yourhandle</p>
              <p>LinkedIn: /in/yourprofile</p>
              <p>Twitter: @yourhandle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
