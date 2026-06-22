/* =====================================================
   TECHINDEV — Dados do site
   Edite este arquivo para atualizar serviços e projetos
   ===================================================== */

const SERVICES = [
  {
    icon: "🔧",
    title: "Firmware & Embarcados",
    description: "Desenvolvimento de firmware em C/C++ para microcontroladores, sistemas bare metal e RTOS (FreeRTOS, Zephyr). Drivers, HAL, protocolos industriais.",
    tags: ["C/C++", "FreeRTOS", "STM32", "ESP32", "Modbus", "CAN"],
  },
  {
    icon: "🐧",
    title: "Linux Embarcado",
    description: "Customização de Linux com Yocto/Buildroot, BSPs para ARM e RISC-V, drivers de kernel, systemd services e integração com hardware proprietário.",
    tags: ["Yocto", "Buildroot", "Device Tree", "ARM", "Kernel"],
  },
  {
    icon: "⚡",
    title: "Automação & IoT",
    description: "Sistemas de automação industrial e IoT — desde sensores e atuadores até dashboards de monitoramento em tempo real com MQTT, OPC-UA e REST.",
    tags: ["MQTT", "Node-RED", "IoT", "OPC-UA", "Modbus TCP"],
  },
  {
    icon: "🖥️",
    title: "Backend & APIs",
    description: "APIs RESTful e GraphQL robustas com Python (Django, FastAPI, Flask). Bancos de dados relacionais e NoSQL, autenticação, filas e microsserviços.",
    tags: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    icon: "🌐",
    title: "Frontend & Web",
    description: "Interfaces web modernas com React e Angular. SPAs, dashboards interativos, design responsivo e integração com APIs de alta performance.",
    tags: ["React", "Angular", "TypeScript", "Tailwind", "Vite"],
  },
  {
    icon: "📱",
    title: "Aplicativos Mobile",
    description: "Apps iOS e Android com Flutter — código único, performance nativa. Integração com hardware via BLE, Wi-Fi e APIs de backend.",
    tags: ["Flutter", "Dart", "BLE", "Android", "iOS"],
  },
];

/* =====================================================
   PORTFÓLIO — Adicione seus projetos aqui

   Campos disponíveis:
     title       (obrigatório) — nome do projeto
     category    (obrigatório) — categoria para filtro
     description (obrigatório) — descrição curta
     tags        (obrigatório) — tecnologias usadas
     icon        — emoji exibido quando não há imagem
     image       — caminho para imagem (ex: assets/images/proj-nome.png)
     link        — URL do projeto (abre em nova aba)
   ===================================================== */
const PROJECTS = [
  {
    title: "EletroCAD Pro",
    category: "Web App",
    description: "Plataforma SaaS para criação e gestão de projetos elétricos com conformidade às normas NBR. Geração automática de memorial descritivo e diagramas.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    icon: "⚡",
  },
  {
    title: "TrainUp",
    category: "Mobile",
    description: "Aplicativo mobile de treino e performance física. Periodização inteligente, acompanhamento de evolução e integração com wearables.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: "💪",
  },
  {
    title: "Church's Manager",
    category: "Mobile",
    description: "Sistema de gestão para igrejas e organizações religiosas — membros, eventos, financeiro e comunicação integrada.",
    tags: ["Flutter", "Django", "PostgreSQL"],
    icon: "⛪",
  },
  /* Exemplo de como adicionar novos projetos:
  {
    title: "Nome do Projeto",
    category: "Firmware",   // Firmware | Embedded Linux | IoT | Backend | Web App | Mobile | DevOps
    description: "Descrição do que foi desenvolvido e o problema resolvido.",
    tags: ["C++", "STM32", "FreeRTOS"],
    icon: "🔧",
    image: "assets/images/projeto-nome.png",  // opcional
    link: "https://github.com/techindev/...", // opcional
  },
  */
];
