let questions = [
  {
    numb: 1,
    question:
      "Attackers recently exploited vulnerabilities in a web server hosted by your organization. Management has tasked administrators with checking the server and eliminating any weak configurations on it. Which of the following will meet this goal?",
    answer: "B. Disabling unnecessary services",
    explanation:
      "Unnecessary open ports and services are common elements that contribute to weak configurations so it's important to close ports that aren't needed and disable unnecessary services. A network-based intrusion detection system (NIDS) helps protect internal systems, but a NIDS would not be installed on the server and administrators are tasked with checking the server. Unsecured root accounts indicate a weak configuration. If root accounts are disabled, enabling them won't increase security on the server. Secure Sockets Layer (SSL) is a weak encryption protocol and should not be implemented on servers.",
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
    explanation:
      "A sandbox provides a simple method of testing updates. It provides an isolated environment and is often used for testing. A baseline configuration is a starting point of a computing environment. Bring your device (BYOD) refers to allowing employee-owned mobile devices in a network and is not related to this question. Change management practices ensure changes are not applied until they are approved and documented.",
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
    explanation:
      "The master image is the baseline, and the administrators performed integrity measurements to identify baseline deviations. By comparing the list of applications in the baseline with the applications running on the suspect computer, it's possible to identify unauthorized applications. None of the other answers include the troubleshooting steps necessary to discover the problem. Version control tracks software versions as software is updated. A sandbox is an isolated area of a system, typically used to test applications. A blacklist is a list of prohibited applications.",
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
      "While investigating a recent data breach, investigators discovered a RAT on Bart's computer. Antivirus software didn't detect it. Logs show a user with local administrator privileges installed it. Which of the following answers has the BEST chance of preventing this from happening again in the future?",
    answer: "A. Enforce an application allow list",
    explanation:
      "Enforcing an application allow list (sometimes called an application whitelist) would prevent this. An application allows a list to identify the only applications that can be installed on a computer and would not include a malicious remote access tool (RAT). An application block list identifies applications to block, but malware changes so often, this wouldn't help. Code signing verifies code is valid and hasn't been modified. A bring your device (BYOD) policy identifies mobile devices employees can buy and connect to a network but is unrelated to this question. A data loss protection (DLP) system typically monitors outgoing traffic and wouldn't stop a user from installing a malicious application.",
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
    explanation:
      "Self-encrypting drives (SEDs) are the best solution. SED has encryption circuitry built into the drive. They encrypt and decrypt data without user interaction, though it's common to require personnel to use credentials to unlock the SED when booted. A data loss prevention (DLP)solution typically monitors outgoing traffic to prevent confidential information from getting outside the organization. A hardware security module (HSM) is used to manage, generate, and store cryptographic keys. It's generally used on a network instead of on laptops. Mobile device management (MDM) refers to technologies used to manage mobile devices.",
    options: ["A. DLP", "B. HSM", "C. MDM", "D. SEDs"],
  },
  {
    numb: 6,
    question:
      "Managers within your organization want to implement a secure boot process for some key computers. During the boot process, each computer should send data to a remote system to check the computer's configuration. Which of the following will meet this goal?",
    answer: "C. Remote attestation",
    explanation:
      "A remote attestation process checks a computer during the boot cycle and sends a report to a remote system. The remote system attestor confirms that the computer is secure. None of the other answers sends data to a remote system. A Trusted Platform Module (TPM) is a hardware chip on a motherboard and provides a local secure boot process. A TPM includes an encryption key burned into the CPU, which provides a hardware root of trust. Tokenization replaces sensitive data with a token or substitute value, and this token can be used in place of the original data.",
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
    explanation:
      "Blocking write capabilities to removable media is the best choice. This can be done with a data loss prevention (DLP) solution on all computers. Training employees might help, but it won't stop an insider threat. Monitoring firewall logs might detect data exfiltration out of the network, but it won't monitor the use of external storage devices. An anetwork-based DLP solution might detect and stop data exfiltration out of the network, but it would stop users from copying data to removable media.",
    options: [
      "A. Train employees about the policy",
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
    explanation:
      "Platform as a Service (PaaS) provides customers with a preconfigured computing platform including the hardware and software. The cloud provider maintains the hardware and specified software such as the operating system and key applications such as a web server application. Infrastructure as a Service (IaaS) is a cloud computing option where the vendor provides access to a computer, but customers must install the operating system and maintain the system. Software as a Service (SaaS)provides access to specific applications such as an email applications. Anything as a Service (XaaS) refers to cloud services beyond IaaS, PaaS, and SaaS.",
    options: ["A. IaaS", "B. PaaS", "C. SaaS", "D. XaaS"],
  },
  {
    numb: 9,
    question:
      "You are asked to research prices for cloud-based services. The cloud service provider needs to supply servers, storage, and networks, but nothing else. Which of the following will BEST meet your needs?",
    answer: "A. IaaS",
    explanation:
      "An Infrastructure as a Service (IaaS) cloud model provides clients with hardware but nothing else. A Platform as a Service (PaaS)model provides customers with a computing platform including operating systems and some applications. A Software as a Service (SaaS) model provides customers with one or more applications. Anything as a Service(XaaS) refers to cloud services beyond IaaS, PaaS, and SaaS, but this scenario clearly describes an IaaS model.",
    options: ["A. IaaS", "B. PaaS", "C. SaaS", "D. XaaS"],
  },
  {
    numb: 10,
    question:
      "Your organization has been using more cloud resources and Lisa, the CIO, is concerned about security. She wants to add a service that is logically placed between the organization's network and the cloud provider. This service will monitor all network traffic and ensure that data sent to the cloud for storage is encrypted. Which of the following will BEST meet these requirements?",
    answer: "A. CASB",
    explanation:
      "A cloud access security broker (CASB) is placed between a network and a cloud provider and would meet the chief information officer(CIO) requirements. It can monitor traffic and enforce security policies, such as ensuring all data sent to the cloud is encrypted. Permissions should be set on cloud storage locations to ensure only authorized personnel can access them, but they don't encrypt the data. A storage encryption policy can be created to require encryption of data stored in the cloud, but the policy wouldn't monitor all traffic to and from the cloud. A firewall can filter traffic, but it doesn't include all the capabilities of a CASB, such as verifying data is encrypted.",
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
    explanation:
      "A next-generation secure web gateway (SWG) provides proxy services for traffic from clients to Internet sites, such as filteringUniform Resource Locators (URLs) and scanning for malware. Permissions should be set on cloud storage locations to ensure only authorized personnel can access them, but they don't encrypt the data. Container security can be applied as a cloud security control to protect data by placing it in different containers with different permissions or encryption controls. Segmentation within a network isolates hosts or networks, and cloud-based segmentation does the same thing, except the isolation occurs within the cloud. Application programming interface (API) inspection and integration refers to testing an API for usability, but this scenario is much too complex for an API.",
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
    explanation:
      "A mobile device management (MDM) solution is the best choice because it can manage multiple risks related to mobile devices in abring your device (BYOD) scenario. Full disk encryption (FDE)typically isn't feasible in a BYOD scenario because it requires an organization to encrypt devices owned by employees. Some FDE drives use self-encrypting drive (SED) technology, and they aren't feasible for the same reason FDE drives aren't feasible. Mobile application management(MAM) only manages applications on mobile devices, and it isn't a comprehensive solution.",
    options: ["A. FDE", "B. SED", "C. MDM", "D. MAMY"],
  },
  {
    numb: 13,
    question:
      "Your organization recently implemented a security policy requiring that all endpoint computing devices have a unique identifier to simplify asset inventories. Administrators implemented this on servers, desktop PCs, and laptops with an RFID system. However, they haven't found a reliable method to tag corporate-owned smartphones and tablet devices. Which of the following choices would be the BEST alternative?",
    answer: "B. MDM application",
    explanation:
      "Mobile Device Management (MDM) applications can assign unique digital identifiers to endpoint devices such as smartphones and tablets. It uses this to manage the device remotely, and the identifier can also be used to simplify asset inventories. A virtual desktop infrastructure(VDI) provides a virtual desktop to users (including users with mobile devices), allowing them to connect to a server hosting the desktop. Radio-frequency identification (RFID) tags are being used on other devices, but the scenario states it isn't a reliable method for smartphones and tablet devices. Global Positioning System (GPS) tagging adds geographical data pictures to indicate where the photo was taken.",
    options: ["A. VDI", "B. MDM application", "C. RFID tag", "D. GPS tagging"],
  },
  {
    numb: 14,
    question:
      "Your organization is switching from a COPE model to a BYOD model due to the cost of replacing lost or damaged mobile devices. Which of the following is the BEST choice to protect the organization's data when using the BYOD model?",
    answer: "B. Containerization",
    explanation:
      "Containerization is the best choice. Organizations can ensure that organizational data is encrypted in some containers without encrypting user data. In a bring-your-own-device (BYOD) model, employees own the devices, and an organization typically can't encrypt user data with full-disk encryption. In a corporate-owned, personally enabled(COPE) model, the organization could use full-device encryption. Remote wipe sends a signal to a lost device to erase data, but it won't erase data if the device is damaged, and an attacker may be able to recover data from the damaged device. Geolocation technologies can help locate a lost device, but they won't protect data.",
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
    explanation:
      "Jailbreaking is the most likely reason for this. It's possible to jailbreak an iPhone to remove all software restrictions, including the ability to install applications from sources other than the Apple App Store. Tethering allows you to share an Internet connection with one mobile device with other mobile devices. Sideloading is the process of installing application packages from an Application Packet Kit (APK) but sidebreaking isn't a relevant term in this context. Rooting is done on Android devices and provides users with root-level access to the device.",
    options: [
      "A. Jailbreaking",
      "B. Tethering",
      "C. Sidebreaking",
      "D. Rooting",
    ],
  },
];
