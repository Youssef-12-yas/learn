export type Stage = "intro" | "story" | "words" | "warmup" | "teams" | "competition" | "results";

export const passage = [
  "Egypt occupies a unique position as Africa's northeastern gateway, serving as a bridge among the African continent, the Middle East, and Europe. This strategic location has shaped Egypt's role in African cooperation for decades.",
  "Currently, Egypt is strengthening its ties with Sub-Saharan African countries through various initiatives. The government is investing heavily in infrastructure projects that connect Egypt with its southern neighbors. These projects include road networks, telecommunications systems, and energy partnerships that benefit the entire region.",
  "Egypt regularly attends African Union summits, to promote economic cooperation and political stability across the continent. Egypt is also expanding its educational programs, offering scholarships to African students who want to study at Egyptian universities.",
  "Trade relationships are flourishing as Egypt exports manufactured goods, textiles, and agricultural products to African markets. In return, Egypt imports raw materials and natural resources from countries like the Sudan, Uganda, and Kenya. This mutual exchange is creating jobs and boosting economic growth in all participating nations.",
  "Egypt has played a vital role in strengthening healthcare across Africa through comprehensive medical initiatives. These include sending specialized medical convoys, establishing modern clinics and hospitals, and training African doctors and nurses in advanced techniques. Egypt also provides affordable medicines and vaccines, while supporting joint research to combat diseases like malaria, hepatitis, and COVID-19. By combining medical aid with capacity building, Egypt aims not only to treat patients but also to empower local health systems. These initiatives reflect Egypt's strategic vision of solidarity, African unity, and sustainable development, ensuring healthier futures for millions across the continent.",
];

export const beforeRead = [
  "What do you already know about Egypt's location?",
  "How can a country connect people and ideas across a continent?",
  "As you read, look for the ways Egypt works with its African neighbors.",
];

export const vocabulary = [
  { word: "gateway", meaning: "بوابة / نقطة دخول إلى شيء أكبر", scene: 0, visual: "door", example: passage[0] },
  { word: "bridge", meaning: "جسر / رابط بين طرفين", scene: 0, visual: "bridge", example: passage[0] },
  { word: "strategic", meaning: "استراتيجي، له أهمية وتخطيط طويل المدى", scene: 0, visual: "compass", example: passage[0] },
  { word: "infrastructure", meaning: "البنية التحتية (طرق، اتصالات، طاقة)", scene: 1, visual: "roads", example: passage[1] },
  { word: "telecommunications", meaning: "الاتصالات السلكية واللاسلكية", scene: 1, visual: "signal", example: passage[1] },
  { word: "partnerships", meaning: "شراكات (تعاون بين طرفين لتحقيق مصلحة مشتركة)", scene: 1, visual: "hands", example: passage[1] },
  { word: "cooperation", meaning: "تعاون", scene: 2, visual: "orbit", example: passage[2] },
  { word: "stability", meaning: "استقرار", scene: 2, visual: "balance", example: passage[2] },
  { word: "scholarships", meaning: "منح دراسية", scene: 2, visual: "book", example: passage[2] },
  { word: "manufactured", meaning: "مُصنَّع (مُنتَج بواسطة آلات)", scene: 3, visual: "crate", example: passage[3] },
  { word: "textiles", meaning: "منسوجات", scene: 3, visual: "fabric", example: passage[3] },
  { word: "mutual", meaning: "متبادل (يحدث من الطرفين)", scene: 3, visual: "exchange", example: passage[3] },
  { word: "raw materials", meaning: "مواد خام", scene: 3, visual: "ore", example: passage[3] },
  { word: "boosting", meaning: "تعزيز / رفع (زيادة قوة شيء)", scene: 3, visual: "chart", example: passage[3] },
  { word: "vital", meaning: "حيوي / بالغ الأهمية", scene: 4, visual: "pulse", example: passage[4] },
  { word: "comprehensive", meaning: "شامل", scene: 4, visual: "radar", example: passage[4] },
  { word: "convoys", meaning: "قوافل", scene: 4, visual: "van", example: passage[4] },
  { word: "capacity building", meaning: "بناء القدرات", scene: 4, visual: "stairs", example: passage[4] },
  { word: "solidarity", meaning: "تضامن", scene: 4, visual: "circle", example: passage[4] },
  { word: "sustainable", meaning: "مستدام", scene: 4, visual: "sprout", example: passage[4] },
] as const;

export const comprehension = [
  { question: "Name three types of projects Egypt is investing in to connect with African neighbors.", answer: "road networks, telecommunications systems, energy partnerships", scene: 1 },
  { question: "What does Egypt export to African markets?", answer: "manufactured goods, textiles, agricultural products", scene: 3 },
  { question: "How has Egypt supported healthcare development in Africa beyond providing medical treatment?", answer: "training doctors/nurses, capacity building, joint research", scene: 4 },
  { question: "What diseases are mentioned as examples of joint research supported by Egypt?", answer: "malaria, hepatitis, COVID-19", scene: 4 },
];

export const multipleChoice = [
  { question: "Egypt's strategic location helps it serve as a ______.", options: ["trade barrier", "gateway", "isolated nation", "small economy"], answer: "gateway", scene: 0 },
  { question: "Egypt strengthens healthcare in Africa by ______.", options: ["building roads and bridges", "sending medical convoys and training doctors", "opening new schools and universities", "exporting oil and gas"], answer: "sending medical convoys and training doctors", scene: 4 },
  { question: "Egypt is currently ______ its ties with African countries.", options: ["weakening", "maintaining", "promoting", "ignoring"], answer: "promoting", scene: 1 },
];

export const matching = [
  { word: "gateway", meaning: "a point of entry or access to something larger" },
  { word: "infrastructure", meaning: "the basic physical and organizational structures and facilities needed for the operation of a society" },
  { word: "partnership", meaning: "arrangements where two or more parties cooperate to advance their mutual interests" },
  { word: "manufactured", meaning: "made or produced on a large scale using machinery" },
  { word: "mutual", meaning: "experienced or done by each of two or more parties toward the other or others" },
];

export const warmup = [
  { type: "mcq" as const, question: multipleChoice[0].question, options: multipleChoice[0].options, answer: multipleChoice[0].answer },
  { type: "match" as const, question: "Which word means ‘a point of entry or access to something larger’?", options: ["gateway", "stability", "textiles", "vital"], answer: "gateway" },
];

export const sceneLabels = ["The Gateway", "Connected by Design", "Learning Together", "An Exchange of Goods", "Healthier Futures"];
export const sceneKickers = ["Scene 01 / Orientation", "Scene 02 / Connection", "Scene 03 / Cooperation", "Scene 04 / Exchange", "Scene 05 / Solidarity"];

export const scenePhotos = [
  { src: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85", alt: "The Great Sphinx and pyramids of Giza at golden hour", caption: "Egypt — a gateway at the edge of Africa" },
  { src: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85", alt: "Aerial view of a modern bridge crossing a river", caption: "Infrastructure creates a route for cooperation" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85", alt: "Students learning together around a table", caption: "Scholarships open doors to shared learning" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85", alt: "Cargo containers and trade logistics at a port", caption: "Trade turns relationships into opportunity" },
  { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=85", alt: "Healthcare worker caring for a patient", caption: "Health systems grow through solidarity" },
];

export const wordPhotos: Record<string, { src: string; alt: string; caption: string }> = {
  gateway: { src: scenePhotos[0].src, alt: "Pyramids and the Sphinx representing an entry point to Egypt", caption: "A point of entry to something larger" },
  bridge: { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", alt: "Bridge connecting two sides of a valley", caption: "A link between two places" },
  infrastructure: { src: scenePhotos[1].src, alt: "Large bridge and city transport infrastructure", caption: "The structures a society needs to work" },
  telecommunications: { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85", alt: "Technology circuit board representing communication systems", caption: "Systems that connect people over distance" },
  partnerships: { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85", alt: "Colleagues collaborating around a table", caption: "Two sides working toward a shared goal" },
  cooperation: { src: scenePhotos[2].src, alt: "Students cooperating during a lesson", caption: "Working together" },
  stability: { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85", alt: "Calm balanced landscape at sunrise", caption: "A steady, secure condition" },
  scholarships: { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85", alt: "Graduating students celebrating with books", caption: "Financial support for education" },
  manufactured: { src: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=85", alt: "Factory worker inspecting manufactured products", caption: "Produced using machinery" },
  textiles: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85", alt: "Colorful woven textiles in a market", caption: "Woven materials and fabrics" },
  mutual: { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85", alt: "Friends exchanging help and support", caption: "Done by both sides" },
  "raw materials": { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85", alt: "Raw materials stacked for industrial production", caption: "Basic materials before manufacturing" },
  boosting: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85", alt: "Business chart rising upward", caption: "Increasing strength or growth" },
  vital: { src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=85", alt: "Doctor checking a patient's heartbeat", caption: "Extremely important to life or success" },
  comprehensive: { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85", alt: "Medical team reviewing a complete patient plan", caption: "Including all or nearly all parts" },
  convoys: { src: scenePhotos[4].src, alt: "Healthcare workers and vehicles delivering aid", caption: "A group traveling together for a purpose" },
  "capacity building": { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85", alt: "Teacher training a group of healthcare workers", caption: "Building skills and local ability" },
  solidarity: { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85", alt: "A diverse group standing together with linked arms", caption: "Unity and support between people" },
  sustainable: { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85", alt: "Wind turbines and green landscape", caption: "Able to continue without harming the future" },
};
export const stageLabels: { id: Stage; label: string }[] = [
  { id: "intro", label: "Story" }, { id: "words", label: "Words" }, { id: "warmup", label: "Warm-up" }, { id: "teams", label: "Teams" }, { id: "competition", label: "Competition" }, { id: "results", label: "Results" },
];

export const teamColors = ["#ef8354", "#3cb6a7", "#7894f5", "#f2c14e", "#ce7df2", "#83c95d"];
export const teamEmojis = ["🦅", "🌊", "☀️", "🌿", "⭐", "🧭"];

export const competitionQuestions = [
  { theme: "Word Meanings", question: "What does ‘vital’ mean?", options: ["very important", "made by machines", "a point of entry", "an exchange"], answer: "very important", scene: 4 },
  { theme: "Word Meanings", question: "What does ‘boosting’ mean in the passage?", options: ["hiding", "increasing strength or energy", "stopping", "moving across water"], answer: "increasing strength or energy", scene: 3 },
  { theme: "Complete the Sentence", question: "Egypt exports ______, textiles, and agricultural products to African markets.", options: ["manufactured goods", "raw materials", "vaccines", "scholarships"], answer: "manufactured goods", scene: 3 },
  { theme: "Reading Comprehension", question: comprehension[0].question, options: ["roads, telecoms, energy partnerships", "schools, farms, airports", "hospitals, ports, parks", "textiles, vaccines, books"], answer: "roads, telecoms, energy partnerships", scene: 1 },
  { theme: "Reading Comprehension", question: multipleChoice[1].question, options: multipleChoice[1].options, answer: multipleChoice[1].answer, scene: 4 },
  { theme: "Matching", question: "Which meaning matches ‘mutual’?", options: ["done by both sides", "able to last forever", "made by machinery", "a medical convoy"], answer: "done by both sides", scene: 3 },
];

export const fairQuestionBank = [
  ...competitionQuestions,
  ...vocabulary.map((item, index) => {
    const distractors = vocabulary.filter((candidate) => candidate.word !== item.word).slice((index * 3) % 15, (index * 3) % 15 + 3).map((candidate) => candidate.meaning);
    return { theme: "Word Meanings", question: `What does “${item.word}” mean?`, options: [item.meaning, ...distractors], answer: item.meaning, scene: item.scene };
  }),
];

export const themeOptions = [
  { name: "Word Meanings", note: "Decode the journey", icon: "✦" },
  { name: "Complete the Sentence", note: "Use the context", icon: "◌" },
  { name: "Reading Comprehension", note: "Think like a reader", icon: "⌁" },
  { name: "Matching", note: "Connect the dots", icon: "↗" },
];

export function normalizeToken(value: string) {
  return value.toLowerCase().replace(/[^a-z\s]/g, "").trim();
}

export function wordIsInToken(word: string, token: string) {
  const normalized = normalizeToken(token);
  return word.toLowerCase().split(" ").every((part) => normalized.includes(part));
}

export function speak(text: string, rate = 0.86, onEnd?: () => void, onBoundary?: (index: number) => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) { window.speechSynthesis.onvoiceschanged = () => speak(text, rate, onEnd, onBoundary); }
  const preferred = voices.find((voice) => /en-(US|GB)/i.test(voice.lang) && /(natural|neural|online|google|samantha|aria|jenny|zira|daniel)/i.test(voice.name)) ?? voices.find((voice) => /^en-/i.test(voice.lang));
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = preferred?.lang ?? "en-US";
  utterance.voice = preferred ?? null;
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.onboundary = (event) => onBoundary?.(event.charIndex);
  utterance.onend = () => onEnd?.();
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}
