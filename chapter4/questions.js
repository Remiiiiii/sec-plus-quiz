let questions = [
  {
    numb: 1,
    question:
      "A HIDS reported a vulnerability on a system based on a known attack. After researching the alert from the HIDS, you identify the recommended solution and begin applying it. What type of HIDS is in use?",
    answer: "B. Signature-based",
    explanation:
      "If the host-based intrusion detection system (HIDS) identifies a known issue, it uses signature-based detection (sometimes called definition-based detection). A HIDS is not network-based but a network-based IDS (NIDS) can also use signature-based detection. Heuristic-based or behavior-based (sometimes called anomaly-based)detection systems identify issues by comparing current activity against a baseline. They can identify issues that are not previously known.",
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
    explanation:
      "A heuristic-based (also called behavior-based or anomaly-based) detection system compares current activity with a previously created baseline to detect any anomalies or changes. Signature-based systems (also called definition-based) use signatures of known attack patterns to detect attacks. A honeypot is a server designed to look valuable to an attacker and can divert attacks. A Bridge Protocol Data Unit (BPDU) guard is used to protect against BPDU-related attacks and is unrelated to this question.",
    options: ["A. BPDU guard", "B. Signatures", "C. Baseline", "D. Honeypot"],
  },
  {
    numb: 3,
    question:
      "Lenny noticed a significant number of logon failures for administrator accounts on the organization's public website. After investigating it further, he notices that most of these attempts are from IP addresses assigned to foreign countries. He wants to implement a solution that will detect and prevent similar attacks. Which of the following is the BEST choice?",
    answer: "C. Implement an inline NIPS",
    explanation:
      "An inline network-based intrusion prevention system (NIPS)can dynamically detect, react to, and prevent attacks. An inline system is placed inline with the traffic, and in this scenario, it can be configured to detect the logon attempts and block the traffic from the offending IP addresses before it reaches the internal network. A passive network-based intrusion detection system (NIDS) is not placed in line with the traffic and can only detect the traffic after it has reached the internal network, so it cannot prevent the attack. If you block all traffic from foreign countries, you will likely block legitimate traffic. You should disable administrator accounts if they're not needed. However, if you disable all administrator accounts, administrators won't be able to do the required work.",
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
      "Lisa created a document called password.txt and put the usernames of two accounts with elevated privileges. She then placed the file on her administrator account desktop on several servers. Which of the following BEST explains her actions?",
    answer: "C. The document is a honeyfile",
    explanation:
      "A honey file is a file with a deceptive name (such as aspassword.txt) that will deceive an attacker and attract his attention. It is not appropriate to place a file holding credentials on a desktop for any reason. A honeypot or honeynet diverts attackers from the live network. A file on an administrator's desktop is on the live network. It is unlikely that any application needs a file named password.txt to run. Even if an application needed such a file, the file would be inaccessible if it is placed on an administrator's desktop.",
    options: [
      "A. She can use this file to retrieve the passwords if she forgets them",
      "B. This file will divert attackers from the live network",
      "C. The document is a honeyfile",
      "D. The file is needed by an application to run when the system starts",
    ],
  },
  {
    numb: 5,
    question:
      "Your organization is planning to upgrade the wireless network used by employees. It will provide encrypted authentication of wireless users over TLS. Which of the following protocols are they MOST likely implementing?",
    answer: "B. PEAP",
    explanation:
      "Protected EAP (PEAP) can be used for wireless authentication and it uses Transport Layer Security (TLS) to encapsulate and encrypt the authentication conversation within a TLS tunnel. ExtensibleAuthentication Protocol (EAP) is the basic framework for authentication. By itself, EAP doesn't provide encryption, but it can be combined with other encryption protocols. Neither Wi-Fi Protected Access 2 (WPA2) nor Wi-Fi Protected Access 3 (WPA3) use TLS.",
    options: ["A. EAP", "B. PEAP", "C. WPA2", "D. WPA3"],
  },
  {
    numb: 6,
    question:
      "Lisa is creating a detailed diagram of wireless access points and hotspots within your organization. What is another name for this?",
    answer: "B. Wireless footprinting",
    explanation:
      "Wireless footprinting creates a detailed diagram of wireless access points and hotspots within an organization. It typically displays a heat map and dead spots if they exist. A remote access virtual private network (VPN) provides access to a private network and is unrelated to this question. Wi-Fi analyzers provide a graph showing channel overlaps but not a diagram of wireless access points. An architectural diagram is typically laid on top of a heat map to create the wireless footprint document, but by itself, it shows the building layout.",
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
      "You are assisting a small business owner in setting up a public wireless hotspot for her customers. She wants to allow customers to access the hotspot without entering a password. Which of the following is MOST appropriate for this hotspot?",
    answer: "A. Use Open mode",
    explanation:
      "Open mode is the best choice of those given for a public wireless hotspot that doesn't require a password. A pre-shared key (PSK) is the same as a password and the scenario says a password isn't desired. Enterprise mode requires each user to authenticate and is typically enabled with a RADIUS server. If you disable the service set identifier (SSID)broadcast, it will make it harder for the customers to find the hotspot, but unless Open mode is used, it will still require a password.",
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
    explanation:
      "This describes a rogue access point (AP). A rogue AP is not authorized (also known as shadow IT) but provides access to an internal network because it has been plugged into the network. In this scenario, the access point has no security, so someone could connect to it from the parking lot and then access the internal network. An evil twin has the same or similar service set identifier (SSID) as a legitimate access point, but the SSID isn't mentioned. A Raspberry Pi device is an embedded system, and it can be configured as a wireless AP, but there isn't any indication of the type of wireless AP in this scenario. An advanced persistent threat (APT) attacks from external locations and is unlikely to connect to a physical wireless inside a network.",
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
      "You are an administrator at a small organization. Homer contacted you today and reported the following: (1) He logged on normally on Monday morning and accessed network shares. (2) Later, when he tried to access the Internet, a pop-up window with the organization's wireless SSID prompted him to log on. (3) After doing so, he could access the Internet but no longer had access to the network shares. (4) Three days later, his bank notified him of suspicious activity on his account. Which of the following indicates the MOST likely explanation for this activity?",
    answer: "A. An evil twin",
    explanation:
      "This describes an evil twin. Normally, a user shouldn’t have to log on again to access the Internet. Because he lost access to network resources after logging on, it indicates he didn’t log on to a corporate access point (AP) but instead logged on to an unauthorized AP. Because the service set identifier (SSID) is the same as the corporate SSID, it indicates AP is an evil twin. An evil twin is a rogue access point with the same or similar SSID as a legitimate AP, so an evil twin is a more accurate description. A distributed denial-of-service (DDoS) attack is an attack against a single computer from multiple attackers and is unrelated to this question. A captive portal forces web browser users to complete a specific process, such as agreeing to an acceptable use policy, before it allows them access to a network.",
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
      "Mobile users in your network report that they frequently lose connectivity with the wireless network on some days, but they don't have any problems on other days. You suspect this is due to an attack. Which of the following attacks is MOST likely to cause these symptoms?",
    answer: "A. Wireless jamming attack",
    explanation:
      "A wireless jamming attack is a type of denial-of-service(DoS) attack that can cause wireless devices to lose their association with access points and disconnect them from the network. It transmits noise or another radio signal on the same frequency used by the existing wireless network. An initialization vector (IV) attack attempts to discover the passphrase. A replay attack captures traffic intending to replay it later to impersonate one of the parties in the original transmission. Bluesnarfing is a Bluetooth attack that attempts to access information on Bluetooth devices.",
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
    explanation:
      "A successful bluesnarfing attack allows attackers to access data (including email contact lists) on a smartphone. Bluejacking is the practice of sending unsolicited messages to other Bluetooth devices. A captive portal is not an attack. Instead, it forces users to acknowledge usage policy or pay for access. A Wi-Fi Protected Setup (WPS) attack attempts to discover an access point WPS PIN by guessing PINs.",
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
    explanation:
      "A site-to-site virtual private network (VPN) includes two VPN servers that act as gateways for two networks separated geographically, such as a main site network and a remote office network. A remote access VPN is used by individuals to connect to the main network, such as employees working from home. An always-on VPN would have the connection enabled all the time, but the scenario states that employees should have on-demand access. A full-tunnel VPN encrypts all traffic to and from the Internet after a user has connected to the VPN. A split-tunnelVPN only encrypts the VPN tunnel but not other Internet connections. The scenario didn’t provide any directions related to a full-tunnel or a split-tunnel VPN.",
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
    explanation:
      "A full tunnel encrypts all traffic after a user has connected to a virtual private network (VPN) using a tunnel. A split tunnel only encrypts traffic destined for the VPN's private network. Traffic from the client directly to another Internet site is not encrypted. Internet Protocol security (IPsec) Tunnel mode encrypts the entire IP packet used in the internal network. It encrypts all traffic used within the VPN's private network, but not all traffic from the VPN client. IPsec Transport mode only encrypts the payload and is used within private networks, instead of forVPN traffic.",
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
    explanation:
      "Network access control (NAC) technologies can inspect virtual private network (VPN) clients for health status, including having up-to-date operating systems and antivirus software. None of the other answers will inspect VPN clients. Network Address Translation (NAT) allows multiple users with private IP addresses to share a single public IP address. A virtual local area network (VLAN) can segment clients, but not inspect them. A demilitarized zone (DMZ) provides a layer of protection for Internet-facing servers, putting them in a buffer zone between the Internet and an internal network.",
    options: ["A. NAT", "B. NAC", "C. VLAN", "D. DMZ"],
  },
  {
    numb: 15,
    question:
      "Your organization recently implemented a BYOD policy. However, management wants to ensure that mobile devices meet minimum standards for security before they can access any network resources. Which of the following would the NAC MOST likely use?",
    answer: "D. Agentless",
    explanation:
      "An agentless network access control (NAC) system is often used on employee-owned devices and would be appropriate if an organization implemented a bring your device (BYOD) policy. A permanent network access control (NAC) agent is installed on the device permanently, but this might cause problems for employee-owned devices. Any NAC agent is a health agent. Remote Authentication Dial-In UserService (RADIUS) is used for authentication, not to inspect clients.",
    options: ["A. Permanent", "B. Health", "C. RADIUS", "D. Agentless"],
  },
];
