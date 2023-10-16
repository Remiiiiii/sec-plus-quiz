let questions = [
  {
    numb: 1,
    question:
      "Attackers recently exploited vulnerabilities in a web server hosted by your organization. Management has tasked administrators with checking the server and eliminating any weak configurations on it. Which of the following will meet this goal?",
    answer: "B. Disabling unnecessary services",
    options: [
      "A. Installing a NIDS",
      "B. Disabling unnecessary services",
      "C. Enabling root accounts",
      "D. Implementing SSL encryption",
    ],
  },
  {
    numb: 2,
    question:
      "The BizzFad organization develops and sells software. Occasionally they update the software to fix security vulnerabilities and/or add additional features. However, before releasing these updates to customers, they test them in different environments. Which of the following solutions provides the BEST method to test the updates?",
    answer: "C. Sandbox",
    options: [
      "A. Baseline configuration",
      "B. BYOD",
      "C. Sandbox",
      "D. Change management",
    ],
  },
  {
    numb: 3,
    question:
      "Network administrators have identified what appears to be malicious traffic coming from an internal computer, but only when no one is logged on to the computer. You suspect the system is infected with malware. It periodically runs an application that attempts to run hping3 via remote websites. After comparing the computer with a list of applications from the master image, they verify this application is likely the problem. What allowed them to make this determination?",
    answer: "D. Integrity measurements",
    options: [
      "A. Version control",
      "B. Sandbox",
      "C. Blacklist",
      "D. Integrity measurements",
    ],
  },
  {
    numb: 4,
    question:
      "While investigating a recent data breach, investigators discovered a RAT on Bart's computer. Antivirus software didn't detect it. Logs show a user       with local administrator privileges installed it. Which of the following answers has the BEST chance of preventing this from happening again in the future?",
    answer: "A. Enforce an application allow list",
    options: [
      "A. Enforce an application allow list",
      "B. Enforce an application block list",
      "C. Implement a BYOD policy",
      "D. Implement a DLP system",
    ],
  },
  {
    numb: 5,
    question:
      "Salespeople within a company regularly take company-owned laptops with them on the road. The company wants to implement a solution to protect laptop drives against data theft. The solution should operate without user interaction for ease of use. Which of the following is the BEST choice to meet these needs?",
    answer: "D. SEDs",
    options: ["A. DLP", "B. HSM", "C. MDM", "D. SEDs"],
  },
  {
    numb: 6,
    question:
      "Managers within your organization want to implement a secure boot process for some key computers. During the boot process, each computer should send data to a remote system to check the computer's configuration. Which of the following will meet this goal?",
    answer: "C. Remote attestation",
    options: [
      "A. Trusted Platform Module",
      "B. Hardware root of trust",
      "C. Remote attestation",
      "D. Tokenization",
    ],
  },
  {
    numb: 7,
    question:
      "Your organization recently updated its security policy to prohibit the use of external storage devices. The goal is to reduce threats from insiders. Which of the following methods would have the BEST chance of reducing the risk of data exfiltration using external storage devices?",
    answer: "C. Block write capabilities to removable media",
    options: [
      "A. Train employees about the polic",
      "B. Monitor firewall logs to detect data exfiltration",
      "C. Block write capabilities to removable media",
      "D. Implement a network-based DLP solution",
    ],
  },
  {
    numb: 8,
    question:
      "Maggie, the new CTO at your organization, wants to reduce costs by utilizing more cloud services. She has directed the use of a cloud service instead of purchasing all the hardware and software needed for an upcoming project. She also wants to ensure that the cloud provider maintains all the required hardware and software. Which of the following BEST describes the cloud computing service model that will meet these requirements?",
    answer: "B. PaaS",
    options: ["A. IaaS", "B. PaaS", "C. SaaS", "D. XaaS"],
  },
  {
    numb: 9,
    question:
      "You are asked to research prices for cloud-based services. The cloud service provider needs to supply servers, storage, and networks, but nothing else. Which of the following will BEST meet your needs?",
    answer: "A. IaaS",
    options: ["A. IaaS", "B. PaaS", "C. SaaS", "D. XaaS"],
  },
  {
    numb: 10,
    question:
      "Your organization has been using more cloud resources and Lisa, the CIO, is concerned about security. She wants to add a service that is logically placed between the organization's network and the cloud provider. This service will monitor all network traffic and ensure that data sent to the cloud for storage is encrypted. Which of the following will BEST meet these requirements?",
    answer: "A. CASB",
    options: [
      "A. CASB",
      "B. Storage permissions",
      "C. A storage encryption policy",
      "D. Firewall",
    ],
  },
  {
    numb: 11,
    question:
      "Management at your organization wants to add a cloud-based service to filter all traffic going to or from the Internet from internal clients. At a minimum, the solution should include URL filtering, DLP protection, and malware detection and filtering. Which of the following will BEST meet these requirements?",
    answer: "A. Next-generation SWG",
    options: [
      "A. Next-generation SWG",
      "B. Container security",
      "C. Cloud-based segmentation",
      "D. API inspection and integration",
    ],
  },
  {
    numb: 12,
    question:
      "Your organization is planning to implement a BYOD policy. However, management wants to implement a comprehensive solution to protect the organization's data when the BYOD policy is put into place. Which of the following is the BEST choice to meet these needs?",
    answer: "C. MDM",
    options: ["A. FDE", "B. SED", "C. MDM", "D. MAMY"],
  },
  {
    numb: 13,
    question:
      "Your organization recently implemented a security policy requiring that all endpoint computing devices have a unique identifier to simplify asset inventories. Administrators implemented this on servers, desktop PCs, and laptops with an RFID system. However, they haven't found a reliable method to tag corporate-owned smartphones and tablet devices. Which ofthe following choices would be the BEST alternative?",
    answer: "B. MDM application",
    options: ["A. VDI", "B. MDM application", "C. RFID tag", "D. GPS tagging"],
  },
  {
    numb: 14,
    question:
      "Your organization is switching from a COPE model to a BYOD model due to the cost of replacing lost or damaged mobile devices. Which of the following is the BEST choice to protect the organization's data when using the BYOD model?",
    answer: "B. Containerization",
    options: [
      "A. Full-disk encryption",
      "B. Containerization",
      "C. Remote wipe",
      "D. Geolocation",
    ],
  },
  {
    numb: 15,
    question:
      "Bart is showing Wendell a new app that he downloaded from a third party onto his iPhone. Wendell has the same model of smartphone, but when he searches for the app, he is unable to find it. Of the following choices, what is the MOST likely explanation for this?",
    answer: "A. Jailbreaking",
    options: [
      "A. Jailbreaking",
      "B. Tethering",
      "C. Sidebreaking",
      "D. Rooting",
    ],
  },
];
