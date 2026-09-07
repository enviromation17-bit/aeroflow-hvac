// Lead data structure
const Lead = {
  id: string,
  name: string,
  phone: string,
  email: string,
  service: string,
  urgency: 'high' | 'medium' | 'low',
  score: number,
  status: 'new' | 'qualified' | 'contacted' | 'scheduled',
  source: 'web' | 'phone' | 'chat' | 'sms',
  timestamp: Date,
  notes: string[]
}

// Chat message structure
const ChatMessage = {
  id: string,
  role: 'customer' | 'ai' | 'system',
  content: string,
  timestamp: Date,
  metadata: {
    type: 'text' | 'question' | 'confirmation',
    leadScore?: number
  }
}

// Integration points
const IntegrationPoints = {
  submitLead: (leadData) => {},
  sendChatMessage: (message) => {},
  getLeadStatus: (leadId) => {}
}