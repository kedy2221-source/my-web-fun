@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 25% 97%;
    --foreground: 180 20% 8%;
    --card: 0 0% 100%;
    --card-foreground: 180 20% 8%;
    --popover: 0 0% 100%;
    --popover-foreground: 180 20% 8%;
    --primary: 182 52% 38%;
    --primary-foreground: 0 0% 100%;
    --secondary: 216 20% 95%;
    --secondary-foreground: 180 20% 8%;
    --muted: 216 20% 95%;
    --muted-foreground: 180 8% 45%;
    --accent: 182 52% 38%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 72% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 180 10% 90%;
    --input: 180 10% 90%;
    --ring: 182 52% 38%;
    --radius: 0.625rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-parkshare-bg-primary text-parkshare-text-primary font-body antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold tracking-tight;
  }
}

@layer components {
  .section-padding {
    @apply py-14 md:py-16 lg:py-24;
  }
  
  .container-padding {
    @apply px-4 sm:px-7 lg:px-10;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
