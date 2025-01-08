export const calConfig = {
    username: process.env.NEXT_PUBLIC_CAL_USERNAME || 'default-username',
    apiKey: process.env.NEXT_PUBLIC_CAL_API_KEY,
    eventTypes: {
      consultation: process.env.NEXT_PUBLIC_CAL_EVENT_TYPE || 'consultation',
    },
    theme: 'dark',
    styles: {
      branding: {
        brandColor: '#6366f1',
      },
    },
  }
