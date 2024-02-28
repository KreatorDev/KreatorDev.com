const linkByTag = (tech: string): string | undefined => {
  switch (tech) {
    case "Node.js":
      return "https://nodejs.org";
    case "Docker":
      return "https://www.docker.com";
    case "AdMob":
      return "https://admob.google.com";
    case "RevenueCat":
      return "https://www.revenuecat.com";
    case "Localization":
      return "https://flutter.dev/docs/development/accessibility-and-localization/internationalization";
    case "Next.js":
      return "https://nextjs.org";
    case "Flutter":
      return "https://flutter.dev";
    case "Flutter Web":
      return "https://flutter.dev/web";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    case "Firebase":
      return "https://firebase.google.com";
    case "Stripe":
      return "https://stripe.com";
    case "Matter.js":
      return "https://brm.io/matter-js";
    case "RunPod.io":
      return "https://runpod.io";
    case "LLM":
      return "https://huggingface.co/models";
    case "Plaid":
      return "https://plaid.com/docs";
    case "PlayHT":
      return "https://play.ht";
    case "OpenAI":
      return "https://openai.com/docs";
    case "Google STT":
      return "https://cloud.google.com/speech-to-text";
    case "Whisper":
      return "https://openai.com/research/whisper";
    case "Alpaca":
      return "https://alpaca.markets/docs";
    case "NestJS":
      return "https://nestjs.com";
    default:
      return;
  }
};

export default linkByTag;
