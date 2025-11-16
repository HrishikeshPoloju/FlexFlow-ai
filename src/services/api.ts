// Use production backend URL directly
const API_BASE_URL = 'https://flexflow-ai.onrender.com/api';

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface ChatResponse {
  response: string;
  history: Message[];
}

export const chatWithAI = async (message: string, history: Message[] = []): Promise<ChatResponse> => {
  try {
    console.log('Sending request to:', `${API_BASE_URL}/chat`);
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    console.log('Response status:', response.status);
    const responseText = await response.text();
    console.log('Raw response:', responseText.substring(0, 500)); // Log first 500 chars

    try {
      const data = JSON.parse(responseText);
      
      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error(data.error || `Server responded with status ${response.status}`);
      }
      
      return data;
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      console.error('Response was:', responseText);
      throw new Error(`Invalid JSON response from server: ${responseText.substring(0, 200)}`);
    }
  } catch (error) {
    console.error('Error in chatWithAI:', error);
    throw error;
  }
};

export const checkServerHealth = async (): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Error checking server health:', error);
    throw error;
  }
};

export interface ExtractedContact {
  name: string | null;
  email: string | null;
  phone: string | null;
  summary: string;
}

export const extractContactInfo = async (messages: Array<{ role: string; content: string }>): Promise<{ success: boolean; data: ExtractedContact }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/extract-contact-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to extract contact information');
    }

    return await response.json();
  } catch (error) {
    console.error('Error extracting contact information:', error);
    throw error;
  }
};

export interface ContactRequest {
  name?: string;
  email: string;
  phone: string;
  message?: string;
  requestType?: string;
  summary?: string;
}

export const submitContactRequest = async (data: ContactRequest): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit contact request');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact request:', error);
    throw error;
  }
};
