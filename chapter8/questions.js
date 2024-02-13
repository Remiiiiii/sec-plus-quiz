let questions = [
  {
    numb: 1,
    question:
      "A server within your organization has suffered six hardware failures in the past year. IT management personnel have valued the server at $4,000, and each failure resulted in a 10 percent loss. What is the ALE?",
    answer: "B. $2,400",
    explanation:
      "The annual loss expectancy (ALE) is $2,400. It is calculated as single loss expectancy (SLE) x annual rate of occurrence (ARO). Each failure has resulted in a 10 percent loss (meaning that it costs 10 percent of the asset value to repair it). The SLE is 10 percent of $4,000 ($400), and the ARO is 6. 6 x $400 is $2400.",
    options: ["A. $400", "B. $2,400", "C. $4,000", "D. $6,000"],
  },
  {
    numb: 2,
    question:
      "Maggie is performing a risk assessment on a database server. While doing so, she created a document showing all the known risks to this server, along with the risk score for each risk. Which of the following BEST identifies the name of this document?",
    answer: "C. Risk register",
    explanation:
      "A risk register lists all known risks for an asset, such as a database server, and it typically includes a risk score (the combination of the likelihood of occurrence and the impact of the risk). Risk assessments(including qualitative and quantitative risk assessments) might use a risk register, but they are not risk registers. Residual risk refers to the remaining risk after applying security controls to mitigate a risk.",
    options: [
      "A. Qualitative risk assessment",
      "B. Quantitative risk assessment",
      "C. Risk register",
      "D. Residual risk",
    ],
  },
  {
    numb: 3,
    question:
      "Your organization hosts an e-commerce website used to sell digital products. You are tasked with evaluating all the elements used to support this website. What are you performing?",
    answer: "D. Supply chain assessment",
    explanation:
      "A supply chain assessment evaluates all the elements used to create, sell, and distribute a product. The National Institute of Standards and Technology (NIST) Risk Management Framework (RMF) (NIST SP 800-37 r2) provides steps for reducing supply chain risks. Risk assessments(including both quantitative and qualitative risk assessments) evaluate risks but don't evaluate the supply chain required to support an e-commerce website. Threat hunting is the process of actively looking for threats within a network before an automated tool detects and reports on the threat.",
    options: [
      "A. Quantitative assessment",
      "B. Qualitative assessment",
      "C. Threat hunting",
      "D. Supply chain assessment",
    ],
  },
  {
    numb: 4,
    question:
      "Which of the following elements are used as part of threat hunting?(Choose two.)",
    answer: ["A. Intelligence fusion", "C. Advisories and bulletins"],
    explanation:
      "Intelligence fusion advisories and bulletins are part of threat hunting. Threat hunting is the process of actively looking for threats within a network before an automated tool detects and reports on the threat. Vulnerability scans are used as part of a security assessment. Although a history of vulnerability scans and related logs may be part of the intelligence fusion, CompTIA objectives specifically list the following four elements: intelligence fusion, advisories, and bulletins, threat feeds, and predictions of how attackers may maneuver through the network. A configuration review verifies that systems are configured correctly.",
    options: [
      "A. Intelligence fusion",
      "B. Vulnerability scan",
      "C. Advisories and bulletins",
      "D. Configuration review",
    ],
    numAnswersToSelect: 2,
  },
  {
    numb: 5,
    question:
      "Maggie suspects that a server may be running unnecessary services. Which of the following tools is the BEST choice to identify the services running on the server?",
    answer: "D. Nmap",
    explanation:
      "Nmap is a network scanner, and it can detect the protocols and services running on a server. The dnsenum command will enumerate(or list) Domain Name System (DNS) records for domains. An IP scanner detects IPs active on a network but not the services running on the individual hosts. Passive reconnaissance uses open-source intelligence (OSINT) instead of active tools.",
    options: [
      "A. Dnsenum",
      "B. IP scanner",
      "C. Passive reconnaissance",
      "D. Nmap",
    ],
  },
  {
    numb: 6,
    question:
      "You want to identify all the services running on a server in your network. Which of the following tools is the BEST choice to meet this goal?",
    answer: "D. Port scanner",
    explanation:
      "A port scanner identifies open ports on a system and is commonly used to determine what services are running on the system. Vulnerability scanners often include port-scanning capabilities, and they can help identify potential weak configurations. A penetration test attempts to exploit a vulnerability. A protocol analyzer can analyze traffic and discover protocols in use, but this would be much more difficult than using a port scanner. A non-credentialed scan refers to a vulnerability scan, and while a vulnerability scan may reveal services running on a server, it won't be as specific as a port scan.",
    options: [
      "A. Penetration test",
      "B. Protocol analyzer",
      "C. Non-credentialed scan",
      "D. Port scanner",
    ],
  },
  {
    numb: 7,
    question:
      "You recently completed a vulnerability scan on a database server. The scan didn't report any issues. However, you know that it is missing a patch. The patch wasn't applied because it caused problems with the database application. Which of the following BEST describes this?",
    answer: "A. False negative",
    explanation:
      "A false negative occurs if a vulnerability scanner does not report a known vulnerability. A false positive occurs when a vulnerability scanner reports a vulnerability that doesn't exist. The scenario doesn't indicate if the scan was run under the context of an account (credentialed)or anonymously (non-credentialed), so these answers aren't relevant to the question.",
    options: [
      "A. False negative",
      "B. False positive",
      "C. Credential scan",
      "D. Non-credentialed scan",
    ],
  },
  {
    numb: 8,
    question:
      "You suspect that a database server used by a web application is not up to date with current patches. Which of the following is the BEST action to take to verify the server has up-to-date patches?",
    answer: "D. Vulnerability scan",
    explanation:
      "A vulnerability scan determines if the system has current patches. None of the other answers will detect missing patches. A network scan will discover devices on the network. It might look for and detect vulnerabilities on network devices, but it would not be used to scan a single server for patches. A port scan identifies open ports. A protocol analyzer(sniffer) captures traffic for analysis.",
    options: [
      "A. Network scan",
      "B. Port scan",
      "C. Protocol analyzer",
      "D. Vulnerability scan",
    ],
  },
  {
    numb: 9,
    question:
      "Lisa periodically runs vulnerability scans on the organization's network. Lately, she has been receiving many false positives. Which of the following actions can help reduce the false positives?",
    answer: "A. Run the scans as credentialed scans",
    explanation:
      "Running the scans as credentialed scans (within the context of a valid account) allows the scan to see more information and typically results in fewer false positives. A false positive indicates the scan reported a vulnerability that doesn't exist. Non-credentialed scans run without any user credentials and can be less accurate. Choosing either passive or active scans won't reduce false positives.",
    options: [
      "A. Run the scans as credentialed scans",
      "B. Run the scans as non-credentialed scans",
      "C. Run the scans using passive reconnaissance",
      "D. Run the scans using active reconnaissance.",
    ],
  },
  {
    numb: 10,
    question:
      "Your organization has hired outside penetration testers to identify internal network vulnerabilities. After successfully exploiting vulnerabilities in a single computer, the testers attempt to access other systems within the network. Which of the following BEST describes their current actions?",
    answer: "C. Lateral movement",
    explanation:
      "Lateral movement refers to actions taken to move through a network after successfully exploiting a single system. While not available as a possible answer, this could also be described as pivoting, which is the process of accessing other systems through a single compromised system. Partially known environment testing (sometimes called gray box testing)indicates the testers have some knowledge of a system or network before starting, but there is no indication in the scenario about their level of knowledge. Persistence refers to maintaining a presence on the system or network after the initial exploit. Privilege escalation refers to gaining higher privileges after an initial exploit.",
    options: [
      "A. Partially known environment testing",
      "B. Persistence",
      "C. Lateral movement",
      "D. Privilege escalation",
    ],
  },
  {
    numb: 11,
    question:
      "Bart, a database administrator in your organization, told you about recent attacks on the network and how they have been disrupting services and network connectivity. In response, he said he has been using Nmap to run vulnerability scans and identify vulnerabilities. Which of the following is wrong with this scenario?",
    answer: "D. Rules of engagement weren't obtained",
    explanation:
      "Bart should have gotten authorization before doing any scans, and the authorization should outline the rules of engagement. Pivoting refers to an attacker accessing other systems in a network through a single compromised system. While Bart is a database administrator doing vulnerability scans outside his normal job functions, his actions wouldn't be described as pivoting. Nmap can do a network scan. The scenario doesn't indicate the scans were credentialed or non-credentialed or what they should have been.",
    options: [
      "A. The database administrator was pivoting from his primary job",
      "B. A network scan wasn't done first",
      "C. Scans weren't done as credentialed scans",
      "D. Rules of engagement weren't obtained",
    ],
  },
  {
    numb: 12,
    question:
      "Your organization outsourced the development of a software module to modify an existing proprietary application's functionality. The developer completed the module and is now testing it with the entire application. What type of testing is the developer performing?",
    answer: "C. Partially known environment",
    explanation:
      "The developer is performing a partially known environment test (sometimes called a gray box test). A partially known environmental tester has some knowledge of the application. In this scenario, the tester needs some knowledge of the application (such as input and output data) to develop and test the module. Known environment testers(sometimes called white box testers) have full knowledge about the product network they are testing, but because this is a proprietary application, it is unlikely the tester has full knowledge. Unknown environment testers(sometimes called black box testers) do not have any knowledge about the product or network they are testing, but this isn't feasible for a developer who needs to develop and test a module to modify an existing application. Red team refers to an exercise type and members of the red team are experts in attacking systems.",
    options: [
      "A. Known environment",
      "B. Unknown environment",
      "C. Partially known environment",
      "D. Red team",
    ],
  },
  {
    numb: 13,
    question:
      "The IT department at your organization recently created an isolated test network that mimics the DMZ. They then hired an outside company to perform a simulated cyberattack on this isolated test network as part of a testing campaign. Which of the following BEST describes the role of personnel from the outside company?",
    answer: "A. Red team",
    explanation:
      "Red team attacks and many cybersecurity companies have red teams that can be hired to perform simulated attacks on networks such as a simulated demilitarized zone (DMZ). A blue team defends, and members are usually employees of the organization. A purple team is composed of people who can perform either red team testing or blue team testing. White team personnel oversee testing campaigns and establish rules of engagement.",
    options: ["A. Red team", "B. Blue team", "C. Purple team", "D. White team"],
  },
  {
    numb: 14,
    question:
      "Your organization is setting up an e-commerce site to sell products online. Management wants to ensure the website can accept credit cards for payment. Which of the following standards are they MOST likely to follow?",
    answer: "B. PCI DSS",
    explanation:
      "When using credit cards, a company should comply with the Payment Card Industry Data Security Standard (PCI DSS). International Organization for Standardization (ISO) 27001 provides information on information security management system (ISMS) requirements. ISO 31000 is a family of standards related to risk management. A Statement on Standards for Attestation Engagements (SSAE) System and OrganizationControls (SOC) 2 Type I report describes an organization's systems and covers the design effectiveness of security controls on a specific date.",
    options: [
      "A. ISO 27001",
      "B. PCI DSS",
      "C. ISO 31000",
      "D. SSAE SOC 2 Type I",
    ],
  },
  {
    numb: 15,
    question:
      "Your organization recently purchased and deployed an IDS within the network. Security administrators want to verify it will detect a syn stealthscan. Which of the following tools will BEST meet your needs?",
    answer: "A. Tcpreplay",
    explanation:
      "TCPreplay is a suite of utilities used to edit packet captures and resend them. It can be used to modify a packet capture to mimic known attacks such as a syn stealth scan. A syn stealth scan finds active hosts on the network by sending a SYN (synchronize) packet to an IP address to initiate a Transmission Control Protocol (TCP) session, waits for a SYN/ACK(synchronize/acknowledge) packet to verify the IP address is in use, and then sends an RST (reset) packet to cancel the TCP handshake. Thetcpdump command-line tool is a command-line packet analyzer (or protocol analyzer) and its primary purpose is to capture packets. Wireshark is a graphic-based packet analyzer used to capture packets, but it doesn't send packets. Netcat is useful for remotely accessing systems, but it doesn't capture or replay packets.",
    options: ["A. Tcpreplay", "B. Tcpdump", "C. Wireshark", "D. Netcat"],
  },
];
