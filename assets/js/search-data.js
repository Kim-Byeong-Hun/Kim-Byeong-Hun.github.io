// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "국제 저널, 국제 학회, 국내 저널, 국내 학회, 특허 등으로 구분된 주요 연구 성과들을 확인할 수 있습니다.  (Jour. → Journal, Conf. → Conference)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-paper-review",
          title: "Paper Review",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-paper-review-a-review-of-deepseek-models-39-key-innovative-techniques",
      
        title: "[Paper Review] A Review of DeepSeek Models&#39; Key Innovative Techniques",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/paper10/";
        
      },
    },{id: "post-paper-review-can-language-beat-numerical-regression-language-based-multimodal-trajectory-prediction",
      
        title: "[Paper Review] Can Language Beat Numerical Regression? Language-Based Multimodal Trajectory Prediction",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper9/";
        
      },
    },{id: "post-paper-review-eagle-exploring-the-design-space-for-multimodal-llms-with-mixture-of-encoders",
      
        title: "[Paper Review] EAGLE: Exploring The Design Space for Multimodal LLMs with Mixture of...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper8/";
        
      },
    },{id: "post-sota-tech-sam-2-segment-anything-in-images-and-videos",
      
        title: "[SOTA-Tech] SAM 2: Segment Anything in Images and Videos",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper7/";
        
      },
    },{id: "post-paper-review-fl-fd-federated-learning-based-fall-detection-with-multimodal-data-fusion",
      
        title: "[Paper Review] FL-FD: Federated learning-based fall detection with multimodal data fusion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper6/";
        
      },
    },{id: "post-paper-review-fl-fd-federated-learning-based-fall-detection-with-multimodal-data-fusion",
      
        title: "[Paper Review] FL-FD: Federated learning-based fall detection with multimodal data fusion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper5/";
        
      },
    },{id: "post-paper-review-communication-efficient-learning-of-deep-networks-from-decentralized-data",
      
        title: "[Paper Review] Communication-Efficient Learning of Deep Networks from Decentralized Data",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/paper4/";
        
      },
    },{id: "post-paper-review-conflux-lstms-network-a-novel-approach-for-multi-view-action-recognition",
      
        title: "[Paper Review] Conflux LSTMs Network: A Novel Approach for Multi-View Action Recognition",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/paper3/";
        
      },
    },{id: "post-paper-review-qpic-query-based-pairwise-human-object-interaction-detection-with-image-wide-contextual-information",
      
        title: "[Paper Review] QPIC: Query-Based Pairwise Human-Object Interaction Detection with Image-Wide Contextual Information",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/paper2/";
        
      },
    },{id: "post-paper-review-real-time-pedestrian-pose-estimation-tracking-and-localization-for-social-distancing",
      
        title: "[Paper Review] Real-time pedestrian pose estimation, tracking and localization for social distancing",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/paper1/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tada-한국연구재단-석사과정생연구장려금지원사업-선정-tada",
          title: ':tada: 한국연구재단 석사과정생연구장려금지원사업 선정 :tada:',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-scroll-oral-presentation-at-aaai-2025-fluid-workshop",
          title: ':scroll: Oral presentation at AAAI 2025 FLUID Workshop',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-sparkles-published-in-applied-intelligence-sci-sparkles",
          title: ':sparkles: Published in *Applied Intelligence (SCI)* :sparkles:',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-tada-elsevier-sci-e-급-저널-리뷰어-위촉-jress-if-9-4-eswa-if-7-5-tada",
          title: ':tada: Elsevier SCI(E)급 저널 리뷰어 위촉 – JRESS(IF: 9.4), ESWA(IF: 7.5) :tada:',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%79%65%6F%6E%67%68%75%6E@%73%63%68.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Kim-Byeong-Hun", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/byeong_.h", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/byeonghun-kim", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-7618-9359", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4-xyXRkAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
