import { Button, IconButton, TextField, SnackbarProvider } from 'actify'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      // EmailJS configuration - replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'oliverofta@gmail.com'
        },
        publicKey
      )

      setSuccessMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setErrorMessage('Failed to send message. Please try again or contact me directly at oliverofta@gmail.com')
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
            <p className="text-sm text-on-surface-variant">All fields are required</p>

            <div>
              <TextField
                label="Name"
                variant="outlined"
                className="w-full"
                isRequired
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
              />
            </div>

            <div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                className="w-full"
                isRequired
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
              />
            </div>

            <div>
              <TextField
                label="Subject"
                variant="outlined"
                className="w-full"
                isRequired
                value={formData.subject}
                onChange={(value) => setFormData({ ...formData, subject: value })}
              />
            </div>

            <div>
              <label className="block text-on-surface mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded bg-surface-container text-on-surface border border-outline focus:border-primary outline-none"
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button variant="filled" type="submit" isDisabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {successMessage && (
          <div className="bg-primary-container border border-primary p-4 lg:p-6 rounded-lg mb-8 relative">
            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-semibold mb-2 text-on-primary-container">
                Success!
              </h3>
              <IconButton
                onClick={() => setSuccessMessage('')}
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </IconButton>
            </div>
            <p className="text-on-primary-container text-lg">
              {successMessage}
            </p>
          </div>
        )}

        {errorMessage && (
          <div className="bg-error-container border border-error p-4 lg:p-6 rounded-lg mb-8 relative">
            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-semibold mb-2 text-on-error-container">
                Error
              </h3>
              <IconButton
                onClick={() => setErrorMessage('')}
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </IconButton>
            </div>
            <p className="text-on-error-container text-lg">
              {errorMessage}
            </p>
          </div>
        )}

        <div className="bg-surface-container p-4 lg:p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">schedule</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-on-surface mb-2">Consultancy Hourly Rate</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">550 SEK</span>
                    <span className="text-lg text-on-surface-variant">/hour</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    For consultancy work, excluding VAT
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-lg border border-outline">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">calendar_month</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-on-surface mb-2">Full-Time Employment</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">42,500 SEK</span>
                    <span className="text-lg text-on-surface-variant">/month</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Expected wage for full-time employment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
