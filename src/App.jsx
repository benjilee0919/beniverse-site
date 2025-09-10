import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-indigo-600" />
            <span className="font-semibold text-lg tracking-tight">beniverse.ai</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-indigo-600 transition">Home</a>
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <a href="#workflow" className="hover:text-indigo-600 transition">Workflow</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition">Portfolio</a>
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <SocialIcon label="GitHub" />
            <SocialIcon label="LinkedIn" />
            <SocialIcon label="X" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2688&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-cyan-900/70" />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-24 sm:py-28 w-full">
          <div className="max-w-3xl text-white mx-auto">
            <p className="text-cyan-200 uppercase tracking-wider text-xs">Machine Learning Systems, End-to-End</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Say goodbye to brittle models
              <br />
              <span className="text-cyan-200">and stay production-ready.</span>
            </h1>
            <p className="mt-4 text-cyan-100/90 text-base sm:text-lg">
              We design, deploy, and monitor ML systems that learn from your data and keep improving. Let us handle the pipeline so you can focus on impact.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] gap-3 bg-white/95 rounded-2xl p-2 shadow-xl">
              <input
                type="text"
                placeholder="Describe your use case (e.g., fraud detection, forecasting)"
                className="h-12 px-4 rounded-xl outline-none border border-slate-200 focus:border-cyan-500"
              />
              <button className="h-12 px-5 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition">
                Schedule a call
              </button>
              <a href="#workflow" className="h-12 px-5 rounded-xl border text-cyan-700 border-cyan-600 font-medium grid place-items-center hover:bg-cyan-50 transition">
                See workflow
              </a>
              <a href="#portfolio" className="h-12 px-5 rounded-xl border text-indigo-700 border-indigo-600 font-medium grid place-items-center hover:bg-indigo-50 transition">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20" id="services">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <header className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Custom ML services and solutions for your business</h2>
            <p className="mt-3 text-slate-600">We build maintainable, adaptable machine learning systems from requirements to post-deployment monitoring.</p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard titleEN="Requirements" titleKR="요구사항 도출" descriptionEN="Define success metrics, constraints, and stakeholders." descriptionKR="성공 지표, 제약조건, 이해관계자를 명확히 정의합니다." Icon={IconClipboard} highlight />
            <ServiceCard titleEN="Data Engineering" titleKR="데이터 엔지니어링" descriptionEN="Connect sources, clean, and transform data pipelines." descriptionKR="다양한 소스를 연결하고 정제·변환하여 파이프라인을 구성합니다." Icon={IconDatabase} />
            <ServiceCard titleEN="Modeling" titleKR="모델 개발" descriptionEN="Select, train, and tune models aligned with business goals." descriptionKR="비즈니스 목표에 맞춰 모델을 선택·학습·튜닝합니다." Icon={IconBrain} />
            <ServiceCard titleEN="Evaluation" titleKR="평가 및 검증" descriptionEN="Offline/online metrics, subgroup and metamorphic tests." descriptionKR="오프라인·온라인 지표 및 하위그룹/메타모픽 테스트를 수행합니다." Icon={IconGauge} />
            <ServiceCard titleEN="Deployment" titleKR="배포" descriptionEN="Ship as secure APIs on cloud, on-prem, or edge." descriptionKR="클라우드/온프레미스/엣지에 안전한 API로 배포합니다." Icon={IconCloud} />
            <ServiceCard titleEN="Monitoring" titleKR="모니터링" descriptionEN="Track data & model drift, latency, and costs." descriptionKR="데이터·모델 드리프트, 지연, 비용을 추적합니다." Icon={IconRadar} />
            <ServiceCard titleEN="MLOps" titleKR="MLOps 자동화" descriptionEN="CI/CD for models, feature stores, experiment tracking." descriptionKR="모델 CI/CD, 피처 스토어, 실험 추적을 자동화합니다." Icon={IconCog} />
            <ServiceCard titleEN="Consulting" titleKR="컨설팅" descriptionEN="Roadmapping, audits, and team enablement." descriptionKR="로드맵 수립, 시스템 진단, 팀 역량 강화를 지원합니다." Icon={IconChat} />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-16 sm:py-20 bg-slate-50">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Workflow</h2>
            <p className="mt-3 text-slate-600">A clear, repeatable path from idea to reliable production system.</p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-600 grid place-items-center text-white font-semibold">{i + 1}</div>
                    <h3 className="font-semibold">{s.titleEN}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{s.descEN}</p>
                  <p className="mt-2 text-xs text-slate-500">{s.titleKR} · {s.descKR}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="px-5 h-12 rounded-xl bg-indigo-600 text-white grid place-items-center font-medium hover:bg-indigo-700">Start a project</a>
            <a href="#portfolio" className="px-5 h-12 rounded-xl border grid place-items-center font-medium hover:bg-white">See portfolio</a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 sm:py-20">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Portfolio</h2>
            <p className="mt-3 text-slate-600">A snapshot of projects and case studies. Full list on GitHub.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <article key={idx} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition flex flex-col">
                <img src={p.image} alt="" className="h-36 w-full object-cover rounded-xl"/>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
                <p className="mt-1 text-xs text-slate-500">{p.stack}</p>
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <a href={p.link} className="px-3 h-10 rounded-lg bg-slate-900 text-white grid place-items-center text-sm">View</a>
                  {p.repo && <a href={p.repo} className="px-3 h-10 rounded-lg border text-sm grid place-items-center">GitHub</a>}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://github.com/benjilee0919" className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border font-medium hover:bg-slate-50">See all projects on GitHub</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-20">
        <div className="px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">What is a Machine Learning System?</h2>
            <p className="mt-4 text-slate-700">
              A machine learning system is software that learns patterns from data rather than relying solely on hand-coded rules. It excels where rules are ambiguous but structure exists in data, and differs from traditional software by requiring continuous evaluation and monitoring after deployment.
            </p>
            <p className="mt-3 text-slate-600 text-sm">
              머신러닝 시스템은 사람이 모든 규칙을 코딩하기보다, 데이터에서 패턴을 학습해 문제를 해결하는 소프트웨어입니다. 전통적 소프트웨어와 달리 배포 이후에도 지속적인 평가와 모니터링이 핵심입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img alt="Workflow visual" className="w-full h-80 object-cover"
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2200&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Let’s talk about your use case</h2>
            <p className="mt-3 text-slate-300">Tell us what you want to achieve. We’ll map requirements, design the data flow, and deliver a production-grade ML system.</p>

            <form className="mt-8 grid gap-3 sm:grid-cols-2">
              <input className="h-12 rounded-xl px-4 text-slate-900" placeholder="Your name" />
              <input className="h-12 rounded-xl px-4 text-slate-900" placeholder="Email" />
              <input className="h-12 rounded-xl px-4 text-slate-900 sm:col-span-2" placeholder="Company / Team" />
              <textarea className="min-h-[120px] rounded-xl p-4 text-slate-900 sm:col-span-2" placeholder="Briefly describe your use case" />
              <button type="button" className="h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-medium sm:col-span-2">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-sm text-slate-500">
        <div className="px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} beniverse.ai · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Components */
function ServiceCard({ titleEN, titleKR, descriptionEN, descriptionKR, Icon, highlight=false }) {
  return (
    <div className={"rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition " + (highlight ? "ring-1 ring-cyan-500/30" : "")}>
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-xl bg-slate-100 grid place-items-center">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold">{titleEN}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{titleKR}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{descriptionEN}</p>
      <p className="mt-1 text-xs text-slate-500">{descriptionKR}</p>
    </div>
  );
}

function SocialIcon({ label }) {
  return (
    <button aria-label={label} title={label} className="h-9 w-9 grid place-items-center rounded-full border hover:bg-slate-50">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </button>
  );
}

/* Icons */
function IconClipboard(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><path d="M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="2" width="8" height="4" rx="1.5" fill="currentColor"/></svg>);}
function IconDatabase(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconBrain(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><path d="M8 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 1 0 6 0V5a3 3 0 0 0-3-1Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M16 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 1 1-6 0V5a3 3 0 0 1 3-1Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconGauge(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12l5-3" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconCloud(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><path d="M7 18h10a4 4 0 1 0-.6-7.97A6 6 0 1 0 7 18Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconRadar(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12V6m0 6 4 4" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconCog(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm7 4a7 7 0 0 0-.13-1.3l2-1.15-1.5-2.6-2.2 1a7 7 0 0 0-2.2-1.3l-.3-2.4h-3l-.3 2.4a7 7 0 0 0-2.2 1.3l-2.2-1-1.5 2.6 2 1.15A7 7 0 0 0 5 12c0 .44.04.87.13 1.3l-2 1.15 1.5 2.6 2.2-1c.64.54 1.4.98 2.2 1.3l.3 2.4h3l.3-2.4c.8-.32 1.56-.76 2.2-1.3l2.2 1 1.5-2.6-2-1.15c.09-.43.13-.86.13-1.3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>);}
function IconChat(props){return(<svg viewBox="0 0 24 24" className="text-slate-700" {...props}><path d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9l-5 4V6Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>);}

/* Data */
const steps = [
  { titleEN: "Requirement Gathering", titleKR: "요구사항 수집", descEN: "Align stakeholders, define KPIs and constraints.", descKR: "이해관계자 정렬, KPI 및 제약조건 정의" },
  { titleEN: "Data Collection", titleKR: "데이터 수집", descEN: "Connect internal, user, and third-party sources.", descKR: "내부·사용자·외부 소스 연결" },
  { titleEN: "Dataset Engineering", titleKR: "데이터셋 엔지니어링", descEN: "Labeling, sampling, and quality checks (timeliness, representativeness).", descKR: "라벨링, 샘플링, 품질 점검" },
  { titleEN: "Feature Engineering", titleKR: "특성 엔지니어링", descEN: "Transform, select, and reduce dimensions to boost signal.", descKR: "변환·선택·차원축소로 신호 강화" },
  { titleEN: "Model Development", titleKR: "모델 개발", descEN: "Train candidates, tune hyperparameters, compare with CV.", descKR: "후보 학습, 하이퍼파라미터 튜닝, 교차검증 비교" },
  { titleEN: "Evaluation", titleKR: "검증", descEN: "Offline/online metrics, stress and subgroup tests.", descKR: "오프라인·온라인 지표, 스트레스/하위그룹 테스트" },
  { titleEN: "Deployment", titleKR: "배포", descEN: "Package as APIs; ship to cloud/on-prem/edge.", descKR: "API 패키징, 다양한 환경 배포" },
  { titleEN: "Monitoring", titleKR: "모니터링", descEN: "Detect drift, track latency, cost, and errors.", descKR: "드리프트·지연·비용·오류 추적" },
  { titleEN: "Continuous Improvement", titleKR: "지속적 개선", descEN: "Feedback loops, data refresh, and retraining.", descKR: "피드백 루프, 데이터 갱신, 재학습" },
];

const projects = [
  { title: "SecureBank API (Fraud Detection)", summary: "Flask + Docker API with ML pipeline and monitoring hooks.", stack: "Python, Flask, Docker, scikit-learn", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop", link: "#", repo: "https://github.com/JHU-EP-705-603-CVA/securebank-benjilee0919" },
  { title: "FindMySpot (Local AI Assistant)", summary: "Multi-agent local search using Yelp/Google Places and LLM.", stack: "FastAPI, CrewAI, GPT, Yelp, Google Places", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", link: "#", repo: "#" },
  { title: "OmniReach (Marketing Agent Platform)", summary: "Masumi on-chain payments + campaign automation agents.", stack: "FastAPI, Masumi, CrewAI, PostgreSQL", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop", link: "#", repo: "https://github.com/JoshuaWhitfield/omni-reach" },
];
