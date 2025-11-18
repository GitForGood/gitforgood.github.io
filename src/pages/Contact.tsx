import { Button, IconButton, TextField, SnackbarProvider } from 'actify'
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">Get in Touch</h1>
        <p className="text-lg mb-8 text-on-surface-variant">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="bg-surface-container p-4 lg:p-6 rounded-lg mb-8">
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
          <div className="bg-error-container border border-error p-4 lg:p-6 rounded-lg mb-8 relative">
            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-semibold mb-2 text-on-error-container">
                No can do.
              </h3>
              <IconButton
                onClick={() => setRejectionMessage('')}
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </IconButton>
            </div>
            <p className="text-on-error-container text-lg">
              {rejectionMessage}
            </p>
          </div>
        )}

        <div
        className="p-4 lg:p-6 rounded-lg bg-surface-container">
          <h2 className="text-xl font-semibold mb-4 text-on-surface">External Links</h2>
          <div className='flex flex-wrap gap-2'>
            <Button
              variant="outlined"
              onClick={() => window.open('https://github.com/GitForGood', '_blank')}
            >
              <span className="material-symbols-outlined">code</span>
              GitHub: @GitForGood
            </Button>

            <Button
              variant="outlined"
              onClick={() => window.open('https://www.linkedin.com/in/oliver-andersson-b86b79178/', '_blank')}
            >
              <span className="material-symbols-outlined">work</span>
              LinkedIn: /in/oliver-andersson
            </Button>

            <SnackbarProvider>
            {(state) => (
              <Button
                  variant="outlined"
                  onClick={() => {
                    navigator.clipboard.writeText('oliverofta@gmail.com')
                    state.add(
                      "Copied email to clipboard"
                    )
                  }}
                >
                  <span className="material-symbols-outlined">mail</span>
                  Email: oliverofta@gmail.com
                  <span className="material-symbols-outlined">content_copy</span>
                </Button>
            )}
            </SnackbarProvider>
          </div>
        </div>
      </div>
      
    </div>
  )
}
