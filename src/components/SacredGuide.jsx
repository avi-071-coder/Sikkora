import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Compass, HelpCircle, ShieldAlert } from 'lucide-react';

export default function SacredGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Tashi Delek! I am your Sacred Guide. Ask me about the six monasteries, local travel permits, suggested tour circuits, or monastery etiquette."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('tashi delek') || q.includes('tashi deleq') || q.includes('greetings')) {
      return "Tashi Delek! Welcome to Sikkora. I can help you explore Sikkim's sacred monasteries (Rumtek, Pemayangtse, Tashiding, Enchey, Phodong, Ralong), plan your pilgrimage path, learn about travel permits, or answer questions about Vajrayana history, local etiquette, and nearby sacred lakes. What would you like to know?";
    }
    if (q.includes('what can i do') || q.includes('help') || q.includes('features') || q.includes('how to use') || q.includes('what is this')) {
      return "On Sikkora, you can:\n1. Take immersive 360° Virtual Tours of monasteries (click 'Start Virtual Tour' in the Explore page detail card).\n2. Plan your pilgrimage route using the 'My Journey' planner.\n3. Browse high-resolution thangka paintings in the 'Gallery'.\n4. Access preserved historical texts, manuscripts, and blueprints in the 'Archive'.";
    }
    if (q.includes('history') || q.includes('origin') || q.includes('chogyal') || q.includes('guru rinpoche') || q.includes('lineage')) {
      return "Sikkimese monastic history dates back to the 8th century when Guru Padmasambhava (Guru Rinpoche) blessed the region as Beyul Demazong (the hidden valley of rice). In 1642, three patron lamas (Lhatsun Namkha Jigme, Nga-dag Sempa Chenpo, Kathog Rigzin Chenpo) consecrated the first Chogyal king, establishing the spiritual lineages that survive today.";
    }
    if (q.includes('nearby') || q.includes('lake') || q.includes('khecheopalri') || q.includes('tsomgo') || q.includes('rabdentse') || q.includes('attraction')) {
      return "Sikkim's sacred map features several holy attractions close to the monasteries:\n1. Khecheopalri Lake (near Tashiding/Pemayangtse) - A sacred wish-fulfilling lake where birds are said to keep the surface clear of fallen leaves.\n2. Tsomgo Lake (near Gangtok) - A high-altitude glacial lake (3,753m) used by lamas for monastic prophecies.\n3. Rabdentse Ruins (near Pemayangtse) - The stone remains of Sikkim's second royal capital.";
    }
    if (q.includes('rumtek')) {
      return "Rumtek Monastery (Gangtok District) is the largest monastery in Sikkim and the seat of the Karma Kagyu lineage in exile. Reconstructed in 1966 by the 16th Karmapa, it houses the sacred Golden Stupa with his relics. Elevation: 1,500m. Nearby, explore the Botanical Garden (4 km) and the Rumtek Viewpoint.";
    }
    if (q.includes('enchey')) {
      return "Enchey Monastery (Gangtok District) means 'Solitary Temple'. Built in 1909 on a high ridge blessed by the flying master Lama Drupthob Karpo, it is famous for its Chinese pagoda architecture and Nyingma murals. Elevation: 1,800m.";
    }
    if (q.includes('pemayangtse')) {
      return "Pemayangtse Monastery (Gyalshing District) was built in 1705 for the premier Nyingma royal monks. It is famous for 'Zangdokpalri'—a complex 7-tiered wooden sculpture representing Guru Rinpoche's celestial palace. Nearby, visit the Rabdentse Ruins (2 km).";
    }
    if (q.includes('tashiding')) {
      return "Tashiding Monastery (Gyalshing District) is a highly sacred Nyingma shrine built in 1716 on a heart-shaped hill. Merely looking at Tashiding is believed to wash away all sins. It hosts the famous Bhumchu Holy Water Festival in February.";
    }
    if (q.includes('ralang')) {
      return "Ralong Monastery (Namchi District) represents the Kagyu lineage. Originally built in 1730, it has a massive new complex (Palchen Choeling) built in 1995. It is celebrated for spectacular Cham masked dances and proximity to hot springs.";
    }
    if (q.includes('phodong')) {
      return "Phodong Monastery (Mangan District) is a historic Kagyu sanctuary founded in 1740. Known for its ancient wall paintings, it overlooks deep valley mist. Nearby, visit Labrang Monastery (2 km).";
    }
    if (q.includes('permit') || q.includes('pass') || q.includes('ilp') || q.includes('pap')) {
      return "Sikkim Permits Info: All foreign visitors need an Inner Line Permit (ILP), obtainable for free at checkpoints. Restructured districts like Mangan (North Sikkim) and border zones require a Protected Area Permit (PAP), which must be arranged through registered local travel agents.";
    }
    if (q.includes('dress') || q.includes('wear') || q.includes('clothe') || q.includes('etiquette') || q.includes('respect') || q.includes('rule') || q.includes('manner')) {
      return "Sacred Etiquette Guidelines:\n1. Dress modestly (shoulders & knees covered).\n2. Remove shoes before entering any shrine hall.\n3. Strictly no photography inside prayer chambers.\n4. Circumambulate (walk around) temples and chortens clockwise.\n5. Maintain silence and avoid touching religious relics.";
    }
    if (q.includes('circuit') || q.includes('plan') || q.includes('tour') || q.includes('itinerary') || q.includes('route')) {
      return "Suggested Tour Circuits:\n1. West Pilgrimage (Gyalshing): Gyalshing -> Pemayangtse -> Rabdentse -> Tashiding.\n2. Capital & Kagyu Seats: Gangtok -> Enchey -> Rumtek.\n3. South-North Loop: Namchi (Ralong) -> Gangtok -> Mangan (Phodong).";
    }
    if (q.includes('season') || q.includes('time') || q.includes('weather') || q.includes('month')) {
      return "Best Visiting Season: March to May (ideal weather and orchid blooms) and October to December (clear skies, snow peaks, and major monastic Cham festivals). Avoid monsoons (July-September) due to landslides.";
    }
    
    return "I couldn't match that specifically. Try asking about a specific monastery (e.g. Rumtek, Tashiding), 'permits', 'dress code', 'history', 'nearby lakes', or 'tour plans'.";
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;
    
    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 800);
  };

  const quickReplies = [
    { label: "Permits Guide", query: "How to get travel permits?" },
    { label: "Monastery Etiquette", query: "What is the dress code?" },
    { label: "West Sikkim Circuit", query: "Suggest a tour plan for West Sikkim" },
    { label: "Holy Tashiding", query: "Tell me about Tashiding Monastery" }
  ];

  return (
    <div className="sacred-guide-chat">
      {!isOpen && (
        <button className="chat-trigger-btn" onClick={() => setIsOpen(true)}>
          <MessageSquare size={20} />
          <span className="trigger-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="chat-window-panel">
          <div className="chat-header">
            <div className="header-title">
              <span className="bullet-active"></span>
              <div>
                <h4 className="serif">Sacred Guide</h4>
                <p>Sikkora Assistant</p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="chat-body hide-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-message ${m.sender}`}>
                <div className="message-content">
                  {m.text.split('\n').map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot typing">
                <div className="message-content">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-footer">
            <div className="quick-chips hide-scrollbar">
              {quickReplies.map((qr, idx) => (
                <button
                  key={idx}
                  className="quick-chip-btn"
                  onClick={() => handleSend(qr.query)}
                >
                  {qr.label}
                </button>
              ))}
            </div>
            <form
              className="chat-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
            >
              <input
                type="text"
                placeholder="Ask about monasteries, permits..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button type="submit" className="chat-send-btn">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
