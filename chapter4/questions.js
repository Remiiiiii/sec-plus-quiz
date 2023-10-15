let questions = [
  {
    numb: 1,
    question:
      "A HIDS reported a vulnerability on a system based on a known attack. After researching the alert from the HIDS, you identify the recommended solution and begin applying it. What type of HIDS is in use?",
    answer: "B. Signature-based",
    options: [
      "A. Network-based",
      "B. Signature-based",
      "C. Heuristic-based",
      "D. Anomaly-based",
    ],
  },
  {
    numb: 2,
    question:
      "You are preparing to deploy a heuristic-based detection system to monitor network activity. Which of the following would you create first?",
    answer: "C. Baseline",
    options: ["A. BPDU guard", "B. Signatures", "C. Baseline", "D. Honeypot"],
  },
  {
    numb: 3,
    question:
      "Lenny noticed a significant number of logon failures for administrator accounts on the organization's public website. After investigating it further, he notices that most of these attempts are from IP addresses assigned to foreign countries. He wants to implement a solution that will detect and prevent similar attacks. Which of the following is the BEST choice?",
    answer: "C. Implement an inline NIPS",
    options: [
      "A. Implement a passive NIDS",
      "B. Block all traffic from foreign countries",
      "C. Implement an inline NIPS",
      "D. Disable the administrator accounts",
    ],
  },
  {
    numb: 4,
    question:
      "Lisa created a document called password.txt and put the usernames of two accounts with elevated privileges. She then placed the file on her administrator account desktop on several servers. Which of the followin gBEST explains her actions?",
    answer: "C. The document is a honeyfile",
    options: [
      "A. She can use this file to retrieve the passwords if she forgets them",
      "B. This file will divert attackers from the live network",
      "C. The document is a honeyfile",
      "D. The file is needed by an application to run when the system starts.",
    ],
  },
  {
    numb: 5,
    question:
      "Your organization is planning to upgrade the wireless network used by employees. It will provide encrypted authentication of wireless users over TLS. Which of the following protocols are they MOST likely implementing?",
    answer: "B. PEAP",
    options: ["A. EAP", "B. PEAP", "C. WPA2", "D. WPA3"],
  },
  {
    numb: 6,
    question:
      "6. Lisa is creating a detailed diagram of wireless access points and hotspots within your organization. What is another name for this?",
    answer: "B. Wireless footprinting",
    options: [
      "A. Remote access VPN",
      "B. Wireless footprinting",
      "C. Channel overlap map",
      "D. Architectural diagram",
    ],
  },
  {
    numb: 7,
    question:
      "7. You are assisting a small business owner in setting up a public wireless hotspot for her customers. She wants to allow customers to access the hotspot without entering a password. Which of the following is MOST appropriate for this hotspot?",
    answer: "A. Use Open mode",
    options: [
      "A. Use Open mode",
      "B. Use a PSK",
      "C. Use Enterprise mode",
      "D. Disable SSID broadcast",
    ],
  },
  {
    numb: 8,
    question:
      "A network administrator routinely tests the network looking for vulnerabilities. He recently discovered a new access point set to open. After connecting to it, he found he was able to access network resources. What is the BEST explanation for this device?",
    answer: "C. Rogue AP",
    options: [
      "A. Evil twin",
      "B. A Raspberry Pi device",
      "C. Rogue AP",
      "D. APT",
    ],
  },
  {
    numb: 9,
    question:
      "You are an administrator at a small organization. Homer contacted you today and reported the following: (1)He logged on normally on Monday morning and accessed network shares. (2)Later, when he tried to access the Internet, a pop-up window with the organization's wireless SSID prompted him to log on. (3)After doing so, he could access the Internet but no longer had access to the network shares. (4)Three days later, his bank notified him of suspicious activity on his account.Which of the following indicates the MOST likely explanation for this activity?",
    answer: "A. An evil twin",
    options: [
      "A. An evil twin",
      "B. A rogue access point",
      "C. A DDoS attack",
      "D. A captive portal",
    ],
  },
  {
    numb: 10,
    question:
      "Mobile users in your network report that they frequently lose connectivity with the wireless network on some days, but they don't have any problems on other days. You suspect this is due to an attack. Which ofthe following attacks is MOST likely to cause these symptoms?",
    answer: "A. Wireless jamming attack",
    options: [
      "A. Wireless jamming attack",
      "B. IV attack",
      "C. Replay attack",
      "D. Bluesnarfing attack",
    ],
  },
  {
    numb: 11,
    question:
      "An attacker can access email contact lists on your smartphone. What type of attack is this?",
    answer: "A. Bluesnarfing",
    options: [
      "A. Bluesnarfing",
      "B. Bluejacking",
      "C. Captive portal",
      "D. WPS",
    ],
  },
  {
    numb: 12,
    question:
      "Your organization plans to implement a connection between the main site and a remote office giving remote employees on-demand access to resources at headquarters. The chief information officer (CIO) wants to use the Internet for this connection. Which of the following solutions will BEST support this requirement?",
    answer: "B. Site-to-site VPN",
    options: [
      "A. Remote access VPN",
      "B. Site-to-site VPN",
      "C. Always-on VPN",
      "D. Full-tunnel VPN",
      "E. Split-tunnel VPN",
    ],
  },
  {
    numb: 13,
    question:
      "Your organization is allowing more employees to work from home, and they want to upgrade their VPN. Management wants to ensure that after a VPN client connects to the VPN server, all traffic from the VPN client is encrypted. Which of the following would BEST meet this goal?",
    answer: "B. Full tunnel",
    options: [
      "A. Split tunnel",
      "B. Full tunnel",
      "C. IPsec using Tunnel mode",
      "D. IPsec using Transport mode",
    ],
  },
  {
    numb: 14,
    question:
      "An organization is hosting a VPN that employees are using while working from home. Management wants to ensure that all VPN clients are using up-to-date operating systems and antivirus software. Which of the following would BEST meet this need?",
    answer: "B. NAC",
    options: ["A. NAT", "B. NAC", "C. VLAN", "D. DMZ"],
  },
  {
    numb: 15,
    question:
      "Your organization recently implemented a BYOD policy. However, management wants to ensure that mobile devices meet minimum standards for security before they can access any network resources. Which of the following would the NAC MOST likely use?",
    answer: "D. Agentless",
    options: ["A. Permanent", "B. Health", "C. RADIUS", "D. Agentless"],
  },
];
